import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { trigger, state, transition, animate, style } from "@angular/animations";

import { AppState } from "../../order.reducers";
import { FirePolicyOrderFormModel } from "../../models";
import { PolicyCompareModel, PriceModel } from "../../../policy/models/policy-compare.model";
import { MatDialog } from "@angular/material";
import { SelectdPolicyConfirmationComponent } from "../selectd-policy-confirmation/selectd-policy-confirmation.component";

@Component({
	selector: "order-fire-policy-select-product",
	templateUrl: "./select-fire-policy-product.component.html",
	styleUrls: [ "./select-fire-policy-product.component.css" ],
	animations: [
		trigger("mode", [
			state("view", style({ opacity: 0, height: "0", top: "-50px" })),
			state("edit", style({ opacity: 1, height: "auto", top: "0" })),
			transition("edit => view", [ animate("300ms ease-out") ]),
			transition("view => edit", [ animate("300ms ease-out") ])
		])
	]
})
export class SelectFirePolicyProductComponent implements OnInit, OnDestroy {
	@Output() select = new EventEmitter();
	unsubscribe = new Subject<void>();
	ready = false;
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	@Input() mode: "view" | "edit" = "view";
	@Input() boxMode: "disable" | "loading" = "loading";
	@Input() policies: PolicyCompareModel[] = [];
	formGroup: FormGroup;
	activePolicy: PolicyCompareModel;
	price: PriceModel;
	PolicyTermDisplayValue: string;
	logos: { [name: string]: string };

	displayedColumns: string[] = [
		"InsuranceCompany",
		"SatheTavangariyeMali",
		"TedadeMarakezePardakhteKhesarat",
		"ModatZamanePasokhgoieBeShekayat",
		"MizaneShekayateMoshtariyan",
		"actions"
	];
	dataSource = [];

	_orderForm: FirePolicyOrderFormModel;
	@Input()
	set orderForm(orderForm: FirePolicyOrderFormModel) {
		if (!orderForm) return;
		this._orderForm = orderForm;
		// this._get_products(orderForm);
		this._setFormGroupValidation(orderForm);
		this._setFormGroupDefaultValue(orderForm);
		this._syncStoreAndFormGroup(orderForm);
	}
	get orderForm() {
		return this._orderForm;
	}
	// PolicyTerm$: Observable<FieldModel>;
	selectedPolicy: PolicyCompareModel;
	selectedProduct: any;
	SelectedPolicyTerm$: Observable<string>;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];
	constructor() {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
		this._createFormGroup();
		this._initInsLogos();
		// this.store.select(state => state.order.carDetail.data).subscribe(policies => this.policies.next(policies));
	}

	ngOnInit() {
		// this.formGroup
		// 	.get("PolicyTerm")
		// 	.valueChanges.combineLatest(this.PolicyTerm$)
		// 	.subscribe(
		// 		([ value, PolicyTerm ]) =>
		// 			(this.PolicyTermDisplayValue = PolicyTerm.Options.find(i => i.Value == value).DisplayValue)
		// 	);
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	selectPolicy(policy: PolicyCompareModel) {
		this.selectedPolicy = policy;
		// TODO: چک کردن پارامترهای تاثیر گذار در قیمت
		// let ProductId = policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).ProductId;
		let ProductId = policy.Prices[0].ProductId;
		this._fillSelectedProduct();
		this.formGroup.patchValue({ ProductId });
		this.select.emit({ price: policy.Prices[0], policy });
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
	_syncStoreAndFormGroup(orderForm) {
		// this.formGroup.valueChanges
		// 	.pipe(
		// 		takeUntil(this.unsubscribe),
		// 		map(formValue => {
		// 			Object.keys(formValue || {}).forEach(key => (this.orderForm[key].Value = formValue[key]));
		// 			return this.orderForm;
		// 		})
		// 	)
		// 	.subscribe(orderForm => this.store.dispatch(new NewOrderFormUpdateAction(orderForm)));

		var values = {};
		Object.keys(orderForm)
			.filter(key => key in this.formGroup.controls)
			.filter(key => orderForm[key].Value)
			.map(key => (values[key] = orderForm[key].Value));

		this.formGroup.patchValue(values);
	}
	_createFormGroup() {
		this.formGroup = new FormGroup({
			// PolicyPushesheMali: new FormControl(""),
			// PolicyTerm: new FormControl(""),
			ProductId: new FormControl("")
		});
	}
	_setFormGroupValidation(orderForm) {
		Object.keys(this.formGroup.controls).forEach(key => {
			if (orderForm[key].Status == 1) {
				this.formGroup.get(key).setValidators([ Validators.required ]);
				this.formGroup.get(key).updateValueAndValidity();
			}
		});
		this.formGroup.updateValueAndValidity();
	}
	_setFormGroupDefaultValue(orderForm) {
		// this.PolicyTerm$
		// 	.pipe(take(1))
		// 	.subscribe(PolicyTerm => this.formGroup.patchValue({ PolicyTerm: PolicyTerm.Options[0].Value }));
	}
}
