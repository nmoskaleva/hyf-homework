//Fetch weather data from a city
//Eventlistener for weather button
const getWeatherButton = document.querySelector("#get-weather");

let getInputFieldValue = function () {
    return document.querySelector("#user-city").value;
}

getWeatherButton.addEventListener("click", getWeatherCallback)
// add enter keypress event
document.addEventListener('keypress', getWeatherCallback)

function getWeatherCallback (e) {
    // return if not enter key
    if (e.type == "keypress" && e.which != 13) return;
    let inputFieldValue = getInputFieldValue();
    if (inputFieldValue != "") {
        getWeather(`q=${document.querySelector("#user-city").value}&units=metric&appid=54c9bc00ccd01fc0915e5e7426a30c90`);
    } else {
        alert("Please enter your city");
    }
}


//API call function
function getWeather(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?${query}`)
        .then(response => response.json())
        .then((weatherResponce) => {
            //console.log(weatherResponce);
            showWeather(weatherResponce);
        })
}

function showWeather(weatherResponce) {
    // console.log(weatherResponce.weather[0].main);
    // selecting html elements
    let city = document.querySelector(".city");
    let description = document.querySelector(".description");
    let temp = document.querySelector(".temp");
    let img = document.querySelector(".weather-icon");

    //assigning innerhtml from API
    city.innerHTML = weatherResponce.name + " (" + weatherResponce.sys.country + ")";
    description.innerHTML = weatherResponce.weather[0].description;
    temp.innerHTML = Math.floor(weatherResponce.main.temp) + " C";
    img.src = `http://openweathermap.org/img/w/` + weatherResponce.weather[0].icon + `.png`;
}

//Weather at current location
const locationBtn = document.querySelector("#user-location-btn");
locationBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        // resue function
        getWeather(`lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=54c9bc00ccd01fc0915e5e7426a30c90`);   
    })
})