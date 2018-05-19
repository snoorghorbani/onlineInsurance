import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderService } from "../../order.service";
import {
	GET_MY_CARTABLE_ACTION_TYPES,
	GetMyCartableActions,
	GetMyCartableSucceedAction,
	GetMyCartableFailedAction
} from "./get-my-cartable.actions";

@Injectable()
export class GetMyCartableApiEffects {
	constructor(private actions$: Actions<GetMyCartableActions>, private service: OrderService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_MY_CARTABLE_ACTION_TYPES.START)
		.pipe(
			switchMap(payload => this.service.GetMyCartable()),
			map(res => new GetMyCartableSucceedAction(res)),
			catchError(err => Observable.of(new GetMyCartableFailedAction(err)))
		);
}
