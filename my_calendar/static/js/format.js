
function format_calendar_data(calendar_data) {
    formatted = ""
    day = new Date(calendar_data.start);
    end = new Date(calendar_data.end);
    for (i = 0; i < day.getDay(); i++)
        formatted += `<div class="day_container"></div>`;
    while (day <= end) {
        day_iso = day.toISOString().split('T')[0];
        day_class = "day_container"
        if (day.getDay() == 0 || day.getDay() == 6)
            day_class += " weekend_container";
        formatted += `<div class="${day_class}"><p>${day_iso}</p>`;
        if (calendar_data.day_events.hasOwnProperty(day_iso)) {
            for (i in calendar_data.day_events[day_iso]) {
                formatted += `<p>${calendar_data.day_events[day_iso][i]}</p>`;
            }
        }
        formatted += `</div>`;
        day.setDate(day.getDate() + 1);
    }
    document.getElementById("calendar_data").innerHTML = formatted;
}
