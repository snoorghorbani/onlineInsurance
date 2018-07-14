import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from "@soushians/layout";

import { AppState } from "../../order.reducers";
import { PolicyService } from "../../../policy/services";

@Component({
	selector: "order-purchase-fire-policy",
	templateUrl: "./purchase-fire-policy.component.html",
	styleUrls: [ "./purchase-fire-policy.component.css" ]
})
export class PurchaseFirePolicyComponent implements OnInit, OnDestroy {
	constructor(private store: Store<AppState>, public dialog: MatDialog) {}

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
