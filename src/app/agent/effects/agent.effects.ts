import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { AgentModuleDefinition } from "../agent.global"

import {
        ProgressingStarted, ProgressingFinished, FailedHappened
} from '../actions';
import { AgentService } from "../services";

@Injectable()
export class AgentEffects {

        constructor(
                private actions$: Actions<any>,
                private router: Router,
                private agentService: AgentService
        ) { }

        // @Effect()
        // dispachProgressingStarted$ = this.actions$
        //         .ofType(
        //         MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_START,
        //         DailyAgentReportActionTypes.FETCH_DAILY_SESSION_REPORT_START,
        //         DetailAgentReportActionTypes.FETCH_DETAIL_SESSION_REPORT_START
        //         )
        //         .map(() => new ProgressingStarted())

        // @Effect()
        // dispachProgressingFinished$ = this.actions$
        //         .ofType(
        //         MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_SUCCEED,
        //         MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_FAILED,
        //         DailyAgentReportActionTypes.FETCH_DAILY_SESSION_REPORT_SUCCEED,
        //         DailyAgentReportActionTypes.FETCH_DAILY_SESSION_REPORT_FAILED,
        //         DetailAgentReportActionTypes.FETCH_DETAIL_SESSION_REPORT_SUCCEED,
        //         DetailAgentReportActionTypes.FETCH_DETAIL_SESSION_REPORT_FAILED
        //         )
        //         .map(() => new ProgressingFinished())

        // @Effect()
        // dispachError$ = this.actions$
        //         .ofType(
        //         MonthlyAgentReportActionTypes.FETCH_MONTHLY_SESSION_REPORT_FAILED,
        //         DailyAgentReportActionTypes.FETCH_DAILY_SESSION_REPORT_FAILED,
        //         DetailAgentReportActionTypes.FETCH_DETAIL_SESSION_REPORT_FAILED
        //         )
        //         .map(toPayload)
        //         .map(error => new FailedHappened(error))

}

AgentModuleDefinition.effects.push(AgentEffects);