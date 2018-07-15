import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "../services";
import { OrderFormModel } from "../models";
import { Observable } from "rxjs/internal/Observable";
import { switchMap, map, filter, takeUntil, combineLatest } from "rxjs/operators";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { FieldModel } from "../models/field.model";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { BehaviorSubject, from, Subject } from "rxjs";
import { PlaceOrderStartAction } from "../services/api";

@Component({
	selector: "order-view-order",
	templateUrl: "./view-order.component.html",
	styleUrls: [ "./view-order.component.css" ]
})
export class ViewOrderComponent implements OnInit, OnDestroy {
	unsubscribe = new Subject<void>();
	@Output() done = new EventEmitter();
	formGroup: FormGroup;
	@Input("orderForm")
	set orderForm(orderForm: OrderFormModel) {
		if (!orderForm) return;
		this.orderForm$.next(orderForm);
	}
	approvedByUser: boolean;
	isPayed: boolean;
	InitiationPaymentResult$: Observable<any>;
	orderForm$: BehaviorSubject<OrderFormModel>;
	SellerAddress$: Observable<FieldModel>;
	SellerEconomicNo$: Observable<FieldModel>;
	SellerName$: Observable<FieldModel>;
	SellerNationalId$: Observable<FieldModel>;
	SellerPhone$: Observable<FieldModel>;
	SellerRegistrationNo$: Observable<FieldModel>;
	SellerZipCode$: Observable<FieldModel>;
	PolicyholderFirstName$: Observable<FieldModel>;
	PolicyholderLastName$: Observable<FieldModel>;
	PolicyholderFatherName$: Observable<FieldModel>;
	PolicyholderNationalCode$: Observable<FieldModel>;
	PolicyholderPhone$: Observable<FieldModel>;
	PolicyholderBirthDate$: Observable<FieldModel>;
	PolicyholderMobile$: Observable<FieldModel>;
	DeliveryPlaceAddress$: Observable<FieldModel>;
	PolicyAddress$: Observable<FieldModel>;
	CarModel$: Observable<FieldModel>;
	CarUsage$: Observable<FieldModel>;
	PolicyTerm$: Observable<FieldModel>;
	Discount$: Observable<FieldModel>;
	LastPolicyExpirationDate$: Observable<FieldModel>;
	LastPolicyDiscountYears$: Observable<FieldModel>;
	PolicyPushesheMali$: Observable<FieldModel>;
	PolicyPushesheRanande$: Observable<FieldModel>;
	PolicyPushesheSarneshin$: Observable<FieldModel>;
	NetPremium$: Observable<FieldModel>;
	TaxesAndDuties$: Observable<FieldModel>;
	TotalPremium$: Observable<FieldModel>;
	ShippingCost$: Observable<FieldModel>;
	AmountPayable$: Observable<FieldModel>;
	AcceptAgreementTerms$: Observable<FieldModel>;

