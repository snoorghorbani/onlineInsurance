import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderFormService } from "../../order-form.service";
import {
	GET_NEW_ORDER_FORM_ACTION_TYPES,
	GetNewOrderFormActions,
	GetNewOrderFormSucceedAction,
	GetNewOrderFormFailedAction
} from "./get-new-order-form.actions";

@Injectable()
export class GetNewOrderFormApiEffects {
	constructor(private actions$: Actions<GetNewOrderFormActions>, private service: OrderFormService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_NEW_ORDER_FORM_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.GetNewOrderForm()),
			map(res => new GetNewOrderFormSucceedAction(res)),
			catchError(err => Observable.of(new GetNewOrderFormFailedAction(err)))
		);
}
