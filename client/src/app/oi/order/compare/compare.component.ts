import { Component, OnInit, ViewChild } from "@angular/core";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../services/api";
import {
	ComparePoliciesStartAction,
	ComparePoliciesApiModel,
	GetCarModelsOfBrandStartAction,
	GetCarModelsOfBrandApiModel
} from "../../policy/services/api";
import { from } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FieldModel, FieldOptionModel } from "../models/field.model";
import { OrderFormModel } from "../models";
import { Router } from "@angular/router";
import { PolicyCompareModel } from "../../policy/models/policy-compare.model";
import { MatSidenav } from "@angular/material";

@Component({
	selector: "app-compare",
	templateUrl: "./compare.component.html",
	styleUrls: [ "./compare.component.css" ]
})
export class CompareComponent implements OnInit {
	ready = false;
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	policies$: Observable<PolicyCompareModel[]>;
	formGroup: FormGroup;
	orderForm$: Observable<OrderFormModel>;
	CarBrand$: Observable<FieldModel>;
	CarModel$: Observable<FieldModel>;
	CarModelOptions$: Observable<FieldOptionModel[]>;
	CarProductionYear$: Observable<FieldModel>;
	CarUsage$: Observable<FieldModel>;
	CarYearsWithoutIncident$: Observable<FieldModel>;
	LastPolicyExpirationDate$: Observable<FieldModel>;
	PolicyPushesheMali$: Observable<FieldModel>;
	PolicyTerm$: Observable<FieldModel>;
	SelectedPolicyTerm$: Observable<string>;
	FocuseddPolicy: PolicyCompareModel;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];
	@ViewChild("policyDetailNav") policyDetailNav: MatSidenav;
	constructor(private store: Store<AppState>, private router: Router) {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
		this.formGroup = new FormGroup({
			CarBrand: new FormControl(""),
			CarModel: new FormControl(""),
			CarProductionYear: new FormControl(""),
			CarUsage: new FormControl(""),
			CarYearsWithoutIncident: new FormControl(""),
			PolicyPushesheMali: new FormControl(""),
			PolicyTerm: new FormControl(12),
			LastPolicyExpirationDate: new FormControl("")
		});
		this.policies$ = this.store.select(state => state.order.compare.data);
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.CarBrand$ = this.orderForm$.map(orderForm => orderForm.CarBrand);
		this.CarModelOptions$ = this.store.select(state => state.order.newOrder.carModels);
		this.CarProductionYear$ = this.orderForm$.map(orderForm => orderForm.CarProductionYear);
		this.CarUsage$ = this.orderForm$.map(orderForm => orderForm.CarUsage);
		this.CarYearsWithoutIncident$ = this.orderForm$.map(orderForm => orderForm.CarYearsWithoutIncident);
		this.LastPolicyExpirationDate$ = this.orderForm$.map(orderForm => orderForm.LastPolicyExpirationDate);
		this.PolicyPushesheMali$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheMali);
		this.PolicyTerm$ = this.orderForm$.map(orderForm => orderForm.PolicyTerm);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction({ type: 1 } as GetNewOrderFormApiModel.Request));
		this.orderForm$.subscribe(orderForm => this.store.dispatch(new ComparePoliciesStartAction(orderForm)));

		this.formGroup.get("CarBrand").valueChanges.subscribe(CarBrand =>
			this.store.dispatch(
				new GetCarModelsOfBrandStartAction({
					carBrand: CarBrand
				} as GetCarModelsOfBrandApiModel.Request)
			)
		);

		this.SelectedPolicyTerm$ = this.formGroup
			.get("PolicyTerm")
			.valueChanges.combineLatest(this.PolicyTerm$)
			.map(
				([ policyTermValue, policyTermField ]) =>
					policyTermField.Options.find(item => item.Value == policyTermValue).DisplayValue
			);

		this.policies$.filter(data => data.length > 0).subscribe(data => (this.ready = true));
		this.orderForm$
			.map(orderForm => {
				var values = {};
				Object.keys(orderForm)
					.filter(key => key in this.formGroup.controls)
					.filter(key => orderForm[key].Value)
					.map(key => (values[key] = orderForm[key].Value));
				return values;
			})
			.subscribe(values => this.formGroup.patchValue(values));
	}
	compare() {
		from([ this.formGroup ])
			.combineLatest(this.orderForm$)
			.map(([ formGroup, orderForm ]) => {
				Object.keys(formGroup.value).forEach(key => (orderForm[key].Value = formGroup.value[key]));
				return orderForm;
			})
			.subscribe(orderForm => this.store.dispatch(new ComparePoliciesStartAction(orderForm)));
	}
	selectPolicy(policy: PolicyCompareModel) {}
	showCompanyInfo(policy: PolicyCompareModel) {
		this.FocuseddPolicy = policy;
	}
}
