/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ConfigService } from '../../services';
import { Store } from '@ngrx/store';
import { getConfigs } from '../../reducers';
var ConfigsComponent = /** @class */ (function () {
    /**
     * @param {?} configService
     * @param {?} store
     */
    function ConfigsComponent(configService, store) {
        this.configService = configService;
        this.store = store;
        this.configs = this.store.select(getConfigs);
    }
    return ConfigsComponent;
}());
export { ConfigsComponent };
ConfigsComponent.decorators = [
    { type: Component, args: [{
                selector: 'configs',
                template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n  <mat-card class=\"config-box\" *ngFor=\"let config of (configs | async)\" [fxFlex]=\"50\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  config.Name]\">\n          <mat-icon aria-label=\"edit config\">edit</mat-icon>\n        </a>\n        {{config.Name}}\n      </h3>\n  </mat-card>\n</div>",
                styles: [":host{width:100%}.config-box{margin:15px}"]
            },] },
];
/** @nocollapse */
ConfigsComponent.ctorParameters = function () { return [
    { type: ConfigService, },
    { type: Store, },
]; };
function ConfigsComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ConfigsComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ConfigsComponent.ctorParameters;
    /** @type {?} */
    ConfigsComponent.prototype.configs;
    /** @type {?} */
    ConfigsComponent.prototype.configService;
    /** @type {?} */
    ConfigsComponent.prototype.store;
}
//# sourceMappingURL=configs.component.js.map
