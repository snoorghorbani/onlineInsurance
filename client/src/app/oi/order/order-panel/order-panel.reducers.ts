import { OrderFormModel } from "../models";
import { OrderPanelActions, ORDER_PANEL_ACTION_TYPES } from "./order-panel.actions";

export interface State {
	data: OrderFormModel;
}
export const initialState: State = {
	data: null
};
export function reducer(state = initialState, action: OrderPanelActions): State {
	debugger;
	console.log(action.type);
	switch (action.type) {
		case ORDER_PANEL_ACTION_TYPES.NEXT_STATE: {
			debugger;
			return {
				...state,
				data: action.payload
			};
		}

		default: {
			return state;
		}
	}
}
