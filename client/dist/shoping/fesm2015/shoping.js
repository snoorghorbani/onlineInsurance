import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShopingService {
    constructor() { }
}
ShopingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ShopingService.ctorParameters = () => [];
/** @nocollapse */ ShopingService.ngInjectableDef = defineInjectable({ factory: function ShopingService_Factory() { return new ShopingService(); }, token: ShopingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShopingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ShopingComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-shoping",
                template: `
    <p>
      shoping workssdf!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
ShopingComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShopingModule {
}
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
