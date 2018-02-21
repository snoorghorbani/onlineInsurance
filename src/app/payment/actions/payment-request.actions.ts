import { Action } from '@ngrx/store';

import { PaymentRequestModel } from 'app/models/payment';

export enum PaymentRequestActionTypes {
    FETCH_PAYMENTREQUEST           = '[payment-request] new FETCH_PAYMENTREQUEST',
    FETCH_PAYMENTREQUEST_START     = '[payment-request] FETCH_PAYMENTREQUEST_START',
    FETCH_PAYMENTREQUEST_SUCCEED   = '[payment-request] FETCH_PAYMENTREQUEST_SUCCEED',
    FETCH_PAYMENTREQUEST_FAILD     = '[payment-request] FETCH_PAYMENTREQUEST_FAILD',
    FETCH_PAYMENTRESPONSE_SUCCEED   = '[payment-response] FETCH_PAYMENTRESPONSE_SUCCEED',
    FETCH_PAYMENTRESPONSE_FAILD     = '[payment-response] FETCH_PAYMENTRESPONSE_FAILD',
    CLEAR_PAYMENTREQUEST_LIST_STATE = '[payment-request] CLEAR_PAYMENTREQUEST_LIST_STATE'
}

export class FetchPaymentRequest implements Action {
    readonly type = PaymentRequestActionTypes.FETCH_PAYMENTREQUEST;
    constructor(public payload: PaymentRequestModel.Request) { }
}

export class FetchPaymentRequestStart implements Action {
    readonly type = PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_START;
    constructor(public payload: PaymentRequestModel.Request) { }
}

export class FetchPaymentRequestSucceed implements Action {
    readonly type = PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_SUCCEED;
    constructor(public payload: PaymentRequestModel.Response) { }
}

export class FetchPaymentRequestFailed implements Action {
    readonly type = PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_FAILD;
}

export class ClearPaymentRequestListState implements Action {
    readonly type = PaymentRequestActionTypes.CLEAR_PAYMENTREQUEST_LIST_STATE;
}


export class FetchPaymentResponseSucceed implements Action {
    readonly type = PaymentRequestActionTypes.FETCH_PAYMENTRESPONSE_SUCCEED;
    constructor(public payload: PaymentRequestModel.Response) { }
}

export class FetchPaymentResponseFailed implements Action {
    readonly type = PaymentRequestActionTypes.FETCH_PAYMENTRESPONSE_FAILD;
}


export type PaymentRequestAction =
    | FetchPaymentRequest
    | FetchPaymentRequestStart
    | FetchPaymentRequestSucceed
    | FetchPaymentRequestFailed
    | ClearPaymentRequestListState
    | FetchPaymentResponseSucceed
    | FetchPaymentResponseFailed;