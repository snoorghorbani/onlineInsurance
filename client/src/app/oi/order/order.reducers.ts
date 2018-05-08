import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

// import * as list from "../list/list.reducers";
// import * as flows from "../view/view-container/view.reducers";

export interface FeatureState {
	// list: list.State;
	// flows: flows.State;
}

export const FeatureReducers = {
	// list: list.reducer,
	// flows: flows.reducer
};

export interface AppState {
	"order": FeatureState;
}
