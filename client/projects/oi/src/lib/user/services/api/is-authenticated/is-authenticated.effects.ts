import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { UserService } from "../../user.service";
import {
	IS_AUTHENTICATED_ACTION_TYPES,
	IsAuthenticatedActions,
	IsAuthenticatedSucceedAction,
	IsAuthenticatedFailedAction
} from "./is-authenticated.actions";

@Injectable()
export class IsAuthenticatedApiModelApiEffects {
	constructor(private actions$: Actions<IsAuthenticatedActions>, private service: UserService) {}

	@Effect()
	start$ = this.actions$
		.ofType(IS_AUTHENTICATED_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.IsAuthenticated()),
			map(res => new IsAuthenticatedSucceedAction(res)),
			catchError(err => Observable.of(new IsAuthenticatedFailedAction(err)))
		);
}
