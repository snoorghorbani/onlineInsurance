import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

import { MedicalPolicyOrderFormModel } from "../../models";
import { PolicyCompareModel } from "../../../policy/models/policy-compare.model";

@Component({
	selector: "order-medical-policy-products-list",
	templateUrl: "./medical-policy-products-list.component.html",
	styleUrls: [ "./medical-policy-products-list.component.css" ]
})
export class MedicalPolicyProductsListComponent implements OnInit, OnDestroy {
	@Output() select = new EventEmitter();
	@Input() policies: PolicyCompareModel[] = [];
	@Input() orderForm: MedicalPolicyOrderFormModel;

	unsubscribe = new Subject<void>();
	ready: boolean;
	logos: { [name: string]: string };
	displayedColumns: string[];
	dataSource = [];

	constructor() {
		this._set_default_values();
	}

	ngOnInit() {}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	selectPolicy(policy: PolicyCompareModel) {
		this.select.emit({ price: policy.Prices[0], policy });
	}

	getFinalPrice(policy: PolicyCompareModel) {
		// return policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).FinalPrice.DisplayValue;
	}
	getPrice(policy: PolicyCompareModel) {
		// return policy.Prices.find(p => p.Description == this.PolicyTermDisplayValue).Price.DisplayValue;
	}

	_set_default_values() {
		this.ready = false;
		this.displayedColumns = [
			"InsuranceCompany",
			"SatheTavangariyeMali",
			"TedadeMarakezePardakhteKhesarat",
			"ModatZamanePasokhgoieBeShekayat",
			"MizaneShekayateMoshtariyan",
			"actions"
		];
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
}
