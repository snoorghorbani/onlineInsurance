import { Action } from '@ngrx/store';
import { AgentPaymentsApiModel } from 'app/models/financial';

// import { PaymentsModel } from 'app/models/financial';

export enum PaymentsActionTypes {
    GET_PAYMENTS_DATA = '[PAYMENTS] GET_PAYMENTS_DATA',
    PAYMENTS_DATA_FETCHED = '[PAYMENTS] PAYMENTS_DATA_FETCHED',
    PAYMENTS_DATA_FAILED = '[PAYMENTS] PAYMENTS_DATA_FAILED',
}

export class GetPaymentsDataAction implements Action {
    readonly type = PaymentsActionTypes.GET_PAYMENTS_DATA;
    constructor() { }
}

export class PaymentsDataFetchedAction implements Action {
    readonly type = PaymentsActionTypes.PAYMENTS_DATA_FETCHED;
    constructor(public payload: AgentPaymentsApiModel.Response) { }
}

export class PaymentsDataFailedAction implements Action {
    readonly type = PaymentsActionTypes.PAYMENTS_DATA_FAILED;
    constructor() { }
}

export type PaymentsAction =
    GetPaymentsDataAction
    | PaymentsDataFetchedAction
    | PaymentsDataFailedAction;