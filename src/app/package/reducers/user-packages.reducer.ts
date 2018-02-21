import { responseStatusTypes } from "@soushians/shared";

import { UserPackagesActionTypes, UserPackagesAction } from "../actions";
import { UserPackagesModel } from "app/models/package";

export interface State {
	status: responseStatusTypes;
	data: UserPackagesModel.Response;
}

export const initialState: State = {
	status: "pristine",
	data: new UserPackagesModel.Response({ data: [] })
};

export function Reducer(state = initialState, action: UserPackagesAction): State {
	switch (action.type) {
		case UserPackagesActionTypes.FETCH_USER_PACKAGES: {
			return {
				...state,
				status: "dirty",
				data: new UserPackagesModel.Response({ data: [] })
			};
		}
		case UserPackagesActionTypes.FETCH_USER_PACKAGES_START: {
			return {
				...state,
				status: "pending",
				data: new UserPackagesModel.Response({ data: [] })
			};
		}

		case UserPackagesActionTypes.FETCH_USER_PACKAGES_SUCCEED: {
			return {
				...state,
				status: "succeed",
				data: action.payload
			};
		}

		case UserPackagesActionTypes.FETCH_USER_PACKAGES_FAILD: {
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
export const getUserPackageStatus = (state: State) => state.status;
export const getUserPackages = (state: State) => state.data;
//#endregion
