import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as fromNewOrder from "./new-order/new-order.reducers";

export interface FeatureState {
	newOrder: fromNewOrder.State;
}

export const FeatureReducers = {
	newOrder: fromNewOrder.reducer
};

export interface AppState {
	"order": FeatureState;
}
