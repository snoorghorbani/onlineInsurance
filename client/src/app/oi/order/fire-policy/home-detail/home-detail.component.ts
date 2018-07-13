import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { AppState } from "../../order.reducers";
import { Store } from "@ngrx/store";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../../services/api";
import { GetCarModelsOfBrandStartAction } from "../../../policy/services/api";
import { Subject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FieldModel, FieldOptionModel } from "../../models/field.model";
import { FirePolicyOrderFormModel, OrderFormType } from "../../models";
import { PolicyCompareModel } from "../../../policy/models/policy-compare.model";
import { NewOrderFormUpdateAction } from "../../new-order/new-order.actions";
import { takeUntil, map, distinctUntilChanged, filter, take } from "rxjs/operators";

@Component({
	selector: "order-home-detail",
	templateUrl: "./home-detail.component.html",
	styleUrls: [ "./home-detail.component.css" ]
})
export class HomeDetailComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	@Input() mode: "view" | "edit" = "edit";

	unsubscribe = new Subject<void>();
	pauser = new Subject();
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	formGroup: FormGroup;

	ready = false;
	_orderForm: FirePolicyOrderFormModel;
	@Input()
	set orderForm(orderForm: FirePolicyOrderFormModel) {
		if (!orderForm) return;
		this._orderForm = orderForm;
		this._set_formGroup_validation(orderForm);
		this._patchValue_formGroup_on_orderForm_change(orderForm);
		this._map_orderForm_to_fields(orderForm);
		this.ready = true;
	}
	get orderForm() {
		return this._orderForm;
	}

	EstateType: FieldModel;
	Units: FieldModel;
	BuildType: FieldModel;
	Area: FieldModel;
	ThingsValue: FieldModel;

	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];

	constructor(private store: Store<AppState>) {
		this._init_properties();
		this._create_formGroup();
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction(4));
		this._set_formGroup_relation_logic();
		this.formGroup.valueChanges.subscribe(values => {
			if (!this.formGroup.valid) return;
			this.done.emit(this.formGroup.value);
		});
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	complete() {
		debugger;
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		const formValue = this.formGroup.value;
		Object.keys(formValue || {}).forEach(key => (this.orderForm[key].Value = formValue[key]));
		this.store.dispatch(new NewOrderFormUpdateAction(this.orderForm));
	}

	viewMode() {
		this.mode = "view";
	}
	editMode() {
		this.mode = "edit";
	}
	toggleCoverage(coverageName: string) {
		const current = this.formGroup.get(coverageName).value;
		this.formGroup.get(coverageName).setValue(!current);
	}

	/**
	 * Private methods
	 */
	_subscribe_on_orderForm() {}
	_init_properties() {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
	}
	_check_and_contol_incident_formControls(years) {
		debugger;
		if (years > 0) {
			this.formGroup.get("LastPolicyDiscountYears").disable();
			this.formGroup.get("LastPolicyUsedPropertyCoupons").disable();
			this.formGroup.get("LastPolicyUsedPersonCoupons").disable();
		} else {
			this.formGroup.get("LastPolicyDiscountYears").enable();
			this.formGroup.get("LastPolicyUsedPropertyCoupons").enable();
			this.formGroup.get("LastPolicyUsedPersonCoupons").enable();
		}
	}
	_create_formGroup() {
		this.formGroup = new FormGroup({
			EstateType: new FormControl("", Validators.required),
			Units: new FormControl("", Validators.required),
			BuildType: new FormControl("", Validators.required),
			Area: new FormControl("", Validators.required),
			ThingsValue: new FormControl("", Validators.required),
			EarthquakeExtraCoverage: new FormControl(false),
			PipeExplotionExtraCoverage: new FormControl(false),
			EarthSummitExtraCoverage: new FormControl(false),
			AirplanFallExtraCoverage: new FormControl(false),
			StormExtraCoverage: new FormControl(false),
			FloodExtraCoverage: new FormControl(false),
			HarzExtraCoverage: new FormControl(false),
			SnowRainExtraCoverage: new FormControl(false),
			DoctorEngineerDiscount: new FormControl(false),
			LifeInsuranceDiscount: new FormControl(false),
			LongTermAccountDiscount: new FormControl(false)
		});
	}
	_set_formGroup_validation(orderForm: OrderFormType) {
		Object.keys(this.formGroup.controls).forEach(key => {
			if (orderForm[key].Status == 4) {
				this.formGroup.get(key).setValidators([ Validators.required ]);
				this.formGroup.get(key).updateValueAndValidity();
			}
			this.formGroup.updateValueAndValidity();
		});
	}
	_patchValue_formGroup_on_orderForm_change(orderForm: OrderFormType) {
		var values = {};
		Object.keys(orderForm)
			.filter(key => key in this.formGroup.controls)
			.filter(key => orderForm[key].Value)
			.map(key => (values[key] = orderForm[key].Value));

		this.formGroup.patchValue(values);
	}
	_set_formGroup_relation_logic() {}
	_map_orderForm_to_fields(orderForm) {
		this.EstateType = orderForm.EstateType;
		this.BuildType = orderForm.BuildType;
		this.Units = orderForm.Units;
		this.Area = orderForm.Area;
		this.ThingsValue = orderForm.ThingsValue;
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
