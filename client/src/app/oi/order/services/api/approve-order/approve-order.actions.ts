import { Action } from "@ngrx/store";

import { ApproveOrderApiModel } from "./approve-order.model";
import { OrderFormType } from "../../../models";

export const enum APPROVE_ORDER_ACTION_TYPES {
	START = "[APPROVE_ORDER][API][ApproveOrder] start",
	SUCCEED = "[APPROVE_ORDER][API][ApproveOrder] succeed",
	FAILED = "[APPROVE_ORDER][API][ApproveOrder] failed"
}

export class ApproveOrderStartAction implements Action {
	readonly type = APPROVE_ORDER_ACTION_TYPES.START;
	constructor(public payload: Partial<ApproveOrderApiModel.Request>) {}
}
export class ApproveOrderSucceedAction implements Action {
	readonly type = APPROVE_ORDER_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderFormType) {}
}
export class ApproveOrderFailedAction implements Action {
	readonly type = APPROVE_ORDER_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type ApproveOrderActions = ApproveOrderStartAction | ApproveOrderSucceedAction | ApproveOrderFailedAction;
