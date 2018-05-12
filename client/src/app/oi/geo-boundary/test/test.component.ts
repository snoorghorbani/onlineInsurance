import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { GeoBoundaryService } from "../services";
import { AppState } from "../geo-boundary.reducers";
import { TestStartAction } from "../services/api";

@Component({
	selector: "geo-boundary-test",
	templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit {
	constructor(private service: GeoBoundaryService, private store: Store<AppState>) {}

	ngOnInit() {
		this.store.dispatch(new TestStartAction(<any>{}));
	}
}
