import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef,
	ViewChildren,
	AfterViewInit
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { MatSidenav, MatTabGroup, MatSnackBar } from "@angular/material";
import { Store } from "@ngrx/store";

import * as fromLayout from "@soushians/layout";
import { UtilityService, DateClass } from "@soushians/infra";
import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";

import { OrderSummaryModel, OrderModel, OrderFormModel } from "../models";
import { GetMyCartableStartAction } from "../services/api";
import { OrderService } from "../services";
import { FieldModel } from "../models/field.model";

@Component({
	selector: "cartable",
	templateUrl: "./cartable.component.html",
	styleUrls: [ "./cartable.component.css" ]
})
export class CartableComponent implements AfterViewInit {
	@Input("status") status$: Observable<responseStatusTypes>;
	@Input() formGroup: FormGroup;
	orders$: Observable<OrderSummaryModel[]>;
	activeOrder$: Observable<OrderFormModel>;
	activeOrderEditableField$: Observable<FieldModel[]>;
	activeOrderReadonlyField$: Observable<FieldModel[]>;
	nowInPersian: DateClass;
	years: string[];
	months: string[];
	monthAndYearFormGroup: FormGroup;
	set RequestFinalPrice(value) {
		// this.activeOrder$.Request.FinalPrice = value;
		// this.activeOrder$.Request.Marketing = this.activeOrder$.Request.FinalPrice * 0.1;
	}
	get RequestFinalPrice() {
		// return this.activeOrder$.Request.FinalPrice;
		return "";
	}
	@ViewChild("requestDetailNav") sidebar: MatSidenav;
	@ViewChild("requestDetailTabs") sidebarTabs: MatTabGroup;

	constructor(
		private store: Store<fromLayout.FeatureState>,
		private utilityService: UtilityService,
		private service: OrderService,
		private signinService: SigninService,
		private snackBar: MatSnackBar
	) {
		// this.store.dispatch(new fromLayout.ChangeLayout("without-margin"));
		this.orders$ = this.service.GetMyCartable();
		// this.activeOrder$ = new OrderModel();
	}

	openRequest(OrderSummary: OrderSummaryModel) {
		debugger;
		this.activeOrder$ = this.service.GetOrder(OrderSummary);
		this.activeOrderEditableField$ = this.activeOrder$.map(orderForm => {
			const fields = [];
			Object.keys(orderForm).forEach(key => {
				if (orderForm[key].Status == 2) fields.push(orderForm[key]);
			});
			return fields;
		});
		this.activeOrderEditableField$.subscribe();
		this.activeOrderReadonlyField$ = this.activeOrder$.map(orderForm => {
			const fields: FieldModel[] = [];
			Object.keys(orderForm).forEach(key => {
				if (orderForm[key].Status == 4) fields.push(orderForm[key]);
			});
			fields.forEach(item => {
				if (item.Options != null) {
					const selectedOption = item.Options.find(option => option.Value == item.Value);
					if (selectedOption) item.Value = selectedOption.DisplayValue || selectedOption.DisplayName;
					if (!selectedOption) debugger;
				}
			});
			return fields;
		});
		debugger;
		setTimeout(() => {
			if (!this.sidebar.opened) this.sidebar.open();
		}, 100);
	}
	openRequestDetailsTab() {
		this.sidebarTabs.selectedIndex = 0;
	}
	openHistoryTab() {
		this.sidebarTabs.selectedIndex = 2;
	}
	openAttachmentTab() {
		this.sidebarTabs.selectedIndex = 3;
	}
	openCommunicationTab() {
		this.sidebarTabs.selectedIndex = 4;
	}
	openMoneyTab() {
		this.sidebarTabs.selectedIndex = 5;
	}
	submit() {
		this.openHistoryTab();
		this.snackBar.open("اطلاعات ثبت گردید");
	}
	updatePolicy() {
		debugger;
	}
	ngAfterViewInit() {}
}
