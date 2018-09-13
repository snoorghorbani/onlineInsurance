import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { takeUntil, filter, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { ThirdPartyPolicyOrderFormModel, OrderFormType } from "../../models";
import { AppState } from "../../order.reducers";
import { PolicyService } from "../../../policy/services";
import { OrderService } from "../../services";

@Component({
	selector: "order-third-party-car-detail",
	templateUrl: "./car-detail.component.html",
	styleUrls: [ "./car-detail.component.css" ]
})
export class ThirdPartyCarDetailComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	_orderForm: ThirdPartyPolicyOrderFormModel;
	@Input()
	set orderForm(orderForm: ThirdPartyPolicyOrderFormModel) {
		if (!orderForm) return;
		orderForm.DamageStatus = {
			category: "",
			Description: "خسارت",
			DisplayValue: "خسارت",
			ExtensionData: "",
			Label: "سابقه خسارت",
			Name: "DamageStatus",
			Options: [
				{
					DisplayName: "بدون خسارت",
					DisplayValue: "بدون خسارت",
					Value: "1"
				},
				{
					DisplayName: "با خسارت",
					DisplayValue: "با خسارت",
					Value: "2"
				}
			],
			SequenceIndex: 1,
			Status: 1,
			Value: ""
		};
		orderForm.LastPolicyDiscountYears.Options.unshift(orderForm.LastPolicyDiscountYears.Options.pop());
		debugger;
		orderForm.NoDamageRecord.Options = orderForm.NoDamageRecord.Options.filter(i => i.Value !== 0);
		this._orderForm = orderForm;
		// this._set_formGroup_validation(orderForm);
		this._patchValue_formGroup_on_orderForm_change(orderForm);
		this.ready = true;
	}
	get orderForm() {
		return this._orderForm;
	}

	unsubscribe = new Subject<void>();
	formGroup: FormGroup;
	ready = false;
	carInfoFields: any;
	constructor(
		private store: Store<AppState>,
		private policyService: PolicyService,
		private orderService: OrderService
	) {
		this._init_properties();
		this._create_formGroup();
		this._init_carInfoFields();
	}

	ngOnInit() {
		this._set_formGroup_relation_logic();
		this.on_damage_status_changed();
		this._emit_when_form_group_is_valid();
		this._set_default_damage_filds_enable();
		this._patchvalue_from_quick_view();
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
			CarBrand: new FormControl("", Validators.required),
			CarModel: new FormControl("", Validators.required),
			CarProductionYear: new FormControl(null, Validators.required),
			CarUsage: new FormControl(1, Validators.required),
			NoDamageRecord: new FormControl(0, Validators.required),
			PolicyTerm: new FormControl(12, Validators.required),
			LastPolicyExpirationDate: new FormControl(new Date()),
			PolicyPushesheMali: new FormControl(7700000),
			LastPolicyDiscountYears: new FormControl(0),
			LastPolicyUsedPropertyCoupons: new FormControl(),
			LastPolicyUsedPersonCoupons: new FormControl(),
			DamageStatus: new FormControl("1")
		});

		// this.formGroup.get("LastPolicyDiscountYears").disable();
		// this.formGroup.get("LastPolicyUsedPropertyCoupons").disable();
		// this.formGroup.get("LastPolicyUsedPersonCoupons").disable();
	}
	_patchvalue_from_quick_view() {
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
		this.formGroup
			.get("CarBrand")
			.valueChanges.pipe(takeUntil(this.unsubscribe), filter(carBrand => carBrand != ""))
			.subscribe(carBrand => {
				this.policyService.GetCarModelsOfBrand({ carBrand }).subscribe(models => {
					this.orderForm.CarModel.Options = models as any;
					this.orderForm.CarModel = { ...this.orderForm.CarModel };
				});
			});
		this.formGroup
			.get("NoDamageRecord")
			.valueChanges.pipe(takeUntil(this.unsubscribe), filter(value => value != null))
			.subscribe(years => this._check_and_contol_incident_formControls(years));
	}
	_emit_when_form_group_is_valid() {
		this.formGroup.valueChanges.subscribe(() => {
			if (!this.formGroup.valid) return;
			this.done.emit(this.formGroup.value);
		});
	}
	_init_carInfoFields() {
		this.carInfoFields = [
			{
				name: "CarBrand",
				fxFlex: 23
			},
			{
				name: "CarModel",
				fxFlex: 23
			},
			{
				name: "CarProductionYear",
				fxFlex: 23
			},
			{
				name: "PolicyTerm",
				fxFlex: 23
			},
			{
				name: "DamageStatus",
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
				name: "CarUsage",
				fxFlex: 23
			},
			{
				name: "PolicyPushesheMali",
				fxFlex: 23
			},
			{
				name: "LastPolicyExpirationDate",
				fxFlex: 23
			}
		];
	}
	_check_and_contol_incident_formControls(years) {
		// if (!this.formGroup.get("NoDamageRecord").disabled) return;
		// if (years > 0) {
		// 	this.formGroup.get("LastPolicyDiscountYears").disable();
		// 	this.formGroup.get("LastPolicyUsedPropertyCoupons").disable();
		// 	this.formGroup.get("LastPolicyUsedPersonCoupons").disable();
		// } else {
		// 	this.formGroup.get("LastPolicyDiscountYears").enable();
		// 	this.formGroup.get("LastPolicyUsedPropertyCoupons").enable();
		// 	this.formGroup.get("LastPolicyUsedPersonCoupons").enable();
		// }
	}
	on_damage_status_changed() {
		this.formGroup.get("DamageStatus").valueChanges.subscribe(value => {
			debugger;
			if (value == 1) {
				this.formGroup.get("LastPolicyDiscountYears").disable();
				this.formGroup.get("LastPolicyUsedPropertyCoupons").disable();
				this.formGroup.get("LastPolicyUsedPersonCoupons").disable();
				this.formGroup.get("NoDamageRecord").enable();
			} else {
				this.formGroup.get("LastPolicyDiscountYears").enable();
				this.formGroup.get("LastPolicyUsedPropertyCoupons").enable();
				this.formGroup.get("LastPolicyUsedPersonCoupons").enable();
				this.formGroup.get("NoDamageRecord").disable();
			}
		});
	}
	_set_default_damage_filds_enable() {
		this.formGroup.get("LastPolicyDiscountYears").disable();
		this.formGroup.get("LastPolicyUsedPropertyCoupons").disable();
		this.formGroup.get("LastPolicyUsedPersonCoupons").disable();
		this.formGroup.get("NoDamageRecord").enable();
	}
}
