import { responseStatusTypes } from "@soushians/shared";
// import { MonthlyFinancialReportModel } from 'app/models/financial';

import { FinancialAction } from "../actions";

export interface State {
	// status: responseStatusTypes;
	// data: MonthlyFinancialReportModel.Response;
}

export const initialState: State = {
	status: "pristine",
	data: null
};

export function Reducer(state = initialState, action: FinancialAction): State {
	switch (action.type) {
		// case MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT: {
		//         return {
		//                 ...state,
		//                 status: 'dirty',
		//                 data: null
		//         };
		// }

		// case MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_START: {
		//         return {
		//                 ...state,
		//                 status: 'pending'
		//         };
		// }

		// case MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_SUCCEED: {
		//         return {
		//                 ...state,
		//                 status: 'succeed',
		//                 data: action.payload
		//         };
		// }

		// case MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_FAILED: {
		//         return {
		//                 ...state,
		//                 status: 'failed'
		//         };
		// }

		default: {
			return state;
		}
	}
}

//#region  selectors
// export const getMonthlyFinancialReportDataStatus = (state: State) => state.status;
// export const getMonthlyFinancialReportData = (state: State) => state.data;
//#endregion
