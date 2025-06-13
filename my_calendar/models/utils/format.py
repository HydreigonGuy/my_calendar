
from models.models import DayEvent, YearlyEvent


def format_calendar_data_list(start, end):
    formatted_data = {
        "start":start.isoformat(),
        "end":end.isoformat(),
        "day_events":{},
        "yearly_events":[]
    }
    day_events = DayEvent.objects.filter(date__gte=start, date__lte=end)
    for day_event in day_events:
        formatted_data["day_events"][day_event.date.isoformat()] = formatted_data["day_events"].get(day_event.date.isoformat(), []) + [day_event.name]
    yearly_events = YearlyEvent.objects.all()
    for yearly_event in yearly_events:
        formatted_data["yearly_events"].append({
            "name":yearly_event.name,
            "day":yearly_event.day,
            "month":yearly_event.month
        })
    return formatted_data
