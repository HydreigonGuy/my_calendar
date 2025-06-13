

function create_day_event_popup() {
    document.getElementById("manage_popup").innerHTML = `
        <span>Name : </span><input type="text" value="" id="create_day_event_name">
        <input type="date" value="" id="create_day_event_date">
        <button onclick="create_day_event()">Create</button>`;
}


function create_day_event() {
    let name = document.getElementById("create_day_event_name").value;
    let date = document.getElementById("create_day_event_date").value;

    fetch("add_day_event", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': document.getElementsByName("csrfmiddlewaretoken")[0].value
        },
        body: JSON.stringify({name: name, date: date})
    })
    .then(function (resp) {
        document.getElementById("manage_popup").innerHTML = "";
        retrieve_calendar_data();
    })
}
