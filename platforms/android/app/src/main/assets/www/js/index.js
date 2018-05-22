// Config
var app = {
    // Application Constructor
    initialize: function() {
		document.addEventListener(
			'deviceready',
			this.onDeviceReady.bind(this),
			false
		)
	},
	onDeviceReady: function() {
		console.log('device ready');
	}
}
   
app.initialize();
var myImage = document.getElementById('myImage');
var myLocation = document.getElementById('myLocation');
var Latitude;
var Longitude;

// Take photo, get Location
function cameraTakePhoto() {
    navigator.geolocation.getCurrentPosition(onGeoLocationSuccess, onGeoLocationError,
        {
            enableHighAccuracy: true
        })
}

// Success callback for get geo coordinates
var onGeoLocationSuccess = function(position) {
	/*console.log(
		'onMapSuccess called - latitude: ' +
			position.coords.latitude +
			', longitude' +
			position.coords.longitude
	);*/
	Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    Timestamp = new Date();
    navigator.camera.getPicture(onCameraSuccess, onCameraError);
}

// Location error callback
function onGeoLocationError(error) {
    console.log(
        'code: ' + error.code + '\n' + 'message: ' + error.message + '\n'
    );
}

// Success callback for taking photo
function onCameraSuccess(picture) {
    var image = document.getElementById('myImage');
    myImage.src = 'data.image/png:base64,' + picture;
    myLocation.innerHTML = 'Latitude ' + Latitude + ', Longitude: ' + Longitude;
}
// Error callback for Camera
function onCameraError(error) {
    console.log('Failed because: ' + message);
    
}