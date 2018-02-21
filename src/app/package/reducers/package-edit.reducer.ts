import { responseStatusTypes } from "@soushians/shared";

import { PackageEditActionTypes, PackageEditActions } from "../actions";
import { PackageEditModel } from "app/models/package";

export interface State {
	status: responseStatusTypes;
	data: PackageEditModel.Response;
}

export const initialState: State = {
	status: "pristine",
	data: new PackageEditModel.Response()
};

export function Reducer(state = initialState, action: PackageEditActions): State {
	switch (action.type) {
		case PackageEditActionTypes.PACKAGE_EDIT: {
			return {
				...state,
				status: "dirty",
				data: new PackageEditModel.Response()
			};
		}
		case PackageEditActionTypes.PACKAGE_EDIT_START: {
			return {
				...state,
				status: "pending",
				data: new PackageEditModel.Response()
			};
		}

		case PackageEditActionTypes.PACKAGE_EDIT_SUCCEED: {
			return {
				...state,
				status: "succeed"
				// data: action.payload
			};
		}

		case PackageEditActionTypes.PACKAGE_EDIT_FAILED: {
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
export const getPackageEditStatus = (state: State) => state.status;
export const getPackageEdit = (state: State) => state.data;
//#endregion
