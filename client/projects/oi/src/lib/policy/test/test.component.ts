import { Component, OnInit } from "@angular/core";

import { PolicyService } from "../services/policy.service";
import { AppState } from "../policy.reducers";
import { Store } from "@ngrx/store";
import { GetCarModelsOfBrandApiModel, GetCarModelsOfBrandStartAction } from "../services/api";

@Component({
	selector: "policy-test",
	templateUrl: "./test.component.html",
	styleUrls: [ "./test.component.css" ]
})
export class TestComponent implements OnInit {
	constructor(private service: PolicyService, private store: Store<AppState>) {}

	ngOnInit() {
		this.store.dispatch(
			new GetCarModelsOfBrandStartAction(new GetCarModelsOfBrandApiModel.Request({ Name: "asdf" }))
		);
	}
}
