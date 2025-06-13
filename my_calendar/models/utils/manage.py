
from models.models import DayEvent
from datetime import date


def create_day_event(data):
    new_event = DayEvent(name=data["name"], date=date.fromisoformat(data["date"]))
    new_event.save()
