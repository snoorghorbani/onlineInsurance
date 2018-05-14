import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderService } from "../../order.service";
import {
	GET_MY_ORDERS_ACTION_TYPES,
	GetMyOrdersActions,
	GetMyOrdersSucceedAction,
	GetMyOrdersFailedAction
} from "./get-my-orders.actions";

@Injectable()
export class GetMyOrdersApiEffects {
	constructor(private actions$: Actions<GetMyOrdersActions>, private service: OrderService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_MY_ORDERS_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.GetMyOrders()),
			map(res => new GetMyOrdersSucceedAction(res)),
			catchError(err => Observable.of(new GetMyOrdersFailedAction(err)))
		);
}
