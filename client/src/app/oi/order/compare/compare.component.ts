import { Component, OnInit } from "@angular/core";
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

@Component({
	selector: "app-compare",
	templateUrl: "./compare.component.html",
	styleUrls: [ "./compare.component.css" ]
})
export class CompareComponent implements OnInit {
	ready = false;
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	displayedColumns = [ "InsuranceCompany", "actions" ];
	comparision$: Observable<PolicyCompareModel[]>;
	formGroup: FormGroup;
	orderForm$: Observable<OrderFormModel>;
	CarBrand$: Observable<FieldModel>;
	CarModel$: Observable<FieldModel>;
	CarModelOptions$: Observable<FieldOptionModel[]>;
	CarProductionYear$: Observable<FieldModel>;
	CarYearsWithoutIncident$: Observable<FieldModel>;
	LastPolicyExpirationDate$: Observable<FieldModel>;

	constructor(private store: Store<AppState>, private router: Router) {
		this.formGroup = new FormGroup({
			CarBrand: new FormControl(""),
			CarModel: new FormControl(""),
			CarProductionYear: new FormControl(""),
			CarYearsWithoutIncident: new FormControl(""),
			LastPolicyExpirationDate: new FormControl("")
		});
		this.comparision$ = this.store.select(state => state.order.compare.data);
		this.orderForm$ = this.store.select(state => state.order.newOrder.data);
		this.CarBrand$ = this.orderForm$.filter(orderForm => orderForm != null).map(orderForm => orderForm.CarBrand);
		this.formGroup.get("CarBrand").valueChanges.subscribe(CarBrand =>
			this.store.dispatch(
				new GetCarModelsOfBrandStartAction({
					carBrand: CarBrand
				} as GetCarModelsOfBrandApiModel.Request)
			)
		);
		this.CarModelOptions$ = this.store.select(state => state.order.newOrder.carModels);
		this.CarProductionYear$ = this.orderForm$
			.filter(orderForm => orderForm != null)
			.map(orderForm => orderForm.CarProductionYear);
		this.CarYearsWithoutIncident$ = this.orderForm$
			.filter(orderForm => orderForm != null)
			.map(orderForm => orderForm.CarYearsWithoutIncident);
		this.LastPolicyExpirationDate$ = this.orderForm$
			.filter(orderForm => orderForm != null)
			.map(orderForm => orderForm.LastPolicyExpirationDate);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction({ type: 1 } as GetNewOrderFormApiModel.Request));
		this.orderForm$
			.filter(data => data != null)
			.subscribe(orderForm => this.store.dispatch(new ComparePoliciesStartAction(orderForm)));

		this.comparision$.filter(data => data.length > 0).subscribe(data => (this.ready = true));
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
}
