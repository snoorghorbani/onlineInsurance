import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef,
	ViewChildren,
	AfterViewInit,
	QueryList,
	ViewContainerRef,
	OnDestroy
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { MatSidenav, MatTabGroup, MatSnackBar, MatExpansionPanel, MatAccordion } from "@angular/material";
import { Store } from "@ngrx/store";
import { BehaviorSubject, from, Subject } from "rxjs";

import { SigninService } from "@soushians/authentication";
import { FormSchemaModel, FieldConfig, FormViewComponent } from "@soushians/form";

import { OrderSummaryModel, OrderModel, OrderFormModel } from "../models";
import { GetMyCartableStartAction, ApproveOrderStartAction, RejectOrderStartAction } from "../services/api";
import { OrderService, CartableService, OrderFormService } from "../services";
import { FieldModel } from "../models/field.model";
import { ViewOrderComponent } from "../view-order/view-order.component";
import { delay, map, tap, filter, takeUntil, combineLatest, take } from "rxjs/operators";
import { takeWhile } from "rxjs-compat/operator/takeWhile";
import { FeatureState } from "../order.reducers";

@Component({
	selector: "cartable",
	templateUrl: "./cartable.component.html",
	styleUrls: [ "./cartable.component.css" ]
})
export class CartableComponent implements OnDestroy {
	unsubscribe = new Subject<void>();
	orders$: Observable<OrderSummaryModel[]>;
	activeOrder$: Observable<OrderFormModel>;
	filledActiveOrder$: Observable<OrderFormModel>;
	activeFormGroup$: Observable<FormGroup>;
	activeOrderId: string;
	activeOrderEditableField$: Observable<FieldModel[]>;
	activeOrderEditableFieldSchema$: Observable<FormSchemaModel>;
	activeOrderReadonlyField$: Observable<FieldModel[]>;
	@ViewChild("requestDetailNav") sidebar: MatSidenav;
	@ViewChild("requestDetailTabs") sidebarTabs: MatTabGroup;
	@ViewChild(FormViewComponent) viewFormComponent: FormViewComponent;

	constructor(
		private store: Store<FeatureState>,
		private service: OrderService,
		private orderFormService: OrderFormService,
		private signinService: SigninService,
		private cartableService: CartableService,
		private snackBar: MatSnackBar
	) {
		this.orders$ = this.service.GetMyCartable();
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	openRequest(OrderSummary: OrderSummaryModel) {
		debugger;
		this.activeOrder$ = this.service.GetOrder(OrderSummary);
		this.activeOrderReadonlyField$ = this.cartableService.getReadonlyField(this.activeOrder$);
		this.activeOrderEditableField$ = this.cartableService.getEditableField(this.activeOrder$);
		this.activeOrderEditableFieldSchema$ = this.cartableService.getEditableFieldSchema(
			this.activeOrderEditableField$
		);
		this.activeFormGroup$ = this.activeOrder$.pipe(delay(1000), map(() => this.viewFormComponent.formGroup.value));
		this.activeOrder$
			.pipe(takeUntil(this.unsubscribe), take(1))
			.subscribe(item => (this.activeOrderId = item.Id.Value));
		this.activeOrder$.pipe(
			takeUntil(this.unsubscribe),
			take(1),
			delay(1000),
			filter(() => !this.sidebar.opened),
			tap(() => this.sidebar.open())
		);
		this.filledActiveOrder$ = this.activeFormGroup$.pipe(
			takeUntil(this.unsubscribe),
			combineLatest(this.activeOrder$),
			map(([ formValues, orderForm ]: [any, OrderFormModel]) => {
				Object.keys(formValues).forEach(key => (orderForm[key].Value = formValues[key]));
				return orderForm;
			})
		);
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
	approveOrder() {
		this.filledActiveOrder$.subscribe(orderForm => this.store.dispatch(new ApproveOrderStartAction(orderForm)));
	}
	rejectOrder() {
		this.filledActiveOrder$.subscribe(orderForm => this.store.dispatch(new RejectOrderStartAction(orderForm)));
	}
}
