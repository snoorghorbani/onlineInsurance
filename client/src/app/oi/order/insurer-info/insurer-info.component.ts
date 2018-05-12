import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { OrderFormModel, DeliveryTimeModel } from "../models";
import { Router } from "@angular/router";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { FieldModel } from "../models/field.model";
import { FileService } from "../services/file.service";
import { of } from "rxjs/internal/observable/of";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../services/api";
import { ComparePoliciesStartAction } from "../../policy/services/api";
import { OrderService } from "../services";

@Component({
	selector: "app-insurer-info",
	templateUrl: "./insurer-info.component.html",
	styleUrls: [ "./insurer-info.component.css" ]
})
export class InsurerInfoComponent implements OnInit {
	formGroup: FormGroup;
	orderForm$: Observable<OrderFormModel>;
	PolicyholderFirstName$: Observable<FieldModel>;
	PolicyholderLastName$: Observable<FieldModel>;
	LastPolicyImage$: Observable<FieldModel>;
	PolicyholderNationalCode$: Observable<FieldModel>;
	PolicyholderBirthDate$: Observable<FieldModel>;
	PolicyholderFatherName$: Observable<FieldModel>;
	DeliveryAddress$: Observable<FieldModel>;
	DeliveryAddressCityId$: Observable<FieldModel>;
	PolicyAddress$: Observable<FieldModel>;
	PolicyAddressCityId$: Observable<FieldModel>;
	PolicyAddressSource$: Observable<FieldModel>;
	PolicyholderPhone$: Observable<FieldModel>;
	DeliveryDate$: Observable<FieldModel>;
	DeliveryTime$: Observable<FieldModel>;
	DelieryTimeTableDisplayColumns: string[];
	DelieryTimeTableDataSource$: Observable<DeliveryTimeModel[]>;
	constructor(
		private store: Store<AppState>,
		private router: Router,
		private fileService: FileService,
		private orderService: OrderService
	) {
		this.initFormGroup();
		this.DelieryTimeTableDisplayColumns = [ "Checkbox", "Date", "Time" ];
		this.DelieryTimeTableDataSource$ = this.orderService.GetDeliveryTimeTable();
		// this.DelieryTimeTableDataSource$.subscribe(data => {
		// 	debugger;
		// });
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.PolicyholderFirstName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFirstName);
		this.PolicyholderLastName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderLastName);
		this.LastPolicyImage$ = this.orderForm$.map(orderForm => orderForm.LastPolicyImage);
		this.PolicyholderNationalCode$ = this.orderForm$.map(orderForm => orderForm.PolicyholderNationalCode);
		this.PolicyholderBirthDate$ = this.orderForm$.map(orderForm => orderForm.PolicyholderBirthDate);
		this.PolicyholderFatherName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFatherName);
		this.PolicyAddress$ = this.orderForm$.map(orderForm => orderForm.PolicyAddress);
		this.PolicyAddressCityId$ = this.orderForm$.map(orderForm => orderForm.PolicyAddressCityId);
		this.PolicyholderPhone$ = this.orderForm$.map(orderForm => orderForm.PolicyholderPhone);
		this.PolicyAddressSource$ = this.orderForm$.map(orderForm => orderForm.PolicyAddressSource);
		this.DeliveryAddress$ = this.orderForm$.map(orderForm => orderForm.DeliveryAddress);
		this.DeliveryAddressCityId$ = this.orderForm$.map(orderForm => orderForm.DeliveryAddressCityId);
		this.DeliveryDate$ = this.orderForm$.map(orderForm => orderForm.DeliveryDate);
		this.DeliveryTime$ = this.orderForm$.map(orderForm => orderForm.DeliveryTime);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction({ type: 1 } as GetNewOrderFormApiModel.Request));

		this.formGroup.get("PolicyAddressSource").valueChanges.subscribe(source => {
			if (source != "3") this.formGroup.get("PolicyAddress").disable();
			else this.formGroup.get("PolicyAddress").enable();
		});
	}
	DeliverDateTime: string;
	initFormGroup() {
		this.formGroup = new FormGroup({
			PolicyholderFirstName: new FormControl(""),
			PolicyholderLastName: new FormControl(""),
			LastPolicyImage: new FormControl(""),

			PolicyholderNationalCode: new FormControl(""),
			PolicyholderBirthDate: new FormControl(""),
			PolicyholderFatherName: new FormControl(""),

			DeliveryAddress: new FormControl(""),

			PolicyAddressSource: new FormControl(""),
			PolicyAddress: new FormControl(""),

			DeliveryDate: new FormControl(""),
			DeliveryTime: new FormControl("")
		});
		this.formGroup.get("PolicyholderNationalCode").disable();
		this.formGroup.get("PolicyholderBirthDate").disable();
		this.formGroup.get("PolicyholderFatherName").disable();
	}
	LastPolicyImageDropped(e) {
		this.fileService.AttachFileToOrder().subscribe(data => {
			debugger;
		});
	}
	LastPolicyImageFileOver(e) {}
	LastPolicyImageFileLeave(e) {}
	disbaleForm(e) {
		var method: "disable" | "enable" = e.checked ? "disable" : "enable";

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
}
