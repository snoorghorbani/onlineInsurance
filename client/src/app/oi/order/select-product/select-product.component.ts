import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy, Input, AfterViewInit } from "@angular/core";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../services/api";
import {
	ComparePoliciesStartAction,
	ComparePoliciesApiModel,
	GetCarModelsOfBrandStartAction,
	GetCarModelsOfBrandApiModel
} from "../../policy/services/api";
import { from, of, Subject, BehaviorSubject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FieldModel, FieldOptionModel } from "../models/field.model";
import { OrderFormModel } from "../models";
import { Router } from "@angular/router";
import { PolicyCompareModel, PriceModel } from "../../policy/models/policy-compare.model";
import { MatSidenav } from "@angular/material";
import { NewOrderFormUpdateAction } from "../new-order/new-order.actions";
import { takeUntil, map, combineLatest, take } from "rxjs/operators";
import { trigger, state, transition, animate, style } from "@angular/animations";

@Component({
	selector: "order-select-product",
	templateUrl: "./select-product.component.html",
	styleUrls: [ "./select-product.component.css" ],
	animations: [
		trigger("mode", [
			state("view", style({ opacity: 0, top: "-50px" })),
			state("edit", style({ opacity: 1, top: "0" })),
			transition("edit => view", [ animate("300ms ease-out") ]),
			transition("view => edit", [ animate("300ms ease-out") ])
		])
	]
})
export class SelectProductComponent implements OnInit, AfterViewInit, OnDestroy {
	@Output() done = new EventEmitter();
	unsubscribe = new Subject<void>();
	ready = false;
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	@Input() mode: "view" | "edit" = "view";
	policies$: BehaviorSubject<PolicyCompareModel[]> = new BehaviorSubject<PolicyCompareModel[]>([]);
	formGroup: FormGroup;
	activePolicy: PolicyCompareModel;
	price: PriceModel;
	PolicyTermDisplayValue: string;
	logos: { [name: string]: string };
	orderForm$: Observable<OrderFormModel>;
	PolicyPushesheMali$: Observable<FieldModel>;
	PolicyTerm$: Observable<FieldModel>;
	selectedPolicy: PolicyCompareModel;
	selectedProduct: any;
	SelectedPolicyTerm$: Observable<string>;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];
	constructor(private store: Store<AppState>, private router: Router) {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
		this.formGroup = new FormGroup({
			PolicyPushesheMali: new FormControl(),
			PolicyTerm: new FormControl()
		});
		this.initInsLogos();
		this.store.select(state => state.order.carDetail.data).subscribe(policies => this.policies$.next(policies));
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.PolicyPushesheMali$ = this.orderForm$.map(orderForm => orderForm.PolicyPushesheMali);
		this.PolicyTerm$ = this.orderForm$.map(orderForm => orderForm.PolicyTerm);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction({ type: 1 } as GetNewOrderFormApiModel.Request));

		// dynamically set validators on formgroup
		this.orderForm$.pipe(takeUntil(this.unsubscribe)).subscribe(orderForm => {
			Object.keys(this.formGroup.controls).forEach(key => {
				if (orderForm[key].Status == 1) {
					this.formGroup.get(key).setValidators([ Validators.required ]);
					this.formGroup.get(key).updateValueAndValidity();
				}
			});
			this.formGroup.updateValueAndValidity();
		});

		// this.formGroup.get("PolicyTerm").valueChanges.subscribe(value => {
		// 	debugger;
		// });
		// this.policies$.subscribe(policies => {
		// 	debugger;
		// 	var prices: { [insCo: string]: PriceModel } = {};
		// 	const value = this.formGroup.get("PolicyTerm").value;
		// 	this.policies$
		// 		.getValue()
		// 		.forEach(
		// 			policy =>
		// 				(prices[policy.InsuranceCompany] = policy.Prices.find(price => price.Price.Amount == value))
		// 		);
		// 	return prices;
		// });
		this.formGroup
			.get("PolicyTerm")
			.valueChanges.combineLatest(this.PolicyTerm$)
			.subscribe(([ value, PolicyTerm ]) => {
				debugger;
				this.PolicyTermDisplayValue = PolicyTerm.Options.find(i => i.Value == value).DisplayValue;
			});
		this.policies$.filter(data => data.length > 0).subscribe(data => (this.ready = true));
		this.orderForm$
			.pipe(
				takeUntil(this.unsubscribe),
				map(orderForm => {
					var values = {};
					Object.keys(orderForm)
						.filter(key => key in this.formGroup.controls)
						.filter(key => orderForm[key].Value)
						.map(key => (values[key] = orderForm[key].Value));
					return values;
				})
			)
			.subscribe(values => {
				this.formGroup.patchValue(values);
			});
	}
	ngAfterViewInit() {
		this.orderForm$.pipe(takeUntil(this.unsubscribe)).subscribe(orderForm => this.compare());
		this.PolicyPushesheMali$
			.pipe(take(1))
			.subscribe(PolicyPushesheMali =>
				this.formGroup.patchValue({ PolicyPushesheMali: PolicyPushesheMali.Options[0].Value })
			);
		this.PolicyTerm$
			.pipe(take(1))
			.subscribe(PolicyTerm => this.formGroup.patchValue({ PolicyTerm: PolicyTerm.Options[0].Value }));
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	compare() {
		if (this.formGroup.invalid) return;
		from([ this.formGroup ])
			.pipe(
				takeUntil(this.unsubscribe),
				combineLatest(this.orderForm$),
				map(([ formGroup, orderForm ]) => {
					Object.keys(formGroup.value).forEach(key => (orderForm[key].Value = formGroup.value[key]));
					return orderForm;
				})
			)
			.subscribe(orderForm => this.store.dispatch(new ComparePoliciesStartAction(orderForm)));
	}
	selectPolicy(policy: PolicyCompareModel) {
		debugger;
		this.selectedPolicy = policy;
		let ProductId = policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).ProductId;
		from([ ProductId ])
			.pipe(
				takeUntil(this.unsubscribe),
				combineLatest(this.orderForm$),
				map(([ ProductId, orderForm ]) => {
					Object.keys(this.formGroup.value).forEach(
						key => (orderForm[key].Value = this.formGroup.value[key])
					);
					orderForm.ProductId.Value = ProductId;
					return orderForm;
				})
			)
			.subscribe(orderForm => this.store.dispatch(new NewOrderFormUpdateAction(orderForm)))
			.unsubscribe();
		this.fillSelectedProduct();
		this.done.emit();
	}
	open(policy: PolicyCompareModel) {
		debugger;
		this.activePolicy = policy;
		const translate = {
			MizaneShekayateMoshtariyan: "میزان شکایات مشتریان",
			ModatZamanePasokhgoieBeShekayat: "مدت زمان پاسخگویی به شکایت",
			RotbeyeRezayateMoshtary: "رتبه ی رضایت مشتری",
			SahmAzBazar: "سهم از بازار",
			SatheTavangariyeMali: "سصح توانگری مالی",
			TedadeMarakezePardakhteKhesarat: "تعداد مراکز پرداخت خسارت"
		};
		this.companyInfoDataSource = Object.keys(this.activePolicy.InsuranceCompanyStatistics)
			.filter(key => key != "ExtensionData")
			.map(key => {
				return { key: translate[key], value: this.activePolicy.InsuranceCompanyStatistics[key] };
			});

		this.policyInfoDataSource = [
			{
				key: "مبلغ پایه بیمه",
				value: ""
			},
			{
				key: "مبلغ تخفیف بیمه",
				value: ""
			}
		];
	}
	initInsLogos() {
		this.logos = {
			"بیمه آسیا": "assets\\ins-logos\\asia.png",
			"بیمه سرمد": "assets\\ins-logos\\sarmard.png",
			"بیمه دی": "assets\\ins-logos\\day.png",
			"بیمه البرز": "assets\\ins-logos\\alborz.png",
			"بیمه دانا": "assets\\ins-logos\\dana.png",
			"بیمه ایران": "assets\\ins-logos\\iran.png",
			"بیمه کارآفرین": "assets\\ins-logos\\karafarin.png",
			"بیمه ما": "assets\\ins-logos\\ma.png",
			"بیمه ملت": "assets\\ins-logos\\melat.png",
			"بیمه نوین": "assets\\ins-logos\\novin.png",
			"بیمه پارسیان": "assets\\ins-logos\\parsian.png",
			"بیمه پاسارگاد": "assets\\ins-logos\\pasargad.png",
			"بیمه رازی": "assets\\ins-logos\\razi.png",
			"بیمه سامان": "assets\\ins-logos\\saman.png",
			"بیمه سینا": "assets\\ins-logos\\sina.png"
		};
	}
	getFinalPrice(policy: PolicyCompareModel) {
		if (!this.PolicyTermDisplayValue) return "";
		return policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).FinalPrice.DisplayValue;
	}
	getPrice(policy: PolicyCompareModel) {
		if (!this.PolicyTermDisplayValue) return "";
		return policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).Price.DisplayValue;
	}
	fillSelectedProduct() {
		if (!this.selectedPolicy) return null;
		let selectedPrice = this.selectedPolicy.Prices;
		this.selectedProduct = {
			Price: this.getPrice(this.selectedPolicy),
			FinalPrice: this.getFinalPrice(this.selectedPolicy)
		};
	}
	viewMode() {
		this.mode = "view";
	}
	editMode() {
		this.selectedProduct = null;
		this.mode = "edit";
	}
}
