import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { RouterAction } from "@ngrx/router-store";

import { PackageAddActionTypes, PackageAddStartAction, PackageAddSucceedAction, PackageAddFaildAction } from "../actions";
import { PackageService } from "../services";


@Injectable()
export class PackageAddEffects {

    constructor(
        private actions$: Actions,
        private packageService: PackageService
    ) { }

    @Effect()
    canAddPackage$ = this.actions$
        .ofType(PackageAddActionTypes.PACKAGE_ADD)
        .map(toPayload)
        .map(payload => new PackageAddStartAction(payload))


    @Effect()
    packagAdd$ = this.actions$
        .ofType(PackageAddActionTypes.PACKAGE_ADD_START)
        .map(toPayload)
        .switchMap(payload => {
            debugger
            return this.packageService.PackageAdd(payload)
                .map(res => new PackageAddSucceedAction(res))
                .catch(res => Observable.of(new PackageAddFaildAction()))
        })
}