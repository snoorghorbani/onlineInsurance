import { Action } from "@ngrx/store";

import { GetNewOrderFormApiModel } from "./get-new-order-form.model";
import { OrderFormModel } from "../../../models/order-form.model";

export const enum GET_NEW_ORDER_FORM_ACTION_TYPES {
	START = "[GET_NEW_ORDER_FORM][API][GetNewOrderForm] start",
	SUCCEED = "[GET_NEW_ORDER_FORM][API][GetNewOrderForm] succeed",
	FAILED = "[GET_NEW_ORDER_FORM][API][GetNewOrderForm] failed"
}

export class GetNewOrderFormStartAction implements Action {
	readonly type = GET_NEW_ORDER_FORM_ACTION_TYPES.START;
	constructor(public payload: number) {}
}
export class GetNewOrderFormSucceedAction implements Action {
	readonly type = GET_NEW_ORDER_FORM_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderFormModel) {}
}
export class GetNewOrderFormFailedAction implements Action {
	readonly type = GET_NEW_ORDER_FORM_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetNewOrderFormActions =
	| GetNewOrderFormStartAction
	| GetNewOrderFormSucceedAction
	| GetNewOrderFormFailedAction;
