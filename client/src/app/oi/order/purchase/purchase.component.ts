import { Component, OnInit, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material";
import { Observable } from "rxjs/internal/Observable";
import { OrderFormModel } from "../models";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";

@Component({
	selector: "app-purchase",
	templateUrl: "./purchase.component.html",
	styleUrls: [ "./purchase.component.css" ]
})
export class PurchaseComponent implements OnInit {
	@ViewChild("stepper") stepper: MatStepper;
	orderForm$: Observable<OrderFormModel>;
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
	}
	next() {
		this.stepper.next();
	}
	prev() {
		this.stepper.previous();
	}
}
