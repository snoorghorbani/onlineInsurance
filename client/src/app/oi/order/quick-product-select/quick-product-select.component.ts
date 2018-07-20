import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from "@angular/core";
import { OrderFormType } from "../models";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { switchMap, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { MatTabGroup } from "@angular/material";

import { AppState } from "../order.reducers";
import { Router, ActivatedRoute } from "@angular/router";
import { OrderFormService, OrderService } from "../services";
import { FieldModel } from "../models/field.model";
import { OrderTypes } from "../models/order-types-enum";

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
		private orderFormService: OrderFormService
	) {
		this._init_properties();
		this._init_formGroup();
		this._react_on_formgroup_change();
	}

	ngOnInit() {
		this._select_order_form();
	}
	/**
	 * view methods
	 */
	next() {
		++this.wizardRef.selectedIndex;
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
		this.steps
			.reduce((all, item) => all.concat(item), [])
			.forEach(field => this.formGroup.addControl(field, new FormControl("", Validators.required)));
	}
	_fill_steps() {
		if (!this.orderForm) return [];
		switch (this.orderForm.Type.Value) {
			case OrderTypes.thirdParty:
				this.steps = [ [ "CarBrand" ], [ "CarProductionYear" ], [ "CarUsage" ] ];
				break;
			case OrderTypes.motorcycle:
				this.steps = [ [ "MotorType" ], [ "MotorProductionYear" ] ];
				break;
			case OrderTypes.fire:
				this.steps = [ [ "BuildType" ], [ "Units" ], [ "BuildType" ], [ "Area" ], [ "ThingsValue" ] ];
				break;
		}
	}
	_react_on_formgroup_change() {
		this.formGroup.valueChanges.subscribe(data => {
			if (!this.ready) return;
			if (this.formGroup.valid) {
				debugger;
				this.orderService.quickOrder = this.formGroup.value;
				return this.router.navigate([ this.redirectTo ]);
			}
			this.next();
		});
	}
	_select_order_form() {
		this.orderFormService
			.GetNewOrderForm<OrderFormType>(this.orderType)
			.subscribe(orderForm => (this.orderForm = orderForm));
	}
}
