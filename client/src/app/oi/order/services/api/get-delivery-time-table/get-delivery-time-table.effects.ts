import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderService } from "../../order.service";
import {
	GET_DELIVERY_TIME_TABLE_ACTION_TYPES,
	GetDeliveryTimeTableActions,
	GetDeliveryTimeTableSucceedAction,
	GetDeliveryTimeTableFailedAction
} from "./get-delivery-time-table.actions";

@Injectable()
export class GetDeliveryTimeTableApiEffects {
	constructor(private actions$: Actions<GetDeliveryTimeTableActions>, private service: OrderService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_DELIVERY_TIME_TABLE_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.GetDeliveryTimeTable()),
			map(res => new GetDeliveryTimeTableSucceedAction(res)),
			catchError(err => Observable.of(new GetDeliveryTimeTableFailedAction(err)))
		);
}
