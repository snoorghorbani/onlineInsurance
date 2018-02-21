import { responseStatusTypes } from "@soushians/shared";

import { PackageListActionTypes, PackageListAction } from "../actions";
import { PackageListModel } from "app/models/package";

export interface State {
	status: responseStatusTypes;
	data: PackageListModel.Response;
}

export const initialState: State = {
	status: "pristine",
	data: new PackageListModel.Response({ data: [] })
};

export function Reducer(state = initialState, action: PackageListAction): State {
	switch (action.type) {
		case PackageListActionTypes.FETCH_PACKAGE_LIST: {
			return {
				...state,
				status: "dirty",
				data: new PackageListModel.Response({ data: [] })
			};
		}
		case PackageListActionTypes.FETCH_PACKAGE_LIST_START: {
			return {
				...state,
				status: "pending",
				data: new PackageListModel.Response({ data: [] })
			};
		}

		case PackageListActionTypes.FETCH_PACKAGE_LIST_SUCCEED: {
			return {
				...state,
				status: "succeed",
				data: action.payload
			};
		}

		case PackageListActionTypes.FETCH_PACKAGE_LIST_FAILD: {
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
export const getPackageListstatus = (state: State) => state.status;
export const getPackageList = (state: State) => state.data;
//#endregion
