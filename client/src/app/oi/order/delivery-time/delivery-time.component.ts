import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { DeliveryTimeModel } from '../models';
import { OrderService } from '../services';

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
