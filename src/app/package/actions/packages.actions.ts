import { Action } from '@ngrx/store';

import { PackageModel, FetchPackageModel } from 'app/models/package';

export enum PackagesActionTypes {
    FETCH_PACKAGES = '[PACKAGE] FETCH_PACKAGES',
    FETCH_PACKAGES_START = '[PACKAGE] FETCH_PACKAGES_START',
    FETCH_PACKAGES_FAILED = '[PACKAGE] FETCH_PACKAGES_FAILED',
    FETCH_PACKAGES_SUCCEED = '[PACKAGE] FETCH_PACKAGES_SUCCEED',
}

export class FetchPackagesAction implements Action {
    readonly type = PackagesActionTypes.FETCH_PACKAGES;
    constructor(public payload: string) { }
}
export class FetchPackagesStartAction implements Action {
    readonly type = PackagesActionTypes.FETCH_PACKAGES_START;
    constructor(public payload: FetchPackageModel.Request) { }
}
export class FetchPackagesSucceedAction implements Action {
    readonly type = PackagesActionTypes.FETCH_PACKAGES_SUCCEED;
    constructor(public payload: FetchPackageModel.Response) { }
}
export class FetchPackagesFailedAction implements Action {
    readonly type = PackagesActionTypes.FETCH_PACKAGES_FAILED;
}


export type PackagesActions =
    FetchPackagesAction
    | FetchPackagesStartAction
    | FetchPackagesSucceedAction
    | FetchPackagesFailedAction;
