import { Action } from "@ngrx/store";

import { GetOrderApiModel } from "./get-order.model";
import { OrderFormModel } from "../../../models";

export const enum GET_ORDER_ACTION_TYPES {
	START = "[GET_ORDER][API][GetOrder] start",
	SUCCEED = "[GET_ORDER][API][GetOrder] succeed",
	FAILED = "[GET_ORDER][API][GetOrder] failed"
}

export class GetOrderStartAction implements Action {
	readonly type = GET_ORDER_ACTION_TYPES.START;
	constructor(public payload: GetOrderApiModel.Request) {}
}
export class GetOrderSucceedAction implements Action {
	readonly type = GET_ORDER_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderFormModel) {}
}
export class GetOrderFailedAction implements Action {
	readonly type = GET_ORDER_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetOrderActions = GetOrderStartAction | GetOrderSucceedAction | GetOrderFailedAction;
