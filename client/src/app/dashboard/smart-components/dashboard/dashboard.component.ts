import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";

import { EnableComfortableModeAction, DisableComfortableModeAction } from "@soushians/layout";

import { AppState } from "../../../app.states";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: [ "./dashboard.component.css" ]
})
export class DashboardComponent implements OnInit, OnDestroy {
	constructor(private store: Store<AppState>) {
		this.store.dispatch(new EnableComfortableModeAction());
	}

	ngOnInit() {}
	ngOnDestroy() {
		this.store.dispatch(new DisableComfortableModeAction());
	}
}
