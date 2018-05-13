import { Component, OnInit } from "@angular/core";
import { OrderFormModel } from "../models";
import { Observable } from "rxjs/Observable";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { FieldModel, FieldOptionModel } from "../models/field.model";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../services/api";
import {
	GetCarModelsOfBrandStartAction,
	GetCarModelsOfBrandApiModel,
	ComparePoliciesStartAction,
	ComparePoliciesApiModel
} from "../../policy/services/api";
import { FormGroup, FormControl } from "@angular/forms";
import { from } from "rxjs";
import { Router } from "@angular/router";
import { NewOrderFormUpdateAction } from "./new-order.actions";

@Component({
	selector: "app-new-order",
	templateUrl: "./new-order.component.html",
	styleUrls: [ "./new-order.component.css" ]
})
export class NewOrderComponent implements OnInit {
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
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.CarBrand$ = this.orderForm$.map(orderForm => orderForm.CarBrand);
		this.formGroup.get("CarBrand").valueChanges.subscribe(CarBrand =>
			this.store.dispatch(
				new GetCarModelsOfBrandStartAction({
					carBrand: CarBrand
				} as GetCarModelsOfBrandApiModel.Request)
			)
		);
		this.CarModelOptions$ = this.store.select(state => state.order.newOrder.carModels);
		this.CarProductionYear$ = this.orderForm$.map(orderForm => orderForm.CarProductionYear);
		this.CarYearsWithoutIncident$ = this.orderForm$.map(orderForm => orderForm.CarYearsWithoutIncident);
		this.LastPolicyExpirationDate$ = this.orderForm$.map(orderForm => orderForm.LastPolicyExpirationDate);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction({ type: 1 } as GetNewOrderFormApiModel.Request));
	}
	compare() {
		from([ this.formGroup ])
			.combineLatest(this.orderForm$)
			.map(([ formGroup, orderForm ]) => {
				Object.keys(formGroup.value).forEach(key => (orderForm[key].Value = formGroup.value[key]));
				return orderForm;
			})
			.subscribe(orderForm => this.store.dispatch(new NewOrderFormUpdateAction(orderForm)));

		this.router.navigate([ "order/purchase" ]);
	}
}
