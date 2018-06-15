import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../services/api";
import { GetCarModelsOfBrandStartAction } from "../../policy/services/api";
import { Subject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FieldModel, FieldOptionModel } from "../models/field.model";
import { OrderFormModel } from "../models";
import { PolicyCompareModel } from "../../policy/models/policy-compare.model";
import { NewOrderFormUpdateAction } from "../new-order/new-order.actions";
import { takeUntil, map, distinctUntilChanged, filter, take } from "rxjs/operators";

@Component({
	selector: "order-car-detail",
	templateUrl: "./car-detail.component.html",
	styleUrls: [ "./car-detail.component.css" ]
})
export class CarDetailComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	@Input() mode: "view" | "edit" = "edit";
	unsubscribe = new Subject<void>();
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	formGroup: FormGroup;
	orderForm: OrderFormModel;
	orderForm$: Observable<OrderFormModel>;
	CarBrand$: Observable<FieldModel>;
	CarModel$: Observable<FieldModel>;
	CarModelOptions$: Observable<FieldOptionModel[]>;
	CarProductionYear$: Observable<FieldModel>;
	CarUsage$: Observable<FieldModel>;
	CarYearsWithoutIncident$: Observable<FieldModel>;
	LastPolicyExpirationDate$: Observable<FieldModel>;
	PolicyPushesheMali$: Observable<FieldModel>;
	LastPolicyYearsWithoutIncident$: Observable<FieldModel>;
	LastPolicyNumOfUsedPropertyCoupon$: Observable<FieldModel>;
	LastPolicyNumOfUsedPersonCoupon$: Observable<FieldModel>;
	FocuseddPolicy: PolicyCompareModel;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];
	constructor(private store: Store<AppState>) {
		this._init_properties();
		this._select_orderForm();
		this._create_formGroup();
		this._set_formGroup_validation();
		this._patchValue_formGroup_on_orderForm_change();
		this._subscribe_on_orderForm();
		this._map_orderForm_to_fields();
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction(1));
		this._set_formGroup_relation_logic();
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	complete() {
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		const formValue = this.formGroup.value;
		Object.keys(formValue || {}).forEach(key => (this.orderForm[key].Value = formValue[key]));
		this.store.dispatch(new NewOrderFormUpdateAction(this.orderForm));
		this.done.emit();
	}

	viewMode() {
		this.mode = "view";
	}
	editMode() {
		this.mode = "edit";
	}

	/**
	 * Private methods
	 */
	_subscribe_on_orderForm() {
		this.orderForm$.subscribe(orderForm => (this.orderForm = orderForm));
	}
	_select_orderForm() {
		this.orderForm$ = this.store
			.select(state => state.order.newOrder.data)
			.pipe(takeUntil(this.unsubscribe), filter(orderForm => orderForm != null), distinctUntilChanged());
	}
	_init_properties() {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
	}
	_check_and_contol_incident_formControls(years) {
		debugger;
		if (years > 0) {
			this.formGroup.get("LastPolicyYearsWithoutIncident").disable();
			this.formGroup.get("LastPolicyNumOfUsedPropertyCoupon").disable();
			this.formGroup.get("LastPolicyNumOfUsedPersonCoupon").disable();
		} else {
			this.formGroup.get("LastPolicyYearsWithoutIncident").enable();
			this.formGroup.get("LastPolicyNumOfUsedPropertyCoupon").enable();
			this.formGroup.get("LastPolicyNumOfUsedPersonCoupon").enable();
		}
	}
	_create_formGroup() {
		this.formGroup = new FormGroup({
			CarBrand: new FormControl(""),
			CarModel: new FormControl(""),
			CarProductionYear: new FormControl(""),
			CarUsage: new FormControl(""),
			CarYearsWithoutIncident: new FormControl(""),
			LastPolicyExpirationDate: new FormControl(""),
			LastPolicyYearsWithoutIncident: new FormControl(),
			LastPolicyNumOfUsedPropertyCoupon: new FormControl(),
			LastPolicyNumOfUsedPersonCoupon: new FormControl()
		});
	}
	_set_formGroup_validation() {
		this.orderForm$.pipe(take(1)).subscribe(orderForm => {
			Object.keys(this.formGroup.controls).forEach(key => {
				if (orderForm[key].Status == 4) {
					this.formGroup.get(key).setValidators([ Validators.required ]);
					this.formGroup.get(key).updateValueAndValidity();
				}
			});
			this.formGroup.updateValueAndValidity();
		});
	}
	_patchValue_formGroup_on_orderForm_change() {
		this.orderForm$
			.pipe(
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
	_set_formGroup_relation_logic() {
		this.formGroup
			.get("CarBrand")
			.valueChanges.pipe(takeUntil(this.unsubscribe), filter(carBrand => carBrand != ""))
			.subscribe(carBrand => this.store.dispatch(new GetCarModelsOfBrandStartAction({ carBrand })));
		this.formGroup
			.get("CarYearsWithoutIncident")
			.valueChanges.pipe(takeUntil(this.unsubscribe))
			.subscribe(years => this._check_and_contol_incident_formControls(years));
	}
	_map_orderForm_to_fields() {
		this.CarBrand$ = this.orderForm$.map(orderForm => orderForm.CarBrand);
		this.CarModel$ = this.orderForm$.map(orderForm => orderForm.CarModel);
		this.CarModelOptions$ = this.store.select(state => state.order.newOrder.carModels);
		this.CarProductionYear$ = this.orderForm$.map(orderForm => orderForm.CarProductionYear);
		this.CarUsage$ = this.orderForm$.map(orderForm => orderForm.CarUsage);
		this.CarYearsWithoutIncident$ = this.orderForm$.map(orderForm => orderForm.CarYearsWithoutIncident);
		this.LastPolicyExpirationDate$ = this.orderForm$.map(orderForm => orderForm.LastPolicyExpirationDate);
		this.PolicyPushesheMali$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheMali);
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
	_validate_all_form_fields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this._validate_all_form_fields(control);
			}
		});
	}
}
