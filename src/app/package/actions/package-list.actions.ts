import { Action } from '@ngrx/store';

import { PackageListModel } from 'app/models/package';

export enum PackageListActionTypes {
    FETCH_PACKAGE_LIST         = '[PACAKGE] FETCH_PACKAGE LIST',
    FETCH_PACKAGE_LIST_START   = '[PACAKGE] FETCH_PACKAGE_LIST_START',
    FETCH_PACKAGE_LIST_SUCCEED = '[PACAKGE] FETCH_PACKAGE_LIST_SUCCEED',
    FETCH_PACKAGE_LIST_FAILD   = '[PACAKGE] FETCH_PACKAGE_LIST_FAILD',
    SELECT_PACKAGE_LIST_ITEM   = '[PACAKGE] SELECT_PACKAGE_LIST_ITEM'
}

export class FetchPackageList implements Action {
    readonly type = PackageListActionTypes.FETCH_PACKAGE_LIST;
}
export class FetchPackageListStart implements Action {
    readonly type = PackageListActionTypes.FETCH_PACKAGE_LIST_START;
    constructor(public payload: PackageListModel.Request) { }
}
export class FetchPackageListSucceed implements Action {
    readonly type = PackageListActionTypes.FETCH_PACKAGE_LIST_SUCCEED;
    constructor(public payload: PackageListModel.Response) { }
}
export class FetchPackageListFaild implements Action {
    readonly type = PackageListActionTypes.FETCH_PACKAGE_LIST_FAILD;
}

export class FetchSelectedPackageListItem implements Action {
    readonly type = PackageListActionTypes.SELECT_PACKAGE_LIST_ITEM;
}


export type PackageListAction =
    | FetchPackageList
    | FetchPackageListStart
    | FetchPackageListSucceed
    | FetchPackageListFaild
    | FetchSelectedPackageListItem;