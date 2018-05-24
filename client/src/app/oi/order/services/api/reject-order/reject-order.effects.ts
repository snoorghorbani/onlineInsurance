import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderFormService } from "../../order-form.service";
import {
	REJECT_ORDER_ACTION_TYPES,
	RejectOrderActions,
	RejectOrderSucceedAction,
	RejectOrderFailedAction
} from "./reject-order.actions";

@Injectable()
export class RejectOrderApiEffects {
	constructor(private actions$: Actions<RejectOrderActions>, private service: OrderFormService) {}

	@Effect()
	start$ = this.actions$
		.ofType(REJECT_ORDER_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.RejectOrder(payload)),
			map(res => new RejectOrderSucceedAction(res)),
			catchError(err => Observable.of(new RejectOrderFailedAction(err)))
		);
}
