import { Action } from "@ngrx/store";

import { GetDeliveryTimeTableApiModel } from "./get-delivery-time-table.model";
import { OrderModel } from "../../../models/order.model";

export const enum GET_DELIVERY_TIME_TABLE_ACTION_TYPES {
	START = "[GET_DELIVERY_TIME_TABLE][API][GetDeliveryTimeTable] start",
	SUCCEED = "[GET_DELIVERY_TIME_TABLE][API][GetDeliveryTimeTable] succeed",
	FAILED = "[GET_DELIVERY_TIME_TABLE][API][GetDeliveryTimeTable] failed"
}

export class GetDeliveryTimeTableStartAction implements Action {
	readonly type = GET_DELIVERY_TIME_TABLE_ACTION_TYPES.START;
	constructor(public payload: GetDeliveryTimeTableApiModel.Request) {}
}
export class GetDeliveryTimeTableSucceedAction implements Action {
	readonly type = GET_DELIVERY_TIME_TABLE_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderModel) {}
}
export class GetDeliveryTimeTableFailedAction implements Action {
	readonly type = GET_DELIVERY_TIME_TABLE_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetDeliveryTimeTableActions = GetDeliveryTimeTableStartAction | GetDeliveryTimeTableSucceedAction | GetDeliveryTimeTableFailedAction;
