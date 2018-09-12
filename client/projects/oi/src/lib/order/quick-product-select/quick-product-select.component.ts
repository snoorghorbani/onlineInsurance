import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from "@angular/core";
import { OrderFormType } from "../models";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { switchMap, map, takeUntil, filter } from "rxjs/operators";
import { Observable } from "rxjs";
import { MatTabGroup } from "@angular/material";

import { AppState } from "../order.reducers";
import { Router, ActivatedRoute } from "@angular/router";
import { OrderFormService, OrderService } from "../services";
import { FieldModel } from "../models/field.model";
import { OrderTypes } from "../models/order-types-enum";
import { PolicyService } from "../../policy/services";

@Component({
	selector: "order-quick-product-select",
	templateUrl: "./quick-product-select.component.html",
	styleUrls: [ "./quick-product-select.component.css" ]
})
export class QuickProductSelectComponent implements OnInit {
	@ViewChild("wizard") wizardRef: MatTabGroup;
	ready: boolean;
	@Input("type") orderType: OrderTypes;
	_orderForm: OrderFormType;
	set orderForm(orderForm: OrderFormType) {
		this._orderForm = orderForm;
		this._fill_steps();
		this._add_controls_to_formgroup();
		setTimeout(() => {
			this.ready = true;
		}, 500);
	}
	get orderForm() {
		return this._orderForm;
	}
	formGroup: FormGroup;
	steps: any[];
	get redirectTo() {
		switch (this.orderForm.Type.Value) {
			case OrderTypes.thirdParty:
				return "/order/purchase/third-party-policy/select-product";
			case OrderTypes.motorcycle:
				return "/order/purchase/motorcycle-policy/select-product";
			case OrderTypes.fire:
				return "/order/purchase/fire-policy/select-product";
			case OrderTypes.earthquake:
				return "/order/purchase/earthquake-policy/select-product";
			case OrderTypes.medical:
				return "/order/purchase/medical-policy/select-product";
		}
	}

	constructor(
		private router: Router,
		private orderService: OrderService,
		private policyService: PolicyService,
		private orderFormService: OrderFormService
	) {
		this._init_properties();
		this._init_formGroup();
		this._react_on_formgroup_change();
		this._custom_field_logics();
	}

