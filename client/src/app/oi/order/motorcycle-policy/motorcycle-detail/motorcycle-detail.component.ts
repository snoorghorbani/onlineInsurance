import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { takeUntil, filter, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { MotorcyclePolicyOrderFormModel, OrderFormType } from "../../models";
import { AppState } from "../../order.reducers";
import { PolicyService } from "../../../policy/services";
import { OrderService } from "../../services";

@Component({
	selector: "order-motorcycle-detail",
	templateUrl: "./motorcycle-detail.component.html",
	styleUrls: [ "./motorcycle-detail.component.css" ]
})
export class MotorcycleDetailComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	_orderForm: MotorcyclePolicyOrderFormModel;
	@Input()
	set orderForm(orderForm: MotorcyclePolicyOrderFormModel) {
		if (!orderForm) return;
		this._orderForm = orderForm;
		this._set_formGroup_validation(orderForm);
		this._patchValue_formGroup_on_orderForm_change(orderForm);
		this.ready = true;
	}
	get orderForm() {
		return this._orderForm;
	}

	unsubscribe = new Subject<void>();
	formGroup: FormGroup;
	ready = false;
	motorInfoFields: any;
	constructor(
		private store: Store<AppState>,
		private policyService: PolicyService,
		private orderService: OrderService
	) {
		this._init_properties();
		this._create_formGroup();
		this._init_motorcycleInfoFields();
	}

	ngOnInit() {
		this._set_formGroup_relation_logic();
		this._emit_when_form_group_is_valid();
	}

	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	toggleCoverage(coverageName: string) {
		const current = this.formGroup.get(coverageName).value;
		this.formGroup.get(coverageName).setValue(!current);
	}

	/**
	 * Private methods
	 */
	_subscribe_on_orderForm() {}
	_init_properties() {}
	_create_formGroup() {
		this.formGroup = new FormGroup({
			MotorType: new FormControl(""),
			MotorProductionYear: new FormControl(""),
			NoDamageRecord: new FormControl(""),
			PolicyTerm: new FormControl(""),
			LastPolicyExpirationDate: new FormControl(""),
			LastPolicyDiscountYears: new FormControl(),
			LastPolicyUsedPropertyCoupons: new FormControl(),
			PolicyPushesheMali: new FormControl(),
			LastPolicyUsedPersonCoupons: new FormControl()
		});
		this.formGroup.patchValue(this.orderService.quickOrder);
		this.orderService.quickOrder = {};
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
	_set_formGroup_relation_logic() {
		// this.formGroup
		// 	.get('MotorType')
		// 	.valueChanges.pipe(takeUntil(this.unsubscribe), filter((motorcycleBrand) => motorcycleBrand != ''))
		// 	.subscribe((motorcycleBrand) => {
		// 		this.policyService.GetMotorTypesOfBrand({ motorcycleBrand }).subscribe((models) => {
		// 			this.orderForm.MotorType.Options = models as any;
		// 			this.orderForm.MotorType = { ...this.orderForm.MotorType };
		// 		});
		// 	});
		this.formGroup
			.get("NoDamageRecord")
			.valueChanges.pipe(takeUntil(this.unsubscribe))
			.subscribe(years => this._check_and_contol_incident_formControls(years));
	}
	_emit_when_form_group_is_valid() {
		this.formGroup.valueChanges.subscribe(() => {
			if (!this.formGroup.valid) return;
			this.done.emit(this.formGroup.value);
		});
	}
	_init_motorcycleInfoFields() {
		this.motorInfoFields = [
			{
				name: "MotorType",
				fxFlex: 23
			},
			{
				name: "MotorProductionYear",
				fxFlex: 23
			},
			{
				name: "PolicyTerm",
				fxFlex: 23
			},
			{
				name: "LastPolicyExpirationDate",
				fxFlex: 23
			},
			{
				name: "NoDamageRecord",
				fxFlex: 23
			},
			{
				name: "LastPolicyDiscountYears",
				fxFlex: 23
			},
			{
				name: "LastPolicyUsedPropertyCoupons",
				fxFlex: 23
			},
			{
				name: "LastPolicyUsedPersonCoupons",
				fxFlex: 23
			},
			{
				name: "PolicyPushesheMali",
				fxFlex: 23
			}
		];
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
}
