import { BankActionTypes, BankAction } from "../actions";
import { BankModel } from "app/models/payment";

import { responseStatusTypes } from "@soushians/shared";

import { ReflectiveInjector } from "@angular/core";

export interface State {
	status: responseStatusTypes;
	selected: BankModel;
	data: BankModel[];
}

export var initialState: State = {
	status: "pristine",
	selected: null,
	data: []
};

export function BankReducer(state = initialState, action: BankAction): State {
	switch (action.type) {
		case BankActionTypes.FETCH_BANKS_START: {
			return {
				...state,
				status: "pending",
				selected: null,
				data: []
			};
		}

		case BankActionTypes.FETCH_BANKS_SUCCEED: {
			return {
				...state,
				status: "succeed",
				selected: null,
				data: action.payload
			};
		}

		case BankActionTypes.FETCH_BANKS_FAILD: {
			return {
				...state,
				status: "failed",
				selected: null,
				data: []
			};
		}
		case BankActionTypes.SELECT_BANK: {
			return {
				...state,
				selected: action.payload
			};
		}

		case BankActionTypes.CLEAR_BANK_LIST_STATE: {
			return initialState;
		}

		default: {
			return state;
		}
	}
}

//#region  selectors

export const getBanks = (state: State) => state.data;
export const getSelectedBank = (state: State) => state.selected;

//#endregion
