import { Action } from '@ngrx/store';

import { UserModel, UserSuccessfulPaymentsModel } from 'app/models/payment';

export enum UserSuccessfulPaymentsActionTypes {
    FETCH_USER_SUCCESSFUL_PAYMENTS            = '[PAYMENT] [REQUEST] FETCH_USER_PAYMENTS',
    FETCH_USER_SUCCESSFUL_PAYMENTS_START      = '[PAYMENT] [REQUEST] FETCH_USER_PAYMENTS_START',
    FETCH_USER_SUCCESSFUL_PAYMENTS_SUCCEED    = '[PAYMENT] [REQUEST] FETCH_USER_PAYMENTS_SUCCEED',
    FETCH_USER_SUCCESSFUL_PAYMENTS_FAILD      = '[PAYMENT] [REQUEST] FETCH_USER_PAYMENTS_FAILD',
    CLEAR_USER_SUCCESSFUL_PAYMENTS_LIST_STATE = '[PAYMENT] [REQUEST] CLEAR_USER_PAYMENTS_LIST_STATE'
}

export class FetchUserSuccessfulPayments implements Action {
    readonly type = UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS;
    constructor(public payload: UserSuccessfulPaymentsModel.Request) { }
}

export class FetchUserSuccessfulPaymentsStart implements Action {
    readonly type = UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS_START;
    constructor(public payload: UserSuccessfulPaymentsModel.Request) { }
}

export class FetchUserSuccessfulPaymentsSucceed implements Action {
    readonly type = UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS_SUCCEED;
    constructor(public payload: UserSuccessfulPaymentsModel.Response) { }
}

export class FetchUserSuccessfulPaymentsFaild implements Action {
    readonly type = UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS_FAILD;
}

export class ClearSuccessfulPaymentsListState implements Action {
    readonly type = UserSuccessfulPaymentsActionTypes.CLEAR_USER_SUCCESSFUL_PAYMENTS_LIST_STATE;
}

export type UserSuccessfulPaymentsAction =
    | FetchUserSuccessfulPayments
    | FetchUserSuccessfulPaymentsStart
    | FetchUserSuccessfulPaymentsSucceed
    | FetchUserSuccessfulPaymentsFaild
    | ClearSuccessfulPaymentsListState;