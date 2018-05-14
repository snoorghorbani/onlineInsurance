import { Component, OnInit } from "@angular/core";
import { OrderService } from "../services";
import { Observable } from "rxjs/internal/Observable";
import { OrderSummaryModel } from "../models";

@Component({
	templateUrl: "./my-orders.component.html",
	styleUrls: [ "./my-orders.component.css" ]
})
export class MyOrdersComponent implements OnInit {
	orders$: Observable<OrderSummaryModel[]>;
	constructor(private service: OrderService) {}

	ngOnInit() {
		this.orders$ = this.service.GetMyOrders();
	}
}
