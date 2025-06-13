from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("get_calendar_data", views.get_calendar_data),
    path("add_day_event", views.add_day_event),
]