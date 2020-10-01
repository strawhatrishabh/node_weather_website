console.log('Javascript client side activated')

const weatherForm = document.querySelector('form');
var inputLocation = document.getElementById('inputLocation');

var message1 = document.querySelector('#forecastId');
var message2 = document.querySelector('#temperatureId');
var message3 = document.querySelector('#locationId');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    message1.textContent = 'Loading...'

    fetch('http://localhost:3000/weather?address=' + inputLocation.value).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error)
                message1.textContent = data.error;
                message2.textContent = "";
                message3.textContent = "";
            } else {
                console.log(data);
                message1.textContent = "It's going to be " + data.forecast + " today";
                message2.textContent = "It's " + data.temperature + " degree out their";
                message3.textContent = "City " + data.location;
            }
        })
    })
})