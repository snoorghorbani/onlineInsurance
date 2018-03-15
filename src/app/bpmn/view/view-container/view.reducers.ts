import { ProcessModel } from "../../models";
import { FlowViewActions, FlowViewActionTypes } from "./view.actions";

export interface State {
	data: ProcessModel[];
}
export const initialState: State = {
	data: []
};
export function reducer(state = initialState, action: FlowViewActions): State {
	switch (action.type) {
		case FlowViewActionTypes.PROCESS_START: {
			debugger;
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(flow => flow._id == action.payload._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
			} else {
				data.push(action.payload);
			}
			return {
				data: data
			};
		}
		case FlowViewActionTypes.PROCESS_TRAVERSED: {
			debugger;

			const data = state.data.concat();
			var entityIdx = state.data.findIndex(flow => flow._id == action.payload.process._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload.process);
			} else {
				data.push(action.payload.process);
			}
			return {
				...state,
				data: data
			};
		}
		case FlowViewActionTypes.GO_TO_STATE: {
			debugger;
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(flow => flow._id == action.payload.process._id);
			data[entityIdx] = Object.assign({}, data[entityIdx], { ActiveStateId: action.payload.flow.ToState });
			return {
				...state,
				data: data
			};
		}
		case FlowViewActionTypes.PROCESS_FINISHED: {
			return {
				...state
			};
		}

		default: {
			return state;
		}
	}
}

export var getFlows = (state: State) => state.data;
