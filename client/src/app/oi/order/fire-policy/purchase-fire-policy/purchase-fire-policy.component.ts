import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatStepper, MatBottomSheetRef, MatDialog } from "@angular/material";
import { Observable } from "rxjs/internal/Observable";
import { FirePolicyOrderFormModel, OrderFormType } from "../../models";
import { AppState } from "../../order.reducers";
import { Store } from "@ngrx/store";
import { trigger, transition, animate, style, state } from "@angular/animations";
import { Router } from "@angular/router";

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from "@soushians/layout";
import { getAccountInfo } from "@soushians/user";
import { SigninRequiredAction, SigninContainerComponent } from "@soushians/authentication";
import { InsurerInfoComponent } from "../../insurer-info/insurer-info.component";
import { SaveOrderStartAction } from "../../services/api";
import { map, switchMap } from "rxjs/operators";
import { HomeDetailComponent } from "../home-detail/home-detail.component";
import { SelectFirePolicyProductComponent } from "../select-fire-policy-product/select-fire-policy-product.component";
import { ComparePoliciesStartAction } from "../../../policy/services/api";
import { PolicyCompareModel, PriceModel } from "../../../policy/models";
import { PolicyService } from "../../../policy/services";
import { BehaviorSubject } from "rxjs";
import { SelectdPolicyConfirmationComponent } from "../selectd-policy-confirmation/selectd-policy-confirmation.component";

@Component({
	selector: "order-purchase-fire-policy",
	templateUrl: "./purchase-fire-policy.component.html",
	styleUrls: [ "./purchase-fire-policy.component.css" ],
	animations: [
		trigger("card", [
			state("in", style({ transform: "translateX(0px)" })),
			state("out", style({ transform: "translateX(-2000px)" })),
			transition("in => out", [ animate("1000ms") ]),
			transition("out => in", [ animate("1000ms") ])
		])
	]
})
export class PurchaseFirePolicyComponent implements OnInit, OnDestroy {
	@ViewChild("stepper") stepper: MatStepper;
	@ViewChild(HomeDetailComponent) carDetailComponent: HomeDetailComponent;
	@ViewChild(SelectFirePolicyProductComponent) selectProductComponent: SelectFirePolicyProductComponent;
	@ViewChild(InsurerInfoComponent) insurerInfoComponent: InsurerInfoComponent;
	orderForm: FirePolicyOrderFormModel;
	policies$: Observable<PolicyCompareModel[]>;
	signedIn$: Observable<boolean>;
	state: any;
	constructor(
		private store: Store<AppState>,
		private policyService: PolicyService,
		public dialog: MatDialog,
		private router: Router // private signinBottomSheetRef: MatBottomSheetRef<SigninContainerComponent>
	) {
		this.state = {
			car: {
				animateState: "in"
			},
			product: {
				animateState: "out"
			},
			insurer: {
				animateState: "out"
			}
		};
		this.signedIn$ = this.store.select(getAccountInfo).pipe(
			map(user => {
				debugger;
				return user.DisplayName == null ? false : true;
			})
		);
	}
	ngOnInit() {
		this.store
			.select(state => state.order.newOrder.data as FirePolicyOrderFormModel)
			.filter(orderForm => orderForm != null)
			.subscribe(orderForm => {
				this.orderForm = orderForm;
				this.policies$ = this.policyService.ComparePolicies(this.orderForm);
			});
		this.store.dispatch(new FullscreenAction());
	}
	ngOnDestroy() {
		this.store.dispatch(new ExitFullscreenAction());
	}
	homeIsDone(formValue) {
		debugger;
		Object.keys(formValue).forEach(k => (this.orderForm[k].Value = formValue[k]));
		this.policies$ = this.policyService.ComparePolicies(this.orderForm);
	}
	selectProduct({ price, policy }: { price: PriceModel; policy: PolicyCompareModel }) {
		debugger;
		this.orderForm.ProductId.Value = price.ProductId;

		const dialogRef = this.dialog.open(SelectdPolicyConfirmationComponent, {
			width: "500px",
			data: { orderForm: this.orderForm, price, policy }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log("The dialog was closed");
			debugger;
			// this.animal = result;
		});

		this.store.dispatch(new SaveOrderStartAction(this.orderForm));
	}
	doneInsurer(orderForm: FirePolicyOrderFormModel) {
		this.router.navigate([ "order/view", orderForm.Id.Value ]);
	}
	prev() {
		this.stepper.previous();
	}
	fullscreenToggle() {
		this.store.dispatch(new ToggleFullscreenAction());
	}
	signInRequest() {
		this.store.dispatch(new SigninRequiredAction());
	}
	_get_products(orderForm: OrderFormType) {
		// this.store.dispatch(new ComparePoliciesStartAction(orderForm));
	}
}
