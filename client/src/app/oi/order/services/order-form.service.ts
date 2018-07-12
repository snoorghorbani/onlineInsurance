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
		return of(approveOrder);
		// return this.http
		// 	.post(`${this.configurationService.config.env.server}/order/ApproveOrder`, orderForm)
		// 	.map((response: any) => response.Result as OrderFormModel);
	}
	RejectOrder(orderForm: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post(`${this.configurationService.config.env.server}/order/RejectOrder`, orderForm)
			.map((response: any) => response.Result as OrderFormModel);
	}
}
const approveOrder = {
	Agent: {
		Value: "test_agent",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نماینده",
		Name: "Agent",
		Options: null,
		SequenceIndex: 33,
		Status: 2
	},
	AgreementTerms: {
		Value: true,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "بدینوسیله صحت اطلاعات فوق را تایید میکنم و شرایط و قوانین این وبسایت را میپذیرم.",
		Name: "AgreementTerms",
		Options: null,
		SequenceIndex: 180,
		Status: 1
	},
	CarBrand: {
		Value: 1,
		ExtensionData: null,
		Description: null,
		DisplayValue: "پژو",
		Label: "نوع خودرو",
		Name: "CarBrand",
		Options: [
			{ ExtensionData: null, DisplayValue: "پژو", Value: 1 },
			{ ExtensionData: null, DisplayValue: "پراید", Value: 2 },
			{ ExtensionData: null, DisplayValue: "سمند", Value: 3 },
			{ ExtensionData: null, DisplayValue: "رنو", Value: 4 },
			{ ExtensionData: null, DisplayValue: "تیبا", Value: 5 },
			{ ExtensionData: null, DisplayValue: "اپل", Value: 6 },
			{ ExtensionData: null, DisplayValue: "آلفارومئو", Value: 7 },
			{ ExtensionData: null, DisplayValue: "ام جی", Value: 8 },
			{ ExtensionData: null, DisplayValue: "ام وی ام", Value: 9 },
			{ ExtensionData: null, DisplayValue: "آئودی", Value: 10 },
			{ ExtensionData: null, DisplayValue: "بایک", Value: 11 },
			{ ExtensionData: null, DisplayValue: "بی ام و", Value: 12 },
			{ ExtensionData: null, DisplayValue: "برلیانس", Value: 13 },
			{ ExtensionData: null, DisplayValue: "بسترن", Value: 14 },
			{ ExtensionData: null, DisplayValue: "بنز", Value: 15 },
			{ ExtensionData: null, DisplayValue: "بی وای دی", Value: 16 },
			{ ExtensionData: null, DisplayValue: "پاژن", Value: 17 },
			{ ExtensionData: null, DisplayValue: "پروتون", Value: 18 },
			{ ExtensionData: null, DisplayValue: "پیکان", Value: 19 },
			{ ExtensionData: null, DisplayValue: "پورشه", Value: 20 },
			{ ExtensionData: null, DisplayValue: "تویوتا", Value: 21 },
			{ ExtensionData: null, DisplayValue: "جک", Value: 22 },
			{ ExtensionData: null, DisplayValue: "جیلی", Value: 23 },
			{ ExtensionData: null, DisplayValue: "چانگان", Value: 24 },
			{ ExtensionData: null, DisplayValue: "چری", Value: 25 },
			{ ExtensionData: null, DisplayValue: "دی اس", Value: 26 },
			{ ExtensionData: null, DisplayValue: "دانگ فنگ", Value: 27 },
			{ ExtensionData: null, DisplayValue: "دلیکا", Value: 28 },
			{ ExtensionData: null, DisplayValue: "دنا", Value: 29 },
			{ ExtensionData: null, DisplayValue: "دوو", Value: 30 },
			{ ExtensionData: null, DisplayValue: "رانا", Value: 31 },
			{ ExtensionData: null, DisplayValue: "زوتی", Value: 32 },
			{ ExtensionData: null, DisplayValue: "ساینا", Value: 33 },
			{ ExtensionData: null, DisplayValue: "سانگ یانگ", Value: 34 },
			{ ExtensionData: null, DisplayValue: "سیتروئن", Value: 35 },
			{ ExtensionData: null, DisplayValue: "سیناد", Value: 36 },
			{ ExtensionData: null, DisplayValue: "سوبارو", Value: 37 },
			{ ExtensionData: null, DisplayValue: "سوزوکی", Value: 38 },
			{ ExtensionData: null, DisplayValue: "شورلت", Value: 39 },
			{ ExtensionData: null, DisplayValue: "فیات", Value: 40 },
			{ ExtensionData: null, DisplayValue: "فولکس", Value: 41 },
			{ ExtensionData: null, DisplayValue: "کیا", Value: 42 },
			{ ExtensionData: null, DisplayValue: "کاپرا", Value: 43 },
			{ ExtensionData: null, DisplayValue: "گریت وال", Value: 44 },
			{ ExtensionData: null, DisplayValue: "گک گونو", Value: 45 },
			{ ExtensionData: null, DisplayValue: "لادا", Value: 46 },
			{ ExtensionData: null, DisplayValue: "لیفان", Value: 47 },
			{ ExtensionData: null, DisplayValue: "لکسوس", Value: 48 },
			{ ExtensionData: null, DisplayValue: "لندمارک", Value: 49 },
			{ ExtensionData: null, DisplayValue: "لوبو", Value: 50 },
			{ ExtensionData: null, DisplayValue: "لوتوس", Value: 51 },
			{ ExtensionData: null, DisplayValue: "مازراتی", Value: 52 },
			{ ExtensionData: null, DisplayValue: "میتسوبیشی", Value: 53 },
			{ ExtensionData: null, DisplayValue: "مزدا", Value: 54 },
			{ ExtensionData: null, DisplayValue: "مینی", Value: 55 },
			{ ExtensionData: null, DisplayValue: "نیسان", Value: 56 },
			{ ExtensionData: null, DisplayValue: "هایما", Value: 57 },
			{ ExtensionData: null, DisplayValue: "هوندا", Value: 58 },
			{ ExtensionData: null, DisplayValue: "هیوندای", Value: 59 },
			{ ExtensionData: null, DisplayValue: "ولوو", Value: 60 }
		],
		SequenceIndex: 84,
		Status: 2
	},
	CarModel: {
		Value: 1,
		ExtensionData: null,
		Description: null,
		DisplayValue: "206 تیپ 2",
		Label: "مدل خودرو",
		Name: "CarModel",
		Options: null,
		SequenceIndex: 87,
		Status: 2
	},
	CarProductionYear: {
		Value: 1397,
		ExtensionData: null,
		Description: null,
		DisplayValue: "1397 - 2018",
		Label: "سال ساخت",
		Name: "CarProductionYear",
		Options: [
			{ ExtensionData: null, DisplayValue: "1397 - 2018", Value: 1397 },
			{ ExtensionData: null, DisplayValue: "1396 - 2017", Value: 1396 },
			{ ExtensionData: null, DisplayValue: "1395 - 2016", Value: 1395 },
			{ ExtensionData: null, DisplayValue: "1394 - 2015", Value: 1394 },
			{ ExtensionData: null, DisplayValue: "1393 - 2014", Value: 1393 },
			{ ExtensionData: null, DisplayValue: "1392 - 2013", Value: 1392 },
			{ ExtensionData: null, DisplayValue: "1391 - 2012", Value: 1391 },
			{ ExtensionData: null, DisplayValue: "1390 - 2011", Value: 1390 },
			{ ExtensionData: null, DisplayValue: "1389 - 2010", Value: 1389 },
			{ ExtensionData: null, DisplayValue: "1388 - 2009", Value: 1388 },
			{ ExtensionData: null, DisplayValue: "1387 - 2008", Value: 1387 },
			{ ExtensionData: null, DisplayValue: "1386 - 2007", Value: 1386 },
			{ ExtensionData: null, DisplayValue: "1385 - 2006", Value: 1385 },
			{ ExtensionData: null, DisplayValue: "1384 - 2005", Value: 1384 },
			{ ExtensionData: null, DisplayValue: "1383 - 2004", Value: 1383 },
			{ ExtensionData: null, DisplayValue: "1382 - 2003", Value: 1382 },
			{ ExtensionData: null, DisplayValue: "1381 - 2002", Value: 1381 },
			{ ExtensionData: null, DisplayValue: "1380 - 2001", Value: 1380 },
			{ ExtensionData: null, DisplayValue: "1379 - 2000", Value: 1379 },
			{ ExtensionData: null, DisplayValue: "1378 - 1999", Value: 1378 },
			{ ExtensionData: null, DisplayValue: "1377 - 1998", Value: 1377 },
			{ ExtensionData: null, DisplayValue: "1376 - 1997", Value: 1376 },
			{ ExtensionData: null, DisplayValue: "1375 - 1996", Value: 1375 },
			{ ExtensionData: null, DisplayValue: "1374 - 1995", Value: 1374 },
			{ ExtensionData: null, DisplayValue: "1373 - 1994", Value: 1373 },
			{ ExtensionData: null, DisplayValue: "1372 - 1993", Value: 1372 },
			{ ExtensionData: null, DisplayValue: "1371 - 1992", Value: 1371 },
			{ ExtensionData: null, DisplayValue: "1370 - 1991", Value: 1370 }
		],
		SequenceIndex: 90,
		Status: 2
	},
	CarUsage: {
		Value: 1,
		ExtensionData: null,
		Description: null,
		DisplayValue: "سواری",
		Label: "کاربری",
		Name: "CarUsage",
		Options: [
			{ ExtensionData: null, DisplayValue: "سواری", Value: 1 },
			{ ExtensionData: null, DisplayValue: "تاکسی", Value: 2 }
		],
		SequenceIndex: 93,
		Status: 2
	},
	CarYearsWithoutIncident: {
		Value: 1,
		ExtensionData: null,
		Description:
			"چنانچه هر 4 کوپن بیمه خود را دارید این عدد برابر است با سال تخفیف درج شده روی بیمه قبلی + مدت قرارداد بیمه قبلی با تغییر شرکت تخفیف شما منتقل خواهد شد",
		DisplayValue: "1 سال",
		Label: "تخفیف عدم خسارت",
		Name: "CarYearsWithoutIncident",
		Options: [
			{ ExtensionData: null, DisplayValue: "6 ماه", Value: 0.5 },
			{ ExtensionData: null, DisplayValue: "1 سال", Value: 1 },
			{ ExtensionData: null, DisplayValue: "1.5 سال", Value: 1.5 },
			{ ExtensionData: null, DisplayValue: "2 سال", Value: 2 },
			{ ExtensionData: null, DisplayValue: "2.5 سال", Value: 2.5 },
			{ ExtensionData: null, DisplayValue: "3 سال", Value: 3 },
			{ ExtensionData: null, DisplayValue: "3.5 سال", Value: 3.5 },
			{ ExtensionData: null, DisplayValue: "4 سال", Value: 4 },
			{ ExtensionData: null, DisplayValue: "4.5 سال", Value: 4.5 },
			{ ExtensionData: null, DisplayValue: "5 سال", Value: 5 },
			{ ExtensionData: null, DisplayValue: "5.5 سال", Value: 5.5 },
			{ ExtensionData: null, DisplayValue: "6 سال", Value: 6 },
			{ ExtensionData: null, DisplayValue: "6.5 سال", Value: 6.5 },
			{ ExtensionData: null, DisplayValue: "7 سال", Value: 7 },
			{ ExtensionData: null, DisplayValue: "7.5 سال", Value: 7.5 },
			{ ExtensionData: null, DisplayValue: "8 سال", Value: 8 },
			{ ExtensionData: null, DisplayValue: "8.5 سال", Value: 8.5 },
			{ ExtensionData: null, DisplayValue: "9 سال", Value: 9 },
			{ ExtensionData: null, DisplayValue: "9.5 سال", Value: 9.5 },
			{ ExtensionData: null, DisplayValue: "10 سال", Value: 10 },
			{ ExtensionData: null, DisplayValue: "10.5 سال", Value: 10.5 },
			{ ExtensionData: null, DisplayValue: "11 سال", Value: 11 },
			{ ExtensionData: null, DisplayValue: "11.5 سال", Value: 11.5 },
			{ ExtensionData: null, DisplayValue: "12 سال", Value: 12 },
			{ ExtensionData: null, DisplayValue: "12.5 سال", Value: 12.5 },
			{ ExtensionData: null, DisplayValue: "13 سال", Value: 13 },
			{ ExtensionData: null, DisplayValue: "13.5 سال", Value: 13.5 },
			{ ExtensionData: null, DisplayValue: "14 سال", Value: 14 },
			{ ExtensionData: null, DisplayValue: "14.5 سال", Value: 14.5 },
			{ ExtensionData: null, DisplayValue: "بیش از 14 سال", Value: 15 },
			{ ExtensionData: null, DisplayValue: "بدون تخفیف", Value: 0 }
		],
		SequenceIndex: 96,
		Status: 2
	},
	Customer: {
		Value: "test_customer",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "مشتری",
		Name: "Customer",
		Options: null,
		SequenceIndex: 30,
		Status: 2
	},
	DeliveryAddress: {
		Value: "تست",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: null,
		Name: "DeliveryAddress",
		Options: null,
		SequenceIndex: 0,
		Status: 0
	},
	DeliveryAddressCityId: {
		Value: 1,
		ExtensionData: null,
		Description: null,
		DisplayValue: "تهران",
		Label: null,
		Name: "DeliveryAddressCityId",
		Options: [
			{ ExtensionData: null, DisplayValue: "تهران", Value: 1 },
			{ ExtensionData: null, DisplayValue: "اراک", Value: 2 },
			{ ExtensionData: null, DisplayValue: "اردبیل", Value: 3 },
			{ ExtensionData: null, DisplayValue: "ارومیه", Value: 4 },
			{ ExtensionData: null, DisplayValue: "اصفهان", Value: 5 },
			{ ExtensionData: null, DisplayValue: "اهواز", Value: 6 },
			{ ExtensionData: null, DisplayValue: "ایلام", Value: 7 },
			{ ExtensionData: null, DisplayValue: "بجنورد", Value: 8 },
			{ ExtensionData: null, DisplayValue: "بندرعباس", Value: 9 },
			{ ExtensionData: null, DisplayValue: "بوشهر", Value: 10 },
			{ ExtensionData: null, DisplayValue: "بیرجند", Value: 11 },
			{ ExtensionData: null, DisplayValue: "تبریز", Value: 12 },
			{ ExtensionData: null, DisplayValue: "خرم آباد", Value: 13 },
			{ ExtensionData: null, DisplayValue: "رشت", Value: 14 },
			{ ExtensionData: null, DisplayValue: "زاهدان", Value: 15 },
			{ ExtensionData: null, DisplayValue: "زنجان", Value: 16 },
			{ ExtensionData: null, DisplayValue: "ساری", Value: 17 },
			{ ExtensionData: null, DisplayValue: "سمنان", Value: 18 },
			{ ExtensionData: null, DisplayValue: "سنندج", Value: 19 },
			{ ExtensionData: null, DisplayValue: "شهرکرد", Value: 20 },
			{ ExtensionData: null, DisplayValue: "شیراز", Value: 21 },
			{ ExtensionData: null, DisplayValue: "قزوین", Value: 22 },
			{ ExtensionData: null, DisplayValue: "قم", Value: 23 },
			{ ExtensionData: null, DisplayValue: "کرج", Value: 24 },
			{ ExtensionData: null, DisplayValue: "کرمان", Value: 25 },
			{ ExtensionData: null, DisplayValue: "کرمانشاه", Value: 26 },
			{ ExtensionData: null, DisplayValue: "گرگان", Value: 27 },
			{ ExtensionData: null, DisplayValue: "مشهد", Value: 28 },
			{ ExtensionData: null, DisplayValue: "همدان", Value: 29 },
			{ ExtensionData: null, DisplayValue: "یزد", Value: 30 },
			{ ExtensionData: null, DisplayValue: "یاسوج", Value: 31 }
		],
		SequenceIndex: 0,
		Status: 0
	},
	DeliveryDate: {
		Value: "/Date(1529305200000)/",
		ExtensionData: null,
		Description: null,
		DisplayValue: "1397/3/28",
		Label: "تارخ ارسال",
		Name: "DeliveryDate",
		Options: null,
		SequenceIndex: 154,
		Status: 2
	},
	DeliveryTime: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "زمان ارسال",
		Name: "DeliveryTime",
		Options: null,
		SequenceIndex: 153,
		Status: 2
	},
	Discount: {
		Value: { ExtensionData: null, Amount: 0, CurrencyCode: "تومان", DisplayValue: "0 تومان" },
		ExtensionData: null,
		Description: null,
		DisplayValue: "0 تومان",
		Label: "تخفیف",
		Name: "Discount",
		Options: null,
		SequenceIndex: 171,
		Status: 2
	},
	LastPolicyExpirationDate: {
		Value: "/Date(1527404400000)/",
		ExtensionData: null,
		Description: null,
		DisplayValue: "1397/3/6",
		Label: "تاریخ انقضای بیمه نامه قبلی",
		Name: "LastPolicyExpirationDate",
		Options: null,
		SequenceIndex: 99,
		Status: 2
	},
	LastPolicyImage: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تصویر بیمه نامه قبلی (شامل کوپن ها)",
		Name: "LastPolicyImage",
		Options: null,
		SequenceIndex: 111,
		Status: 2
	},
	LastPolicyNumOfUsedPersonCoupon: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "کوپن مصرف شده جانی",
		Name: "LastPolicyNumOfUsedPersonCoupon",
		Options: [
			{ ExtensionData: null, DisplayValue: "کوپنی مصرف نشده", Value: 0 },
			{ ExtensionData: null, DisplayValue: "1", Value: 1 },
			{ ExtensionData: null, DisplayValue: "2", Value: 2 },
			{ ExtensionData: null, DisplayValue: "بیش از 2", Value: 3 }
		],
		SequenceIndex: 108,
		Status: 2
	},
	LastPolicyNumOfUsedPropertyCoupon: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "کوپن مصرف شده مالی",
		Name: "LastPolicyNumOfUsedPropertyCoupon",
		Options: [
			{ ExtensionData: null, DisplayValue: "1", Value: 1 },
			{ ExtensionData: null, DisplayValue: "2", Value: 2 },
			{ ExtensionData: null, DisplayValue: "بیش از 2", Value: 3 }
		],
		SequenceIndex: 105,
		Status: 2
	},
	LastPolicyYearsWithoutIncident: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "سال تخفیف درج شده در بیمه نامه قبلی",
		Name: "LastPolicyYearsWithoutIncident",
		Options: [
			{ ExtensionData: null, DisplayValue: "6 ماه", Value: 0.5 },
			{ ExtensionData: null, DisplayValue: "1 سال", Value: 1 },
			{ ExtensionData: null, DisplayValue: "1.5 سال", Value: 1.5 },
			{ ExtensionData: null, DisplayValue: "2 سال", Value: 2 },
			{ ExtensionData: null, DisplayValue: "2.5 سال", Value: 2.5 },
			{ ExtensionData: null, DisplayValue: "3 سال", Value: 3 },
			{ ExtensionData: null, DisplayValue: "3.5 سال", Value: 3.5 },
			{ ExtensionData: null, DisplayValue: "4 سال", Value: 4 },
			{ ExtensionData: null, DisplayValue: "4.5 سال", Value: 4.5 },
			{ ExtensionData: null, DisplayValue: "5 سال", Value: 5 },
			{ ExtensionData: null, DisplayValue: "5.5 سال", Value: 5.5 },
			{ ExtensionData: null, DisplayValue: "6 سال", Value: 6 },
			{ ExtensionData: null, DisplayValue: "6.5 سال", Value: 6.5 },
			{ ExtensionData: null, DisplayValue: "7 سال", Value: 7 },
			{ ExtensionData: null, DisplayValue: "7.5 سال", Value: 7.5 },
			{ ExtensionData: null, DisplayValue: "8 سال", Value: 8 },
			{ ExtensionData: null, DisplayValue: "8.5 سال", Value: 8.5 },
			{ ExtensionData: null, DisplayValue: "9 سال", Value: 9 },
			{ ExtensionData: null, DisplayValue: "9.5 سال", Value: 9.5 },
			{ ExtensionData: null, DisplayValue: "10 سال", Value: 10 },
			{ ExtensionData: null, DisplayValue: "10.5 سال", Value: 10.5 },
			{ ExtensionData: null, DisplayValue: "11 سال", Value: 11 },
			{ ExtensionData: null, DisplayValue: "11.5 سال", Value: 11.5 },
			{ ExtensionData: null, DisplayValue: "12 سال", Value: 12 },
			{ ExtensionData: null, DisplayValue: "12.5 سال", Value: 12.5 },
			{ ExtensionData: null, DisplayValue: "13 سال", Value: 13 },
			{ ExtensionData: null, DisplayValue: "13.5 سال", Value: 13.5 },
			{ ExtensionData: null, DisplayValue: "14 سال", Value: 14 },
			{ ExtensionData: null, DisplayValue: "14.5 سال", Value: 14.5 },
			{ ExtensionData: null, DisplayValue: "بیش از 14 سال", Value: 15 },
			{ ExtensionData: null, DisplayValue: "بدون تخفیف", Value: 0 }
		],
		SequenceIndex: 102,
		Status: 2
	},
	NetPremium: {
		Value: { ExtensionData: null, Amount: 12000, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
		ExtensionData: null,
		Description: null,
		DisplayValue: "12000 تومان",
		Label: "حق بیمه خالص",
		Name: "NetPremium",
		Options: null,
		SequenceIndex: 162,
		Status: 2
	},
	PaymentMethod: {
		Value: 1,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نحوه پرداخت",
		Name: "PaymentMethod",
		Options: null,
		SequenceIndex: 159,
		Status: 2
	},
	PolicyAddress: {
		Value: "تست",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نشانی درج روی بیمه نامه",
		Name: "PolicyAddress",
		Options: null,
		SequenceIndex: 141,
		Status: 2
	},
	PolicyAddressCityId: {
		Value: 1,
		ExtensionData: null,
		Description: null,
		DisplayValue: "تهران",
		Label: "شهر",
		Name: "PolicyAddressCityId",
		Options: [
			{ ExtensionData: null, DisplayValue: "تهران", Value: 1 },
			{ ExtensionData: null, DisplayValue: "اراک", Value: 2 },
			{ ExtensionData: null, DisplayValue: "اردبیل", Value: 3 },
			{ ExtensionData: null, DisplayValue: "ارومیه", Value: 4 },
			{ ExtensionData: null, DisplayValue: "اصفهان", Value: 5 },
			{ ExtensionData: null, DisplayValue: "اهواز", Value: 6 },
			{ ExtensionData: null, DisplayValue: "ایلام", Value: 7 },
			{ ExtensionData: null, DisplayValue: "بجنورد", Value: 8 },
			{ ExtensionData: null, DisplayValue: "بندرعباس", Value: 9 },
			{ ExtensionData: null, DisplayValue: "بوشهر", Value: 10 },
			{ ExtensionData: null, DisplayValue: "بیرجند", Value: 11 },
			{ ExtensionData: null, DisplayValue: "تبریز", Value: 12 },
			{ ExtensionData: null, DisplayValue: "خرم آباد", Value: 13 },
			{ ExtensionData: null, DisplayValue: "رشت", Value: 14 },
			{ ExtensionData: null, DisplayValue: "زاهدان", Value: 15 },
			{ ExtensionData: null, DisplayValue: "زنجان", Value: 16 },
			{ ExtensionData: null, DisplayValue: "ساری", Value: 17 },
			{ ExtensionData: null, DisplayValue: "سمنان", Value: 18 },
			{ ExtensionData: null, DisplayValue: "سنندج", Value: 19 },
			{ ExtensionData: null, DisplayValue: "شهرکرد", Value: 20 },
			{ ExtensionData: null, DisplayValue: "شیراز", Value: 21 },
			{ ExtensionData: null, DisplayValue: "قزوین", Value: 22 },
			{ ExtensionData: null, DisplayValue: "قم", Value: 23 },
			{ ExtensionData: null, DisplayValue: "کرج", Value: 24 },
			{ ExtensionData: null, DisplayValue: "کرمان", Value: 25 },
			{ ExtensionData: null, DisplayValue: "کرمانشاه", Value: 26 },
			{ ExtensionData: null, DisplayValue: "گرگان", Value: 27 },
			{ ExtensionData: null, DisplayValue: "مشهد", Value: 28 },
			{ ExtensionData: null, DisplayValue: "همدان", Value: 29 },
			{ ExtensionData: null, DisplayValue: "یزد", Value: 30 },
			{ ExtensionData: null, DisplayValue: "یاسوج", Value: 31 }
		],
		SequenceIndex: 138,
		Status: 2
	},
	PolicyAddressSource: {
		Value: 3,
		ExtensionData: null,
		Description: null,
		DisplayValue: "جدید",
		Label: "نشانی درج روی بیمه نامه",
		Name: "PolicyAddressSource",
		Options: [
			{ ExtensionData: null, DisplayValue: "نشانی ارسال", Value: 1 },
			{ ExtensionData: null, DisplayValue: "مطابق با بیمه نامه قبلی", Value: 2 },
			{ ExtensionData: null, DisplayValue: "جدید", Value: 3 }
		],
		SequenceIndex: 135,
		Status: 2
	},
	PolicyExpirationDate: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تاریخ انقضا",
		Name: "PolicyExpirationDate",
		Options: null,
		SequenceIndex: 120,
		Status: 1
	},
	PolicyImage: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تصویر بیمه نامه",
		Name: "PolicyImage",
		Options: null,
		SequenceIndex: 144,
		Status: 1
	},
	PolicyNo: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "شماره بیمه نامه جدید",
		Name: "PolicyNo",
		Options: null,
		SequenceIndex: 114,
		Status: 1
	},
	PolicyPushesheMali: {
		Value: 7700000,
		ExtensionData: null,
		Description:
			"پوشش مالی، سقف خسارتی است که شرکت بیمه برای اموال شخص ثالث پرداخت می کند. برای مثال، در صورتی که مقصر 10 میلیون تومان خسارت وارد کند و پوشش مالی بیمه اش 7 میلیون تومان باشد، 3 میلیون باقیمانده را باید شخصا جبران کند. توصیه می کنیم قیمت بیمه ثالث با پوشش های مالی بالاتر را هم ببینید",
		DisplayValue: "۷,۷۰۰,۰۰۰ تومان",
		Label: "پوشش مالی",
		Name: "PolicyPushesheMali",
		Options: [
			{ ExtensionData: null, DisplayValue: "۷,۷۰۰,۰۰۰ تومان", Value: 7700000 },
			{ ExtensionData: null, DisplayValue: "۱۰,۰۰۰,۰۰۰ تومان", Value: 10000000 },
			{ ExtensionData: null, DisplayValue: "۱۵,۰۰۰,۰۰۰ تومان", Value: 15000000 },
			{ ExtensionData: null, DisplayValue: "۲۰,۰۰۰,۰۰۰ تومان", Value: 20000000 },
			{ ExtensionData: null, DisplayValue: "۳۰,۰۰۰,۰۰۰ تومان", Value: 30000000 }
		],
		SequenceIndex: 126,
		Status: 2
	},
	PolicyPushesheRanande: {
		Value: 231000000,
		ExtensionData: null,
		Description: null,
		DisplayValue: "۲۳۱,۰۰۰,۰۰۰ تومان",
		Label: "پوشش راننده",
		Name: "PolicyPushesheRanande",
		Options: null,
		SequenceIndex: 132,
		Status: 2
	},
	PolicyPushesheSarneshin: {
		Value: 308000000,
		ExtensionData: null,
		Description: null,
		DisplayValue: "۳۰۸,۰۰۰,۰۰۰ تومان",
		Label: "پوشش سرنشین",
		Name: "PolicyPushesheSarneshin",
		Options: null,
		SequenceIndex: 129,
		Status: 2
	},
	PolicyStartValidityDate: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تاریخ شروع اعتبار",
		Name: "PolicyStartValidityDate",
		Options: null,
		SequenceIndex: 117,
		Status: 1
	},
	PolicyTerm: {
		Value: 12,
		ExtensionData: null,
		Description: null,
		DisplayValue: "یک سال",
		Label: "مدت قرارداد",
		Name: "PolicyTerm",
		Options: [
			{ ExtensionData: null, DisplayValue: "یک سال", Value: 12 },
			{ ExtensionData: null, DisplayValue: "شش ماه", Value: 6 },
			{ ExtensionData: null, DisplayValue: "چهار ماه", Value: 4 },
			{ ExtensionData: null, DisplayValue: "سه ماه", Value: 3 }
		],
		SequenceIndex: 123,
		Status: 2
	},
	PolicyholderBirthDate: {
		Value: "/Date(1526886000000)/",
		ExtensionData: null,
		Description: null,
		DisplayValue: "1397/2/31",
		Label: "تاریخ تولد",
		Name: "PolicyholderBirthDate",
		Options: null,
		SequenceIndex: 66,
		Status: 2
	},
	PolicyholderCarIdCardBack: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تصویر پشت کارت ماشین",
		Name: "PolicyholderCarIdCardBack",
		Options: null,
		SequenceIndex: 81,
		Status: 2
	},
	PolicyholderCarIdCardFront: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تصویر روی کارت ماشین",
		Name: "PolicyholderCarIdCardFront",
		Options: null,
		SequenceIndex: 78,
		Status: 2
	},
	PolicyholderFatherName: {
		Value: "تست",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نام پدر",
		Name: "PolicyholderFatherName",
		Options: null,
		SequenceIndex: 69,
		Status: 2
	},
	PolicyholderFirstName: {
		Value: "تست",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نام",
		Name: "PolicyholderFirstName",
		Options: null,
		SequenceIndex: 57,
		Status: 2
	},
	PolicyholderInfoSource: {
		Value: 2,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "مشخصات بیمه گذار",
		Name: "PolicyholderInfoSource",
		Options: null,
		SequenceIndex: 56,
		Status: 2
	},
	PolicyholderLastName: {
		Value: "تستی",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نام خانوادگی",
		Name: "PolicyholderLastName",
		Options: null,
		SequenceIndex: 60,
		Status: 2
	},
	PolicyholderMobile: {
		Value: "09122222222",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تلفن همراه",
		Name: "PolicyholderMobile",
		Options: null,
		SequenceIndex: 72,
		Status: 2
	},
	PolicyholderNationalCode: {
		Value: "0070437637",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "کد ملی",
		Name: "PolicyholderNationalCode",
		Options: null,
		SequenceIndex: 63,
		Status: 2
	},
	PolicyholderPhone: {
		Value: "02122222222",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تلفن ثابت",
		Name: "PolicyholderPhone",
		Options: null,
		SequenceIndex: 75,
		Status: 2
	},
	ProductId: {
		Value: 24,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "کالا",
		Name: "ProductId",
		Options: null,
		SequenceIndex: 27,
		Status: 2
	},
	SellerAddress: {
		Value: "تهران، خیابان تست، کوچه تست، پلاک 1",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نشانی",
		Name: "SellerAddress",
		Options: null,
		SequenceIndex: 48,
		Status: 2
	},
	SellerEconomicNo: {
		Value: "1002315",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "شماره اقتصادی",
		Name: "SellerEconomicNo",
		Options: null,
		SequenceIndex: 45,
		Status: 2
	},
	SellerName: {
		Value: "کارگزاری عربلو",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "نام",
		Name: "SellerName",
		Options: null,
		SequenceIndex: 36,
		Status: 2
	},
	SellerNationalId: {
		Value: "123465",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "شناسه ملی",
		Name: "SellerNationalId",
		Options: null,
		SequenceIndex: 39,
		Status: 2
	},
	SellerPhone: {
		Value: "12896541",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "تلفن",
		Name: "SellerPhone",
		Options: null,
		SequenceIndex: 54,
		Status: 2
	},
	SellerRegistrationNo: {
		Value: "54822",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "شماره ثبت",
		Name: "SellerRegistrationNo",
		Options: null,
		SequenceIndex: 42,
		Status: 2
	},
	SellerZipCode: {
		Value: "021",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "کدپستی",
		Name: "SellerZipCode",
		Options: null,
		SequenceIndex: 51,
		Status: 2
	},
	ShippingCost: {
		Value: { ExtensionData: null, Amount: 0, CurrencyCode: "تومان", DisplayValue: "0 تومان" },
		ExtensionData: null,
		Description: null,
		DisplayValue: "0 تومان",
		Label: "هزینه ارسال",
		Name: "ShippingCost",
		Options: null,
		SequenceIndex: 174,
		Status: 2
	},
	TaxesAndDuties: {
		Value: { ExtensionData: null, Amount: 0, CurrencyCode: "تومان", DisplayValue: "0 تومان" },
		ExtensionData: null,
		Description: null,
		DisplayValue: "0 تومان",
		Label: "مالیات و عوارض",
		Name: "TaxesAndDuties",
		Options: null,
		SequenceIndex: 165,
		Status: 2
	},
	TotalPremium: {
		Value: { ExtensionData: null, Amount: 12000, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
		ExtensionData: null,
		Description: null,
		DisplayValue: "12000 تومان",
		Label: "جمع کل حق بیمه",
		Name: "TotalPremium",
		Options: null,
		SequenceIndex: 168,
		Status: 2
	},
	TrackingCode: {
		Value: 1109,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "کد رهگیری",
		Name: "TrackingCode",
		Options: null,
		SequenceIndex: 18,
		Status: 2
	},
	AmountPayable: {
		Value: { ExtensionData: null, Amount: 12000, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
		ExtensionData: null,
		Description: null,
		DisplayValue: "12000 تومان",
		Label: "مبلغ قابل پرداخت",
		Name: "AmountPayable",
		Options: null,
		SequenceIndex: 177,
		Status: 2
	},
	PaymentId: {
		Value: "636648622797119278",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "شناسه پرداخت",
		Name: "PaymentId",
		Options: null,
		SequenceIndex: 156,
		Status: 2
	},
	Actor: {
		Value: "test_agent",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "اقدام کننده",
		Name: "Actor",
		Options: null,
		SequenceIndex: 12,
		Status: 5
	},
	CanAttachFile: {
		Value: false,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "امکان پیوست فایل",
		Name: "CanAttachFile",
		Options: null,
		SequenceIndex: 6,
		Status: 1
	},
	Id: {
		Value: "e2bc8da0-dd5d-40c2-9e18-7929c9f05fdb",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "شناسه",
		Name: "Id",
		Options: null,
		SequenceIndex: 0,
		Status: 1
	},
	NewNote: {
		Value: null,
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "یادداشت جدید",
		Name: "NewNote",
		Options: null,
		SequenceIndex: 9,
		Status: 3
	},
	SaveDateTime: {
		Value: "/Date(1529290680000)/",
		ExtensionData: null,
		Description: null,
		DisplayValue: "1397/3/27",
		Label: "تاریخ ثبت",
		Name: "SaveDateTime",
		Options: null,
		SequenceIndex: 21,
		Status: 2
	},
	Type: {
		Value: 1,
		ExtensionData: null,
		Description: null,
		DisplayValue: "بیمه شخص ثالث خودرو",
		Label: "نوع",
		Name: "Type",
		Options: null,
		SequenceIndex: 15,
		Status: 2
	},
	Version: {
		Value: [ 0, 0, 0, 0, 0, 0, 47, 85 ],
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "ورژن",
		Name: "Version",
		Options: null,
		SequenceIndex: 3,
		Status: 1
	},
	WorkflowState: {
		Value: "منتظر استعلام اطلاعات",
		ExtensionData: null,
		Description: null,
		DisplayValue: null,
		Label: "وضعیت",
		Name: "WorkflowState",
		Options: null,
		SequenceIndex: 24,
		Status: 2
	},
	ExtensionData: null
};
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
				Value: 1
			},
			{
				DisplayValue: "فلزی",
				Value: 2
			},
			{
				DisplayValue: "بتنی",
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
				Value: 1
			},
			{
				DisplayValue: "یک ساختمان ویلایی",
				Value: 2
			},
			{
				DisplayValue: "آپارتمان یا مجتمع",
				Value: 3
			}
		],
		SequenceIndex: 87,
		Status: 4,
		Value: null
	}
};
