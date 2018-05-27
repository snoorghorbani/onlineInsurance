import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { UserService } from "../../user.service";
import {
	SUBSCRIBE_ACTION_TYPES,
	SubscribeActions,
	SubscribeSucceedAction,
	SubscribeFailedAction
} from "./subscribe.actions";

@Injectable()
export class SubscribeApiEffects {
	constructor(private actions$: Actions<SubscribeActions>, private service: UserService) {}

	@Effect()
	start$ = this.actions$
		.ofType(SUBSCRIBE_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.Subscribe()),
			map(res => new SubscribeSucceedAction(res)),
			catchError(err => Observable.of(new SubscribeFailedAction(err)))
		);
}
