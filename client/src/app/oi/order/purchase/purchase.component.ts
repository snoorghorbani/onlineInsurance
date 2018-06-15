import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatStepper, MatBottomSheetRef } from "@angular/material";
import { Observable } from "rxjs/internal/Observable";
import { OrderFormModel } from "../models";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { trigger, transition, animate, style, state } from "@angular/animations";
import { Router } from "@angular/router";

import { ExitFullscreenAction, FullscreenAction, ToggleFullscreenAction } from "@soushians/layout";
import { getAccountInfo } from "@soushians/user";
import { SigninRequiredAction, SigninContainerComponent } from "@soushians/authentication";
import { CarDetailComponent } from "../car-detail/car-detail.component";
import { SelectProductComponent } from "../select-product/select-product.component";
import { InsurerInfoComponent } from "../insurer-info/insurer-info.component";
import { SaveOrderStartAction } from "../services/api";
import { map } from "rxjs/operators";

@Component({
	selector: "order-purchase",
	templateUrl: "./purchase.component.html",
	styleUrls: [ "./purchase.component.css" ],
	animations: [
		trigger("card", [
			state("in", style({ transform: "translateX(0px)" })),
			state("out", style({ transform: "translateX(-2000px)" })),
			transition("in => out", [ animate("1000ms") ]),
			transition("out => in", [ animate("1000ms") ])
		])
	]
})
export class PurchaseComponent implements OnInit, OnDestroy {
	@ViewChild("stepper") stepper: MatStepper;
	@ViewChild(CarDetailComponent) carDetailComponent: CarDetailComponent;
	@ViewChild(SelectProductComponent) selectProductComponent: SelectProductComponent;
	@ViewChild(InsurerInfoComponent) insurerInfoComponent: InsurerInfoComponent;
	orderForm$: Observable<OrderFormModel>;
	signedIn$: Observable<boolean>;
	state: any;
	constructor(
		private store: Store<AppState>,
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
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.store.dispatch(new FullscreenAction());
	}
	ngOnDestroy() {
		this.store.dispatch(new ExitFullscreenAction());
	}
	doneCar() {
		this.carDetailComponent.viewMode();
		this.selectProductComponent.editMode();
		this.state.product.animateState = "in";
	}
	doneProduct(orderForm: OrderFormModel) {
		this.selectProductComponent.viewMode();
		this.insurerInfoComponent.editMode();
		this.state.insurer.animateState = "in";
		this.store.dispatch(new SaveOrderStartAction(orderForm));
	}
	doneInsurer(orderForm: OrderFormModel) {
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
}
