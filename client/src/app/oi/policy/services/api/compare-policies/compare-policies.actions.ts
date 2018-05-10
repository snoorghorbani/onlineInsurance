import { Action } from "@ngrx/store";

import { ComparePoliciesApiModel } from "./compare-policies.model";
import { PolicyModel } from "../../../models/policy.model";

export const enum COMPARE_POLICIES_ACTION_TYPES {
	START = "[COMPARE_POLICIES][API][ComparePolicies] start",
	SUCCEED = "[COMPARE_POLICIES][API][ComparePolicies] succeed",
	FAILED = "[COMPARE_POLICIES][API][ComparePolicies] failed"
}

export class ComparePoliciesStartAction implements Action {
	readonly type = COMPARE_POLICIES_ACTION_TYPES.START;
	constructor(public payload: ComparePoliciesApiModel.Request) {}
}
export class ComparePoliciesSucceedAction implements Action {
	readonly type = COMPARE_POLICIES_ACTION_TYPES.SUCCEED;
	constructor(public payload: PolicyModel) {}
}
export class ComparePoliciesFailedAction implements Action {
	readonly type = COMPARE_POLICIES_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type ComparePoliciesActions = ComparePoliciesStartAction | ComparePoliciesSucceedAction | ComparePoliciesFailedAction;
