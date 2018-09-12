import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { OrderSummaryModel } from '../models';
import { OrderService, CartableService } from '../services';
import { FeatureState } from '../order.reducers';
import { ChangeLayout } from '@soushians/layout';

@Component({
	selector: 'cartable',
	templateUrl: './cartable.component.html',
	styleUrls: [ './cartable.component.css' ]
})
export class CartableComponent implements OnInit, AfterViewInit, OnDestroy {
	unsubscribe = new Subject<void>();
	orders$: Observable<OrderSummaryModel[]>;

	displayedColumns: string[] = [ 'Summary', 'WorkflowState', 'Actions' ];

	constructor(private store: Store<FeatureState>, private service: OrderService) {
		this.orders$ = this.service.GetMyCartable();
	}
	ngOnInit() {}
	ngAfterViewInit() {
		this.store.dispatch(new ChangeLayout('with-margin'));
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
