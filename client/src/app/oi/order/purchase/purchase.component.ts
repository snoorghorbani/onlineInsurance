import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatStepper } from "@angular/material";
import { Observable } from "rxjs/internal/Observable";
import { OrderFormModel } from "../models";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";

import {
	InvisibleToolbarAction,
	VisibleToolbarAction,
	ExitFullscreenAction,
	FullscreenAction,
	ToggleFullscreenAction
} from "@soushians/layout";
import { trigger, transition, animate, style, state } from "@angular/animations";

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
	orderForm$: Observable<OrderFormModel>;
	state: { [name: string]: { mode: string; display: boolean; animateState: string } };
	constructor(private store: Store<AppState>) {
		this.state = {
			car: {
				mode: "edit",
				display: true,
				animateState: "in"
			},
			product: {
				mode: "edit",
				display: false,
				animateState: "out"
			},
			insurer: {
				mode: "edit",
				display: false,
				animateState: "out"
			}
		};
	}
	ngOnInit() {
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.store.dispatch(new FullscreenAction());
	}
	ngOnDestroy() {
		this.store.dispatch(new ExitFullscreenAction());
	}
	doneCar() {
		debugger;
		this.state.car.mode = "view";
		this.state.product.display = true;
		this.state.product.animateState = "in";
	}
	doneProduct() {
		debugger;
		this.state.product.mode = "view";
		this.state.insurer.display = true;
		this.state.insurer.animateState = "in";
	}
	doneInsurer() {
		debugger;
		this.state.insurer.mode = "view";
	}
	prev() {
		this.stepper.previous();
	}
	fullscreenToggle() {
		this.store.dispatch(new ToggleFullscreenAction());
	}
}
