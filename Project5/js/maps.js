var map;
var marker;
var markersArray = {};
var finalContent;
var markerLoaded = false;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: CURRENT_LOCATION,
		zoom: 5,
		mapTypeControlOptions: {
			mapTypeIds: ['satellite']
		}
	});
	map.setMapTypeId('satellite');
	var currentMarker = null;
	var infoWindow = new google.maps.InfoWindow();
	ginfo = infoWindow;
	// Centers the map on to the current location with each resize
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(CURRENT_LOCATION);
	});
	// Creation of markers
	for (var i = 0; i < MARKERS.length; i ++) {
		marker = new google.maps.Marker({
			position: MARKERS[i].position,
			map: map,
			icon: 'img/pokeball.svg',
			animation: google.maps.Animation.DROP
		});
		var name = MARKERS[i].name;
		vm.locationList()[i].marker = marker;
		markersArray[name] = marker;
		markerListener(marker, name);
		infoWindowListener(marker);
	}
	markerLoaded = true;

	function markerListener(marker, name) {

		var contentString = "<div id = 'main'><div id = 'location-name'><h1 id='header'>" + name + "</h1></div><div id = 'wiki-link'></div></div>";
		var url = 'https://api.pokemontcg.io/v1/cards?name=' + name;

		// Renders the content when set up
		marker.addListener('click', function() {
			if (currentMarker) {
				currentMarker.setAnimation(null);
			}
			currentMarker = marker;
			marker.setAnimation(google.maps.Animation.BOUNCE);
			map.setCenter(marker.getPosition());

			$.ajax({
				url: url,
				dataType: "json"
			}).done(function (response) {
				console.dir(response);
				var img = response.cards[0].imageUrl;

				finalContent = contentString.concat("<p align=\"center\"><img src=\""+img+"\"></p>");
				finalContent = finalContent.concat("<p align=\"center\">source: <a href=\"https://pokemontcg.io/\">pokemontcg.io</a></p>");
				infoWindow.open(map, marker);
				infoWindow.setContent(finalContent);
			}).fail(function (jqXHR, textStatus) {
				console.log(jqXHR);
				console.log(textStatus);
				var addon = "<p>Can't connect to PokeApi!</p></div></div>";
				finalContent = contentString.concat(addon);
				infoWindow.open(map, marker);
				infoWindow.setContent(finalContent);
			});
		});
	}

	function infoWindowListener(marker) {
		infoWindow.addListener('closeclick', function() {
			marker.setAnimation(null);
		});
	}
}