import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as list from "../list/list.reducers";
import * as flows from "../view/view-container/view.reducers";

export interface BpmnState {
	list: list.State;
	flows: flows.State;
}

export const BpmnReducers = {
	list: list.reducer,
	flows: flows.reducer
};

export interface MainContainerState {
	"bpmn": BpmnState;
}
