import { Component, OnInit, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material";

@Component({
	selector: "app-purchase",
	templateUrl: "./purchase.component.html",
	styleUrls: [ "./purchase.component.css" ]
})
export class PurchaseComponent implements OnInit {
	@ViewChild("stepper") stepper: MatStepper;
	constructor() {}

	ngOnInit() {}
	next() {
		this.stepper.next();
	}
	prev() {
		this.stepper.previous();
	}
}
