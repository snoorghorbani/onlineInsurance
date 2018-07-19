import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { SAVE_ORDER_FORM_ACTION_TYPES, GET_NEW_ORDER_FORM_ACTION_TYPES } from '../services/api';

@Injectable()
export class RootEffects {
	constructor(private actions$: Actions<any>) {}

	// @Effect()
	// start$ = this.actions$
	// 	.ofType(SAVE_ORDER_FORM_ACTION_TYPES.SUCCEED, GET_NEW_ORDER_FORM_ACTION_TYPES.SUCCEED)
	// 	.pipe(map((action) => action.payload), map((orderForm) => new NewOrderFormUpdateAction(orderForm)));

	// @Effect()
	// after_order_succeed$ = this.actions$
	// 	.ofType(APPROVE_ORDER_ACTION_TYPES.SUCCEED)
	// 	.pipe(map(action => action.payload), map(orderForm => new NewOrderFormUpdateAction(orderForm)));
}
