import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { PolicyModule } from "./policy";
import { OrderModule } from "./order";
import { ResultInterceptor } from "./result.interceptor";
import { GeoBoundaryModule } from "./geo-boundary";
import { OiCommonModule } from "./common/common.module";
import { RoutingModule } from "./oi-routing.module";
import { ExceptionInterceptor } from "./execption.interceptor";
import { environment } from "../../environments/environment";

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
		OiCommonModule,
		RoutingModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ResultInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true }
	],
	declarations: []
})
export class OiModule {}
