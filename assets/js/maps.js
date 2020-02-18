function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 51.388522, lng: 1.400475 }
    });

    var labels = "O";

    var locations = [
        { lat: 51.387453, lng: 1.397482 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}