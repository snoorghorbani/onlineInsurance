import { Component, AfterViewInit, Input, ViewChild } from "@angular/core";
import { MatHorizontalStepper } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

let id;

@Component({
	selector: "order-purchase-stepper",
	templateUrl: "./purchase-stepper.component.html",
	styleUrls: [ "./purchase-stepper.component.css" ]
})
export class PurchaseStepperComponent implements AfterViewInit {
	@Input() type;
	@Input() id;
	@Input() step;
	@Input() progress;

	@ViewChild("stepper") stepperRef: MatHorizontalStepper;

	get step1Url() {
		return `/order/purchase/${this.types[this.type]}/select-product`;
	}
	get step2Url() {
		return `/order/insurer-info/${this.type}/${this.id}`;
	}
	get step3Url() {
		return `/order/review/${this.id}`;
	}
	step0formgroup: FormGroup;
	step1formgroup: FormGroup;
	step2formgroup: FormGroup;

	types = {
		1: "third-party-policy",
		3: "motorcycle-policy",
		4: "fire-policy",
		5: "earthquake-policy",
		8: "medical-policy"
	};
	step2label = {
		1: "مشخضات خودرو",
		3: "مشخصات موتورسیکلت",
		4: "مشخصات ساختمان",
		5: "مشخصات ساختمان",
		8: "مشخصات پزشک"
	};

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this._init_properties();
	}

	ngAfterViewInit() {
		debugger;
		this.activatedRoute.params.subscribe(params => {
			if ("Id" in params) {
				this.id = id = params.Id;
			}
		});
		for (let i = 0; i < +this.step; i++) {
			this[`step${i}formgroup`].patchValue({
				enable: true
			});
		}

		debugger;
		this.stepperRef.selectedIndex = +this.step;
		this.stepperRef.selectionChange.subscribe(({ selectedIndex }) => {
			debugger;
			// if (selectedIndex == 0) {
			// 	if (!this.type) return;
			// 	this.router.navigate([ this.step1Url ]);
			// } else if (selectedIndex == 1) {
			// 	if (!this.id) return;
			// 	if (!this.type) return;
			// 	this.router.navigate([ this.step2Url ]);
			// } else {
			// 	if (!this.id) return;
			// 	if (!this.type) return;
			// 	this.router.navigate([ this.step3Url ]);
			// }
		});
	}
	/**
	 * view methods
	 */

	/**
	 * private methods
	 */
	_init_properties() {
		this.step = 0;
		this.id = id;
		this.step1formgroup = new FormGroup({
			enable: new FormControl(null, Validators.required)
		});
		this.step2formgroup = new FormGroup({
			enable: new FormControl(null, Validators.required)
		});
		this.step0formgroup = new FormGroup({
			enable: new FormControl(null, Validators.required)
		});
	}
}
