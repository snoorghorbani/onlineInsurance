import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { OrderFormModel, DeliveryTimeModel } from '../models';
import { Router } from '@angular/router';
import { AppState } from '../order.reducers';
import { Store } from '@ngrx/store';
import { FieldModel } from '../models/field.model';
import { FileService } from '../services/file.service';
import { of } from 'rxjs/internal/observable/of';
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from '../services/api';
import { OrderService } from '../services';
import { MatExpansionPanel } from '@angular/material';
import { GeoBoundaryService } from '../../geo-boundary';
import { CityModel } from '../../geo-boundary/models';
import { NewOrderFormUpdateAction } from '../new-order/new-order.actions';
import { from } from 'rxjs';
import { SaveOrderStartAction } from '../services/api/save-order';
import { UploadEvent } from 'ngx-file-drop';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'order-delivery-time',
	templateUrl: './delivery-time.component.html',
	styleUrls: [ './delivery-time.component.css' ]
})
export class DeliveryTimeComponent {
	@Input() formGroup: FormGroup;
	DelieryTimeTableDisplayColumns: string[];
	DelieryTimeTableDataSource$: Observable<DeliveryTimeModel[]>;
	DeliverDateTime: string;
	constructor(private orderService: OrderService) {
		this._set_properties_value_of_delivery_table();
	}

	selectDeliveryTime(row: DeliveryTimeModel) {
		this.DeliverDateTime = row.DayOfWeek + row.TimeFrom.Hours + row.TimeTo.Hours;
		this.formGroup.patchValue({
			DeliveryDate: row.Date,
			DeliveryTime: row.Id
		});
	}

	_set_properties_value_of_delivery_table() {
		this.DelieryTimeTableDisplayColumns = [ 'Checkbox', 'Day', 'Date', 'Time' ];
		this.DelieryTimeTableDataSource$ = this.orderService.GetDeliveryTimeTable();
	}
}
