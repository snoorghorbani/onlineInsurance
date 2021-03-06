import { OrderFormType } from '../models';
import { OrderPanelActions, ORDER_PANEL_ACTION_TYPES } from './order-panel.actions';

export interface State {
	data: OrderFormType;
}
export const initialState: State = {
	data: null
};
export function reducer(state = initialState, action: OrderPanelActions): State {
	switch (action.type) {
		case ORDER_PANEL_ACTION_TYPES.NEXT_STATE: {
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
