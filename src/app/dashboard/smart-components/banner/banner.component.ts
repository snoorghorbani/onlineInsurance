import { Component, OnInit } from "@angular/core";
declare var particlesJS;
@Component({
	selector: "dashboard-banner",
	templateUrl: "./banner.component.html",
	styleUrls: [ "./banner.component.css" ]
})
export class BannerComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		// particlesJS.load('particles-js', 'assets/particles.json', function () {
		//         console.log('callback - particles.js config loaded');
		// });
	}
}
