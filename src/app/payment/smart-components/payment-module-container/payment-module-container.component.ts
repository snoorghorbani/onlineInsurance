import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";

import * as UserFeatureReducer from "@soushians/user";

@Component({
	template: `
  <router-outlet></router-outlet>
  `
})
export class PaymentModuleContainerComponent implements OnInit {
	constructor(private route: ActivatedRoute, private store: Store<UserFeatureReducer.FeatureState>) {
		this.route.params.subscribe((params) => {
			// TODO:
			// let model = new ProfileViewModel.Request({ Username: params.MobileNumber } as ProfileViewModel.Request);
			// this.store.dispatch(new Search(model));
		});
	}

	ngOnInit() {}
}
