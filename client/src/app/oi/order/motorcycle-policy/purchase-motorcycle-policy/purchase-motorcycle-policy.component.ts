import { MatDialog, MatHorizontalStepper } from '@angular/material';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from '@soushians/layout';

import { AppState } from '../../order.reducers';

@Component({
	templateUrl: './purchase-motorcycle-policy.component.html',
	styleUrls: [ './purchase-motorcycle-policy.component.css' ]
})
export class PurchaseMotorcyclePolicyComponent implements OnInit, OnDestroy {
	@ViewChild('stepper') stepperRef: MatHorizontalStepper;

	constructor(private store: Store<AppState>, public dialog: MatDialog, private location: Location) {}

	ngOnInit() {
		this.store.dispatch(new FullscreenAction());
		if (this.location.isCurrentPathEqualTo('/order/purchase/fire-policy/select-product')) {
			this.stepperRef.selectedIndex = 0;
		} else if (this.location.path().startsWith('/order/purchase/fire-policy/insurer-info')) {
			this.stepperRef.selectedIndex = 1;
		} else if (this.location.isCurrentPathEqualTo('order/purchase/fire-policy/select-product')) {
		} else if (this.location.isCurrentPathEqualTo('order/purchase/fire-policy/select-product')) {
		}
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
