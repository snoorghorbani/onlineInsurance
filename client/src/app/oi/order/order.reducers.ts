import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as fromNewOrder from "./new-order/new-order.reducers";
import * as fromCarDetail from "./car-detail/car-detail.reducers";
import * as fromOrdePanel from "./order-panel/order-panel.reducers";

export interface FeatureState {
	newOrder: fromNewOrder.State;
	carDetail: fromCarDetail.State;
	orderPanel: fromOrdePanel.State;
}

export const FeatureReducers = {
	newOrder: fromNewOrder.reducer,
	carDetail: fromCarDetail.reducer,
	orderPanel: fromOrdePanel.reducer
};

export interface AppState {
	"order": FeatureState;
}
