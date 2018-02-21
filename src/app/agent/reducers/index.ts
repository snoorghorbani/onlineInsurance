import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

// import * as fromAgent from "./agent.reducer";
import * as fromaCrtable from "./cartable.reducer";

export interface AgentState {
	// agent: fromAgent.State,
	cartable: fromaCrtable.State;
}

export interface FeatureState {
	"agent": AgentState;
}

export const AgentReducers = {
	// agent: fromAgent.Reducer,
	cartable: fromaCrtable.Reducer
};

//#region selectors

export const selectAgentState = createFeatureSelector<AgentState>("agent");

//#region user active agent request selectors

export const selectCartableState = createSelector(selectAgentState, (state: AgentState) => state.cartable);

export const getCartableStatus = createSelector(selectCartableState, fromaCrtable.getCartableStatus);

export const getCartableData = createSelector(selectCartableState, fromaCrtable.getCartableData);
//#endregion
