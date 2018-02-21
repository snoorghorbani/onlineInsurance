import { Action } from '@ngrx/store';

import { PackageEditModel } from 'app/models/package';

export enum PackageEditActionTypes {
    PACKAGE_EDIT         = '[PACKAGE] PACKAGE_EDIT',
    PACKAGE_EDIT_START   = '[PACKAGE] PACKAGE_EDIT_START',
    PACKAGE_EDIT_SUCCEED = '[PACKAGE] PACKAGE_EDIT_SUCCEED',
    PACKAGE_EDIT_FAILED  = '[PACKAGE] PACKAGE_EDIT_FAILED',
    PACKAGE_SELECTED     = '[PACAKGE] PACKAGE_SELECTED'
}

export class PackageEditAction implements Action {
    readonly type = PackageEditActionTypes.PACKAGE_EDIT;
    //constructor(public payload: PackageEditModel.Request) { }
}
export class PackageEditStartAction implements Action {
    readonly type = PackageEditActionTypes.PACKAGE_EDIT_START;
    //constructor(public payload: PackageEditModel.Request) { }
}
export class PackageEditSucceedAction implements Action {
    readonly type = PackageEditActionTypes.PACKAGE_EDIT_SUCCEED;
    //constructor(public payload: PackageEditModel.Response) { }
}
export class PackageEditFailedAction implements Action {
    readonly type = PackageEditActionTypes.PACKAGE_EDIT_FAILED;
}
export class PackageSelectedAction implements Action {
    readonly type = PackageEditActionTypes.PACKAGE_SELECTED;
}

export type PackageEditActions =
    PackageEditAction
    | PackageEditStartAction
    | PackageEditSucceedAction
    | PackageEditFailedAction
    | PackageSelectedAction;