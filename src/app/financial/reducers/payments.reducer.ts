import { ReflectiveInjector } from "@angular/core";

import { responseStatusTypes } from "@soushians/shared";

import { PaymentsActionTypes, PaymentsAction } from "../actions";
import { AgentPaymentsApiModel } from "app/models/financial";

export interface State {
	status: responseStatusTypes;
	data: AgentPaymentsApiModel.Response;
}

export var initialState: State = {
	status: "pristine",
	data: new AgentPaymentsApiModel.Response()
};

export function Reducer(state = initialState, action: PaymentsAction): State {
	switch (action.type) {
		case PaymentsActionTypes.GET_PAYMENTS_DATA: {
			return {
				...state,
				status: "dirty"
			};
		}
		case PaymentsActionTypes.PAYMENTS_DATA_FETCHED: {
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
