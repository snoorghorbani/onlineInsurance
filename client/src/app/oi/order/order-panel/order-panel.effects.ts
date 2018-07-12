import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import { ORDER_PANEL_ACTION_TYPES, NextStateAction } from "./order-panel.actions";
import { OrderService } from "../services";
import { APPROVE_ORDER_ACTION_TYPES } from "../services/api";

@Injectable()
export class OrderPanelEffects {
	constructor(private actions$: Actions<any>, private orderService: OrderService) {}

	@Effect()
	start$ = this.actions$.ofType(APPROVE_ORDER_ACTION_TYPES.SUCCEED).pipe(
		map(action => action.payload.Id.Value),
		switchMap(Id => {
			debugger;
			return this.orderService.GetOrder({ Id }).pipe(map(orderForm => new NextStateAction(orderForm)));
		})
	);

	// @Effect()
	// after_order_succeed$ = this.actions$
	// 	.ofType(APPROVE_ORDER_ACTION_TYPES.SUCCEED)
	// 	.pipe(map(action => action.payload), map(orderForm => new NewOrderFormUpdateAction(orderForm)));
}
