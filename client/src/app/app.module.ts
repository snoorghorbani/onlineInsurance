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

/**
 *  ngs module
 * */
import { SharedModule } from "@soushians/shared";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsFrontendAuthenticationModule } from "@soushians/frontend-authentication";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsUserModule, NgsUserRoutingModule } from "@soushians/user";
import { NgsConfigModule } from "@soushians/config";
import { SourceModule } from "@soushians/source";
import { NgsSocketModule } from "@soushians/socket";
import { NgsDiagramModule } from "@soushians/diagram";
import { NgsFormModule } from "@soushians/form";
import { NgsGridModule } from "@soushians/grid";
import { CommonModule } from "@angular/common";
import { RuleModule } from "@soushians/rule";
import { NgsWidgetModule } from "@soushians/widget";
import { NgsWidgetTypesModule } from "@soushians/widget-types";

/**
 *  module configs
 * */
import { ngsAuthenticationModuleConfig } from "./module-configs/ngs-authentication.module-config";
import { ngsFrontendAuthenticationModuleConfig } from "./module-configs/ngs-frontend-authentication.module-config";
import { ngsConfigModuleConfig } from "./module-configs/ngs-config.module-config";
import { ngsGridModuleConfig } from "./module-configs/ngs-grid.module-config";
import { ngsSocketModuleConfig } from "./module-configs/ngs-socket.module-config";
import { ngsRuleModuleConfig } from "./module-configs/ngs-rule.module-config";
import { NgsWidgetModuleConfig } from "./module-configs/ngs-widget.module-config";
import { NgsUserModuleConfig } from "./module-configs/ngs-user.module-config";
import { NgsLayoutModuleConfig } from "./module-configs/ngs-layout.module-config";

import { StaticPageModule } from "./static-page";

import { CoreModule } from "./core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

//module configs
import { DashboardModule } from "./dashboard";
import { OiModule } from "./oi/oi.module";
import { JalaliMomentDateAdapter, JALALI_MOMENT_FORMATS } from "./persian-data-adapter";
import { GwtStepsModule } from "./gwt-steps/gwt-steps.module";

@NgModule({
	imports: [
		CoreModule,
		CommonModule,
		// ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
		// ServiceWorkerModule.register('/ngsw-worker.js', {enabled: true}),
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25
		}),
		EffectsModule.forRoot([]),

		SharedModule,
		SourceModule,
		NgsLayoutModule.forRoot(NgsLayoutModuleConfig),
		NgsAuthenticationModule.forRoot(ngsAuthenticationModuleConfig),
		NgsFrontendAuthenticationModule.forRoot(ngsFrontendAuthenticationModuleConfig),
		NgsConfigModule.forRoot(ngsConfigModuleConfig),
		NgsDiagramModule.forRoot(),
		NgsUserModule.forRoot(NgsUserModuleConfig),
		NgsUserRoutingModule,
		NgsSocketModule.forRoot(ngsSocketModuleConfig),
		NgsWidgetModule.forRoot(NgsWidgetModuleConfig),
		NgsWidgetTypesModule,
		NgsFormModule.forRoot(),
		RuleModule.forRoot(ngsRuleModuleConfig),
		GwtStepsModule,
		NgsGridModule.forRoot(ngsGridModuleConfig),

		StaticPageModule,
		AppRoutingModule,
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
