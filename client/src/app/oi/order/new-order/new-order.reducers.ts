import { responseStatusTypes } from "@soushians/shared";

import { GET_NEW_ORDER_FORM_ACTION_TYPES, GetNewOrderFormActions } from "../services/api";
import { OrderFormModel } from "../models";
import { FieldOptionModel } from "../models/field.model";
import { GET_CAR_MODELS_OF_BRAND_ACTION_TYPES, GetCarModelsOfBrandActions } from "../../policy/services/api";
import { NEW_ORDER_FORM_ACTION_TYPES, NewOrderFormActions } from "./new-order.actions";

export interface State {
	data: OrderFormModel;
	carModels: FieldOptionModel[];
}
export const initialState: State = {
	data: null,
	carModels: []
};
export function reducer(
	state = initialState,
	action: GetNewOrderFormActions | GetCarModelsOfBrandActions | NewOrderFormActions
): State {
	switch (action.type) {
		case GET_NEW_ORDER_FORM_ACTION_TYPES.SUCCEED: {
			return {
				...state,
				data: action.payload
			};
		}
		case NEW_ORDER_FORM_ACTION_TYPES.UPDATE: {
			return {
				...state,
				data: action.payload
			};
		}
		case GET_CAR_MODELS_OF_BRAND_ACTION_TYPES.SUCCEED: {
			return {
				...state,
				carModels: action.payload
			};
		}

		default: {
			return state;
		}
	}
}
