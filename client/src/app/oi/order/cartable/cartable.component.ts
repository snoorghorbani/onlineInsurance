import { Component, ViewChild, OnDestroy, OnInit, AfterViewInit } from "@angular/core";
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
import { ChangeLayout } from "@soushians/layout";

@Component({
	selector: "cartable",
	templateUrl: "./cartable.component.html",
	styleUrls: [ "./cartable.component.css" ]
})
export class CartableComponent implements OnInit, AfterViewInit, OnDestroy {
	unsubscribe = new Subject<void>();
	orders$: Observable<OrderSummaryModel[]>;

	displayedColumns: string[] = [ "Summary", "WorkflowState", "Actions" ];

	constructor(
		private store: Store<FeatureState>,
		private service: OrderService,
		private cartableService: CartableService,
		private snackBar: MatSnackBar
	) {
		this.orders$ = this.service.GetMyCartable();
	}
	ngOnInit() {}
	ngAfterViewInit() {
		this.store.dispatch(new ChangeLayout("with-margin"));
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
