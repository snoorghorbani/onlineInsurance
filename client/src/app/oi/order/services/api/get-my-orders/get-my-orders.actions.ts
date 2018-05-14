import { Action } from "@ngrx/store";

import { GetMyOrdersApiModel } from "./get-my-orders.model";
import { OrderSummaryModel } from "../../../models/order-summary.model";

export const enum GET_MY_ORDERS_ACTION_TYPES {
	START = "[GET_MY_ORDERS][API][GetMyOrders] start",
	SUCCEED = "[GET_MY_ORDERS][API][GetMyOrders] succeed",
	FAILED = "[GET_MY_ORDERS][API][GetMyOrders] failed"
}

export class GetMyOrdersStartAction implements Action {
	readonly type = GET_MY_ORDERS_ACTION_TYPES.START;
	constructor(public payload: GetMyOrdersApiModel.Request) {}
}
export class GetMyOrdersSucceedAction implements Action {
	readonly type = GET_MY_ORDERS_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderSummaryModel[]) {}
}
export class GetMyOrdersFailedAction implements Action {
	readonly type = GET_MY_ORDERS_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetMyOrdersActions = GetMyOrdersStartAction | GetMyOrdersSucceedAction | GetMyOrdersFailedAction;
