// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function initialize() {
	if (GBrowserIsCompatible()) {     
		var map = new GMap2(document.getElementById("map_canvas"));
		var center = new GLatLng(10.32911, 123.9062);
		map.setCenter(center, 13);
		map.setZoom(16);
		map.addControl(new GLargeMapControl());        
		map.addControl(new GMapTypeControl());


		var marker = new GMarker(center, {draggable: true});

		GEvent.addListener(marker, "dragstart", function() {
		  map.closeInfoWindow();
		});

		GEvent.addListener(marker, "dragend", function() {
		  var point = marker.getPoint();
		  map.panTo(point);
		  document.getElementById("location_lat").value = point.lat();
		  document.getElementById("location_long").value = point.lng();
		});

		map.addOverlay(marker);

	}
}
    
function location_search(site, lat_search, long_search) {
	if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map_search"));
		var center = new GLatLng(parseFloat(lat_search), parseFloat(long_search));
		map.setCenter(center, 13);
		map.setZoom(16);
		map.addControl(new GLargeMapControl());        
		map.addControl(new GMapTypeControl());

		document.getElementById("place").innerHTML = site;
		var marker = new GMarker(center, {draggable: false});

		map.addOverlay(marker);

	}
}

function location_edit() {
	if (GBrowserIsCompatible()) {
		var site = document.getElementById("location_name").value;
		var lat_edit = document.getElementById("location_lat").value;
		var long_edit = document.getElementById("location_long").value;
		var map = new GMap2(document.getElementById("map_search"));
		var center = new GLatLng(parseFloat(lat_edit), parseFloat(long_edit));
		map.setCenter(center, 13);
		map.setZoom(16);
		map.addControl(new GLargeMapControl());        
		map.addControl(new GMapTypeControl());

		var marker = new GMarker(center, {draggable: true});

		GEvent.addListener(marker, "dragstart", function() {
		  map.closeInfoWindow();
		});

		GEvent.addListener(marker, "dragend", function() {
		  var point = marker.getPoint();
		  map.panTo(point);
		  document.getElementById("location_lat").value = point.lat();
		  document.getElementById("location_long").value = point.lng();
		});

		map.addOverlay(marker);

	}
}

