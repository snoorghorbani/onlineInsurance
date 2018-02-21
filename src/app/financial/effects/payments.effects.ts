import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterAction } from "@ngrx/router-store";

import {
    PaymentsActionTypes, PaymentsDataFetchedAction, PaymentsDataFailedAction
} from "../actions";
import { FinancialService } from "../services";


@Injectable()
export class PaymentsEffects {

    constructor(
        private actions$: Actions,
        private financialService: FinancialService,
    ) { }

    @Effect()
    loadFinancialWhenUserChanged$ = this.actions$
        .ofType(PaymentsActionTypes.GET_PAYMENTS_DATA)
        .map(toPayload)
        .switchMap(payload => {
            return this.financialService.getAgentPayments()
                .map(res => new PaymentsDataFetchedAction(res))
                .catch(res => Observable.of(new PaymentsDataFailedAction()))
        })

}