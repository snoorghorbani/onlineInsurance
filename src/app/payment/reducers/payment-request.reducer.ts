import { PaymentRequestActionTypes, PaymentRequestAction } from "../actions";
import { PaymentRequestModel } from "app/models/payment";

import { responseStatusTypes } from "@soushians/shared";

import { ReflectiveInjector } from "@angular/core";

export interface State {
	status: responseStatusTypes;
	data: PaymentRequestModel.Response;
}

export var initialState: State = {
	status: "pristine",
	data: null
};

export function Reducer(state = initialState, action: PaymentRequestAction): State {
	switch (action.type) {
		case PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_START: {
			return {
				...state,
				status: "pending",
				data: null
			};
		}

		case PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_SUCCEED: {
			return {
				...state,
				status: "succeed",
				data: action.payload
			};
		}

		case PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_FAILD: {
			return {
				...state,
				status: "failed",
				data: null
			};
		}

		case PaymentRequestActionTypes.CLEAR_PAYMENTREQUEST_LIST_STATE: {
			return initialState;
		}

		default: {
			return state;
		}
	}
}

//#region  selectors

export const getPaymentRequestDataStatus = (state: State) => state.status;
export const getPaymentRequestData = (state: State) => state.data;

//#endregion
