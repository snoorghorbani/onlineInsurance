import { Action } from "@ngrx/store";

import { SaveOrderApiModel } from "./save-order.model";
import { OrderFormType } from "../../../models";

export const enum SAVE_ORDER_ACTION_TYPES {
	START = "[SAVE_ORDER][API][SaveOrder] start",
	SUCCEED = "[SAVE_ORDER][API][SaveOrder] succeed",
	FAILED = "[SAVE_ORDER][API][SaveOrder] failed"
}

export class SaveOrderStartAction implements Action {
	readonly type = SAVE_ORDER_ACTION_TYPES.START;
	constructor(public payload: OrderFormType) {}
}
export class SaveOrderSucceedAction implements Action {
	readonly type = SAVE_ORDER_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderFormType) {}
}
export class SaveOrderFailedAction implements Action {
	readonly type = SAVE_ORDER_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type SaveOrderActions = SaveOrderStartAction | SaveOrderSucceedAction | SaveOrderFailedAction;
