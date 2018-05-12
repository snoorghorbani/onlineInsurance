import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";

import { OrderType } from "../models/order-type.model";
import { OrderFormModel, DeliveryTimeModel } from "../models";
import { GetOrderTypes } from "./mock";
import { GetDeliveryTimeTableApiModel } from "./api";
import { SaveOrderApiModel } from "./api/save-order";

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
			.map(response => response.Result.Items);
	}
	SaveOrder(order: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post<SaveOrderApiModel.Response>("http://localhost:3000/api/fake/SaveOrder", order)
			.map(response => response.Result);
	}
}
