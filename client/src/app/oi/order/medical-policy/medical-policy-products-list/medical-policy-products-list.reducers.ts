import { COMPARE_POLICIES_ACTION_TYPES, ComparePoliciesActions } from '../../../policy/services/api';
import { PolicyCompareModel } from '../../../policy/models/policy-compare.model';

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
