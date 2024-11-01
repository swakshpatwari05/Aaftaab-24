from django.contrib import admin

# Register your models here.

from .models import Participant, Team, EmailIds

admin.site.register(Participant)
admin.site.register(Team)
admin.site.register(EmailIds)
