import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";

import { OrderType } from "../models/order-type.model";
import { OrderFormModel, DeliveryTimeModel, OrderSummaryModel } from "../models";
import { GetOrderTypes } from "./mock";
import { GetDeliveryTimeTableApiModel, PlaceOrderApiModel, GetMyCartableApiModel } from "./api";
import { SaveOrderApiModel } from "./api/save-order";
import { GetMyOrdersApiModel } from "./api/get-my-orders";
import { GetOrderApiModel } from "./api/get-order";
import { share, map, switchMap, withLatestFrom, publishLast, refCount } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class OrderService {
	constructor(private http: HttpClient) {}

	GetOrderTypes(): Observable<OrderType[]> {
		return this.http
			.get("http://185.208.174.92:2000/order/GetOrderTypes")
			.map((response: any) => response.Result as OrderType[]);
	}
	GetDeliveryTimeTable(): Observable<DeliveryTimeModel[]> {
		return this.http
			.get<GetDeliveryTimeTableApiModel.Response>("http://185.208.174.92:2000/order/GetDeliveryTimeTable")
			.pipe(share(), map(response => response.Result.Items));
	}
	SaveOrder(order: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post<SaveOrderApiModel.Response>("http://185.208.174.92:2000/order/SaveOrder", order)
			.pipe(share(), map(response => response.Result));
	}
	GetMyOrders(): Observable<OrderSummaryModel[]> {
		return this.http
			.get<GetMyOrdersApiModel.Response>("http://185.208.174.92:2000/order/GetMyOrders")
			.pipe(share(), map(response => response.Result.Items));
	}
	GetMyCartable(): Observable<OrderSummaryModel[]> {
		return this.http.get<GetMyCartableApiModel.Response>("http://185.208.174.92:2000/order/GetMyCartable").pipe(
			// switchMap(() =>
			// 	this.http.get<GetMyCartableApiModel.Response>("http://185.208.174.92:2000/order/GetMyCartable")
			// ),
			share(),
			map(response => response.Result.Items)
		);
	}
	GetOrder({ Id }: Partial<GetOrderApiModel.Request>): Observable<OrderFormModel> {
		debugger;
		return this.http.get<GetOrderApiModel.Response>(`http://185.208.174.92:2000/order/GetOrder/${Id}`).pipe(
			map(response => {
				debugger;
				return response.Result;
			}),
			share()
		);
	}
	PlaceOrder(orderForm: OrderFormModel): Observable<any> {
		return this.http
			.post<PlaceOrderApiModel.Response>(`http://185.208.174.92:2000/order/PlaceOrder`, orderForm)
			.pipe(map(response => response.Result));
		// this.http.get("http://185.208.174.92:2000/user/login?Username=test_agent").subscribe(data => {
		// 	debugger;
		// });
		// return of({})
		// return this.http.get("http://185.208.174.92:2000/user/login?Username=test_agent").pipe(
		// 	map(() => {
		// 		debugger;
		// 		this.http
		// 			.post<PlaceOrderApiModel.Response>(`http://185.208.174.92:2000/order/PlaceOrder`, orderForm)
		// 			.publish()
		// 			.connect();
		// 	}),
		// 	map(response => response)
		// );
	}
	RedirctToBank(url: string, body: any): any {
		debugger;
		return this.http.post<any>(url, body).publish().connect();
	}
}
