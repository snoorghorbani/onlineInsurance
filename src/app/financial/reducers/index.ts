import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';


import * as fromFinancial from './financial.reducer';
import * as fromaCrtable from './payments.reducer';


export interface FinancialState {
    financial: fromFinancial.State,
    cartable: fromaCrtable.State,
}

export interface FeatureState {
    'financial': FinancialState;
}

export const FinancialReducers = {
    financial: fromFinancial.Reducer,
    cartable: fromaCrtable.Reducer
};



//#region selectors

export const selectFinancialState = createFeatureSelector<FinancialState>("financial");

//#region user active financial request selectors

export const selectCartableState = createSelector(
    selectFinancialState,
    (state: FinancialState) => state.cartable
);

export const getCartableStatus = createSelector(
    selectCartableState,
    fromaCrtable.getCartableStatus
);

export const getCartableData = createSelector(
    selectCartableState,
    fromaCrtable.getCartableData
);
//#endregion
