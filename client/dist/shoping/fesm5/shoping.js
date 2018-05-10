import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopingService = /** @class */ (function () {
    function ShopingService() {
    }
    return ShopingService;
}());
ShopingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ShopingService.ctorParameters = function () { return []; };
/** @nocollapse */ ShopingService.ngInjectableDef = defineInjectable({ factory: function ShopingService_Factory() { return new ShopingService(); }, token: ShopingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopingComponent = /** @class */ (function () {
    function ShopingComponent() {
    }
    /**
     * @return {?}
     */
    ShopingComponent.prototype.ngOnInit = function () { };
    return ShopingComponent;
}());
ShopingComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-shoping",
                template: "\n    <p>\n      shoping workssdf!\n    </p>\n  ",
                styles: []
            },] },
];
/** @nocollapse */
ShopingComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopingModule = /** @class */ (function () {
    function ShopingModule() {
    }
    return ShopingModule;
}());
ShopingModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [ShopingComponent],
                exports: [ShopingComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ShopingService, ShopingComponent, ShopingModule };
//# sourceMappingURL=shoping.js.map
