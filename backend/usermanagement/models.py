from django.db import models


EVENT_CHOICES = (
    ('video_making_workshop','Video Making Workshop'),
    ('creative_writing_workshop','Creative Writing Workshop'),
    ('acting_workshop','Acting Workshop'),
    ('prompt_poetry','Prompt Poetry'),
    ('noob_quiz','Noob Quiz'),
    ('word_games','Word Games'),
    ('treasure_hunt','Treasure Hunt'),
    ('just_a_minute_speech','Just A Minute Speech'),
    ('hindi_debate','Hindi Debate'),
    ('english_debate','English Debate'),
    ('character_reenactment','Prompt based character re-enactment'),
    ('mythology_quiz','Mythology quiz'),
    ('mela_quiz','MELA Quiz'),
    ('open_mic','Open Mic'),


)
REGISTRATION_TYPES=(
    ('none','None'),
    ('events','Events Only'),
    ('flagship','Flagship only'),
    ('events_and_flagship','Events and Flagship'),
)

class Participant(models.Model):
    email = models.EmailField(max_length=255,unique=True,primary_key=True)
    name = models.CharField(max_length=255,blank=False,default='name')
    password = models.CharField(max_length=255,blank=False)
    phone_number = models.CharField(max_length=10,blank=True)
    user_interest = models.CharField(max_length=255,blank = True)
    college_name=models.CharField(max_length=255,blank=True)
    pass_type = models.CharField(max_length=255,default ='none',choices = REGISTRATION_TYPES,blank=False)
    def __str__(self):
        return self.email

class Team(models.Model):
    teamid = models.CharField(max_length=255,primary_key=True,unique=True,blank=False)
    teamname = models.CharField(max_length=255,blank=False)
    team_leader = models.ForeignKey(Participant,on_delete=models.CASCADE,related_name='team_leader')
    event_registered = models.CharField(max_length=255,blank=False,choices=EVENT_CHOICES)
    def __str__(self):
        return self.teamid


class EmailIds(models.Model):
    emailid = models.EmailField(max_length=255,blank=False)
    teamid = models.ForeignKey(Team,on_delete=models.CASCADE)
    def __str__(self):
        return self.emailid

