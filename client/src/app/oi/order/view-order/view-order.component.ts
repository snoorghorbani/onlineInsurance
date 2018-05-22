import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "../services";
import { OrderFormModel } from "../models";
import { Observable } from "rxjs/internal/Observable";
import { switchMap, map, filter } from "rxjs/operators";
import { FormGroup } from "@angular/forms";
import { FieldModel } from "../models/field.model";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { BehaviorSubject, from } from "rxjs";
import { PlaceOrderStartAction } from "../services/api";

@Component({
	selector: "order-view-order",
	templateUrl: "./view-order.component.html",
	styleUrls: [ "./view-order.component.css" ]
})
export class ViewOrderComponent implements OnInit {
	@Output() done = new EventEmitter();
	formGroup: FormGroup;
	@Input("orderForm")
	set orderForm(orderForm: OrderFormModel) {
		if (!orderForm) return;
		this.orderForm$.next(orderForm);
	}
	InitiationPaymentResult$: any;
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
	DeliveryAddress$: Observable<FieldModel>;
	PolicyAddress$: Observable<FieldModel>;
	CarModel$: Observable<FieldModel>;
	CarUsage$: Observable<FieldModel>;
	PolicyTerm$: Observable<FieldModel>;
	Discount$: Observable<FieldModel>;
	LastPolicyExpirationDate$: Observable<FieldModel>;
	LastPolicyYearsWithoutIncident$: Observable<FieldModel>;
	PolicyPushesheMali$: Observable<FieldModel>;
	PolicyPushesheRanande$: Observable<FieldModel>;
	PolicyPushesheSarneshin$: Observable<FieldModel>;

	constructor(
		private store: Store<AppState>,
		private router: Router,
		private service: OrderService,
		private activeRoute: ActivatedRoute
	) {
		this.orderForm$ = new BehaviorSubject(new OrderFormModel());
		this.initFormGroup();
		this.activeRoute.params
			.pipe(map(params => params.Id), filter(Id => Id != null), switchMap(Id => this.service.GetOrder({ Id })))
			.subscribe(orderForm => this.orderForm$.next(orderForm));
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
		this.DeliveryAddress$ = this.orderForm$.map(orderForm => orderForm.DeliveryAddress);
		this.PolicyAddress$ = this.orderForm$.map(orderForm => orderForm.PolicyAddress);
		this.CarModel$ = this.orderForm$.map(orderForm => orderForm.CarModel);
		this.CarUsage$ = this.orderForm$.map(orderForm => orderForm.CarUsage);
		this.PolicyTerm$ = this.orderForm$.map(orderForm => orderForm.PolicyTerm);
		this.Discount$ = this.orderForm$.map(orderForm => orderForm.Discount);
		this.LastPolicyExpirationDate$ = this.orderForm$.map(orderForm => orderForm.LastPolicyExpirationDate);
		this.LastPolicyYearsWithoutIncident$ = this.orderForm$.map(
			orderForm => orderForm.LastPolicyYearsWithoutIncident
		);
		this.PolicyPushesheMali$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheMali);
		this.PolicyPushesheRanande$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheRanande);
		this.PolicyPushesheSarneshin$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheSarneshin);
	}

	ngOnInit() {}
	initFormGroup() {}
	pay() {
		from([ 1 ])
			.combineLatest(this.orderForm$)
			.map(([ formGroup, orderForm ]) => orderForm)
			.subscribe(orderForm => (this.InitiationPaymentResult$ = this.service.PlaceOrder(orderForm)));
	}
}
