import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { ComparePoliciesStartAction } from "../../policy/services/api";
import { Subject, BehaviorSubject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FieldModel } from "../models/field.model";
import { OrderFormModel } from "../models";
import { Router } from "@angular/router";
import { PolicyCompareModel, PriceModel } from "../../policy/models/policy-compare.model";
import { NewOrderFormUpdateAction } from "../new-order/new-order.actions";
import { takeUntil, map, take, filter, distinctUntilChanged } from "rxjs/operators";
import { trigger, state, transition, animate, style } from "@angular/animations";

@Component({
	selector: "order-select-product",
	templateUrl: "./select-product.component.html",
	styleUrls: [ "./select-product.component.css" ],
	animations: [
		trigger("mode", [
			state("view", style({ opacity: 0, height: "0", top: "-50px" })),
			state("edit", style({ opacity: 1, height: "auto", top: "0" })),
			transition("edit => view", [ animate("300ms ease-out") ]),
			transition("view => edit", [ animate("300ms ease-out") ])
		])
	]
})
export class SelectProductComponent implements OnInit, OnDestroy {
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
	orderForm: OrderFormModel;
	orderForm$: Observable<OrderFormModel>;
	PolicyPushesheMali$: Observable<FieldModel>;
	PolicyTerm$: Observable<FieldModel>;
	selectedPolicy: PolicyCompareModel;
	selectedProduct: any;
	SelectedPolicyTerm$: Observable<string>;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];
	constructor(private store: Store<AppState>) {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
		this._createFormGroup();
		this._initInsLogos();
		this.store.select(state => state.order.carDetail.data).subscribe(policies => this.policies$.next(policies));

		this.orderForm$ = this.store
			.select(state => state.order.newOrder.data)
			.pipe(filter(orderForm => orderForm != null), distinctUntilChanged());
		this.orderForm$.subscribe(orderForm => (this.orderForm = orderForm));
		this.PolicyPushesheMali$ = this.orderForm$.pipe(
			map(orderForm => orderForm.PolicyPushesheMali),
			distinctUntilChanged()
		);
		this.PolicyTerm$ = this.orderForm$.pipe(map(orderForm => orderForm.PolicyTerm), distinctUntilChanged());
	}

	ngOnInit() {
		this.formGroup
			.get("PolicyTerm")
			.valueChanges.combineLatest(this.PolicyTerm$)
			.subscribe(
				([ value, PolicyTerm ]) =>
					(this.PolicyTermDisplayValue = PolicyTerm.Options.find(i => i.Value == value).DisplayValue)
			);
		this._setFormGroupValidation();
		this._setFormGroupDefaultValue();
		this._syncStoreAndFormGroup();
		this._ObserveOnOrderFormAndGetProducts();
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	selectPolicy(policy: PolicyCompareModel) {
		this.selectedPolicy = policy;
		let ProductId = policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).ProductId;
		this._fillSelectedProduct();

		this.formGroup.patchValue({ ProductId });
		this.done.emit();
	}
	open(policy: PolicyCompareModel) {
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
	getFinalPrice(policy: PolicyCompareModel) {
		if (!this.PolicyTermDisplayValue) return "";
		return policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).FinalPrice.DisplayValue;
	}
	getPrice(policy: PolicyCompareModel) {
		if (!this.PolicyTermDisplayValue) return "";
		return policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).Price.DisplayValue;
	}
	viewMode() {
		if (this.mode == "view") return;
		this.mode = "view";
	}
	editMode() {
		if (this.mode == "edit") return;
		this.selectedProduct = null;
		this.mode = "edit";
	}

	_initInsLogos() {
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
	_fillSelectedProduct() {
		if (!this.selectedPolicy) return null;
		this.selectedProduct = {
			Price: this.getPrice(this.selectedPolicy),
			FinalPrice: this.getFinalPrice(this.selectedPolicy)
		};
	}
	_syncStoreAndFormGroup() {
		this.formGroup.valueChanges
			.pipe(
				takeUntil(this.unsubscribe),
				map(formValue => {
					Object.keys(formValue || {}).forEach(key => (this.orderForm[key].Value = formValue[key]));
					return this.orderForm;
				})
			)
			.subscribe(orderForm => this.store.dispatch(new NewOrderFormUpdateAction(orderForm)));
		this.orderForm$
			.pipe(
				take(1),
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
	_ObserveOnOrderFormAndGetProducts() {
		this.orderForm$
			// .pipe(takeUntil(this.unsubscribe), filter(() => this.formGroup.valid))
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(orderForm => this.store.dispatch(new ComparePoliciesStartAction(orderForm)));
	}
	_createFormGroup() {
		this.formGroup = new FormGroup({
			PolicyPushesheMali: new FormControl(""),
			PolicyTerm: new FormControl(""),
			ProductId: new FormControl("")
		});
	}
	_setFormGroupValidation() {
		this.orderForm$.pipe(take(1)).subscribe(orderForm => {
			Object.keys(this.formGroup.controls).forEach(key => {
				if (orderForm[key].Status == 1) {
					this.formGroup.get(key).setValidators([ Validators.required ]);
					this.formGroup.get(key).updateValueAndValidity();
				}
			});
			this.formGroup.updateValueAndValidity();
		});
	}
	_setFormGroupDefaultValue() {
		this.PolicyPushesheMali$
			.pipe(take(1))
			.subscribe(PolicyPushesheMali =>
				this.formGroup.patchValue({ PolicyPushesheMali: PolicyPushesheMali.Options[0].Value })
			);
		this.PolicyTerm$
			.pipe(take(1))
			.subscribe(PolicyTerm => this.formGroup.patchValue({ PolicyTerm: PolicyTerm.Options[0].Value }));
	}
}
