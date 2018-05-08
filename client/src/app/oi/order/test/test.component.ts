import { Component, OnInit } from "@angular/core";

import { OrderService } from "../services/order.service";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { GetOrderTypesApiModel, GetOrderTypesStartAction } from "../services/api";

@Component({
	selector: "order-test",
	templateUrl: "./test.component.html",
	styleUrls: [ "./test.component.css" ]
})
export class TestComponent implements OnInit {
	constructor(private service: OrderService, private store: Store<AppState>) {}

	ngOnInit() {
		this.store.dispatch(new GetOrderTypesStartAction(new GetOrderTypesApiModel.Request({ Name: "asdf" })));
	}
}
