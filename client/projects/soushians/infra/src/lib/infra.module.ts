import { NgModule } from "@angular/core";

import {
	DataUnitPipe,
	TimeUnitPipe,
	CurrencyUnitPipe,
	PersianDatePipe,
	PersianNumberPipe,
	TimeCounterPipe,
	DataUnitService
} from "./pipes/pipes";
// import { PipesModule } from "./pipes";
import { UtilityService } from "./utility.service";
import "./helper";
import "./validators";

@NgModule({
	imports: [],
	declarations: [ DataUnitPipe, TimeUnitPipe, CurrencyUnitPipe, PersianDatePipe, PersianNumberPipe, TimeCounterPipe ],
	providers: [ UtilityService, DataUnitService ],
	exports: [ DataUnitPipe, TimeUnitPipe, CurrencyUnitPipe, PersianDatePipe, PersianNumberPipe, TimeCounterPipe ]
})
export class InfraModule {}
