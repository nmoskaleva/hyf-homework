//Mozilla API
let options = {
    maximumAge: 0
}

function success(pos) {
    let crd = pos.coords;
    console.log(`Your current position is:`);
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
}

function error(err) {
    console.log("error");
}

function showLocation() {
    navigator.geolocation.getCurrentPosition(success, error, options)
}

//Google maps API
let map, infoWindow;
// Initialize and add the map
function initMap() { //This works without being called?
    map = new google.maps.Map(document.querySelector("#map"), {
        center: {
            lat: 55.676098,
            lng: 12.568337
        },
        zoom: 14
    });
    infoWindow = new google.maps.InfoWindow({
        content: "You are here"
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

document.querySelector(`#show-location`).addEventListener(`click`, showLocation);

document.querySelector(`#show-location`).addEventListener(`click`, () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
});