import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map, share } from "rxjs/operators";
import { of } from "rxjs";

import { PolicyModel } from "../models";
import { GetCarModelsOfBrand } from "./mock";
import { GetCarModelsOfBrandApiModel, ComparePoliciesApiModel } from "./api";
import { PolicyCompareModel } from "../models/policy-compare.model";
import { PolicyConfigurationService } from "./policy-configuration.service";

@Injectable({
	providedIn: "root"
})
export class PolicyService {
	constructor(private http: HttpClient, private configurationService: PolicyConfigurationService) {}

	GetCarModelsOfBrand(data: GetCarModelsOfBrandApiModel.Request): Observable<PolicyModel[]> {
		const model = new GetCarModelsOfBrandApiModel.Request(data);
		return this.http
			.get<GetCarModelsOfBrandApiModel.Response>(
				`${this.configurationService.config.env.server}/policy/GetCarModelsOfBrand`,
				{
					params: model.getRequestQueryParams()
				}
			)
			.map(response => response.Result);
	}
	ComparePolicies(data: ComparePoliciesApiModel.Request): Observable<PolicyCompareModel[]> {
		const model = new ComparePoliciesApiModel.Request(data);
		// return of(comparePoliciesData.Items);
		return this.http
			.post<ComparePoliciesApiModel.Response>(
				`${this.configurationService.config.env.server}/policy/ComparePolicies`,
				model.getRequestBody()
			)
			.pipe(map(response => response.Result.Items), share());
	}
}

const comparePoliciesData = {
	ExtensionData: {},
	Items: [
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه آسیا",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 1
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 2
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 3
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 4
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه البرز",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 29
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 30
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 31
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 32
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه ایران",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 5
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 6
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 7
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 8
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه پارسیان",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 21
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 22
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 23
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 24
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه پاسارگاد",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 41
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 42
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 43
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 44
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه دانا",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 25
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 26
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 27
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 28
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه دی",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 17
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 18
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 19
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 20
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه رازی",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 37
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 38
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 39
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 40
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه سامان",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 33
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 34
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 35
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 36
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه سرمد",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 9
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 10
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 11
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 12
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه سینا",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 49
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 50
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 51
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 52
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه نوین",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 13
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 14
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 15
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 16
				}
			]
		},
		{
			ExtensionData: {},
			InsuranceCompany: "بیمه کارآفرین",
			InsuranceCompanyStatistics: {
				ExtensionData: {},
				MizaneShekayateMoshtariyan: 1,
				ModatZamanePasokhgoieBeShekayat: 1,
				RotbeyeRezayateMoshtary: 1,
				SahmAzBazar: 1,
				SatheTavangariyeMali: 1,
				TedadeMarakezePardakhteKhesarat: 1
			},
			Prices: [
				{
					ExtensionData: {},
					Description: "سه ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 3000.0,
						CurrencyCode: "تومان",
						DisplayValue: "3000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 3000.0, CurrencyCode: "تومان", DisplayValue: "3000 تومان" },
					ProductId: 45
				},
				{
					ExtensionData: {},
					Description: "چهار ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 4000.0,
						CurrencyCode: "تومان",
						DisplayValue: "4000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 4000.0, CurrencyCode: "تومان", DisplayValue: "4000 تومان" },
					ProductId: 46
				},
				{
					ExtensionData: {},
					Description: "شش ماه",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 6000.0,
						CurrencyCode: "تومان",
						DisplayValue: "6000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 6000.0, CurrencyCode: "تومان", DisplayValue: "6000 تومان" },
					ProductId: 47
				},
				{
					ExtensionData: {},
					Description: "یک سال",
					DiscountPercent: 0.0,
					FinalPrice: {
						ExtensionData: {},
						Amount: 12000.0,
						CurrencyCode: "تومان",
						DisplayValue: "12000 تومان"
					},
					Price: { ExtensionData: {}, Amount: 12000.0, CurrencyCode: "تومان", DisplayValue: "12000 تومان" },
					ProductId: 48
				}
			]
		}
	]
};
