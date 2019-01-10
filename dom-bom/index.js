const buttonFind = document.querySelector('.button-find');
const buttonMyWeather = document.querySelector('.button-myWeather');
const buttonClear = document.querySelector('.button-clear');
const tableHead = `<tr><th>City</th><th>Country</th><th>t, °C</th><th>t, °F</th></tr>`

function getWeatherByLocation() {

    navigator.geolocation.getCurrentPosition (successF, errorF);
    function successF (position) {
        let inputField = document.getElementsByClassName('input-class')[0];
        inputField.value = ''; //clear the input field when we're searching for weather by our location
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let value = lat + ', ' + lng;
        getWeatherByNameOfCity(value);
    }
    function errorF () {
        alert ('Your location unavailable');
    }
}

function getWeatherByNameOfCity(currentLocation) {

    let ourInput = document.getElementsByClassName('input-class')[0].value;
    let ourURL = `http://api.apixu.com/v1/current.json?key=edeac5d78a6b425c9d1180209181912&q=${ourInput || currentLocation}`;
    fetch(ourURL)
    .then(r => r.json())
    .then(data => {
        let arrayWithData = [];
        arrayWithData.push(data.location.name, data.location.country, data.current.temp_c, data.current.temp_f);
        if(document.getElementsByTagName('tbody')[0].children.length == 0) {
            document.getElementsByTagName('tbody')[0].innerHTML = tableHead;
            createTableRow(arrayWithData);
        }
        else {
            createTableRow(arrayWithData);
        }
    })
    .catch();
}

function createTableRow(array) {
    
    const tbody = document.getElementsByTagName('tbody')[0];
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let k = 0; k < array.length; k++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = array[k];
    }
}

function clearTable() {
    let tbody = document.querySelector('tbody');
    while(tbody.firstChild) {
        tbody.removeChild(tbody.lastChild);
    }
}

buttonFind.addEventListener('click', getWeatherByNameOfCity);
buttonMyWeather.addEventListener("click", getWeatherByLocation);
buttonClear.addEventListener('click', clearTable);