import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderFormService } from "../../order-form.service";
import {
	APPROVE_ORDER_ACTION_TYPES,
	ApproveOrderActions,
	ApproveOrderSucceedAction,
	ApproveOrderFailedAction
} from "./approve-order.actions";

@Injectable()
export class ApproveOrderApiEffects {
	constructor(private actions$: Actions<ApproveOrderActions>, private service: OrderFormService) {}

	@Effect()
	start$ = this.actions$
		.ofType(APPROVE_ORDER_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.ApproveOrder(payload)),
			map(res => new ApproveOrderSucceedAction(res)),
			catchError(err => Observable.of(new ApproveOrderFailedAction(err)))
		);
}
