import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { DOCUMENT } from "@angular/platform-browser";

import { OrderService } from "../../order.service";
import {
	PLACE_ORDER_ACTION_TYPES,
	PlaceOrderActions,
	PlaceOrderSucceedAction,
	PlaceOrderFailedAction
} from "./place-order.actions";

@Injectable()
export class PlaceOrderApiEffects {
	constructor(
		private actions$: Actions<PlaceOrderActions>,
		private service: OrderService,
		@Inject(DOCUMENT) private document: Document
	) {}

	@Effect()
	start$ = this.actions$
		.ofType(PLACE_ORDER_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.PlaceOrder(payload)),
			map(res => new PlaceOrderSucceedAction(res)),
			catchError(err => Observable.of(new PlaceOrderFailedAction(err)))
		);

	// @Effect({ dispatch: false })
	// redirect$ = this.actions$
	// 	.ofType(PLACE_ORDER_ACTION_TYPES.SUCCEED)
	// 	.pipe(map(action => action.payload), map((data: any) => this.service.RedirctToBank(data.Url, data.Data)));
}
