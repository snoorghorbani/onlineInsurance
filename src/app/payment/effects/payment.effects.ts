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

import { PaymentRequestAction, PaymentRequestActionTypes, FetchPaymentRequestStart, FetchPaymentRequestSucceed, FetchPaymentRequestFailed , FetchPaymentResponseFailed , FetchPaymentResponseSucceed } from "../actions";
import { BankService, PaymentService } from "../services";


@Injectable()
export class PaymentEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private paymentService: PaymentService
    ) { }


    @Effect()
    canFetchBanks$ = this.actions$
        .ofType(PaymentRequestActionTypes.FETCH_PAYMENTREQUEST)
        .map(toPayload)
        .map(data => new FetchPaymentRequestStart(data))

    @Effect()
    bankFetch$ = this.actions$
        .ofType(PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_START)
        .map(toPayload)
        .switchMap(data => {
            return this.paymentService.paymentRequest(data)
                .map(res => new FetchPaymentRequestSucceed(res))
                .catch(res => Observable.of(new FetchPaymentRequestFailed()))
        })

    @Effect()
    redirectToBank$ = this.actions$
        .ofType(PaymentRequestActionTypes.FETCH_PAYMENTREQUEST_SUCCEED)
        .map(toPayload)
        .switchMap(data => {
            return this.paymentService.redirectToBank(data)
                .map(res => new FetchPaymentResponseSucceed(res))
                .catch(res => Observable.of(new FetchPaymentResponseFailed()))
        })


}