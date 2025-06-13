
from models.models import DayEvent, YearlyEvent
from datetime import date


def create_day_event(data):
    new_event = DayEvent(name=data["name"], date=date.fromisoformat(data["date"]))
    new_event.save()


def create_yearly_event(data):
    new_event = YearlyEvent(name=data["name"], day=data["day"], month=data["month"])
    new_event.save()
