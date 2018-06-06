import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as fromNewOrder from "./new-order/new-order.reducers";
import * as fromCarDetail from "./car-detail/car-detail.reducers";

export interface FeatureState {
	newOrder: fromNewOrder.State;
	carDetail: fromCarDetail.State;
}

export const FeatureReducers = {
	newOrder: fromNewOrder.reducer,
	carDetail: fromCarDetail.reducer
};

export interface AppState {
	"order": FeatureState;
}
