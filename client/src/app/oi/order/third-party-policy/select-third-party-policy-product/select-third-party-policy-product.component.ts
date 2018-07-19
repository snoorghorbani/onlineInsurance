import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from '@soushians/layout';
import { getAccountInfo } from '@soushians/user';
import { SigninRequiredAction } from '@soushians/authentication';

import { ThirdPartyPolicyOrderFormModel } from '../../models';
import { AppState } from '../../order.reducers';
import { SaveOrderStartAction, GetNewOrderFormStartAction } from '../../services/api';
import { PolicyCompareModel, PriceModel } from '../../../policy/models';
import { PolicyService } from '../../../policy/services';
import { SelectedThirdPartyPolicyConfirmationComponent } from '../selected-third-party-policy-onfirmation/selected-third-party-policy-confirmation.component';
import { OrderFormService } from '../../services';

@Component({
	templateUrl: './select-third-party-policy-product.component.html',
	styleUrls: [ './select-third-party-policy-product.component.css' ]
})
export class SelectThirdPartyPolicyProductComponent implements OnInit, OnDestroy {
	orderForm: ThirdPartyPolicyOrderFormModel;
	policies$: Observable<PolicyCompareModel[]>;
	signedIn$: Observable<boolean>;

	constructor(
		private store: Store<AppState>,
		private policyService: PolicyService,
		private orderFormService: OrderFormService,
		public dialog: MatDialog,
		private router: Router
	) {
		this.signedIn$ = this.store
			.select(getAccountInfo)
			.pipe(map((user) => (user.DisplayName == null ? false : true)));
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction(1));
		this.store.dispatch(new FullscreenAction());
		this._select_order_form_store_and_subscribe();
	}

	ngOnDestroy() {
		this.store.dispatch(new ExitFullscreenAction());
	}

	homeIsDone(formValue) {
		Object.keys(formValue).forEach((k) => (this.orderForm[k].Value = formValue[k]));
		this.policies$ = this.policyService.ComparePolicies(this.orderForm);
	}
	selectProduct({ price, policy }: { price: PriceModel; policy: PolicyCompareModel }) {
		this.orderForm.ProductId.Value = price.ProductId;

		const dialogRef = this.dialog.open(SelectedThirdPartyPolicyConfirmationComponent, {
			width: '500px',
			data: { orderForm: this.orderForm, price, policy }
		});

		dialogRef.afterClosed().subscribe((approved: boolean) => {
			if (approved) this.store.dispatch(new SaveOrderStartAction(this.orderForm));
		});
	}
	doneInsurer(orderForm: ThirdPartyPolicyOrderFormModel) {
		this.router.navigate([ 'order/view', orderForm.Id.Value ]);
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
		this.orderFormService.GetNewOrderForm<ThirdPartyPolicyOrderFormModel>(8).subscribe((orderForm) => {
			this.orderForm = orderForm;
			this.policies$ = this.policyService.ComparePolicies(this.orderForm);
		});
	}
}
