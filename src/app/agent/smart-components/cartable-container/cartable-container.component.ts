import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { CartableApiModel } from "app/models/cartable";

import * as FeatureReducer from "../../reducers";
import { GetCartableDataAction } from "../../actions";
import { responseStatusTypes } from "@soushians/shared";

@Component({
	selector: "cartable-container",
	template: `
        <cartable
                [data]='cartabletData$'
                [status]='cartabletDataStatus$'
                [formGroup]='formGroup'
                (submited)='getRrequests($event)'
        ></cartable>
  `
})
export class CartableContainerComponent implements OnInit {
	// user$: Observable<UserModel>;
	cartabletData$: Observable<CartableApiModel.Response>;
	cartabletDataStatus$: Observable<responseStatusTypes>;

	formGroup: FormGroup = CartableApiModel.Request.formGroup;

	constructor(private store: Store<FeatureReducer.FeatureState>) {
		// this.user$ = this.store.select(userReducer.getUserInfo);
		this.cartabletData$ = this.store.select(FeatureReducer.getCartableData);
		this.cartabletDataStatus$ = this.store.select(FeatureReducer.getCartableStatus);
	}

	ngOnInit() {
		this.store.dispatch(new GetCartableDataAction());
	}

	getRrequests(data) {
		// this.user$.subscribe(value => {
		//         if (!value) return;
		// })
	}
}
