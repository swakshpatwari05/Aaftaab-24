from django.shortcuts import render
from .models import Participant, Team, EmailIds
from django.http import HttpResponse
from .serializers import ParticipantSerializer, TeamSerializer, EmailIdsSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import jwt
from django.contrib.auth.hashers import make_password, check_password
import dotenv
import os
import asyncio
dotenv.load_dotenv()
from .utils import send_participant_creation_confirmation_mail,generate_token,generate_teamid,validate_email
from .mailing import gmail_send_message

SECRET_KEY = os.getenv('SECRET_JWT_KEY')



@api_view(['POST'])
def create_participant(request):
    if request.method == 'POST':
        # serialize request body
        # check if user already exists
        if(Participant.objects.filter(email=request.data.get('email')).exists()):
            return HttpResponse(status=status.HTTP_409_CONFLICT)
            #hash the password
        request.data['password'] = make_password(request.data.get('password'))
        serializer = ParticipantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # send_participant_creation_confirmation_mail(request.data.get('email'))
            gmail_send_message(request.data.get('email'))
            return HttpResponse(status=status.HTTP_201_CREATED)
        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
    return HttpResponse(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def send_success_mail(request):
    if request.method == 'POST':
        # send_participant_creation_confirmation_mail(request.data.get('email'))
        # gmail_send_message(request.data.get('email'))
        return HttpResponse(status=status.HTTP_200_OK)
    return HttpResponse(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def login_participant(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        if Participant.objects.filter(email=email).exists():
            participant = Participant.objects.get(email=email)
            if check_password(password, participant.password):
                token = generate_token(email)
                return Response({'token': token}, status=status.HTTP_200_OK)
            else:
                return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

# create team view will recieve username of who creates it and the list of email ids of the team members4


@api_view(['GET'])
def check_login(request):
    if request.method == 'GET':
        token = request.headers['Authorization']
        try:
            decoded = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def create_team(request):
    if request.method == 'POST':
        # get username and password from request
        token = request.headers.get('Authorization')
        if token is None:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except :
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        leader_email = payload['email']
        # check if user exists
        if Participant.objects.filter(email=leader_email).exists():
            user = Participant.objects.filter(email=leader_email).first()
            teamid = generate_teamid()
            teamname = request.data.get('teamname')
            event_registered = request.data.get('event_registered')
            if(Team.objects.filter(team_leader=user, event_registered=event_registered).exists()):
                return Response({"message": "already created"}, status=status.HTTP_409_CONFLICT)
            team = Team(teamid=teamid, teamname=teamname,
                        event_registered=event_registered, team_leader=user)
            team.save()
            email_list = request.data.get('email_list')
            email_list.append(leader_email)
            for email in email_list:
                emailid = EmailIds(emailid=email, teamid=team)
                if(validate_email(email)):
                    emailid.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "unathurized"}, status=status.HTTP_401_UNAUTHORIZED)

    return Response({"message": "method not allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
def get_all_events_for_an_user(request):
    if request.method == 'GET':
        token = request.headers.get('Authorization')
        if token is None:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        email = payload['email']
        if Participant.objects.filter(email=email).exists():
            user_name = Participant.objects.filter(email=email).first().name
            pass_type = Participant.objects.filter(email=email).first().pass_type
            event_list = []
            emailIds = EmailIds.objects.filter(emailid=email)
            for emailId in emailIds:
                teams = Team.objects.filter(teamid=emailId.teamid)
                for team in teams:
                    event_list.append(team.event_registered)
            return Response({"event_list": event_list, "user_name": user_name,"pass_type":pass_type}, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
def get_all_users_for_an_event(request):
    if request.method == 'GET':
        event_registered = request.data.get('event_registered')
        if Team.objects.filter(event_registered=event_registered).exists():
            teams = Team.objects.filter(event_registered=event_registered)
            user_list = []
            for team in teams:
                emailIds = EmailIds.objects.filter(teamid=team)
                for emailId in emailIds:
                    user = Participant.objects.filter(
                        emailid=emailId.emailid).first()
                    user_list.append(
                        [user.name, user.emailid, user.phone_number])
            return HttpResponse(user_list, status=status.HTTP_200_OK)
        else:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    return HttpResponse(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
def get_user_pass_type(request):
    if request.method == 'GET':
        token = request.headers.get('Authorization')
        if token is None:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        email = payload['email']
        if Participant.objects.filter(email=email).exists():
            user = Participant.objects.filter(email=email).first()
            return Response({"pass_type": user.pass_type}, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def check_if_team_registrable(request):
    if request.method=="POST":
        email_list = request.data.get('email_list')
        #print(email_list)
        status_dict = {}
        for email in email_list:
            emailObj = {
                "registered":False,
                "pass_type":"none",
            }
            if Participant.objects.filter(email=email).exists():
                user = Participant.objects.filter(email=email).first()
                emailObj["registered"]=True
                emailObj["pass_type"]=user.pass_type
            status_dict[email]=emailObj
        #print(status_dict)
        return Response(status_dict,status=status.HTTP_200_OK)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

        

