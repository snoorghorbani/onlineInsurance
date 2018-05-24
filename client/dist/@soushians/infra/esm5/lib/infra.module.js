/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PipesModule } from './pipes';
import { UtilityService } from "./utility.service";
import { SocketModule } from "./socket";
import './helper';
import './validators';
var InfraModule = /** @class */ (function () {
    function InfraModule() {
    }
    return InfraModule;
}());
export { InfraModule };
InfraModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    PipesModule,
                    SocketModule
                ],
                declarations: [],
                providers: [UtilityService],
                exports: [
                    PipesModule,
                ]
            },] },
];
//# sourceMappingURL=infra.module.js.map
