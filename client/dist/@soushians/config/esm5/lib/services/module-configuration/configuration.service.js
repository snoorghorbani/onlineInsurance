/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from '../../config.config';
import { getConfigModuleConfig } from '../../reducers';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var ConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    function ConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig).subscribe(function (configConfig) {
            if (!configConfig)
                return;
            _this._config = Object.assign({}, _this._config, configConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(ConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigurationService;
}());
export { ConfigurationService };
ConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] },] },
    { type: Store, },
]; };
function ConfigurationService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ConfigurationService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ConfigurationService.ctorParameters;
    /** @type {?} */
    ConfigurationService.prototype._config;
    /** @type {?} */
    ConfigurationService.prototype.config$;
    /** @type {?} */
    ConfigurationService.prototype.store;
}
//# sourceMappingURL=configuration.service.js.map
