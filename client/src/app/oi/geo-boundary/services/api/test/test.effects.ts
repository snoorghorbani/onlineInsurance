import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { GeoBoundaryService } from "../../geo-boundary.service";
import { TEST_ACTION_TYPES, TestActions, TestSucceedAction, TestFailedAction } from "./test.actions";

@Injectable()
export class TestApiEffects {
	constructor(private actions$: Actions<TestActions>, private service: GeoBoundaryService) {}

	@Effect()
	start$ = this.actions$
		.ofType(TEST_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.test()),
			map(res => new TestSucceedAction(res)),
			catchError(err => Observable.of(new TestFailedAction(err)))
		);
}
