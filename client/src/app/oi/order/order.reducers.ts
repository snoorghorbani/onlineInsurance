import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as fromNewOrder from "./new-order/new-order.reducers";
import * as fromCompare from "./compare/compare.reducers";

export interface FeatureState {
	newOrder: fromNewOrder.State;
	compare: fromCompare.State;
}

export const FeatureReducers = {
	newOrder: fromNewOrder.reducer,
	compare: fromCompare.reducer
};

export interface AppState {
	"order": FeatureState;
}
