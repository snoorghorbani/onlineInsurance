/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { DataUnitPipe, TimeUnitPipe, CurrencyUnitPipe, PersianDatePipe, PersianNumberPipe, TimeCounterPipe, DataUnitService } from "./pipes/pipes";
import { UtilityService } from "./utility.service";
import "./helper";
import "./validators";
export class InfraModule {
}
InfraModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [DataUnitPipe, TimeUnitPipe, CurrencyUnitPipe, PersianDatePipe, PersianNumberPipe, TimeCounterPipe],
                providers: [UtilityService, DataUnitService],
                exports: [DataUnitPipe, TimeUnitPipe, CurrencyUnitPipe, PersianDatePipe, PersianNumberPipe, TimeCounterPipe]
            },] },
];
//# sourceMappingURL=infra.module.js.map
