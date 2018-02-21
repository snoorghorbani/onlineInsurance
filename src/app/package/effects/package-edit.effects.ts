import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterAction } from "@ngrx/router-store";

import {
    PackageEditActionTypes, PackageEditStartAction, PackageEditSucceedAction, PackageEditFailedAction,
    PackageActionTypes, FetchPackageStartAction, FetchPackageSucceedAction, FetchPackageFailedAction, FetchPackageAction
} from "../actions";
import { PackageService } from "../services";


@Injectable()
export class PackageEditEffects {

    constructor(
        private actions$: Actions,
        private packageService: PackageService
    ) { }

    @Effect()
    canFetchPackage$ = this.actions$
        .ofType(PackageActionTypes.FETCH_PACKAGE)
        .map(toPayload)
        .map(payload => new FetchPackageStartAction(payload))


    @Effect()
    fetchPackag$ = this.actions$
        .ofType(PackageActionTypes.FETCH_PACKAGE_START)
        .map(toPayload)
        .switchMap(payload => {
            debugger
            return this.packageService.FetchPackage(payload)
                .map(res => new FetchPackageSucceedAction(res))
                .catch(res => Observable.of(new FetchPackageFailedAction()))
        })

    @Effect()
    canEditPackage$ = this.actions$
        .ofType(PackageEditActionTypes.PACKAGE_EDIT)
        //.map(toPayload)
        .map(payload => new PackageEditStartAction())


    @Effect()
    packagEdit$ = this.actions$
        .ofType(PackageEditActionTypes.PACKAGE_EDIT_START)
        .map(toPayload)
        .switchMap(payload => {
            debugger
            return this.packageService.PackageEdit(payload)
                .map(res => new PackageEditSucceedAction())
                .catch(res => Observable.of(new PackageEditFailedAction()))
        })
}
