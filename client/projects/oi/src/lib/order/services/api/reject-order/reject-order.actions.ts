import { Action } from '@ngrx/store';

import { RejectOrderApiModel } from './reject-order.model';
import { OrderFormType } from '../../../models';

export const enum REJECT_ORDER_ACTION_TYPES {
	START = '[REJECT_ORDER][API][RejectOrder] start',
	SUCCEED = '[REJECT_ORDER][API][RejectOrder] succeed',
	FAILED = '[REJECT_ORDER][API][RejectOrder] failed'
}

export class RejectOrderStartAction implements Action {
	readonly type = REJECT_ORDER_ACTION_TYPES.START;
	constructor(public payload: any) {}
}
export class RejectOrderSucceedAction implements Action {
	readonly type = REJECT_ORDER_ACTION_TYPES.SUCCEED;
	constructor(public payload: OrderFormType) {}
}
export class RejectOrderFailedAction implements Action {
	readonly type = REJECT_ORDER_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type RejectOrderActions = RejectOrderStartAction | RejectOrderSucceedAction | RejectOrderFailedAction;
