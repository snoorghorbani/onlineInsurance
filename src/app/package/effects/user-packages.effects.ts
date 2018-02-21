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
    UserPackagesAction,
    UserPackagesActionTypes,
    FetchUserPackagesStart,
    FetchUserPackagesSucceed,
    FetchUserPackagesFailed
} from "../actions";
import { PackageService } from "../services/package.service";


@Injectable()
export class UserPackagesEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private packageService: PackageService
    ) { }

    @Effect()
    start$ = this.actions$
        .ofType(UserPackagesActionTypes.FETCH_USER_PACKAGES)
        .map(toPayload)
        .map(payload => new FetchUserPackagesStart(payload))

    @Effect()
    packageFetch$ = this.actions$
        .ofType(UserPackagesActionTypes.FETCH_USER_PACKAGES_START)
        .map(toPayload)
        .switchMap(payload => {
            return this.packageService.getUserPackage(payload)
                .map(res => new FetchUserPackagesSucceed(res))
                .catch(res => Observable.of(new FetchUserPackagesFailed()))
        })

}