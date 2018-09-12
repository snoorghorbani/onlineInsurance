import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
	MatSidenavModule,
	MatToolbarModule,
	MatFormFieldModule,
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE
} from "@angular/material";

import { env } from "configs";

import { PolicyModule } from "./policy";
import { OrderModule } from "./order";
import { ResultInterceptor } from "./result.interceptor";
import { GeoBoundaryModule } from "./geo-boundary";
import { OiCommonModule } from "./common/common.module";
import { RoutingModule } from "./oi-routing.module";
import { ExceptionInterceptor } from "./execption.interceptor";
import { environment } from "../../../../src/environments/environment";
import { ReportModule } from "./report/report.module";
import { GmapsModule } from "./gmaps/gmaps.module";
import { JalaliMomentDateAdapter, JALALI_MOMENT_FORMATS } from "./persian-data-adapter";
import { DashboardModule } from "./dashboard";

@NgModule({
	imports: [
		CommonModule,
		OrderModule.forRoot({
			env: environment
		}),
		PolicyModule.forRoot({
			env: environment
		}),
		GeoBoundaryModule.forRoot(),
		ReportModule.forRoot({
			env
		}),
		OiCommonModule,
		DashboardModule,
		GmapsModule,
		RoutingModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ResultInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true },
		{ provide: LOCALE_ID, useValue: "fa-IR" },
		{ provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
		{ provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS }
	],
	declarations: []
})
export class OiModule {}
