import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderModule } from "./order";
import { PolicyModule } from "./policy";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ResultInterceptor } from "./result.interceptor";
import { GeoBoundaryModule } from "./geo-boundary";

@NgModule({
	imports: [ CommonModule, OrderModule, PolicyModule, GeoBoundaryModule.forRoot() ],
	providers: [ { provide: HTTP_INTERCEPTORS, useClass: ResultInterceptor, multi: true } ],
	declarations: []
})
export class OiModule {}
