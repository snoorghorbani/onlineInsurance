import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as bankReducer from './bank.reducer';
import * as paymentRequestReducer from './payment-request.reducer';
import * as successPaymentReportReducer from './user-successful-payments.reducer';
import * as fromUser from './user.reducer';

export interface PaymentState {
    banks: bankReducer.State;
    paymentRequest: paymentRequestReducer.State;
    successPaymentReport: successPaymentReportReducer.State;
    user: fromUser.State;
}

export interface FeatureState {
    'payment': PaymentState;
}

export const PaymentReducers = {
    banks: bankReducer.BankReducer,
    paymentRequest: paymentRequestReducer.Reducer,
    successPaymentReport: successPaymentReportReducer.Reducer,
    user: fromUser.Reducer
};




//#region selectors

export const selectPaymentState = createFeatureSelector<PaymentState>("payment");

//#region banks

export const selectBankState = createSelector(
    selectPaymentState,
    (state: PaymentState) => state.banks
);

export const getBanks = createSelector(
    selectBankState,
    bankReducer.getBanks
);
export const getSelectedBank = createSelector(
    selectBankState,
    bankReducer.getSelectedBank
);


//#endregion


//#region Select Success Payment Report selectors

export const selectSuccessPaymentReportState = createSelector(
    selectPaymentState,
    (state: PaymentState) => state.successPaymentReport
);

export const getSuccessPaymentReportData = createSelector(
    selectSuccessPaymentReportState,
    successPaymentReportReducer.getSuccessfulPaymentReportData
);

export const getSuccessPaymentReportStatus = createSelector(
    selectSuccessPaymentReportState,
    successPaymentReportReducer.getSuccessfulPaymentReportDataStatus
);

//#endregion


//#region payment request selectors

export const selectPaymentRequestState = createSelector(
    selectPaymentState,
    (state: PaymentState) => state.paymentRequest
);

export const getDailySessionReportData = createSelector(
    selectPaymentRequestState,
    paymentRequestReducer.getPaymentRequestData
);

export const getDailySessionReportStatus = createSelector(
    selectPaymentRequestState,
    paymentRequestReducer.getPaymentRequestDataStatus
);
//#endregion


//#region payment request selectors

export const selectUserState = createSelector(
    selectPaymentState,
    (state: PaymentState) => state.user
);

export const getUser = createSelector(
    selectUserState,
    fromUser.getUser
);

export const getUserStatus = createSelector(
    selectUserState,
    fromUser.getUserStatus
);
//#endregion

//#endregion
