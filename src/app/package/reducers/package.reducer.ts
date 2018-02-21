import { responseStatusTypes } from "@soushians/shared";

import { PackageActionTypes, PackageActions } from "../actions";
import { FetchPackageModel } from "app/models/package";

export interface State {
	status: responseStatusTypes;
	data: FetchPackageModel.Response;
}

export const initialState: State = {
	status: "pristine",
	data: new FetchPackageModel.Response()
};

export function Reducer(state = initialState, action: PackageActions): State {
	switch (action.type) {
		case PackageActionTypes.FETCH_PACKAGE: {
			return {
				...state,
				status: "dirty",
				data: new FetchPackageModel.Response()
			};
		}
		case PackageActionTypes.FETCH_PACKAGE_START: {
			return {
				...state,
				status: "pending",
				data: new FetchPackageModel.Response()
			};
		}

		case PackageActionTypes.FETCH_PACKAGE_SUCCEED: {
			return {
				...state,
				status: "succeed",
				data: action.payload
			};
		}

		case PackageActionTypes.FETCH_PACKAGE_FAILED: {
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
export const getPackageStatus = (state: State) => state.status;
export const getPackage = (state: State) => state.data;
//#endregion