	constructor(
		private store: Store<AppState>,
		private router: Router,
		private service: OrderService,
		private activeRoute: ActivatedRoute
	) {
		this.approvedByUser = false;
		this.isPayed = true;
		this.orderForm$ = new BehaviorSubject(new OrderFormModel());
		this.initFormGroup();
		this.activeRoute.params
			.pipe(
				takeUntil(this.unsubscribe),
				map(params => params.Id),
				filter(Id => Id != null),
				switchMap(Id => this.service.GetOrder({ Id })),
				map(orderForm => this._set_displayValue(orderForm))
			)
			.subscribe(orderForm => {
				debugger;
				return this.orderForm$.next(orderForm);
			});
		this.SellerAddress$ = this.orderForm$.map(orderForm => orderForm.SellerAddress);
		this.SellerEconomicNo$ = this.orderForm$.map(orderForm => orderForm.SellerEconomicNo);
		this.SellerName$ = this.orderForm$.map(orderForm => orderForm.SellerName);
		this.SellerNationalId$ = this.orderForm$.map(orderForm => orderForm.SellerNationalId);
		this.SellerPhone$ = this.orderForm$.map(orderForm => orderForm.SellerPhone);
		this.SellerRegistrationNo$ = this.orderForm$.map(orderForm => orderForm.SellerRegistrationNo);
		this.SellerZipCode$ = this.orderForm$.map(orderForm => orderForm.SellerZipCode);
		this.PolicyholderFirstName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFirstName);
		this.PolicyholderLastName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderLastName);
		this.PolicyholderFatherName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFatherName);
		this.PolicyholderNationalCode$ = this.orderForm$.map(orderForm => orderForm.PolicyholderNationalCode);
		this.PolicyholderPhone$ = this.orderForm$.map(orderForm => orderForm.PolicyholderPhone);
		this.PolicyholderBirthDate$ = this.orderForm$.map(orderForm => orderForm.PolicyholderBirthDate);
		this.PolicyholderMobile$ = this.orderForm$.map(orderForm => orderForm.PolicyholderMobile);
		this.DeliveryPlaceAddress$ = this.orderForm$.map(orderForm => orderForm.DeliveryPlaceAddress);
		this.PolicyAddress$ = this.orderForm$.map(orderForm => orderForm.PolicyAddress);
		this.CarModel$ = this.orderForm$.map(orderForm => orderForm.CarModel);
		this.CarUsage$ = this.orderForm$.map(orderForm => orderForm.CarUsage);
		this.PolicyTerm$ = this.orderForm$.map(orderForm => orderForm.PolicyTerm);
		this.Discount$ = this.orderForm$.map(orderForm => orderForm.Discount);
		this.LastPolicyExpirationDate$ = this.orderForm$.map(orderForm => orderForm.LastPolicyExpirationDate);
		this.LastPolicyDiscountYears$ = this.orderForm$.map(
			orderForm => orderForm.LastPolicyDiscountYears
		);
		this.PolicyPushesheMali$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheMali);
		this.PolicyPushesheRanande$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheRanande);
		this.PolicyPushesheSarneshin$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheSarneshin);
		this.NetPremium$ = this.orderForm$.map(orderForm => orderForm.NetPremium);
		this.TaxesAndDuties$ = this.orderForm$.map(orderForm => orderForm.TaxesAndDuties);
		this.TotalPremium$ = this.orderForm$.map(orderForm => orderForm.TotalPremium);
		this.Discount$ = this.orderForm$.map(orderForm => orderForm.Discount);
		this.ShippingCost$ = this.orderForm$.map(orderForm => orderForm.ShippingCost);
		this.AmountPayable$ = this.orderForm$.map(orderForm => orderForm.AmountPayable);
		this.AcceptAgreementTerms$ = this.orderForm$.map(orderForm => orderForm.AcceptAgreementTerms);

		this.orderForm$
			.map(orderForm => orderForm.PaymentId)
			.pipe(filter(p => p != null))
			.subscribe(PaymentId => (this.isPayed = PaymentId.Value ? true : false));
	}

	ngOnInit() {}
	ngOnDestroy() {
		debugger;
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	initFormGroup() {
		this.formGroup = new FormGroup({
			AcceptAgreementTerms: new FormControl(false, [ Validators.requiredTrue ])
		});
	}
	pay() {
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		const formValue = this.formGroup.value;
		const orderForm = this.orderForm$.getValue();
		Object.keys(formValue || {}).forEach(key => (orderForm[key].Value = formValue[key]));

		this.InitiationPaymentResult$ = this.service.PlaceOrder(orderForm);
	}
	_set_displayValue(order: OrderFormModel): OrderFormModel {
		for (const key in order) {
			if (order.hasOwnProperty(key)) {
				const field: FieldModel = order[key];
				if (field.Options) {
					const selectedOption = field.Options.find(option => option.Value == field.Value);
					if (selectedOption) field.DisplayValue = selectedOption.DisplayValue || selectedOption.DisplayName;
				} else {
					order[key].DisplayValue = order[key].DisplayValue || order[key].Value;
				}
			}
		}
		return order;
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
