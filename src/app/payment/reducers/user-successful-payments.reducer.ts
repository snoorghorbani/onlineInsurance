import { responseStatusTypes } from "@soushians/shared";
import { UserSuccessfulPaymentsModel } from "app/models/payment";

import { UserSuccessfulPaymentsActionTypes, UserSuccessfulPaymentsAction } from "../actions";

export interface State {
	status: responseStatusTypes;
	data: UserSuccessfulPaymentsModel.Response;
}

export const initialState: State = {
	status: "pristine",
	data: new UserSuccessfulPaymentsModel.Response({ data: [] })
};

export function Reducer(state = initialState, action: UserSuccessfulPaymentsAction): State {
	switch (action.type) {
		case UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS: {
			return {
				...state,
				status: "dirty",
				data: new UserSuccessfulPaymentsModel.Response({ data: [] })
			};
		}

		case UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS_START: {
			return {
				...state,
				status: "pending"
			};
		}

		case UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS_SUCCEED: {
			return {
				...state,
				status: "succeed",
				data: action.payload
			};
		}

		case UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS_FAILD: {
			return {
				...state,
				status: "failed"
			};
		}

		default: {
			return state;
		}
	}
}

//#region  selectors
export const getSuccessfulPaymentReportDataStatus = (state: State) => state.status;
export const getSuccessfulPaymentReportData = (state: State) => state.data;
//#endregion
