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
    FetchUserPackages,
    UserActionTypes
} from "../actions";

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions
    ) { }

    @Effect()
    loadPaymentsWhenUserChanged$ = this.actions$
        .ofType(UserActionTypes.USER_CHANGED)
        .map(toPayload)
        .map(data => new FetchUserPackages(data))

}