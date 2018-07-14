import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/internal/Observable";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from "@soushians/layout";
import { getAccountInfo } from "@soushians/user";
import { SigninRequiredAction } from "@soushians/authentication";

import { FirePolicyOrderFormModel } from "../../models";
import { AppState } from "../../order.reducers";
import { SaveOrderStartAction, GetNewOrderFormStartAction } from "../../services/api";
import { PolicyCompareModel, PriceModel } from "../../../policy/models";
import { PolicyService } from "../../../policy/services";

@Component({
	selector: "order-purchase-fire-policy",
	templateUrl: "./purchase-fire-policy.component.html",
	styleUrls: [ "./purchase-fire-policy.component.css" ]
})
export class PurchaseFirePolicyComponent implements OnInit, OnDestroy {
	orderForm: FirePolicyOrderFormModel;
	policies$: Observable<PolicyCompareModel[]>;
	signedIn$: Observable<boolean>;

	constructor(
		private store: Store<AppState>,
		private policyService: PolicyService,
		public dialog: MatDialog,
		private router: Router
	) {
		this.signedIn$ = this.store.select(getAccountInfo).pipe(map(user => (user.DisplayName == null ? false : true)));
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction(4));
		this.store.dispatch(new FullscreenAction());
		this._select_order_form_store_and_subscribe();
	}

	ngOnDestroy() {
		this.store.dispatch(new ExitFullscreenAction());
	}

	fullscreenToggle() {
		this.store.dispatch(new ToggleFullscreenAction());
	}
	signInRequest() {
		this.store.dispatch(new SigninRequiredAction());
	}

	/**
	 * private methods
	 */
	_select_order_form_store_and_subscribe() {
		this.store
			.select(state => state.order.newOrder.data as FirePolicyOrderFormModel)
			.filter(orderForm => orderForm != null)
			.subscribe(orderForm => {
				this.orderForm = orderForm;
				this.policies$ = this.policyService.ComparePolicies(this.orderForm);
			});
	}
}
