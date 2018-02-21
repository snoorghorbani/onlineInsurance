import { responseStatusTypes } from "@soushians/shared";
// import { MonthlyAgentReportModel } from 'app/models/agent';

import { AgentAction } from "../actions";

export interface State {
	// status: responseStatusTypes;
	// data: MonthlyAgentReportModel.Response;
}

export const initialState: State = {
	status: "pristine",
	data: null
};

export function Reducer(state = initialState, action: AgentAction): State {
	switch (action.type) {
		// case MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT: {
		//         return {
		//                 ...state,
		//                 status: 'dirty',
		//                 data: null
		//         };
		// }

		// case MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_START: {
		//         return {
		//                 ...state,
		//                 status: 'pending'
		//         };
		// }

		// case MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_SUCCEED: {
		//         return {
		//                 ...state,
		//                 status: 'succeed',
		//                 data: action.payload
		//         };
		// }

		// case MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_FAILED: {
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
// export const getMonthlyAgentReportDataStatus = (state: State) => state.status;
// export const getMonthlyAgentReportData = (state: State) => state.data;
//#endregion
