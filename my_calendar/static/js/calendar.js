

function retrieve_calendar_data() {
    fetch("/get_calendar_data")
    .then(resp => resp.json())
    .then(calendar_data => format_calendar_data(calendar_data)); 
}


window.onload = function () {
    retrieve_calendar_data();
}
