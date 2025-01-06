from django.contrib import admin
from main.models import *

# # Register your models here.
admin.site.register(User)
admin.site.register(Stock)
admin.site.register(UserStock)
