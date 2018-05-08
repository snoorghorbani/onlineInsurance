import { Action } from "@ngrx/store";

import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";

export class service_call_start_action<T> implements Action {
	type: string;
	constructor(public payload: T) {
		this.type = `${(<any>payload).API_ID} started`;
	}
}
export class service_call_succeed_action<T> implements Action {
	type: string;
	constructor(private payload: T) {
		this.type = `${(<any>payload).API_ID} succeed`;
	}
}
export class service_call_failed_action<T> implements Action {
	type: string;
	constructor(private payload: T) {
		this.type = `${(<any>payload).API_ID} failed`;
	}
}

export type service_call_actions<T> =
	| service_call_start_action<T>
	| service_call_succeed_action<T>
	| service_call_failed_action<T>;
