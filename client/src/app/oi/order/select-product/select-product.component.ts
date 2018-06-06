import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy, Input, AfterViewInit } from "@angular/core";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../services/api";
import {
	ComparePoliciesStartAction,
	ComparePoliciesApiModel,
	GetCarModelsOfBrandStartAction,
	GetCarModelsOfBrandApiModel
} from "../../policy/services/api";
import { from, of, Subject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FieldModel, FieldOptionModel } from "../models/field.model";
import { OrderFormModel } from "../models";
import { Router } from "@angular/router";
import { PolicyCompareModel } from "../../policy/models/policy-compare.model";
import { MatSidenav } from "@angular/material";
import { NewOrderFormUpdateAction } from "../new-order/new-order.actions";
import { takeUntil, map, combineLatest } from "rxjs/operators";

@Component({
	selector: "order-select-product",
	templateUrl: "./select-product.component.html",
	styleUrls: [ "./select-product.component.css" ]
})
export class SelectProductComponent implements OnInit, AfterViewInit, OnDestroy {
	@Output() done = new EventEmitter();
	unsubscribe = new Subject<void>();
	ready = false;
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	@Input() mode: "view" | "edit" = "view";
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
	LastPolicyYearsWithoutIncident$: Observable<FieldModel>;
	LastPolicyNumOfUsedPropertyCoupon$: Observable<FieldModel>;
	LastPolicyNumOfUsedPersonCoupon$: Observable<FieldModel>;
	SelectedPolicyTerm$: Observable<string>;
	FocuseddPolicy: PolicyCompareModel;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];
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
			LastPolicyExpirationDate: new FormControl(""),
			LastPolicyYearsWithoutIncident: new FormControl("0"),
			LastPolicyNumOfUsedPropertyCoupon: new FormControl("0"),
			LastPolicyNumOfUsedPersonCoupon: new FormControl("0")
		});
		this.policies$ = this.store.select(state => state.order.carDetail.data);
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.CarBrand$ = this.orderForm$.map(orderForm => orderForm.CarBrand);
		this.CarModelOptions$ = this.store.select(state => state.order.newOrder.carModels);
		this.CarProductionYear$ = this.orderForm$.map(orderForm => orderForm.CarProductionYear);
		this.CarUsage$ = this.orderForm$.map(orderForm => orderForm.CarUsage);
		this.CarYearsWithoutIncident$ = this.orderForm$.map(orderForm => orderForm.CarYearsWithoutIncident);
		this.LastPolicyExpirationDate$ = this.orderForm$.map(orderForm => orderForm.LastPolicyExpirationDate);
		this.PolicyPushesheMali$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheMali);
		this.PolicyTerm$ = this.orderForm$.map(orderForm => orderForm.PolicyTerm);
		this.LastPolicyYearsWithoutIncident$ = this.orderForm$.map(
			orderForm => orderForm.LastPolicyYearsWithoutIncident
		);
		this.LastPolicyNumOfUsedPropertyCoupon$ = this.orderForm$.map(
			orderForm => orderForm.LastPolicyNumOfUsedPropertyCoupon
		);
		this.LastPolicyNumOfUsedPersonCoupon$ = this.orderForm$.map(
			orderForm => orderForm.LastPolicyNumOfUsedPersonCoupon
		);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction({ type: 1 } as GetNewOrderFormApiModel.Request));

		this.orderForm$.pipe(takeUntil(this.unsubscribe)).subscribe(orderForm => {
			Object.keys(this.formGroup.controls).forEach(key => {
				if (orderForm[key].Status == 1) {
					this.formGroup.get(key).setValidators([ Validators.required ]);
					this.formGroup.get(key).updateValueAndValidity();
				}
			});
			this.formGroup.updateValueAndValidity();
		});

		this.formGroup
			.get("CarBrand")
			.valueChanges.pipe(takeUntil(this.unsubscribe))
			.subscribe(CarBrand => this.store.dispatch(new GetCarModelsOfBrandStartAction({ carBrand: CarBrand })));
		this.formGroup
			.get("CarYearsWithoutIncident")
			.valueChanges.pipe(takeUntil(this.unsubscribe))
			.subscribe(years => this.checkAndContolIncidentFormControls(years));

		this.SelectedPolicyTerm$ = this.formGroup
			.get("PolicyTerm")
			.valueChanges.combineLatest(this.PolicyTerm$)
			.map(
				([ policyTermValue, policyTermField ]) =>
					policyTermField.Options.find(item => item.Value == policyTermValue).DisplayValue
			);

		this.policies$.filter(data => data.length > 0).subscribe(data => (this.ready = true));
		this.orderForm$
			.pipe(
				takeUntil(this.unsubscribe),
				map(orderForm => {
					var values = {};
					Object.keys(orderForm)
						.filter(key => key in this.formGroup.controls)
						.filter(key => orderForm[key].Value)
						.map(key => (values[key] = orderForm[key].Value));
					return values;
				})
			)
			.subscribe(values => {
				this.formGroup.patchValue(values);
			});
	}
	ngAfterViewInit() {
		this.orderForm$.pipe(takeUntil(this.unsubscribe)).subscribe(orderForm => this.compare());
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	compare() {
		if (this.formGroup.invalid) return;
		from([ this.formGroup ])
			.pipe(
				takeUntil(this.unsubscribe),
				combineLatest(this.orderForm$),
				map(([ formGroup, orderForm ]) => {
					Object.keys(formGroup.value).forEach(key => (orderForm[key].Value = formGroup.value[key]));
					return orderForm;
				})
			)
			.subscribe(orderForm => this.store.dispatch(new ComparePoliciesStartAction(orderForm)));
	}
	showCompanyInfo(policy: PolicyCompareModel) {
		this.FocuseddPolicy = policy;
	}
	selectPolicy(ProductId: number) {
		from([ ProductId ])
			.pipe(
				takeUntil(this.unsubscribe),
				combineLatest(this.orderForm$),
				map(([ ProductId, orderForm ]) => {
					Object.keys(this.formGroup.value).forEach(
						key => (orderForm[key].Value = this.formGroup.value[key])
					);
					orderForm.ProductId.Value = ProductId;
					return orderForm;
				})
			)
			.subscribe(orderForm => this.store.dispatch(new NewOrderFormUpdateAction(orderForm)))
			.unsubscribe();
		this.done.emit();
	}
	checkAndContolIncidentFormControls(years) {
		if (years > 1) {
			this.formGroup.get("LastPolicyYearsWithoutIncident").disable();
			this.formGroup.get("LastPolicyNumOfUsedPropertyCoupon").disable();
			this.formGroup.get("LastPolicyNumOfUsedPersonCoupon").disable();
		} else {
			this.formGroup.get("LastPolicyYearsWithoutIncident").enable();
			this.formGroup.get("LastPolicyNumOfUsedPropertyCoupon").enable();
			this.formGroup.get("LastPolicyNumOfUsedPersonCoupon").enable();
		}
	}
}
