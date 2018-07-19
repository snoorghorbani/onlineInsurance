import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { OrderFormType } from '../models';
import { OrderConfigurationService } from './order-configuration.service';
import { share, map } from 'rxjs/operators';
import { GetOrderApiModel } from './api/get-order';

@Injectable({
	providedIn: 'root'
})
export class OrderFormService {
	constructor(private http: HttpClient, private configurationService: OrderConfigurationService) {}

	GetNewOrderForm<T>(type): Observable<T> {
		// return of(GetNewOrderForm as OrderFormType);
		debugger;
		return this.http
			.get(`${this.configurationService.config.env.server}/order/GetNewOrderForm/?type=${type}`)
			.pipe(map((response: any) => response.Result));
	}
	SaveOrderForm(): Observable<OrderFormType> {
		// return of(SaveOrderForm as OrderFormType);
		return this.http
			.get(`${this.configurationService.config.env.server}/order/SaveOrderForm`)
			.pipe(map((response: any) => response.Result as OrderFormType));
	}
	ApproveOrder(orderForm: OrderFormType): Observable<OrderFormType> {
		// return of(approveOrder);
		return this.http
			.post(`${this.configurationService.config.env.server}/order/ApproveOrder`, orderForm)
			.pipe(map((response: any) => response.Result as OrderFormType));
	}
	RejectOrder(orderForm: OrderFormType): Observable<OrderFormType> {
		return this.http
			.post(`${this.configurationService.config.env.server}/order/RejectOrder`, orderForm)
			.pipe(map((response: any) => response.Result as OrderFormType));
	}
	GetOrder<T = OrderFormType>({ Id }: Partial<GetOrderApiModel.Request>): Observable<T> {
		return this.http
			.get<GetOrderApiModel.Response<T>>(`${this.configurationService.config.env.server}/order/GetOrder/${Id}`)
			.pipe(map((response) => response.Result), share());
	}
}
