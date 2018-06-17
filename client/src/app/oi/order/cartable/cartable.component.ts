import { Component, ViewChild, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { MatSidenav, MatTabGroup, MatSnackBar } from "@angular/material";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { FormSchemaModel, FormViewComponent } from "@soushians/form";

import { OrderSummaryModel, OrderFormModel } from "../models";
import { ApproveOrderStartAction, RejectOrderStartAction } from "../services/api";
import { OrderService, CartableService } from "../services";
import { FieldModel } from "../models/field.model";
import { delay, map, tap, filter, takeUntil, combineLatest, take } from "rxjs/operators";
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
		private cartableService: CartableService,
		private snackBar: MatSnackBar
	) {
		this.orders$ = this.service.GetMyCartable();

		function random() {
			return Math.floor(Math.random() * 100);
		}

		const source = Observable.concat(
			Observable.defer(() => Observable.of(random())),
			Observable.defer(() => Observable.of(random())).delay(1)
		);

		function observer(name: string) {
			return {
				next: (value: number) => console.log(`observer ${name}: ${value}`),
				complete: () => console.log(`observer ${name}: complete`)
			};
		}

		const p = source.publishBehavior(-1);
		p.subscribe(observer("a"));
		p.connect();
		p.subscribe(observer("b"));
		setTimeout(() => p.subscribe(observer("c")), 10);
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
		this.activeOrder$.pipe(take(1)).subscribe(item => (this.activeOrderId = item.Id.Value));
		this.activeOrder$
			.pipe(
				takeUntil(this.unsubscribe),
				take(1),
				delay(1000),
				filter(() => {
					debugger;
					return !this.sidebar.opened;
				}),
				tap(() => this.sidebar.open())
			)
			.subscribe();
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
