import { Action } from '@ngrx/store';

import { UserPackagesModel } from 'app/models/package';

export enum UserPackagesActionTypes {
        FETCH_USER_PACKAGES = '[PACAKGE][USER_PACKAGES] FETCH_USER_PACKAGES',
        FETCH_USER_PACKAGES_START = '[PACAKGE][USER_PACKAGES] FETCH_USER_PACKAGES_START',
        FETCH_USER_PACKAGES_SUCCEED = '[PACAKGE][USER_PACKAGES] FETCH_USER_PACKAGES_SUCCEED',
        FETCH_USER_PACKAGES_FAILD = '[PACAKGE][USER_PACKAGES] FETCH_USER_PACKAGES_FAILD'
}

export class FetchUserPackages implements Action {
        readonly type = UserPackagesActionTypes.FETCH_USER_PACKAGES;
        constructor(public payload: UserPackagesModel.Request) { }
}
export class FetchUserPackagesStart implements Action {
        readonly type = UserPackagesActionTypes.FETCH_USER_PACKAGES_START;
        constructor(public payload: UserPackagesModel.Request) { }
}
export class FetchUserPackagesSucceed implements Action {
        readonly type = UserPackagesActionTypes.FETCH_USER_PACKAGES_SUCCEED;
        constructor(public payload: UserPackagesModel.Response) { }
}
export class FetchUserPackagesFailed implements Action {
        readonly type = UserPackagesActionTypes.FETCH_USER_PACKAGES_FAILD;
}

export type UserPackagesAction =
        | FetchUserPackages
        | FetchUserPackagesStart
        | FetchUserPackagesSucceed
        | FetchUserPackagesFailed;