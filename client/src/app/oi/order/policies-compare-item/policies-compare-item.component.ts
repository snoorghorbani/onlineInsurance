import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { PolicyCompareModel, PriceModel } from "../../policy/models";
import { MatExpansionPanel } from "@angular/material";

@Component({
	selector: "order-policies-compare-item",
	templateUrl: "./policies-compare-item.component.html",
	styleUrls: [ "./policies-compare-item.component.css" ]
})
export class PoliciesCompareItemComponent implements OnInit {
	@Output() selected = new EventEmitter();
	_policy: PolicyCompareModel;
	@Input()
	set policy(policy: PolicyCompareModel) {
		this._policy = policy;
		const translate = {
			MizaneShekayateMoshtariyan: "میزان شکایات مشتریان",
			ModatZamanePasokhgoieBeShekayat: "مدت زمان پاسخگویی به شکایت",
			RotbeyeRezayateMoshtary: "رتبه ی رضایت مشتری",
			SahmAzBazar: "سهم از بازار",
			SatheTavangariyeMali: "سصح توانگری مالی",
			TedadeMarakezePardakhteKhesarat: "تعداد مراکز پرداخت خسارت"
		};
		this.companyInfoDataSource = Object.keys(this.policy.InsuranceCompanyStatistics)
			.filter(key => key != "ExtensionData")
			.map(key => {
				return { key: translate[key], value: this.policy.InsuranceCompanyStatistics[key] };
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
	get policy() {
		return this._policy;
	}
	@Input()
	set policyTerm(value) {
		if (!this.policy) return;
		if (!value) return;
		this.price = this.policy.Prices.find(price => price.Description == value);
	}
	@ViewChild("modeDetail") modeDetail: MatExpansionPanel;
	logos: { [name: string]: string };
	price: PriceModel;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];

	constructor() {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
		this.initInsLogos();
		setTimeout(() => {
			this.policyTerm = "یک سال";
		}, 333);
	}

	ngOnInit() {}
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
	showDetail() {
		this.modeDetail.toggle();
	}
	select() {
		this.selected.emit(this.price.ProductId);
	}
}
