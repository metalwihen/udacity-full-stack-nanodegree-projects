var Stations = function(data) {
	this.name = ko.observable(data.name);
	this.marker = ko.observable(data.marker);
};

var ViewModel = function() {
	var self = this;
	this.locationList = ko.observableArray([]);
	this.holdingList = ko.observableArray([]);
	MARKERS.forEach(function(stationItem) {
		self.locationList.push(new Stations(stationItem));
	});
	this.showMarkerInfo = function(name) {
		var trigger = name.name();
		google.maps.event.trigger(markersArray[trigger], 'click');
	};
	// Filter Function (includes Marker functions that are handled via Knockout's computed observable)
	this.filter = ko.observable("");
	// Computed observable from Knockout which filters out arrays and markers from the input
	this.filterSearch = ko.computed(function() {
		var filter = self.filter().toLowerCase();
		if (markerLoaded) {
			if (!filter) {
				for (var i = 0; i < self.locationList().length; i++) {
					self.locationList()[i].marker.setVisible(true);
					self.locationList()[i].marker.setAnimation(null);
				}
				return self.locationList();
			} else {
				return ko.utils.arrayFilter(self.locationList(), function(item) {
					var result = stringStartsWith(item.name().toLowerCase(), filter);
					if (result) {
						if (item.marker) {
							item.marker.setVisible(true);
						}
					} else {
						if (item.marker) {
							item.marker.setVisible(false);
						}
					}
					return result;
				});
			}
		} else {
			return self.locationList();
		}
	});
};
var stringStartsWith = function (string, startsWith) {
	string = string || "";
	if (startsWith.length > string.length) {
		return false;
	}
	return string.substring(0, startsWith.length) === startsWith;
};

var vm = new ViewModel();
ko.applyBindings(vm);
