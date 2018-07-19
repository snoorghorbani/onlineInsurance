import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromOrdePanel from './order-panel/order-panel.reducers';

export interface FeatureState {
	orderPanel: fromOrdePanel.State;
}

export const FeatureReducers = {
	orderPanel: fromOrdePanel.reducer
};

export interface AppState {
	'order': FeatureState;
}
