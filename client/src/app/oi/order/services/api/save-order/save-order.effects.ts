import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

import { OrderService } from "../../order.service";
import {
	SAVE_ORDER_ACTION_TYPES,
	SaveOrderActions,
	SaveOrderSucceedAction,
	SaveOrderFailedAction
} from "./save-order.actions";
import { NewOrderFormUpdateAction } from "../../../new-order/new-order.actions";
import { throwError, of } from "rxjs";

@Injectable()
export class SaveOrderApiEffects {
	constructor(private actions$: Actions<SaveOrderActions>, private service: OrderService, private router: Router) {}

	@Effect()
	start$ = this.actions$
		.ofType(SAVE_ORDER_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload =>
				this.service
					.SaveOrder(payload)
					.pipe(
						map(res => new SaveOrderSucceedAction(res)),
						catchError(err => of(new SaveOrderFailedAction(err)))
					)
			)
		);

	@Effect({ dispatch: false })
	update_store$ = this.actions$.ofType(SAVE_ORDER_ACTION_TYPES.SUCCEED).pipe(
		map(action => action.payload),
		map(res => {
			// new NewOrderFormUpdateAction(res);
			this.router.navigate([ "order/purchase/fire-policy/insurer-info", res.Id.Value ]);
		})
	);
}
