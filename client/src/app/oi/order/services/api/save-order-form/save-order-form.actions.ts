import { Action } from "@ngrx/store";

import { SaveOrderFormApiModel } from "./save-order-form.model";
import { OrderModel } from "../../../models/order.model";
import { OrderFormModel } from "../../../models";

export const enum SAVE_ORDER_FORM_ACTION_TYPES {
	START = "[SAVE_ORDER_FORM][API][SaveOrderForm] start",
	SUCCEED = "[SAVE_ORDER_FORM][API][SaveOrderForm] succeed",
	FAILED = "[SAVE_ORDER_FORM][API][SaveOrderForm] failed"
}

export class SaveOrderFormStartAction implements Action {
	readonly type = SAVE_ORDER_FORM_ACTION_TYPES.START;
	constructor(public payload: SaveOrderFormApiModel.Request) {}
}
export class SaveOrderFormSucceedAction implements Action {
	readonly type = SAVE_ORDER_FORM_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderFormModel) {}
}
export class SaveOrderFormFailedAction implements Action {
	readonly type = SAVE_ORDER_FORM_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type SaveOrderFormActions = SaveOrderFormStartAction | SaveOrderFormSucceedAction | SaveOrderFormFailedAction;
