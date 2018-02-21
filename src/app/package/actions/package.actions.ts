import { Action } from '@ngrx/store';

import { PackageModel, FetchPackageModel } from 'app/models/package';

export enum PackageActionTypes {
    FETCH_PACKAGE = '[PACKAGE] FETCH_PACKAGE ',
    FETCH_PACKAGE_START = '[PACKAGE] FETCH_PACKAGE_START ',
    FETCH_PACKAGE_FAILED = '[PACKAGE] FETCH_PACKAGE_FAILED ',
    FETCH_PACKAGE_SUCCEED = '[PACKAGE] FETCH_PACKAGE_SUCCEED ',
}

export class FetchPackageAction implements Action {
    readonly type = PackageActionTypes.FETCH_PACKAGE;
    constructor(public payload: string) { }
}
export class FetchPackageStartAction implements Action {
    readonly type = PackageActionTypes.FETCH_PACKAGE_START;
    constructor(public payload: FetchPackageModel.Request) { }
}
export class FetchPackageSucceedAction implements Action {
    readonly type = PackageActionTypes.FETCH_PACKAGE_SUCCEED;
    constructor(public payload: FetchPackageModel.Response) { }
}
export class FetchPackageFailedAction implements Action {
    readonly type = PackageActionTypes.FETCH_PACKAGE_FAILED;
}


export type PackageActions =
    FetchPackageAction
    | FetchPackageStartAction
    | FetchPackageSucceedAction
    | FetchPackageFailedAction;
