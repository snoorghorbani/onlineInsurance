/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services";
import { map, switchMap, catchError } from "rxjs/operators";
export class LoadConfigEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} configService
     */
    constructor(actions$, router, configService) {
        this.actions$ = actions$;
        this.router = router;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(ConfigActionTypes.GET_CONFIGS)
            .pipe(map((action) => action.payload), switchMap((data) => this.configService.getConfigs()), map((configs) => new ConfigLoadedSucceedAction(configs)), catchError(() => Observable.of(new ConfigLoadedFailedAction())));
    }
}
LoadConfigEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoadConfigEffects.ctorParameters = () => [
    { type: Actions, },
    { type: Router, },
    { type: ConfigService, },
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], LoadConfigEffects.prototype, "getConfigs$", void 0);
function LoadConfigEffects_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoadConfigEffects.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoadConfigEffects.ctorParameters;
    /** @type {?} */
    LoadConfigEffects.prototype.getConfigs$;
    /** @type {?} */
    LoadConfigEffects.prototype.actions$;
    /** @type {?} */
    LoadConfigEffects.prototype.router;
    /** @type {?} */
    LoadConfigEffects.prototype.configService;
}
//# sourceMappingURL=load-config.effects.js.map
