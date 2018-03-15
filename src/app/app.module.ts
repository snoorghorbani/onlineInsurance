import { NgModule, LOCALE_ID } from "@angular/core";
import { MatSidenavModule, MatToolbarModule, MatFormFieldModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule, Store } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ServiceWorkerModule } from "@angular/service-worker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import "hammerjs";

import { environment } from "../environments/environment";

import { NgsAuthenticationModule } from "@soushians/authentication";
import { SharedModule } from "@soushians/shared";
import { DashboardModule } from "./dashboard";
import { InfraModule } from "@soushians/infra";
import { NgsUserModule } from "@soushians/user";
import { NgsFormModule } from "@soushians/form";
import { NgsConfigModule } from "@soushians/config";
import { SourceModule } from "@soushians/source";

import { StaticPageModule } from "./static-page";
import { NgsBpmnModule } from "./bpmn";
import { CoreModule } from "./core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./reducers";
import { AppEffects } from "./effects";
//module configs
import { EventHandlerService } from "./services";
import { AgentModule } from "./agent";
import { FinancialModule } from "./financial";
import { PackageModule } from "./package";
import { PaymentModule } from "./payment";
import { ReportsModule } from "./reports";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
	imports: [
		CoreModule,
		ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
		// ServiceWorkerModule.register('/ngsw-worker.js', {enabled: true}),
		MatSidenavModule,
		MatToolbarModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25
		}),
		EffectsModule.forRoot([ AppEffects ]),
		LayoutModule,
		NgsAuthenticationModule.forRoot({
			env: environment as any
		}),
		NgsUserModule.forRoot(),
		InfraModule,
		SharedModule,
		NgsConfigModule.forRoot({
			env: environment as any
		}),
		DashboardModule,
		SourceModule,
		StaticPageModule,
		AppRoutingModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		AgentModule.forRoot(),
		FinancialModule.forRoot(),
		PackageModule.forRoot(),
		ReportsModule.forRoot(),
		NgsFormModule.forRoot(),
		NgsBpmnModule.forRoot()
	],
	declarations: [ AppComponent ],
	providers: [
		// { provide: LOCALE_ID, useValue: 'fa-IR' },
		EventHandlerService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
