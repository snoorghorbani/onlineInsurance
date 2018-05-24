// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import { Action } from '@ngrx/store';
// import { Actions, Effect, toPayload } from '@ngrx/effects';


// import { packageModuleDefinition } from "app/package/package.global"

// import { UserActivePackageReportApiResponseModel } from "app/models/package";
// import { PackageService } from "app/package/services/package.service";

// var _api = [];
// var _effects = [];
// var _reducers = [];



// var createEffects = function <T>(model) {
//     var apiId = model.name;
//     debugger
//     let types = {
//         FETCH_PACKAGES: `[API] ${apiId}_FETCH_PACKAGES`,
//         FETCH_PACKAGES_START: '[API] ${apiId}_FETCH_PACKAGES_START',
//         FETCH_PACKAGES_SUCCEED: '[API] ${apiId}_FETCH_PACKAGES_SUCCEED',
//         FETCH_PACKAGES_FAILD: '[API] ${apiId}_FETCH_PACKAGES_FAILD'
//     }


//     class FetchPackages implements Action {
//         readonly type = types.FETCH_PACKAGES;
//     }
//     class FetchPackagesStart implements Action {
//         readonly type = types.FETCH_PACKAGES_START;
//     }
//     class FetchPackagesSucceed implements Action {
//         readonly type = types.FETCH_PACKAGES_SUCCEED;
//         constructor(public payload: T[]) { }
//     }
//     class FetchPackagesFaild implements Action {
//         readonly type = types.FETCH_PACKAGES_FAILD;
//     }

//     type ApiAction =
//         | FetchPackages
//         | FetchPackagesStart
//         | FetchPackagesSucceed
//         | FetchPackagesFaild;

// debugger

//     @Injectable()
//     class effects {

//         constructor(
//             private actions$: Actions,
//             private router: Router,
//             private packageService: PackageService
//         ) { }

//         @Effect()
//         canFetchPackages$ = this.actions$
//             .ofType(types.FETCH_PACKAGES)
//             .switchMap(() => {
//                 debugger
//                 var _model = new model()
//                 return _model.canGetPackages()
//                     .map(data => {
//                         return (data)
//                             ? new FetchPackagesStart()
//                             : new FetchPackagesFaild();
//                     })
//             })

//         @Effect()
//         packageFetch$ = this.actions$
//             .ofType(types.FETCH_PACKAGES_START)
//             .switchMap(() => {
//                 var _model = new model()
//                 return _model.load()
//                     .map(res => new FetchPackagesSucceed(res))
//                     .catch(res => Observable.of(new FetchPackagesFaild()))
//             })

//     }
//     return {
//         effects,
//         actions: {
//             FetchPackages, FetchPackagesStart, FetchPackagesSucceed, FetchPackagesFaild
//         }
//     };;
// }


// export function NgrxApiCreator<T>(model: any) {
//     return createEffects<T>(model)
// }