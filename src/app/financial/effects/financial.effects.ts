import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { FinancialModuleDefinition } from "../financial.global"

import {
        ProgressingStarted, ProgressingFinished, FailedHappened
} from '../actions';
import { FinancialService } from "../services";

@Injectable()
export class FinancialEffects {

        constructor(
                private actions$: Actions<any>,
                private router: Router,
                private financialService: FinancialService
        ) { }

        // @Effect()
        // dispachProgressingStarted$ = this.actions$
        //         .ofType(
        //         MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_START,
        //         DailyFinancialReportActionTypes.FETCH_DAILY_SESSION_REPORT_START,
        //         DetailFinancialReportActionTypes.FETCH_DETAIL_SESSION_REPORT_START
        //         )
        //         .map(() => new ProgressingStarted())

        // @Effect()
        // dispachProgressingFinished$ = this.actions$
        //         .ofType(
        //         MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_SUCCEED,
        //         MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_FAILED,
        //         DailyFinancialReportActionTypes.FETCH_DAILY_SESSION_REPORT_SUCCEED,
        //         DailyFinancialReportActionTypes.FETCH_DAILY_SESSION_REPORT_FAILED,
        //         DetailFinancialReportActionTypes.FETCH_DETAIL_SESSION_REPORT_SUCCEED,
        //         DetailFinancialReportActionTypes.FETCH_DETAIL_SESSION_REPORT_FAILED
        //         )
        //         .map(() => new ProgressingFinished())

        // @Effect()
        // dispachError$ = this.actions$
        //         .ofType(
        //         MonthlyFinancialReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_FAILED,
        //         DailyFinancialReportActionTypes.FETCH_DAILY_SESSION_REPORT_FAILED,
        //         DetailFinancialReportActionTypes.FETCH_DETAIL_SESSION_REPORT_FAILED
        //         )
        //         .map(toPayload)
        //         .map(error => new FailedHappened(error))

}

FinancialModuleDefinition.effects.push(FinancialEffects);