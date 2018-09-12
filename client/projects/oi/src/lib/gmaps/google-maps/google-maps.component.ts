import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

declare let google: any;

@Component({
	selector: 'app-google-maps',
	templateUrl: './google-maps.component.html',
	styleUrls: [ './google-maps.component.css' ]
})
export class GoogleMapsComponent implements OnInit, AfterViewInit {
	map: any;
	@Output() currentLocationOfUser: EventEmitter<UserLocation> = new EventEmitter<UserLocation>();
	curentLocation: { lat: any; lng: any };
	markerCurentLocation: any;
	constructor() {}

	ngOnInit() {}
	ngAfterViewInit() {
		this.initialGoogleMap();
		this.initSearchBox();
		this.GetCurrentLocation()
			.then((position: any) => {
				this.curentLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
				this.map.panTo(this.curentLocation);
				this.map.setCenter(this.curentLocation);
				this.map.setZoom(11);
			})
			.catch((err) => {
				//TODO: error handeler
				console.error(err.message);
			});

		this.map.addListener('click', (e) => {
			this.placeMarkerAndPanTo(e.latLng, this.map);
			this.emitUserLocation(e.latLng);
		});
	}
	initialGoogleMap() {
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 35.697291, lng: 51.340199 },
			streetViewControl: false,
			fullscreenControl: false,
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_CENTER,
				style: google.maps.ZoomControlStyle.LARGE
			},
			mapTypeControl: false,
			//greedy
			gestureHandling: 'cooperative',
			zoom: 7
		});
	}
	initSearchBox() {
		// Create the search box and link it to the UI element.

		var input = document.getElementById('pac-input');
		var searchBox = new google.maps.places.SearchBox(input);
		this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

		searchBox.addListener('places_changed', () => {
			var places = searchBox.getPlaces();
			if (places.length == 0) {
				return;
			}
			// For each place, get the icon, name and location.
			var bounds = new google.maps.LatLngBounds();
			places.forEach(function(place) {
				if (!place.geometry) {
					console.log('Returned place contains no geometry');
					return;
				}
				if (place.geometry.viewport) {
					// Only geocodes have viewport.
					bounds.union(place.geometry.viewport);
				} else {
					bounds.extend(place.geometry.location);
				}
			});
			this.map.fitBounds(bounds);
		});
	}
	GetCurrentLocation = function() {
		return new Promise(function(resolve, reject) {
			var options = {
				enableHighAccuracy: true
			};
			navigator.geolocation.getCurrentPosition(
				function(data) {
					resolve(data);
				},
				function(data) {
					reject(data);
				},
				options
			);
		});
	};
	placeMarkerAndPanTo(latLng, map) {
		if (this.markerCurentLocation) {
			this.markerCurentLocation.setPosition(latLng);
		} else {
			this.markerCurentLocation = new google.maps.Marker({
				position: latLng,
				icon: {
					path:
						'M9,27 C7,27 0,16.9704016 0,9 C2.28269391e-16,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,16.9704016 11,27 9,27 Z M9,13 C11.209139,13 13,11.209139 13,9 C13,6.790861 11.209139,5 9,5 C6.790861,5 5,6.790861 5,9 C5,11.209139 6.790861,13 9,13 Z',
					fillColor: '#ff0000',
					fillOpacity: 1,
					anchor: new google.maps.Point(0, 0),
					strokeWeight: 1,
					strokeColor: '#fff',
					scale: 1
				},
				map: map
			});
			map.panTo(latLng);
		}
	}
	emitUserLocation(latLng) {
		var userLocation: UserLocation = new UserLocation();
		userLocation.lat = latLng.lat();
		userLocation.lng = latLng.lng();
		this.currentLocationOfUser.emit(userLocation);
	}
}

export class UserLocation {
	lat: number;
	lng: number;
}
