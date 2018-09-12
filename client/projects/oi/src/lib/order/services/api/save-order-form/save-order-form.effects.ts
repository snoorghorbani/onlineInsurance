import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { OrderFormService } from "../../order-form.service";
import {
	SAVE_ORDER_FORM_ACTION_TYPES,
	SaveOrderFormActions,
	SaveOrderFormSucceedAction,
	SaveOrderFormFailedAction
} from "./save-order-form.actions";

@Injectable()
export class SaveOrderFormApiEffects {
	constructor(private actions$: Actions<SaveOrderFormActions>, private service: OrderFormService) {}

	@Effect()
	start$ = this.actions$
		.ofType(SAVE_ORDER_FORM_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.SaveOrderForm()),
			map(res => new SaveOrderFormSucceedAction(res)),
			catchError(err => Observable.of(new SaveOrderFormFailedAction(err)))
		);
}
