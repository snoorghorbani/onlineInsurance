import { Action } from "@ngrx/store";

import { ProcessModel, FlowModel } from "../../models";

export enum FlowViewActionTypes {
	PROCESS_START = "[PROCESS][VIEW] Process Start",
	PROCESS_FINISHED = "[PROCESS][VIEW] Flow Finished",
	PROCESS_TRAVERSED = "[PROCESS][VIEW] Flow Traversed",
	GO_TO_STATE = "[PROCESS][VIEW] Go to state"
}

export class ProcessStartAction implements Action {
	readonly type = FlowViewActionTypes.PROCESS_START;
	constructor(public payload: ProcessModel) {}
}

export class ProcessTraversedAction implements Action {
	readonly type = FlowViewActionTypes.PROCESS_TRAVERSED;
	constructor(public payload: { process: ProcessModel; data: any; flow: FlowModel }) {}
}

export class GoToStateAction implements Action {
	readonly type = FlowViewActionTypes.GO_TO_STATE;
	constructor(public payload: { process: ProcessModel; data: any; flow: FlowModel }) {}
}

export class FlowFinishedAction implements Action {
	readonly type = FlowViewActionTypes.PROCESS_FINISHED;
	constructor(public payload: ProcessModel) {}
}

export type FlowViewActions = ProcessStartAction | ProcessTraversedAction | GoToStateAction | FlowFinishedAction;
