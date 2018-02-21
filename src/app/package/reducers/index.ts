import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromUserPackages from './user-packages.reducer';
import * as fromPackageList  from './package-list.reducer';
import * as fromPackageEdit  from './package-edit.reducer';
import * as fromFetchPackage from './package.reducer';

import * as fromUser from './user.reducer';

import { PackageModel, PackageListModel } from 'app/models/package';

export interface packageState {
    user: fromUser.State;
    userPackages: fromUserPackages.State;
    packageList: fromPackageList.State;
    packageEdit: fromPackageEdit.State;
    fetchPackage: fromFetchPackage.State;
}

export interface FeatureState {
    'packages': packageState;
}

export const PackageReducers = {
    user: fromUser.Reducer,
    userPackages: fromUserPackages.Reducer,
    packageList: fromPackageList.Reducer,
    packageEdit: fromPackageEdit.Reducer,
    fetchPackage: fromFetchPackage.Reducer,
};

/***
****    selectors
***/
export const selectPackageFeatureState = createFeatureSelector<packageState>("packages");

//#region  user selectors
export const selectUserState = createSelector(
    selectPackageFeatureState,
    (state: packageState) => state.user
);

export const getUser = createSelector(
    selectUserState,
    fromUser.getUser
);

export const getStatus = createSelector(
    selectUserState,
    fromUser.getUserStatus
);
//#endregion


//#region user packages selectors
const selectUserPackagesState = createSelector(
    selectPackageFeatureState,
    (state: packageState) => state.userPackages
);

export const getUserPackages = createSelector(
    selectUserPackagesState,
    fromUserPackages.getUserPackages
);

export const getUserPackagesStatus = createSelector(
    selectUserPackagesState,
    fromUserPackages.getUserPackageStatus
);
//#endregion


//#region user packages selectors
const selectPackageListState = createSelector(
    selectPackageFeatureState,
    (state: packageState) => state.packageList
);

export const getPackageList = createSelector(
    selectPackageListState,
    fromPackageList.getPackageList
);

export const getPackageListStatus = createSelector(
    selectPackageListState,
    fromPackageList.getPackageListstatus
);
//#endregion


//#region edit packages selectors
const selectPackageEditState = createSelector(
    selectPackageFeatureState,
    (state: packageState) => state.packageEdit
);

export const getPackageEdit = createSelector(
    selectPackageEditState,
    fromPackageEdit.getPackageEdit
);

export const getPackageEditStatus = createSelector(
    selectPackageEditState,
    fromPackageEdit.getPackageEditStatus
);
//#endregion


//#region fetch packages selectors
const selectPackageState = createSelector(
    selectPackageFeatureState,
    (state: packageState) => state.fetchPackage
);

export const getPackage = createSelector(
    selectPackageState,
    fromFetchPackage.getPackage
);

export const getPackageStatus = createSelector(
    selectPackageState,
    fromFetchPackage.getPackageStatus
);
//#endregion