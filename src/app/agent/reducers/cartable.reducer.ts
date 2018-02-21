import { GetCartableDataAction, CartableAction, CartableActionTypes } from "../actions";
import { ReflectiveInjector } from "@angular/core";

import { responseStatusTypes } from "@soushians/shared";

import { CartableApiModel } from "app/models/cartable";

export interface State {
	status: responseStatusTypes;
	data: CartableApiModel.Response;
}

export var initialState: State = {
	status: "pristine",
	data: new CartableApiModel.Response()
};

export function Reducer(state = initialState, action: CartableAction): State {
	switch (action.type) {
		case CartableActionTypes.GET_CARTABLE_DATA: {
			return {
				...state,
				status: "dirty"
			};
		}
		case CartableActionTypes.CARTABLE_DATA_FETCHED: {
			return {
				...state,
				status: "succeed",
				data: action.payload
			};
		}

		default: {
			return state;
		}
	}
}

//#region  selectors

export const getCartableStatus = (state: State) => state.status;
export const getCartableData = (state: State) => state.data;

//#endregion
