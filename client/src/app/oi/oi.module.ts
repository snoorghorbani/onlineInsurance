import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { PolicyModule } from "./policy";
import { OrderModule } from "./order";
import { ResultInterceptor } from "./result.interceptor";
import { GeoBoundaryModule } from "./geo-boundary";
import { OiCommonModule } from "./common/common.module";
import { RoutingModule } from "./oi-routing.module";

@NgModule({
	imports: [
		CommonModule,
		OrderModule.forRoot(),
		PolicyModule,
		GeoBoundaryModule.forRoot(),
		OiCommonModule,
		RoutingModule
	],
	providers: [ { provide: HTTP_INTERCEPTORS, useClass: ResultInterceptor, multi: true } ],
	declarations: []
})
export class OiModule {}
