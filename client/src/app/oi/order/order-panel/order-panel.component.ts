import { Component, ViewChild, OnDestroy, OnInit, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MatSnackBar } from "@angular/material";
import { Store } from "@ngrx/store";
import { Subject, BehaviorSubject } from "rxjs";

import { FormSchemaModel, FormViewComponent } from "@soushians/form";

import { OrderFormModel } from "../models";
import { ApproveOrderStartAction, RejectOrderStartAction } from "../services/api";
import { OrderService, CartableService } from "../services";
import { FieldModel } from "../models/field.model";
import { map, switchMap } from "rxjs/operators";
import { AppState } from "../order.reducers";
import { ChangeLayout } from "@soushians/layout";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "order-panel",
	templateUrl: "./order-panel.component.html",
	styleUrls: [ "./order-panel.component.css" ]
})
export class OrderPanelComponent implements OnInit, AfterViewInit, OnDestroy {
	unsubscribe = new Subject<void>();
	flowIsActive$: Observable<boolean>;
	displayedColumns: string[] = [ "Summary", "WorkflowState" ];

	order$ = new BehaviorSubject<OrderFormModel>(new OrderFormModel());
	filledorder$: Observable<OrderFormModel>;
	activeOrderEditableField: FieldModel[];
	orderEditableFieldSchema: FormSchemaModel;
	readonlyFields: FieldModel[];
	@ViewChild("formRef") formEl: FormViewComponent;

	constructor(
		private store: Store<AppState>,
		private service: OrderService,
		private router: ActivatedRoute,
		private cartableService: CartableService,
		private snackBar: MatSnackBar
	) {}
	ngOnInit() {
		this._select_order();
		this._observe_on_order();
		this.store.select(s => s.order.orderPanel.data).subscribe(order => {
			debugger;
			this.order$.next(order);
		});
		this._set_flow_finished();
	}
	ngAfterViewInit() {
		this.store.dispatch(new ChangeLayout("with-margin"));
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	approveOrder(formValue) {
		debugger;
		const order = this.order$.getValue();
		Object.keys(formValue).forEach(key => (order[key].Value = formValue[key]));
		this.store.dispatch(new ApproveOrderStartAction(order));
	}
	rejectOrder(formValue) {
		debugger;
		const order = this.order$.getValue();
		Object.keys(formValue).forEach(key => (order[key].Value = formValue[key]));
		this.store.dispatch(new RejectOrderStartAction(order));
	}
	_select_order() {
		this.router.params
			.pipe(map(params => params.id), switchMap((Id: string) => this.service.GetOrder({ Id })))
			.subscribe(order => {
				debugger;
				this.order$.next(order);
			});
	}
	_observe_on_order() {
		this.order$.subscribe(order => {
			debugger;
			this.readonlyFields = this.cartableService.getReadonlyField(order);
			this.activeOrderEditableField = this.cartableService.getEditableField(order);
			this.orderEditableFieldSchema = this.cartableService.getEditableFieldSchema(this.activeOrderEditableField);
		});
	}
	_set_flow_finished() {
		this.flowIsActive$ = this.order$.pipe(map(o => o.WorkflowState.Status != 3));
	}
}