	ngOnInit() {
		this._select_order_form();
	}
	/**
	 * view methods
	 */
	next() {
		++this.wizardRef.selectedIndex;
		setTimeout(() => {
			if (this.formGroup.get(this.wizardRef.selectedIndex.toString()).valid) this.next();
		}, 333);
	}
	prev() {
		--this.wizardRef.selectedIndex;
	}
	/**
	 * private methods
	 */
	_init_properties() {
		this.ready = false;
	}
	_init_formGroup() {
		this.formGroup = new FormGroup({});
	}
	_add_controls_to_formgroup() {
		this.formGroup = new FormGroup({});
		this.steps.forEach((stepFields, index) => {
			let stepFormGroup = new FormGroup({});
			stepFields.forEach(field => {
				let ctrl = new FormControl("", Validators.required);
				stepFormGroup.addControl(field, ctrl);
				if (field == "CarBrand") {
					ctrl.valueChanges.pipe(filter(carBrand => carBrand != "")).subscribe(carBrand => {
						this.policyService.GetCarModelsOfBrand({ carBrand }).subscribe(models => {
							(this.orderForm as any).CarModel.Options = models as any;
							(this.orderForm as any).CarModel = { ...(this.orderForm as any).CarModel };
						});
					});
				}
				if (field == "DamageStatus") {
					ctrl.valueChanges.subscribe(DamageStatus => {
						if (DamageStatus == 1) {
							this.formGroup.get((index + 1).toString()).get("NoDamageRecord").enable();
							this.formGroup.get((index + 1).toString()).get("LastPolicyDiscountYears").disable();
							this.formGroup.get((index + 1).toString()).get("LastPolicyUsedPropertyCoupons").disable();
							this.formGroup.get((index + 1).toString()).get("LastPolicyUsedPersonCoupons").disable();
						} else if (DamageStatus == 2) {
							this.formGroup.get((index + 1).toString()).get("NoDamageRecord").disable();
							this.formGroup.get((index + 1).toString()).get("LastPolicyDiscountYears").enable();
							this.formGroup.get((index + 1).toString()).get("LastPolicyUsedPropertyCoupons").enable();
							this.formGroup.get((index + 1).toString()).get("LastPolicyUsedPersonCoupons").enable();
						}
					});
				}
				if (field == "EstateType") {
					ctrl.valueChanges.pipe(filter(EstateType => EstateType != "")).subscribe(EstateType => {
						if (EstateType == 1) {
							stepFormGroup.get("Units").disable();
						} else {
							stepFormGroup.get("Units").enable();
						}
					});
				}
				if (field == "MedicalRole") {
					ctrl.valueChanges.subscribe(MedicalRole => {
						if (MedicalRole == 1) {
							this.formGroup.get((index + 1).toString()).get("DoctorSpecialty").enable();
							this.formGroup.get((index + 1).toString()).get("IsResident").enable();
							this.formGroup.get((index + 1).toString()).get("ParamedicineSpecialty").disable();
							this.formGroup.get((index + 1).toString()).get("IsStudent").disable();
						} else if (MedicalRole == 2) {
							this.formGroup.get((index + 1).toString()).get("DoctorSpecialty").disable();
							this.formGroup.get((index + 1).toString()).get("IsResident").disable();
							this.formGroup.get((index + 1).toString()).get("ParamedicineSpecialty").enable();
							this.formGroup.get((index + 1).toString()).get("IsStudent").enable();
						}
					});
				}
			});
			stepFormGroup.valueChanges.subscribe(data => {
				if (!this.ready) return;
				const StepGroupContainTextInputs = [
					"Units" in stepFormGroup.controls,
					"ThingsValue" in stepFormGroup.controls,
					"Area" in stepFormGroup.controls
				];
				if (StepGroupContainTextInputs.some(i => i)) return;
				setTimeout(() => {
					if (this.formGroup.valid) {
						const res = {};
						for (const key in this.formGroup.value) {
							if (this.formGroup.value.hasOwnProperty(key)) {
								const group = this.formGroup.value[key];
								for (const field in group) {
									if (group.hasOwnProperty(field)) {
										res[field] = group[field];
									}
								}
							}
						}
						this.orderService.quickOrder = res;
						return this.router.navigate([ this.redirectTo ]);
					}
				}, 500);
				if (stepFormGroup.valid) {
					this.next();
				}
			});

			this.formGroup.addControl(index.toString(), stepFormGroup);
		});
	}
	_fill_steps() {
		if (!this.orderForm) return [];
		switch (this.orderForm.Type.Value) {
			case OrderTypes.thirdParty:
				this.steps = [
					[ "CarBrand", "CarModel" ],
					[ "CarProductionYear" ],
					[ "DamageStatus" ],
					[
						"NoDamageRecord",
						"LastPolicyDiscountYears",
						"LastPolicyUsedPropertyCoupons",
						"LastPolicyUsedPersonCoupons"
					],
					[ "CarUsage" ]
				];
				break;
			case OrderTypes.motorcycle:
				this.steps = [
					[ "MotorType" ],
					[ "MotorProductionYear" ],
					// [ "DamageStatus", "NoDamageRecord" ],
					[ "DamageStatus" ],
					[ "LastPolicyExpirationDate" ]
				];
				break;
			case OrderTypes.fire:
				this.steps = [ [ "EstateType", "Units" ], [ "Area" ], [ "ThingsValue" ], [ "BuildType" ] ];
				break;
			case OrderTypes.earthquake:
				this.steps = [ [ "EstateType", "Units" ], [ "Area" ], [ "ThingsValue" ], [ "BuildType" ] ];
				break;
			case OrderTypes.medical:
				this.steps = [
					[ "MedicalRole" ],
					[ "DoctorSpecialty", "ParamedicineSpecialty", "IsResident", "IsStudent" ],
					[ "MedicalNoDamageRecord" ]
				];
				break;
		}
	}
	_react_on_formgroup_change() {}
	_select_order_form() {
		this.orderFormService
			.GetNewOrderForm<OrderFormType>(this.orderType)
			.subscribe(orderForm => (this.orderForm = orderForm));
	}
	_custom_field_logics() {}
}
