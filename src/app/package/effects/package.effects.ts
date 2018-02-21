import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterAction } from "@ngrx/router-store";

import { PackageActionTypes, FetchPackageStartAction, FetchPackageFailedAction, FetchPackageSucceedAction, FetchPackageAction } from "../actions";
import { PackageService } from "../services";


@Injectable()
export class PackageEffects {

    constructor(
        private actions$: Actions,
        private packageService: PackageService
    ) { }

    @Effect()
    canFetchPackages$ = this.actions$
        .ofType(PackageActionTypes.FETCH_PACKAGE)
        .map(toPayload)
        .map(payload => new FetchPackageStartAction(payload))


    @Effect()
    packageFetch$ = this.actions$
        .ofType(PackageActionTypes.FETCH_PACKAGE_START)
        .map(toPayload)
        .switchMap(payload => {
            return this.packageService.FetchPackage(payload)
                .map(res => new FetchPackageSucceedAction(res))
                .catch(res => Observable.of(new FetchPackageFailedAction()))
        })

}
