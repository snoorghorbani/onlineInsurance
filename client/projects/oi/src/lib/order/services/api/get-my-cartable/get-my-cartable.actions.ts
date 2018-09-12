import { Action } from "@ngrx/store";

import { GetMyCartableApiModel } from "./get-my-cartable.model";
import { OrderSummaryModel } from "../../../models/order-summary.model";

export const enum GET_MY_CARTABLE_ACTION_TYPES {
	START = "[GET_MY_CARTABLE][API][GetMyCartable] start",
	SUCCEED = "[GET_MY_CARTABLE][API][GetMyCartable] succeed",
	FAILED = "[GET_MY_CARTABLE][API][GetMyCartable] failed"
}

export class GetMyCartableStartAction implements Action {
	readonly type = GET_MY_CARTABLE_ACTION_TYPES.START;
}
export class GetMyCartableSucceedAction implements Action {
	readonly type = GET_MY_CARTABLE_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderSummaryModel[]) {}
}
export class GetMyCartableFailedAction implements Action {
	readonly type = GET_MY_CARTABLE_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetMyCartableActions = GetMyCartableStartAction | GetMyCartableSucceedAction | GetMyCartableFailedAction;
