/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ConfigService } from '../../services';
var ConfigModuleContainerComponent = /** @class */ (function () {
    /**
     * @param {?} service
     */
    function ConfigModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    ConfigModuleContainerComponent.prototype.ngOnInit = function () {
    };
    return ConfigModuleContainerComponent;
}());
export { ConfigModuleContainerComponent };
ConfigModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'config-module-container',
                template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
            },] },
];
/** @nocollapse */
ConfigModuleContainerComponent.ctorParameters = function () { return [
    { type: ConfigService, },
]; };
function ConfigModuleContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ConfigModuleContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ConfigModuleContainerComponent.ctorParameters;
    /** @type {?} */
    ConfigModuleContainerComponent.prototype.service;
}
//# sourceMappingURL=config-module-container.component.js.map
