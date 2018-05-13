import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
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
import { MatExpansionPanel } from "@angular/material";
import { GeoBoundaryService } from "../../geo-boundary";
import { CityModel } from "../../geo-boundary/models";
import { NewOrderFormUpdateAction } from "../new-order/new-order.actions";
import { from } from "rxjs";
import { SaveOrderStartAction } from "../services/api/save-order";

@Component({
	selector: "order-insurer-info",
	templateUrl: "./insurer-info.component.html",
	styleUrls: [ "./insurer-info.component.css" ]
})
export class InsurerInfoComponent implements OnInit {
	@Output() done = new EventEmitter();
	formGroup: FormGroup;
	orderForm$: Observable<OrderFormModel>;
	PolicyholderFirstName$: Observable<FieldModel>;
	PolicyholderLastName$: Observable<FieldModel>;
	LastPolicyImage$: Observable<FieldModel>;
	PolicyholderCarIdCardBack$: Observable<FieldModel>;
	PolicyholderCarIdCardFront$: Observable<FieldModel>;
	PolicyholderNationalCode$: Observable<FieldModel>;
	PolicyholderBirthDate$: Observable<FieldModel>;
	PolicyholderFatherName$: Observable<FieldModel>;
	DeliveryAddress$: Observable<FieldModel>;
	DeliveryAddressCityId$: Observable<FieldModel>;
	PolicyAddressCityId$: Observable<FieldModel>;
	PolicyAddress$: Observable<FieldModel>;
	PolicyAddressSource$: Observable<FieldModel>;
	PolicyholderPhone$: Observable<FieldModel>;
	DeliveryDate$: Observable<FieldModel>;
	DeliveryTime$: Observable<FieldModel>;
	DelieryTimeTableDisplayColumns: string[];
	DelieryTimeTableDataSource$: Observable<DeliveryTimeModel[]>;
	Cities$: Observable<CityModel[]>;
	@ViewChild("PolicyAddressExpansion") PolicyAddressExpansion: MatExpansionPanel;
	@ViewChild("PolicyHolderExpansion") PolicyHolderExpansion: MatExpansionPanel;
	constructor(
		private store: Store<AppState>,
		private router: Router,
		private fileService: FileService,
		private orderService: OrderService,
		private geoBoundaryService: GeoBoundaryService
	) {
		this.initFormGroup();
		this.DelieryTimeTableDisplayColumns = [ "Checkbox", "Date", "Time" ];
		this.DelieryTimeTableDataSource$ = this.orderService.GetDeliveryTimeTable();
		this.Cities$ = this.geoBoundaryService.GetCities();
		// this.DelieryTimeTableDataSource$.subscribe(data => {
		// 	debugger;
		// });
		this.orderForm$ = this.store.select(state => state.order.newOrder.data).filter(orderForm => orderForm != null);
		this.PolicyholderFirstName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFirstName);
		this.PolicyholderLastName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderLastName);
		this.LastPolicyImage$ = this.orderForm$.map(orderForm => orderForm.LastPolicyImage);
		this.PolicyholderCarIdCardBack$ = this.orderForm$.map(orderForm => orderForm.PolicyholderCarIdCardBack);
		this.PolicyholderCarIdCardFront$ = this.orderForm$.map(orderForm => orderForm.PolicyholderCarIdCardFront);
		this.PolicyholderNationalCode$ = this.orderForm$.map(orderForm => orderForm.PolicyholderNationalCode);
		this.PolicyholderBirthDate$ = this.orderForm$.map(orderForm => orderForm.PolicyholderBirthDate);
		this.PolicyholderFatherName$ = this.orderForm$.map(orderForm => orderForm.PolicyholderFatherName);
		this.PolicyAddressCityId$ = this.orderForm$.map(orderForm => orderForm.PolicyAddressCityId);
		this.PolicyAddress$ = this.orderForm$.map(orderForm => orderForm.PolicyAddress);
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
			debugger;
			if (source != "3") this.formGroup.get("PolicyAddress").disable();
			else this.formGroup.get("PolicyAddress").enable();
			this.PolicyAddressExpansion.expanded = source == "3";
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

			DeliveryAddressCityId: new FormControl(""),
			DeliveryAddress: new FormControl(""),

			PolicyAddressSource: new FormControl(""),
			PolicyAddressCityId: new FormControl(""),
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
		debugger;
		from([ this.formGroup.value ])
			.combineLatest(this.orderForm$)
			.map(([ formValues, orderForm ]) => {
				Object.keys(formValues).forEach(key => (orderForm[key].Value = formValues[key]));
				return orderForm;
			})
			.subscribe(orderForm => {
				this.store.dispatch(new NewOrderFormUpdateAction(orderForm));
				this.store.dispatch(new SaveOrderStartAction(orderForm));
				this.done.emit();
			})
			.unsubscribe();
	}

	step = 0;

	setStep(index: number) {
		this.step = index;
	}

	nextStep() {
		this.step++;
	}

	prevStep() {
		this.step--;
	}
}
