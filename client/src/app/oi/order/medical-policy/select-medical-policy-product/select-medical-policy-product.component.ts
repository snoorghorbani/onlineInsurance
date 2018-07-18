import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/internal/Observable";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from "@soushians/layout";
import { getAccountInfo } from "@soushians/user";
import { SigninRequiredAction } from "@soushians/authentication";

import { MedicalPolicyOrderFormModel } from "../../models";
import { AppState } from "../../order.reducers";
import { SaveOrderStartAction, GetNewOrderFormStartAction } from "../../services/api";
import { PolicyCompareModel, PriceModel } from "../../../policy/models";
import { PolicyService } from "../../../policy/services";
import { SelectdPolicyConfirmationComponent } from "../selectd-policy-onfirmation/selectd-policy-confirmation.component";

@Component({
	templateUrl: "./select-medical-policy-product.component.html",
	styleUrls: [ "./select-medical-policy-product.component.css" ]
})
export class SelectMedicalPolicyProductComponent implements OnInit, OnDestroy {
	orderForm: MedicalPolicyOrderFormModel;
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

	homeIsDone(formValue) {
		Object.keys(formValue).forEach(k => (this.orderForm[k].Value = formValue[k]));
		this.policies$ = this.policyService.ComparePolicies(this.orderForm);
	}
	selectProduct({ price, policy }: { price: PriceModel; policy: PolicyCompareModel }) {
		this.orderForm.ProductId.Value = price.ProductId;

		const dialogRef = this.dialog.open(SelectdPolicyConfirmationComponent, {
			width: "500px",
			data: { orderForm: this.orderForm, price, policy }
		});

		dialogRef.afterClosed().subscribe((approved: boolean) => {
			if (approved) this.store.dispatch(new SaveOrderStartAction(this.orderForm));
		});
	}
	doneInsurer(orderForm: MedicalPolicyOrderFormModel) {
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
		this.store
			.select(state => state.order.newOrder.data as MedicalPolicyOrderFormModel)
			.filter(orderForm => orderForm != null)
			.subscribe(orderForm => {
				this.orderForm = orderForm;
				this.policies$ = this.policyService.ComparePolicies(this.orderForm);
			});
	}
}
