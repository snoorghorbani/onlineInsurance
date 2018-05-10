(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('shoping', ['exports', '@angular/core'], factory) :
    (factory((global.shoping = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShopingService = (function () {
        function ShopingService() {
        }
        return ShopingService;
    }());
    ShopingService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ShopingService.ctorParameters = function () { return []; };
    /** @nocollapse */ ShopingService.ngInjectableDef = core.defineInjectable({ factory: function ShopingService_Factory() { return new ShopingService(); }, token: ShopingService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShopingComponent = (function () {
        function ShopingComponent() {
        }
        /**
         * @return {?}
         */
        ShopingComponent.prototype.ngOnInit = function () { };
        return ShopingComponent;
    }());
    ShopingComponent.decorators = [
        { type: core.Component, args: [{
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
    var ShopingModule = (function () {
        function ShopingModule() {
        }
        return ShopingModule;
    }());
    ShopingModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [],
                    declarations: [ShopingComponent],
                    exports: [ShopingComponent]
                },] },
    ];

    exports.ShopingService = ShopingService;
    exports.ShopingComponent = ShopingComponent;
    exports.ShopingModule = ShopingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shoping.umd.js.map
