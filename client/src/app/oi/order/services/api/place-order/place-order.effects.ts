import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderService } from "../../order.service";
import {
	PLACE_ORDER_ACTION_TYPES,
	PlaceOrderActions,
	PlaceOrderSucceedAction,
	PlaceOrderFailedAction
} from "./place-order.actions";

@Injectable()
export class PlaceOrderApiEffects {
	constructor(private actions$: Actions<PlaceOrderActions>, private service: OrderService) {}

	@Effect()
	start$ = this.actions$
		.ofType(PLACE_ORDER_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.PlaceOrder(payload)),
			map(res => new PlaceOrderSucceedAction(res)),
			catchError(err => Observable.of(new PlaceOrderFailedAction(err)))
		);
}
