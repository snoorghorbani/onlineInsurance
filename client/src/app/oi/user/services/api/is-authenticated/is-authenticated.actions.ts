import { Action } from "@ngrx/store";

import { IsAuthenticatedApiModel } from "./is-authenticated.model";

export const enum IS_AUTHENTICATED_ACTION_TYPES {
	START = "[IS_AUTHENTICATED][API][IsAuthenticated] start",
	SUCCEED = "[IS_AUTHENTICATED][API][IsAuthenticated] succeed",
	FAILED = "[IS_AUTHENTICATED][API][IsAuthenticated] failed"
}

export class IsAuthenticatedStartAction implements Action {
	readonly type = IS_AUTHENTICATED_ACTION_TYPES.START;
	constructor(public payload: IsAuthenticatedApiModel.Request) {}
}
export class IsAuthenticatedSucceedAction implements Action {
	readonly type = IS_AUTHENTICATED_ACTION_TYPES.SUCCEED;
	constructor(public payload: any) {}
}
export class IsAuthenticatedFailedAction implements Action {
	readonly type = IS_AUTHENTICATED_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type IsAuthenticatedActions =
	| IsAuthenticatedStartAction
	| IsAuthenticatedSucceedAction
	| IsAuthenticatedFailedAction;
