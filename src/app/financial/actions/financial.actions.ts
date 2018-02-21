import { Action } from '@ngrx/store';

export const enum FinancialActionTypes {
    PROGRESSING_STARTED = '[CARTABLE] PROGRESSING_STARTED',
    PROGRESSING_FINISHED = '[CARTABLE] PROGRESSING_FINISHED',
    FAILED_HAPPENED = '[CARTABLE] FAILED_HAPPENED'
}

export class ProgressingStarted implements Action {
    readonly type = FinancialActionTypes.PROGRESSING_STARTED;
}
export class ProgressingFinished implements Action {
    readonly type = FinancialActionTypes.PROGRESSING_FINISHED;
}
export class FailedHappened implements Action {
    readonly type = FinancialActionTypes.FAILED_HAPPENED;
    constructor(public payload) { }
}

export type FinancialAction =
    ProgressingStarted
    | ProgressingFinished
    | FailedHappened;