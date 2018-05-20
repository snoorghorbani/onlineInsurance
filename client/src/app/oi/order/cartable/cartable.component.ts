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
import { BehaviorSubject } from "rxjs";

import * as fromLayout from "@soushians/layout";
import { UtilityService, DateClass, SocketService } from "@soushians/infra";
import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";
import { FormSchemaModel, FieldConfig } from "@soushians/form";

import { OrderSummaryModel, OrderModel, OrderFormModel } from "../models";
import { GetMyCartableStartAction } from "../services/api";
import { OrderService, CartableService } from "../services";
import { FieldModel } from "../models/field.model";

@Component({
	selector: "cartable",
	templateUrl: "./cartable.component.html",
	styleUrls: [ "./cartable.component.css" ]
})
export class CartableComponent {
	orders$: Observable<OrderSummaryModel[]>;
	activeOrder$: Observable<OrderFormModel>;
	activeOrderEditableField$: Observable<FieldModel[]>;
	activeOrderEditableFieldSchema$: Observable<FormSchemaModel>;
	activeOrderReadonlyField$: Observable<FieldModel[]>;
	@ViewChild("requestDetailNav") sidebar: MatSidenav;
	@ViewChild("requestDetailTabs") sidebarTabs: MatTabGroup;

	constructor(
		private store: Store<fromLayout.FeatureState>,
		private service: OrderService,
		private signinService: SigninService,
		private cartableService: CartableService,
		private snackBar: MatSnackBar
	) {
		this.orders$ = this.service.GetMyCartable();
	}

	openRequest(OrderSummary: OrderSummaryModel) {
		this.activeOrder$ = this.service.GetOrder(OrderSummary);
		this.activeOrderReadonlyField$ = this.cartableService.getReadonlyField(this.activeOrder$);
		this.activeOrderEditableField$ = this.cartableService.getEditableField(this.activeOrder$);
		this.activeOrderEditableFieldSchema$ = this.cartableService.getEditableFieldSchema(
			this.activeOrderEditableField$
		);

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
}
