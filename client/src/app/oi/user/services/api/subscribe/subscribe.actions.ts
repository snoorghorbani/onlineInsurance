import { Action } from "@ngrx/store";

import { SubscribeApiModel } from "./subscribe.model";
import { UserModel } from "../../../models/user.model";

export const enum SUBSCRIBE_ACTION_TYPES {
	START = "[SUBSCRIBE][API][Subscribe] start",
	SUCCEED = "[SUBSCRIBE][API][Subscribe] succeed",
	FAILED = "[SUBSCRIBE][API][Subscribe] failed"
}

export class SubscribeStartAction implements Action {
	readonly type = SUBSCRIBE_ACTION_TYPES.START;
	constructor(public payload: SubscribeApiModel.Request) {}
}
export class SubscribeSucceedAction implements Action {
	readonly type = SUBSCRIBE_ACTION_TYPES.SUCCEED;
	constructor(public payload: UserModel) {}
}
export class SubscribeFailedAction implements Action {
	readonly type = SUBSCRIBE_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type SubscribeActions = SubscribeStartAction | SubscribeSucceedAction | SubscribeFailedAction;
