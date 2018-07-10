import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";

import { OrderFormModel } from "../models/order-form.model";
import { GetNewOrderForm, SaveOrderForm } from "./mock";
import { OrderConfigurationService } from "./order-configuration.service";
import { FirePolicyOrderFormModel } from "../models";
import { share } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class OrderFormService {
	constructor(private http: HttpClient, private configurationService: OrderConfigurationService) {}

	GetNewOrderForm(type): Observable<OrderFormModel | FirePolicyOrderFormModel> {
		// return of(GetNewOrderForm as OrderFormModel);
		debugger;
		if (type == 1)
			return this.http
				.get(`${this.configurationService.config.env.server}/order/GetNewOrderForm/?type=${type}`)
				.map((response: any) => response.Result as OrderFormModel);
		else if (type == 2) {
			return of(type2).pipe(share());
		}
	}
	SaveOrderForm(): Observable<OrderFormModel> {
		// return of(SaveOrderForm as OrderFormModel);
		return this.http
			.get(`${this.configurationService.config.env.server}/order/SaveOrderForm`)
			.map((response: any) => response.Result as OrderFormModel);
	}
	ApproveOrder(orderForm: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post(`${this.configurationService.config.env.server}/order/ApproveOrder`, orderForm)
			.map((response: any) => response.Result as OrderFormModel);
	}
	RejectOrder(orderForm: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post(`${this.configurationService.config.env.server}/order/RejectOrder`, orderForm)
			.map((response: any) => response.Result as OrderFormModel);
	}
}

const type2: FirePolicyOrderFormModel = {
	Id: {
		Description: null,
		DisplayValue: null,
		ExtensionData: {},
		Label: "شناسه",
		Name: "Id",
		Options: null,
		SequenceIndex: 87,
		Status: 4,
		Value: null
	},
	ProductId: {
		Description: null,
		DisplayValue: null,
		ExtensionData: {},
		Label: "شناسه محصول",
		Name: "Id",
		Options: null,
		SequenceIndex: 87,
		Status: 4,
		Value: null
	},
	arzeshlavazem: {
		Description: null,
		DisplayValue: null,
		ExtensionData: {},
		Label: "ارزش لوازم همه ی واحدهای مجتمع (تومان)",
		Name: "arzeshlavazem",
		Options: null,
		SequenceIndex: 87,
		Status: 4,
		Value: null
	},
	metrazh: {
		Description: null,
		DisplayValue: null,
		ExtensionData: {},
		Label: "متراژ مجتمع (مجموع مساحت همه ی واحدها + مشاعات)",
		Name: "metrazh",
		Options: null,
		SequenceIndex: 87,
		Status: 4,
		Value: null
	},
	tedadvahed: {
		Description: null,
		DisplayValue: null,
		ExtensionData: {},
		Label: "تعداد واحد",
		Name: "tedadvahed",
		Options: null,
		SequenceIndex: 87,
		Status: 4,
		Value: null
	},
	noesaze: {
		Description: null,
		DisplayValue: null,
		ExtensionData: {},
		Label: "نوع سازه",
		Name: "noesaze",
		Options: [
			{
				DisplayValue: "آجری",
				ExtensionData: {},
				Value: 1
			},
			{
				DisplayValue: "فلزی",
				ExtensionData: {},
				Value: 2
			},
			{
				DisplayValue: "بتنی",
				ExtensionData: {},
				Value: 3
			}
		],
		SequenceIndex: 87,
		Status: 4,
		Value: null
	},
	noemelk: {
		Description: null,
		DisplayValue: null,
		ExtensionData: {},
		Label: "نوع ملک",
		Name: "noemelk",
		Options: [
			{
				DisplayValue: "یک واحد در آپارتمان",
				ExtensionData: {},
				Value: 1
			},
			{
				DisplayValue: "یک ساختمان ویلایی",
				ExtensionData: {},
				Value: 2
			},
			{
				DisplayValue: "آپارتمان یا مجتمع",
				ExtensionData: {},
				Value: 3
			}
		],
		SequenceIndex: 87,
		Status: 4,
		Value: null
	}
};
