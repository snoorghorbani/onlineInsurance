import { NgModule, LOCALE_ID } from "@angular/core";
import {
	MatSidenavModule,
	MatToolbarModule,
	MatFormFieldModule,
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule, Store } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ServiceWorkerModule } from "@angular/service-worker";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { environment } from "../environments/environment";

import { SharedModule } from "@soushians/shared";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsUserModule, NgsUserRoutingModule } from "@soushians/user";
import { NgsConfigModule } from "@soushians/config";
import * as FeatureReducer from "@soushians/config";
import { SourceModule } from "@soushians/source";
// import { NgsDiagramModule } from "@soushians/diagram";
import { NgsFormModule } from "@soushians/form";

import { StaticPageModule } from "./static-page";

import { CoreModule } from "./core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

//module configs
import { DashboardModule } from "./dashboard";
import { OiModule } from "./oi/oi.module";
import { JalaliMomentDateAdapter, JALALI_MOMENT_FORMATS } from "./persian-data-adapter";

@NgModule({
	imports: [
		CoreModule,
		// ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
		// ServiceWorkerModule.register('/ngsw-worker.js', {enabled: true}),
		MatSidenavModule,
		MatToolbarModule,
		FormsModule,
		BrowserAnimationsModule,
		BrowserModule,
		ReactiveFormsModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25
		}),
		EffectsModule.forRoot([]),
		NgsLayoutModule.forRoot(),
		NgsAuthenticationModule.forRoot({
			env: environment as any
		}),
		NgsConfigModule.forRoot({
			env: environment as any,
			dev_api_host: "http://localhost:3000",
			prod_api_host: "http://185.208.174.92:3000"
		}),
		// NgsDiagramModule.forRoot(),
		NgsUserModule.forRoot({
			responseToUserInfo: resp$ => resp$.map(resp => resp.Result),
			mapUserDisplayName: user$ => user$.map(user => user.DisplayName)
		}),
		NgsUserRoutingModule,
		// NgsBpmnModule.forRoot(),
		SharedModule,
		SourceModule,
		StaticPageModule,
		NgsFormModule.forRoot(),
		AppRoutingModule,
		MatFormFieldModule,
		DashboardModule,
		OiModule
	],
	declarations: [ AppComponent ],
	providers: [
		{ provide: LOCALE_ID, useValue: "fa-IR" },
		{ provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
		{ provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
