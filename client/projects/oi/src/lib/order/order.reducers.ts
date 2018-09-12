import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as fromOrdePanel from "./order-panel/order-panel.reducers";
import * as fromRoot from "./root/root.reducer";

export interface FeatureState {
	orderPanel: fromOrdePanel.State;
	root: fromRoot.State;
}

export const FeatureReducers = {
	orderPanel: fromOrdePanel.reducer,
	root: fromRoot.RootReducer
};

export interface AppState {
	"order": FeatureState;
}
