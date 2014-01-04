window.onload = getMyLocation;

function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	} else {
		alert("Oops, no geolocation support.");
	}
}

var sampleCoords = {
	latitude: 47.624851,
	longitude: -122.52099
};

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude: " + latitude + ", Longitude " + longitude;

	var km = computeDistance(position.coords, sampleCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + km + " km away from WickedlySmart HQ. Whatever that means...";
}

function displayError(error) {
	var errorTypes = {
		0: "Unknown Error",
		1: "Permission denied by user",
		2: "Position is not available",
		3: "Request timed out"
	};

	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}

	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}


function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
		Math.cos(startLatRads) * Math.cos(destLatRads) * 
		Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
}

function degreesToRadians(degrees) {
	var radians = (degrees * Math.PI)/180;
	return radians
}


