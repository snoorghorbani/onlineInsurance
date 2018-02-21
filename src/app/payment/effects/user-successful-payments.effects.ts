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
    UserSuccessfulPaymentsActionTypes,
    FetchUserSuccessfulPaymentsStart,
    FetchUserSuccessfulPaymentsSucceed,
    FetchUserSuccessfulPaymentsFaild,
} from "../actions";
import { PaymentService } from "../services";


@Injectable()
export class UserSuccessfulPaymentEffects {

    constructor(
        private actions$: Actions,
        private paymentService: PaymentService
    ) { }


    @Effect()
    mapToStart$ = this.actions$
        .ofType(UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS)
        .map(toPayload)
        .map(requestData => new FetchUserSuccessfulPaymentsStart(requestData));

    @Effect()
    paymentReport$ = this.actions$
        .ofType(UserSuccessfulPaymentsActionTypes.FETCH_USER_SUCCESSFUL_PAYMENTS_START)
        .map(toPayload)
        .switchMap(requestData => {
            return this.paymentService.successfulPaymentsReport(requestData)
                .map(res => new FetchUserSuccessfulPaymentsSucceed(res))
                .catch(res => Observable.of(new FetchUserSuccessfulPaymentsFaild()))
        })
    
}