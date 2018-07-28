import { MatDialog, MatHorizontalStepper } from "@angular/material";
import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import { Store } from "@ngrx/store";

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from "@soushians/layout";

import { AppState } from "../../order.reducers";

@Component({
	templateUrl: "./purchase-third-party-policy.component.html",
	styleUrls: [ "./purchase-third-party-policy.component.css" ]
})
export class PurchaseThirdPartyPolicyComponent implements OnInit, OnDestroy {
	@ViewChild("stepper") stepperRef: MatHorizontalStepper;

	constructor(private store: Store<AppState>, public dialog: MatDialog, private location: Location) {}

	ngOnInit() {
		this.store.dispatch(new FullscreenAction());
	}

	ngOnDestroy() {
		this.store.dispatch(new ExitFullscreenAction());
	}

	fullscreenToggle() {
		this.store.dispatch(new ToggleFullscreenAction());
	}

	/**
	 * private methods
	 */
}
