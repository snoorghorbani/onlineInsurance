import { SAVE_ORDER_ACTION_TYPES } from "../services/api";

export interface State {
	failed: boolean;
}

export const initialState: State = {
	failed: false
};

export function RootReducer(state = initialState, action: any): State {
	switch (action.type) {
		case SAVE_ORDER_ACTION_TYPES.FAILED: {
			return {
				...state,
				failed: true
			};
		}

		default: {
			return state;
		}
	}
}
