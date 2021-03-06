﻿import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";

import { EnableComfortableModeAction, DisableComfortableModeAction, ChangeLayout } from "@soushians/layout";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: [ "./dashboard.component.css" ]
})
export class DashboardComponent implements OnInit, OnDestroy {
	constructor(private store: Store<any>) {
		this.store.dispatch(new EnableComfortableModeAction());
	}

	ngOnInit() {}
	ngOnDestroy() {
		this.store.dispatch(new DisableComfortableModeAction());
		this.store.dispatch(new ChangeLayout("without-margin"));
	}
}
