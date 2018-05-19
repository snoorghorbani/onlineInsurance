import { Action } from "@ngrx/store";

import { PlaceOrderApiModel } from "./place-order.model";
import { OrderFormModel } from "../../../models";

export const enum PLACE_ORDER_ACTION_TYPES {
	START = "[PLACE_ORDER][API][PlaceOrder] start",
	SUCCEED = "[PLACE_ORDER][API][PlaceOrder] succeed",
	FAILED = "[PLACE_ORDER][API][PlaceOrder] failed"
}

export class PlaceOrderStartAction implements Action {
	readonly type = PLACE_ORDER_ACTION_TYPES.START;
	constructor(public payload: OrderFormModel) {}
}
export class PlaceOrderSucceedAction implements Action {
	readonly type = PLACE_ORDER_ACTION_TYPES.SUCCEED;
	constructor(public payload: any) {}
}
export class PlaceOrderFailedAction implements Action {
	readonly type = PLACE_ORDER_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type PlaceOrderActions = PlaceOrderStartAction | PlaceOrderSucceedAction | PlaceOrderFailedAction;
