import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { Store } from "@ngrx/store";
import { MatExpansionPanel } from "@angular/material";
import { UploadEvent } from "ngx-file-drop";
import { filter, distinctUntilChanged } from "rxjs/operators";

import { SigninRequiredAction } from "@soushians/authentication";

import { OrderFormModel, DeliveryTimeModel } from "../../models";
import { AppState } from "../../order.reducers";
import { FieldModel } from "../../models/field.model";
import { FileService } from "../../services/file.service";
import { GetNewOrderFormStartAction } from "../../services/api";
import { OrderService } from "../../services";
import { GeoBoundaryService } from "../../../geo-boundary";
import { CityModel } from "../../../geo-boundary/models";
import { NewOrderFormUpdateAction } from "../../new-order/new-order.actions";
import { SaveOrderStartAction } from "../../services/api/save-order";

@Component({
	selector: "order-fire-policy-insurer-info",
	templateUrl: "./fire-policy-insurer-info.component.html",
	styleUrls: [ "./fire-policy-insurer-info.component.css" ]
})
export class FirePolicyInsurerInfoComponent implements OnInit {
	@Output() done = new EventEmitter();
	@Output("signInRequest") signInRequest$ = new EventEmitter();
	signedIn: boolean;
	formGroup: FormGroup;
	orderForm: OrderFormModel;
	orderForm$: Observable<OrderFormModel>;
	PolicyholderFirstName$: Observable<FieldModel>;
	PolicyholderLastName$: Observable<FieldModel>;
	LastPolicyImage$: Observable<FieldModel>;
	CarCardBackImage$: Observable<FieldModel>;
	CarCardFrontImage$: Observable<FieldModel>;
	PolicyholderNationalCode$: Observable<FieldModel>;
	PolicyholderBirthDate$: Observable<FieldModel>;
	PolicyholderFatherName$: Observable<FieldModel>;
	DeliveryPlaceAddress$: Observable<FieldModel>;
	DeliveryPlaceCityId$: Observable<FieldModel>;
	PolicyAddressCityId$: Observable<FieldModel>;
	PolicyAddress$: Observable<FieldModel>;
	PolicyAddressSource$: Observable<FieldModel>;
	PolicyholderPhone$: Observable<FieldModel>;
	DeliveryDate$: Observable<FieldModel>;
	DeliveryTime$: Observable<FieldModel>;
	PolicyholderMobile$: Observable<FieldModel>;
	DelieryTimeTableDisplayColumns: string[];
	DelieryTimeTableDataSource$: Observable<DeliveryTimeModel[]>;
	Cities$: Observable<CityModel[]>;
	@ViewChild("PolicyAddressExpansion") PolicyAddressExpansion: MatExpansionPanel;
	@ViewChild("PolicyHolderExpansion") PolicyHolderExpansion: MatExpansionPanel;
	constructor(
		private store: Store<AppState>,
		private fileService: FileService,
		private orderService: OrderService,
		private geoBoundaryService: GeoBoundaryService
	) {
		this.initFormGroup();
		this.DelieryTimeTableDisplayColumns = [ "Checkbox", "Day", "Date", "Time" ];
		this.DelieryTimeTableDataSource$ = this.orderService.GetDeliveryTimeTable();
		this.Cities$ = this.geoBoundaryService.GetCities();
		// this.DelieryTimeTableDataSource$.subscribe(data => {
		// 	debugger;
		// });
		this.orderForm$ = this.store
			.select(state => state.order.newOrder.data as OrderFormModel)
			.pipe(filter(orderForm => orderForm != null), distinctUntilChanged());
		this.orderForm$.subscribe(orderForm => (this.orderForm = orderForm));
		this.PolicyholderFirstName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFirstName);
		this.PolicyholderLastName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderLastName);
		this.LastPolicyImage$ = this.orderForm$.map(orderForm => orderForm.LastPolicyImage);
		this.CarCardBackImage$ = this.orderForm$.map(orderForm => orderForm.CarCardBackImage);
		this.CarCardFrontImage$ = this.orderForm$.map(orderForm => orderForm.CarCardFrontImage);
		this.PolicyholderNationalCode$ = this.orderForm$.map(orderForm => orderForm.PolicyholderNationalCode);
		this.PolicyholderBirthDate$ = this.orderForm$.map(orderForm => orderForm.PolicyholderBirthDate);
		this.PolicyholderFatherName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFatherName);
		this.PolicyAddressCityId$ = this.orderForm$.map(orderForm => orderForm.PolicyAddressCityId);
		this.PolicyAddress$ = this.orderForm$.map(orderForm => orderForm.PolicyAddress);
		this.PolicyholderPhone$ = this.orderForm$.map(orderForm => orderForm.PolicyholderPhone);
		this.PolicyAddressSource$ = this.orderForm$.map(orderForm => orderForm.PolicyAddressSource);
		this.DeliveryPlaceAddress$ = this.orderForm$.map(orderForm => orderForm.DeliveryPlaceAddress);
		this.DeliveryPlaceCityId$ = this.orderForm$.map(orderForm => orderForm.DeliveryPlaceCityId);
		this.DeliveryDate$ = this.orderForm$.map(orderForm => orderForm.DeliveryDate);
		this.DeliveryTime$ = this.orderForm$.map(orderForm => orderForm.DeliveryTime);
		this.PolicyholderMobile$ = this.orderForm$.map(orderForm => orderForm.PolicyholderMobile);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction(1));

		// this.orderForm$.subscribe(orderForm => {
		// 	Object.keys(this.formGroup.controls).forEach(key => {
		// 		if (orderForm[key].Status == 1) {
		// 			this.formGroup.get(key).setValidators([ Validators.required ]);
		// 			this.formGroup.get(key).updateValueAndValidity();
		// 		}
		// 	});
		// });

		this.formGroup.get("PolicyAddressSource").valueChanges.subscribe(source => {
			if (source != "3") this.formGroup.get("PolicyAddress").disable();
			else this.formGroup.get("PolicyAddress").enable();
			this.PolicyAddressExpansion.expanded = source == "3";
		});
	}
	DeliverDateTime: string;
	initFormGroup() {
		this.formGroup = new FormGroup({
			PolicyholderFirstName: new FormControl("", [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderLastName: new FormControl("", [ Validators.required, Validators.pattern(/[\u0600-\u06FF\s]/) ]),
			PolicyholderMobile: new FormControl("", [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderPhone: new FormControl("", [ Validators.required, Validators.pattern(/[0-9]/) ]),
			LastPolicyImage: new FormControl("3dfce20f-47f6-495d-975e-a5dd640eb4f8"),
			CarCardBackImage: new FormControl("3dfce20f-47f6-495d-975e-a5dd640eb4f8"),
			CarCardFrontImage: new FormControl("3dfce20f-47f6-495d-975e-a5dd640eb4f8"),

			// LastPolicyDiscountYears: new FormControl("1"),
			// LastPolicyUsedPropertyCoupons: new FormControl("0"),
			// LastPolicyNumOfUsedPersonCoupon: new FormControl("0"),

			PolicyholderNationalCode: new FormControl("", [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderBirthDate: new FormControl("", [ Validators.required ]),
			PolicyholderFatherName: new FormControl("", [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),

			DeliveryPlaceCityId: new FormControl("", [ Validators.required ]),
			DeliveryPlaceAddress: new FormControl("", [ Validators.required ]),

			PolicyAddressSource: new FormControl("", [ Validators.required ]),
			PolicyAddressCityId: new FormControl("", [ Validators.required ]),
			PolicyAddress: new FormControl("", [ Validators.required ]),

			DeliveryDate: new FormControl("", [ Validators.required ])
			// DeliveryTime: new FormControl("")
		});
	}
	LastPolicyImageDropped(e: UploadEvent) {
		debugger;
		this.fileService
			.AttachFileToOrder(e.files[0])
			.subscribe(() => {
				debugger;
			})
			.unsubscribe();
	}
	LastPolicyImageFileOver() {}
	LastPolicyImageFileLeave() {}
	disbaleForm(e) {
		var method: "disable" | "enable" = e.checked ? "disable" : "enable";

		this.PolicyHolderExpansion.expanded = !e.checked;

		this.formGroup.get("PolicyholderNationalCode")[method]();
		this.formGroup.get("PolicyholderBirthDate")[method]();
		this.formGroup.get("PolicyholderFatherName")[method]();
	}
	selectDeliveryTime(row: DeliveryTimeModel) {
		this.DeliverDateTime = row.DayOfWeek + row.TimeFrom.Hours + row.TimeTo.Hours;
		this.formGroup.patchValue({
			DeliveryDate: row.Date,
			DeliveryTime: row.TimeFrom.Hours
		});
	}

	save() {
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		Object.keys(this.formGroup.value).forEach(key => (this.orderForm[key].Value = this.formGroup.value[key]));
		this.store.dispatch(new NewOrderFormUpdateAction(this.orderForm));
		this.store.dispatch(new SaveOrderStartAction(this.orderForm));
		this.done.emit(this.orderForm);
	}

	signInRequest() {
		debugger;
		this.store.dispatch(new SigninRequiredAction());
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
