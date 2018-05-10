import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { PolicyService } from "../../policy.service";
import {
	COMPARE_POLICIES_ACTION_TYPES,
	ComparePoliciesActions,
	ComparePoliciesSucceedAction,
	ComparePoliciesFailedAction
} from "./compare-policies.actions";

@Injectable()
export class ComparePoliciesApiEffects {
	constructor(private actions$: Actions<ComparePoliciesActions>, private service: PolicyService) {}

	@Effect()
	start$ = this.actions$
		.ofType(COMPARE_POLICIES_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload =>
				this.service
					.ComparePolicies(payload)
					.pipe(catchError(err => Observable.of(new ComparePoliciesFailedAction(err))))
			),
			map(res => new ComparePoliciesSucceedAction(res))
		);
}
