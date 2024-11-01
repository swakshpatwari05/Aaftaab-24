from django.urls import path,include
from .views import *

urlpatterns = [
    path('create_participant/', create_participant),
    path('create_team/', create_team),
    path('login_participant/', login_participant),
    path('get_all_events_for_an_user/', get_all_events_for_an_user),
    path('check_login/', check_login),
    path('send_success_mail/', send_success_mail),
    path('get_user_pass_type/', get_user_pass_type),
    path('check_if_team_registrable/', check_if_team_registrable),
    
]