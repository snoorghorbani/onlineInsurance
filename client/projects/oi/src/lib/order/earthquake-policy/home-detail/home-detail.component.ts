import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { AppState } from "../../order.reducers";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { EarthquakePolicyOrderFormModel, OrderFormType } from "../../models";
import { OrderService } from "../../services";

@Component({
	selector: "order-earthquake-home-detail",
	templateUrl: "./earthquake-home-detail.component.html",
	styleUrls: [ "./earthquake-home-detail.component.css" ]
})
export class EarthquakeHomeDetailComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	_orderForm: EarthquakePolicyOrderFormModel;
	@Input()
	set orderForm(orderForm: EarthquakePolicyOrderFormModel) {
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

	constructor(private store: Store<AppState>, private orderService: OrderService) {
		this._init_properties();
		this._create_formGroup();
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
			EstateType: new FormControl("", Validators.required),
			Units: new FormControl("", Validators.required),
			BuildType: new FormControl("", Validators.required),
			Area: new FormControl("", Validators.required),
			ThingsValue: new FormControl("", Validators.required),
			ConstructionCostPerSquareMeter: new FormControl("", Validators.required),
			DoctorEngineerDiscount: new FormControl(false),
			LifeInsuranceDiscount: new FormControl(false),
			LongTermAccountDiscount: new FormControl(false)
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
	_set_formGroup_relation_logic() {}
	_emit_when_form_group_is_valid() {
		this.formGroup.valueChanges.subscribe(() => {
			if (!this.formGroup.valid) return;
			this.done.emit(this.formGroup.value);
		});
	}
}
