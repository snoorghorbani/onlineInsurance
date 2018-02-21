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

import { BankActionTypes, FetchBacks, FetchBanksStart, FetchBanksSucceed, FetchBanksFaild, ClearBankListState, SelectBank } from "../actions";
import { BankService, PaymentService } from "../services";

@Injectable()
export class BankEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private bankService: BankService
    ) { }

    // TODO: use correct actions
    @Effect()
    canFetchBanks$ = this.actions$
        .ofType(BankActionTypes.FETCH_BANKS)
        .map(() => new FetchBanksStart())

    @Effect()
    bankFetch$ = this.actions$
        .ofType(BankActionTypes.FETCH_BANKS_START)
        .switchMap(() => {
            return this.bankService.getBanks()
                .map(res => new FetchBanksSucceed(res))
                .catch(res => Observable.of(new FetchBanksFaild()))
        })

    // @Effect()
    // selectBank$ = this.actions$
    //     .ofType(BankActionTypes.SELECT_BANK)
    //     .map(toPayload)
    //     .map(bank => {
    //         debugger;
    //         return new SelectBank(bank)
    //     });

}