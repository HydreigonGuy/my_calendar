
function format_calendar_data(calendar_data) {
    formatted = ""
    day = new Date(calendar_data.start);
    end = new Date(calendar_data.end);
    while (day <= end) {
        day_iso = day.toISOString().split('T')[0];
        formatted += `<p>${day_iso}</p>`;
        if (calendar_data.day_events.hasOwnProperty(day_iso)) {
            for (i in calendar_data.day_events[day_iso]) {
                formatted += `<p>${calendar_data.day_events[day_iso][i]}</p>`;
            }
        }
        day.setDate(day.getDate() + 1);
    }
    document.getElementById("calendar_data").innerHTML = formatted;
}
