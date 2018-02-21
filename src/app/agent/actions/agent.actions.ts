import { Action } from '@ngrx/store';

export const enum AgentActionTypes {
    PROGRESSING_STARTED = '[CARTABLE] PROGRESSING_STARTED',
    PROGRESSING_FINISHED = '[CARTABLE] PROGRESSING_FINISHED',
    FAILED_HAPPENED = '[CARTABLE] FAILED_HAPPENED'
}

export class ProgressingStarted implements Action {
    readonly type = AgentActionTypes.PROGRESSING_STARTED;
}
export class ProgressingFinished implements Action {
    readonly type = AgentActionTypes.PROGRESSING_FINISHED;
}
export class FailedHappened implements Action {
    readonly type = AgentActionTypes.FAILED_HAPPENED;
    constructor(public payload) { }
}

export type AgentAction =
    ProgressingStarted
    | ProgressingFinished
    | FailedHappened;