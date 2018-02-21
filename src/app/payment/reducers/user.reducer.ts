import { UserActionTypes, UserAction } from "../actions";
import { UserModel } from "app/models/payment";

import { responseStatusTypes } from "@soushians/shared";

import { ReflectiveInjector } from "@angular/core";

export interface State {
	status: boolean;
	data: UserModel;
}

export var initialState: State = {
	status: false,
	data: null
};

export function Reducer(state = initialState, action: UserAction): State {
	switch (action.type) {
		case UserActionTypes.USER_CHANGED: {
			return {
				...state,
				status: true,
				data: action.payload
			};
		}

		default: {
			return state;
		}
	}
}

//#region  selectors

export const getUserStatus = (state: State) => state.status;
export const getUser = (state: State) => state.data;

//#endregion
