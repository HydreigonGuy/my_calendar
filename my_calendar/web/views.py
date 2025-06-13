from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import json
from datetime import date, timedelta
from models.utils.format import format_calendar_data_list
from models.utils.manage import create_day_event, create_yearly_event

# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return render(request, 'index.html')
    # return HttpResponse(template.render())


def get_calendar_data(request):
    today = date.today()
    data = format_calendar_data_list(today, today + timedelta(days=100))
    return HttpResponse(json.dumps(data), content_type='application/json')


def add_day_event(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body.decode('utf-8'))
        except:
            return HttpResponse(status=400)
        create_day_event(body)
        return HttpResponse(status=200)
    return HttpResponse(status=405)


def add_yearly_event(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body.decode('utf-8'))
        except:
            return HttpResponse(status=400)
        create_yearly_event(body)
        return HttpResponse(status=200)
    return HttpResponse(status=405)
