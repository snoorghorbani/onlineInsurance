import { Action } from '@ngrx/store';

import { PackageAddModel } from 'app/models/package';

export enum PackageAddActionTypes {
    PACKAGE_ADD         = '[PACAKGE] PACKAGE LIST',
    PACKAGE_ADD_START   = '[PACAKGE] PACKAGE_ADD_START',
    PACKAGE_ADD_SUCCEED = '[PACAKGE] PACKAGE_ADD_SUCCEED',
    PACKAGE_ADD_FAILD   = '[PACAKGE] PACKAGE_ADD_FAILD',
}

export class PackageAddAction implements Action {
    readonly type = PackageAddActionTypes.PACKAGE_ADD;
    constructor(public payload: PackageAddModel.Request) { }
}
export class PackageAddStartAction implements Action {
    readonly type = PackageAddActionTypes.PACKAGE_ADD_START;
    constructor(public payload: PackageAddModel.Request) { }
}
export class PackageAddSucceedAction implements Action {
    readonly type = PackageAddActionTypes.PACKAGE_ADD_SUCCEED;
    constructor(public payload: PackageAddModel.Response) { }
}
export class PackageAddFaildAction implements Action {
    readonly type = PackageAddActionTypes.PACKAGE_ADD_FAILD;
}

export type PackageAddActions =
    | PackageAddAction
    | PackageAddStartAction
    | PackageAddSucceedAction
    | PackageAddFaildAction;