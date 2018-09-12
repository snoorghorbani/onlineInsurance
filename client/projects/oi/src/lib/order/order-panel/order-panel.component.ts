import { Component, ViewChild, OnDestroy, OnInit, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MatSnackBar } from "@angular/material";
import { Store } from "@ngrx/store";
import { Subject, BehaviorSubject } from "rxjs";

import { FormSchemaModel, FormViewComponent } from "@soushians/form";

import { OrderFormType } from "../models";
import { ApproveOrderStartAction, RejectOrderStartAction } from "../services/api";
import { OrderService, CartableService, OrderFormService } from "../services";
import { FieldModel } from "../models/field.model";
import { map, switchMap } from "rxjs/operators";
import { AppState } from "../order.reducers";
import { ChangeLayout } from "@soushians/layout";
import { ActivatedRoute } from "@angular/router";
import { OrderTypes } from "../models/order-types-enum";

@Component({
	selector: "order-panel",
	templateUrl: "./order-panel.component.html",
	styleUrls: [ "./order-panel.component.css" ]
})
export class OrderPanelComponent implements OnInit, AfterViewInit, OnDestroy {
	unsubscribe = new Subject<void>();
	displayedColumns: string[] = [ "Summary", "WorkflowState" ];

	_orderForm: OrderFormType;
	set orderForm(orderForm: OrderFormType) {
		if (!orderForm) return;
		this._orderForm = orderForm;
		this._observe_on_order();
	}
	get orderForm() {
		return this._orderForm;
	}
	get flowIsActive() {
		if (!this.orderForm) return false;
		return this.orderForm.WorkflowState.Status != 3;
	}
	filledorder$: Observable<OrderFormType>;
	activeOrderEditableField: FieldModel[];
	orderEditableFieldSchema: FormSchemaModel;
	readonlyFields: any;
	@ViewChild("formRef") formEl: FormViewComponent;

	readonlyFielsGroup = [];

	constructor(
		private store: Store<AppState>,
		private service: OrderService,
		private router: ActivatedRoute,
		private cartableService: CartableService,
		private snackBar: MatSnackBar
	) {}
	ngOnInit() {
		this._select_order();
		// this._observe_on_order();
		this.store.select(s => s.order.orderPanel.data).subscribe(order => {
			this.orderForm = order;
		});
	}
	ngAfterViewInit() {
		this.store.dispatch(new ChangeLayout("with-margin"));
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	approveOrder(formValue) {
		Object.keys(formValue).forEach(key => (this.orderForm[key].Value = formValue[key]));
		this.store.dispatch(new ApproveOrderStartAction(this.orderForm));
	}
	rejectOrder(formValue) {
		Object.keys(formValue).forEach(key => (this.orderForm[key].Value = formValue[key]));
		this.store.dispatch(new RejectOrderStartAction(this.orderForm));
	}
	_select_order() {
		this.router.params
			.pipe(map(params => params.id), switchMap((Id: string) => this.service.GetOrder({ Id })))
			.subscribe(order => {
				this.orderForm = order;
			});
	}
	_observe_on_order() {
		this.readonlyFields = this.cartableService.getReadonlyField(this.orderForm);
		this.activeOrderEditableField = this.cartableService.getEditableField(this.orderForm);
		this.orderEditableFieldSchema = this.cartableService.getEditableFieldSchema(this.activeOrderEditableField);
		this._create_readonlyFielsGroup();
	}

	_create_readonlyFielsGroup() {
		// this.readonlyFielsGroup= this.readonlyFields.reduce()
	}
}
