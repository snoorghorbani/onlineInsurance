import { responseStatusTypes } from "@soushians/shared";

import { GET_NEW_ORDER_FORM_ACTION_TYPES, GetNewOrderFormActions } from "../services/api";
import { OrderFormModel } from "../models";
import { FieldOptionModel } from "../models/field.model";
import {
	GET_CAR_MODELS_OF_BRAND_ACTION_TYPES,
	GetCarModelsOfBrandActions,
	COMPARE_POLICIES_ACTION_TYPES,
	ComparePoliciesActions
} from "../../policy/services/api";
import { PolicyCompareModel } from "../../policy/models/policy-compare.model";

export interface State {
	data: PolicyCompareModel[];
}
export const initialState: State = {
	data: []
};
export function reducer(state = initialState, action: ComparePoliciesActions): State {
	switch (action.type) {
		case COMPARE_POLICIES_ACTION_TYPES.SUCCEED: {
			return {
				...state,
				data: action.payload
			};
		}

		default: {
			return state;
		}
	}
}
