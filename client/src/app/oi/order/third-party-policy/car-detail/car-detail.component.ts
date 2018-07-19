import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil, filter, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { ThirdPartyPolicyOrderFormModel, OrderFormType } from '../../models';
import { GetCarModelsOfBrandStartAction } from '../../../policy/services/api';
import { AppState } from '../../order.reducers';
import { PolicyService } from '../../../policy/services';

@Component({
	selector: 'order-third-party-car-detail',
	templateUrl: './car-detail.component.html',
	styleUrls: [ './car-detail.component.css' ]
})
export class ThirdPartyCarDetailComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	_orderForm: ThirdPartyPolicyOrderFormModel;
	@Input()
	set orderForm(orderForm: ThirdPartyPolicyOrderFormModel) {
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
	carInfoFields: any;
	constructor(private store: Store<AppState>, private policyService: PolicyService) {
		this._init_properties();
		this._create_formGroup();
		this._init_carInfoFields();
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
			CarBrand: new FormControl(''),
			CarModel: new FormControl(''),
			CarProductionYear: new FormControl(''),
			CarUsage: new FormControl(''),
			NoDamageRecord: new FormControl(''),
			PolicyTerm: new FormControl(''),
			LastPolicyExpirationDate: new FormControl(''),
			LastPolicyDiscountYears: new FormControl(),
			LastPolicyUsedPropertyCoupons: new FormControl(),
			PolicyPushesheMali: new FormControl(),
			LastPolicyUsedPersonCoupons: new FormControl()
		});
	}
	_set_formGroup_validation(orderForm: OrderFormType) {
		Object.keys(this.formGroup.controls).forEach((key) => {
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
			.filter((key) => key in this.formGroup.controls)
			.filter((key) => orderForm[key].Value)
			.map((key) => (values[key] = orderForm[key].Value));

		this.formGroup.patchValue(values);
	}
	_set_formGroup_relation_logic() {
		this.formGroup
			.get('CarBrand')
			.valueChanges.pipe(takeUntil(this.unsubscribe), filter((carBrand) => carBrand != ''))
			.subscribe((carBrand) => {
				this.policyService.GetCarModelsOfBrand({ carBrand }).subscribe((models) => {
					this.orderForm.CarModel.Options = models as any;
					this.orderForm.CarModel = { ...this.orderForm.CarModel };
				});
			});
		this.formGroup
			.get('NoDamageRecord')
			.valueChanges.pipe(takeUntil(this.unsubscribe))
			.subscribe((years) => this._check_and_contol_incident_formControls(years));
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
				name: 'CarBrand',
				fxFlex: 30
			},
			{
				name: 'CarModel',
				fxFlex: 30
			},
			{
				name: 'CarProductionYear',
				fxFlex: 30
			},
			{
				name: 'PolicyTerm',
				fxFlex: 30
			},
			{
				name: 'NoDamageRecord',
				fxFlex: 30
			},
			{
				name: 'LastPolicyDiscountYears',
				fxFlex: 30
			},
			{
				name: 'LastPolicyUsedPropertyCoupons',
				fxFlex: 30
			},
			{
				name: 'LastPolicyUsedPersonCoupons',
				fxFlex: 30
			},
			{
				name: 'CarUsage',
				fxFlex: 30
			},
			{
				name: 'PolicyPushesheMali',
				fxFlex: 30
			},
			{
				name: 'LastPolicyExpirationDate',
				fxFlex: 30
			}
		];
	}
	_check_and_contol_incident_formControls(years) {
		debugger;
		if (years > 0) {
			this.formGroup.get('LastPolicyDiscountYears').disable();
			this.formGroup.get('LastPolicyUsedPropertyCoupons').disable();
			this.formGroup.get('LastPolicyUsedPersonCoupons').disable();
		} else {
			this.formGroup.get('LastPolicyDiscountYears').enable();
			this.formGroup.get('LastPolicyUsedPropertyCoupons').enable();
			this.formGroup.get('LastPolicyUsedPersonCoupons').enable();
		}
	}
}
