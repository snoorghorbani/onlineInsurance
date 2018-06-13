import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of, throwError } from "rxjs";
import { share, map, switchMap, withLatestFrom, publishLast, refCount, catchError } from "rxjs/operators";

import { OrderType } from "../models/order-type.model";
import { OrderFormModel, DeliveryTimeModel, OrderSummaryModel } from "../models";
import { GetDeliveryTimeTableApiModel, PlaceOrderApiModel, GetMyCartableApiModel, SaveOrderApiModel } from "./api";
import { GetMyOrdersApiModel } from "./api/get-my-orders";
import { GetOrderApiModel } from "./api/get-order";
import { OrderConfigurationService } from "./order-configuration.service";

@Injectable({
	providedIn: "root"
})
export class OrderService {
	constructor(private http: HttpClient, private configurationService: OrderConfigurationService) {}

	GetOrderTypes(): Observable<OrderType[]> {
		return this.http
			.get(`${this.configurationService.config.env.server}/order/GetOrderTypes`)
			.map((response: any) => response.Result as OrderType[]);
	}
	GetDeliveryTimeTable(): Observable<DeliveryTimeModel[]> {
		return this.http
			.get<GetDeliveryTimeTableApiModel.Response>(
				`${this.configurationService.config.env.server}/order/GetDeliveryTimeTable`
			)
			.pipe(share(), map(response => response.Result.Items));
	}
	SaveOrder(order: OrderFormModel): Observable<OrderFormModel> {
		debugger;
		return this.http
			.post<SaveOrderApiModel.Response>(`${this.configurationService.config.env.server}/order/SaveOrder`, order)
			.pipe(map(response => response.Result), share());
	}
	GetMyOrders(): Observable<OrderSummaryModel[]> {
		return this.http
			.get<GetMyOrdersApiModel.Response>(`${this.configurationService.config.env.server}/order/GetMyOrders`)
			.pipe(share(), map(response => response.Result.Items));
	}
	GetMyCartable(): Observable<OrderSummaryModel[]> {
		return this.http
			.get<GetMyCartableApiModel.Response>(`${this.configurationService.config.env.server}/order/GetMyCartable`)
			.pipe(share(), map(response => response.Result.Items));
	}
	GetOrder({ Id }: Partial<GetOrderApiModel.Request>): Observable<OrderFormModel> {
		return this.http
			.get<GetOrderApiModel.Response>(`${this.configurationService.config.env.server}/order/GetOrder/${Id}`)
			.pipe(map(response => response.Result), share());
	}
	PlaceOrder(orderForm: OrderFormModel): Observable<any> {
		return this.http
			.post<PlaceOrderApiModel.Response>(
				`${this.configurationService.config.env.server}/order/PlaceOrder`,
				orderForm
			)
			.pipe(map(response => response.Result));
		// this.http.get("${this.configurationService.config.env.server}/user/login?Username=test_agent").subscribe(data => {
		// 	debugger;
		// });
		// return of({})
		// return this.http.get("${this.configurationService.config.env.server}/user/login?Username=test_agent").pipe(
		// 	map(() => {
		// 		debugger;
		// 		this.http
		// 			.post<PlaceOrderApiModel.Response>(`${this.configurationService.config.env.server}/order/PlaceOrder`, orderForm)
		// 			.publish()
		// 			.connect();
		// 	}),
		// 	map(response => response)
		// );
	}
	RedirctToBank(url: string, body: any): any {
		return this.http.post<any>(url, body).publish().connect();
	}
}
