import { Action } from "@ngrx/store";
import { OrderFormModel } from "../models";

export const enum NEW_ORDER_FORM_ACTION_TYPES {
	UPDATE = "[ORDER][NEW_ORDER] update"
}

export class NewOrderFormUpdateAction implements Action {
	readonly type = NEW_ORDER_FORM_ACTION_TYPES.UPDATE;
	constructor(public payload: OrderFormModel) {}
}

export type NewOrderFormActions = NewOrderFormUpdateAction;
