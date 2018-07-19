import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

import { OrderFormModel } from '../models/order-form.model';
import { OrderConfigurationService } from './order-configuration.service';
import { FirePolicyOrderFormModel, MedicalPolicyOrderFormModel } from '../models';
import { share, map } from 'rxjs/operators';
import { GetOrderApiModel } from './api/get-order';

@Injectable({
	providedIn: 'root'
})
export class OrderFormService {
	constructor(private http: HttpClient, private configurationService: OrderConfigurationService) {}

	GetNewOrderForm(type): Observable<OrderFormModel | FirePolicyOrderFormModel | MedicalPolicyOrderFormModel> {
		// return of(GetNewOrderForm as OrderFormModel);
		debugger;
		return this.http
			.get(`${this.configurationService.config.env.server}/order/GetNewOrderForm/?type=${type}`)
			.pipe(map((response: any) => response.Result as OrderFormModel));
	}
	SaveOrderForm(): Observable<OrderFormModel> {
		// return of(SaveOrderForm as OrderFormModel);
		return this.http
			.get(`${this.configurationService.config.env.server}/order/SaveOrderForm`)
			.pipe(map((response: any) => response.Result as OrderFormModel));
	}
	ApproveOrder(orderForm: OrderFormModel): Observable<OrderFormModel> {
		// return of(approveOrder);
		return this.http
			.post(`${this.configurationService.config.env.server}/order/ApproveOrder`, orderForm)
			.pipe(map((response: any) => response.Result as OrderFormModel));
	}
	RejectOrder(orderForm: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post(`${this.configurationService.config.env.server}/order/RejectOrder`, orderForm)
			.pipe(map((response: any) => response.Result as OrderFormModel));
	}
	GetOrder<T = OrderFormModel>({ Id }: Partial<GetOrderApiModel.Request>): Observable<T> {
		return this.http
			.get<GetOrderApiModel.Response<T>>(`${this.configurationService.config.env.server}/order/GetOrder/${Id}`)
			.pipe(map((response) => response.Result), share());
	}
}
