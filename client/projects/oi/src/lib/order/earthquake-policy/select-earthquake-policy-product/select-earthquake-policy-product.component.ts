import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from "@soushians/layout";
import { SigninRequiredAction } from "@soushians/authentication";
import { getAccountInfo } from "@soushians/user";

import { SelectdEarthquakePolicyConfirmationComponent } from "../selectd-earthquake-policy-confirmation/selectd-earthquake-policy-confirmation.component";
import { SaveOrderStartAction, GetNewOrderFormStartAction } from "../../services/api";
import { PolicyCompareModel, PriceModel } from "../../../policy/models";
import { EarthquakePolicyOrderFormModel } from "../../models";
import { PolicyService } from "../../../policy/services";
import { AppState } from "../../order.reducers";
import { OrderService, OrderFormService } from "../../services";

@Component({
	templateUrl: "./select-earthquake-policy-product.component.html",
	styleUrls: [ "./select-earthquake-policy-product.component.css" ]
})
export class SelectEarthquakePolicyProductComponent implements OnInit, OnDestroy {
	orderForm: EarthquakePolicyOrderFormModel;
	policies$: Observable<PolicyCompareModel[]>;
	signedIn: boolean;

	constructor(
		private store: Store<AppState>,
		private policyService: PolicyService,
		private orderFormService: OrderFormService,
		public dialog: MatDialog,
		private router: Router
	) {
		this.store.select(getAccountInfo).subscribe(user => (this.signedIn = !!user.DisplayName));
	}

	ngOnInit() {
		this.store.dispatch(new FullscreenAction());
		this._select_order_form_store_and_subscribe();
	}

	ngOnDestroy() {
		this.store.dispatch(new ExitFullscreenAction());
	}

	homeIsDone(formValue) {
		Object.keys(formValue).forEach(k => (this.orderForm[k].Value = formValue[k]));
		this.policies$ = this.policyService.ComparePolicies(this.orderForm);
	}
	selectProduct({ price, policy }: { price: PriceModel; policy: PolicyCompareModel }) {
		this.orderForm.ProductId.Value = policy.ProductId;

		const dialogRef = this.dialog.open(SelectdEarthquakePolicyConfirmationComponent, {
			width: "500px",
			data: { orderForm: this.orderForm, price, policy }
		});

		dialogRef.afterClosed().subscribe((approved: boolean) => {
			if (approved) this.store.dispatch(new SaveOrderStartAction(this.orderForm));
		});
	}
	doneInsurer(orderForm: EarthquakePolicyOrderFormModel) {
		this.router.navigate([ "order/view", orderForm.Id.Value ]);
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
	_get_products() {
		// this.store.dispatch(new ComparePoliciesStartAction(orderForm));
	}
	_select_order_form_store_and_subscribe() {
		this.orderFormService.GetNewOrderForm<EarthquakePolicyOrderFormModel>(5).subscribe(orderForm => {
			this.orderForm = orderForm;
		});
	}
}
