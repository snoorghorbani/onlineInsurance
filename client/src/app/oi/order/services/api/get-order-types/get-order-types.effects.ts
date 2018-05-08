import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderService } from "../../order.service";
import {
	GET_ORDER_TYPES_ACTION_TYPES,
	GetOrderTypesActions,
	GetOrderTypesSucceedAction,
	GetOrderTypesFailedAction
} from "./get-order-types.actions";

@Injectable()
export class GetOrderTypesApiEffects {
	constructor(private actions$: Actions<GetOrderTypesActions>, private service: OrderService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_ORDER_TYPES_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.GetOrderTypes()),
			map(res => new GetOrderTypesSucceedAction(res)),
			catchError(err => Observable.of(new GetOrderTypesFailedAction(err)))
		);
}
