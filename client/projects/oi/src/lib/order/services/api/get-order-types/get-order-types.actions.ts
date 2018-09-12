import { Action } from "@ngrx/store";

import { GetOrderTypesApiModel } from "./get-order-types.model";
import { OrderType } from "../../../models/order-type.model";

export const enum GET_ORDER_TYPES_ACTION_TYPES {
	START = "[ORDER][API][GetOrderTypes] start",
	SUCCEED = "[ORDER][API][GetOrderTypes] succeed",
	FAILED = "[ORDER][API][GetOrderTypes] failed"
}

export class GetOrderTypesStartAction implements Action {
	readonly type = GET_ORDER_TYPES_ACTION_TYPES.START;
	constructor(public payload: GetOrderTypesApiModel.Request) {}
}
export class GetOrderTypesSucceedAction implements Action {
	readonly type = GET_ORDER_TYPES_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderType[]) {}
}
export class GetOrderTypesFailedAction implements Action {
	readonly type = GET_ORDER_TYPES_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetOrderTypesActions = GetOrderTypesStartAction | GetOrderTypesSucceedAction | GetOrderTypesFailedAction;
