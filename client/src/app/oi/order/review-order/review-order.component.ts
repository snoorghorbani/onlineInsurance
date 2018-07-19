import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderFormType } from '../models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AppState } from '../order.reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderFormService, OrderService } from '../services';
import { FieldModel } from '../models/field.model';

@Component({
	selector: 'order-review-order',
	templateUrl: './review-order.component.html',
	styleUrls: [ './review-order.component.css' ]
})
export class ReviewOrderComponent implements OnInit {
	@Output() done = new EventEmitter();
	formGroup: FormGroup;
	orderForm: OrderFormType;
	InitiationPaymentResult$: Observable<any>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private orderService: OrderService,
		private orderFormService: OrderFormService
	) {
		this._init_formGroup();
		this._select_order_form();
	}

	ngOnInit() {}
	/**
	 * view methods
	 */
	pay() {
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		const formValue = this.formGroup.value;
		Object.keys(formValue || {}).forEach((key) => (this.orderForm[key].Value = formValue[key]));

		this.InitiationPaymentResult$ = this.orderService.PlaceOrder(this.orderForm);
	}
	/**
	 * private methods
	 */
	_init_formGroup() {
		this.formGroup = new FormGroup({
			AcceptAgreementTerms: new FormControl(false, [ Validators.requiredTrue ])
		});
	}
	_select_order_form() {
		this.activatedRoute.params
			.pipe(
				// pluck("Id"),
				switchMap((parmas) =>
					this.orderFormService
						.GetOrder<OrderFormType>(parmas)
						.pipe(map((orderForm) => this._set_displayValue(orderForm)))
				)
			)
			.subscribe((orderForm) => (this.orderForm = orderForm));
	}
	_validate_all_form_fields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach((field) => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this._validate_all_form_fields(control);
			}
		});
	}
	_set_displayValue(order: OrderFormType): OrderFormType {
		for (const key in order) {
			if (order.hasOwnProperty(key)) {
				const field: FieldModel = order[key];
				if (field.Options) {
					const selectedOption = field.Options.find((option) => option.Value == field.Value);
					if (selectedOption) field.DisplayValue = selectedOption.DisplayValue || selectedOption.DisplayName;
				} else {
					order[key].DisplayValue = order[key].DisplayValue || order[key].Value;
				}
			}
		}
		return order;
	}
}
