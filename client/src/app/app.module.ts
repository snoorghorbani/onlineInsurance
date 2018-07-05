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
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { environment } from "../environments/environment";

import { SharedModule } from "@soushians/shared";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsUserModule, NgsUserRoutingModule } from "@soushians/user";
import { NgsConfigModule } from "@soushians/config";
import { SourceModule } from "@soushians/source";
import { NgsFormModule } from "@soushians/form";
import { NgsSocketModule } from "@soushians/socket";
// import { NgsDiagramModule } from "@soushians/diagram";

import { StaticPageModule } from "./static-page";

import { CoreModule } from "./core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

//module configs
import { DashboardModule } from "./dashboard";
import { OiModule } from "./oi/oi.module";
import { JalaliMomentDateAdapter, JALALI_MOMENT_FORMATS } from "./persian-data-adapter";
import { RuleModule } from "@soushians/rule";
import { GwtStepsModule } from "./gwt-steps/gwt-steps.module";
import { ruleModuleConfig } from "./gwt-steps";

export function responseToUserInfo(resp$) {
	return resp$.map(function(resp) {
		return resp.Result;
	});
}
export function mapUserDisplayName(user$) {
	return user$.map(function(user) {
		return user.DisplayName;
	});
}

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
		// NgsLayoutModule.forRoot({
		// 	signoutAction: SignoutAction as any
		// }),
		NgsAuthenticationModule.forRoot({
			env: environment as any,
			afterSignoutRedirectTo: "/"
		}),
		NgsConfigModule.forRoot({
			env: environment as any,
			dev_api_host: "http://localhost:3000",
			prod_api_host: "http://185.208.174.92:3000"
		}),
		// NgsDiagramModule.forRoot(),
		NgsUserModule.forRoot({
			responseToUserInfo,
			mapUserDisplayName
		}),
		NgsUserRoutingModule,
		NgsSocketModule.forRoot({
			development_uri: "http://localhost:3000",
			production_uri: "http://185.208.174.92:3000",
			env: environment as any
		}),
		// NgsBpmnModule.forRoot(),
		SharedModule,
		SourceModule,
		StaticPageModule,
		NgsFormModule.forRoot(),
		RuleModule.forRoot({
			stepClasses: ruleModuleConfig.stepClasses,
			env: environment
		}),
		GwtStepsModule,
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
