/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ConfigService } from '../../services';
export class ConfigModuleContainerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ConfigModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'config-module-container',
                template: `<div fxLayoutAlign="" fxflex="100" fxLayout="column">
    <router-outlet></router-outlet>
</div>
`
            },] },
];
/** @nocollapse */
ConfigModuleContainerComponent.ctorParameters = () => [
    { type: ConfigService, },
];
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
