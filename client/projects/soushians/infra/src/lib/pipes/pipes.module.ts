import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataUnitPipe, TimeUnitPipe, CurrencyUnitPipe, PersianDatePipe, PersianNumberPipe, TimeCounterPipe, DataUnitService } from "./pipes";

@NgModule({
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
})
export class PipesModule { }
