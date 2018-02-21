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
    CartableActionTypes, CartableDataFetchedAction, CartableDataFailedAction
} from "../actions";
import { AgentService } from "../services";


@Injectable()
export class CartableEffects {

    constructor(
        private actions$: Actions,
        private agentService: AgentService,
    ) { }

    @Effect()
    loadAgentWhenUserChanged$ = this.actions$
        .ofType(CartableActionTypes.GET_CARTABLE_DATA)
        .map(toPayload)
        .switchMap(payload => {
            return this.agentService.getCartableRequests()
                .map(res => new CartableDataFetchedAction(res))
                .catch(res => Observable.of(new CartableDataFailedAction()))
        })

}