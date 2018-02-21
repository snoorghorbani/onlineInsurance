import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterAction } from "@ngrx/router-store";

import { PackageListActionTypes, FetchPackageListStart, FetchPackageListSucceed, FetchPackageListFaild } from "../actions";
import { PackageService } from "../services";


@Injectable()
export class PackageListEffects {

    constructor(
        private actions$: Actions,
        private packageService: PackageService
    ) { }

    @Effect()
    canFetchPackageList$ = this.actions$
        .ofType(PackageListActionTypes.FETCH_PACKAGE_LIST)
        .map(toPayload)
        .map(payload => new FetchPackageListStart(payload))


    @Effect()
    packageListFetch$ = this.actions$
        .ofType(PackageListActionTypes.FETCH_PACKAGE_LIST_START)
        .map(toPayload)
        .switchMap(payload => {
            debugger
            return this.packageService.getPackageList(payload)
                .map(res => new FetchPackageListSucceed(res))
                .catch(res => Observable.of(new FetchPackageListFaild()))
        })
}