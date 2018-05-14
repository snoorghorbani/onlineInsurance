import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderService } from "../../order.service";
import {
	GET_ORDER_ACTION_TYPES,
	GetOrderActions,
	GetOrderSucceedAction,
	GetOrderFailedAction
} from "./get-order.actions";

@Injectable()
export class GetOrderApiEffects {
	constructor(private actions$: Actions<GetOrderActions>, private service: OrderService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_ORDER_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.GetOrder(payload)),
			map(res => new GetOrderSucceedAction(res)),
			catchError(err => Observable.of(new GetOrderFailedAction(err)))
		);
}
