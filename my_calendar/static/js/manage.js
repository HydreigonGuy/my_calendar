

function close_manage_popup() {
    document.getElementById("manage_popup").innerHTML = '';
}


function create_day_event_popup() {
    document.getElementById("manage_popup").innerHTML = `
        <div class="manage_popup_background">
            <div class="manage_popup_contents">
                <button class="manage_popup_close_button" onclick="close_manage_popup()">x</button>
                <h3>Create Day Event</h3>
                <span>Name : </span><input type="text" value="" id="create_day_event_name">
                <input type="date" value="" id="create_day_event_date">
                <button onclick="create_day_event()">Create</button>
            </div>
        </div>`;
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
        body: JSON.stringify({
            name: name,
            date: date
        })
    })
    .then(function (resp) {
        document.getElementById("manage_popup").innerHTML = "";
        retrieve_calendar_data();
    })
}


function create_yearly_event_popup() {
    document.getElementById("manage_popup").innerHTML = `
        <div class="manage_popup_background">
            <div class="manage_popup_contents">
                <button class="manage_popup_close_button" onclick="close_manage_popup()">x</button>
                <h3>Create Yearly Event</h3>
                <span>Name : </span><input type="text" value="" id="create_yearly_event_name">
                <input type="number" min="1" max="31" value="" id="create_yearly_event_day">
                <input type="number" min="1" max="12" id="create_yearly_event_month">
                <button onclick="create_yearly_event()">Create</button>
            </div>
        </div>`;
}


function create_yearly_event() {
    let name = document.getElementById("create_yearly_event_name").value;
    let day = document.getElementById("create_yearly_event_day").value;
    let month = document.getElementById("create_yearly_event_month").value;

    fetch("add_yearly_event", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': document.getElementsByName("csrfmiddlewaretoken")[0].value
        },
        body: JSON.stringify({
            name: name,
            day: day,
            month: month
        })
    })
    .then(function (resp) {
        document.getElementById("manage_popup").innerHTML = "";
        retrieve_calendar_data();
    })
}


function hide_plus_menu() {
    document.getElementById("plus_container").innerHTML = `
        <button onclick="display_plus_menu()" class="plus_button">+</button>
        `;
}


function display_plus_menu() {
    document.getElementById("plus_container").innerHTML = `
        <button onclick="hide_plus_menu()" class="plus_button">-</button>
        <button onclick="create_day_event_popup()" class="plus_menu_button">+ day event</button>
        <button onclick="create_yearly_event_popup()" class="plus_menu_button">+ yearly event</button>
        `;
}
