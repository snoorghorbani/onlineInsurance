import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";

import { OrderType } from "../models/order-type.model";
import { OrderFormModel } from "../models";
import { GetOrderTypes } from "./mock";

@Injectable({
	providedIn: "root"
})
export class OrderService {
	constructor(private http: HttpClient) {}

	GetOrderTypes(): Observable<OrderType[]> {
		// return of(GetOrderTypes);
		return this.http
			.get("http://185.208.174.92:2000/order/GetOrderTypes")
			.map((response: any) => response.Result as OrderType[]);
	}
}
