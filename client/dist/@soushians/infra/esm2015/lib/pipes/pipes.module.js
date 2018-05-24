/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataUnitPipe, TimeUnitPipe, CurrencyUnitPipe, PersianDatePipe, PersianNumberPipe, TimeCounterPipe, DataUnitService } from "./pipes";
export class PipesModule {
}
PipesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    DataUnitService
                ],
                declarations: [
                    DataUnitPipe,
                    TimeUnitPipe,
                    PersianDatePipe,
                    CurrencyUnitPipe,
                    PersianNumberPipe,
                    TimeCounterPipe
                ],
                exports: [
                    DataUnitPipe,
                    TimeUnitPipe,
                    PersianDatePipe,
                    CurrencyUnitPipe,
                    PersianNumberPipe,
                    TimeCounterPipe
                ]
            },] },
];
//# sourceMappingURL=pipes.module.js.map
