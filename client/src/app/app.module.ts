import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import {
	MatSidenavModule,
	MatToolbarModule,
	MatFormFieldModule,
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 *  ngs module
 * */
import { NgsFrontendAuthenticationModule } from '@soushians/frontend-authentication';
import { NgsAuthenticationModule } from '@soushians/authentication';
import { NgsUserModule, NgsUserRoutingModule } from '@soushians/user';
import { NgsWidgetTypesModule } from '@soushians/widget-types';
import { NgsDiagramModule } from '@soushians/diagram';
import { NgsSocketModule } from '@soushians/socket';
import { NgsLayoutModule } from '@soushians/layout';
import { NgsConfigModule } from '@soushians/config';
import { NgsWidgetModule } from '@soushians/widget';
import { SharedModule } from '@soushians/shared';
import { SourceModule } from '@soushians/source';
import { NgsFormModule } from '@soushians/form';
import { NgsGridModule } from '@soushians/grid';
import { RuleModule } from '@soushians/rule';

/**
 *  module configs
 * */
import { NgsFrontendAuthenticationModuleConfig } from './module-configs/ngs-frontend-authentication.module-config';
import { NgsAuthenticationModuleConfig } from './module-configs/ngs-authentication.module-config';
import { NgsDiagramModuleConfig } from './module-configs/ngs-diagram.module-config';
import { NgsLayoutModuleConfig } from './module-configs/ngs-layout.module-config';
import { NgsConfigModuleConfig } from './module-configs/ngs-config.module-config';
import { NgsWidgetModuleConfig } from './module-configs/ngs-widget.module-config';
import { NgsSocketModuleConfig } from './module-configs/ngs-socket.module-config';
import { NgsGridModuleConfig } from './module-configs/ngs-grid.module-config';
import { NgsRuleModuleConfig } from './module-configs/ngs-rule.module-config';
import { NgsUserModuleConfig } from './module-configs/ngs-user.module-config';
import { NgsFormModuleConfig } from './module-configs/ngs-form.module-config';

import { StaticPageModule } from './static-page';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './app.reducers';

// module configs
import { DashboardModule } from './dashboard';
import { OiModule } from './oi/oi.module';
import { JalaliMomentDateAdapter, JALALI_MOMENT_FORMATS } from './persian-data-adapter';
import { GwtStepsModule } from './gwt-steps/gwt-steps.module';

@NgModule({
	imports: [
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
		NgsFrontendAuthenticationModule.forRoot(NgsFrontendAuthenticationModuleConfig),
		NgsAuthenticationModule.forRoot(NgsAuthenticationModuleConfig),
		NgsDiagramModule.forRoot(NgsDiagramModuleConfig),
		NgsLayoutModule.forRoot(NgsLayoutModuleConfig),
		NgsConfigModule.forRoot(NgsConfigModuleConfig),
		NgsSocketModule.forRoot(NgsSocketModuleConfig),
		NgsWidgetModule.forRoot(NgsWidgetModuleConfig),
		NgsUserModule.forRoot(NgsUserModuleConfig),
		NgsGridModule.forRoot(NgsGridModuleConfig),
		NgsFormModule.forRoot(NgsFormModuleConfig),
		RuleModule.forRoot(NgsRuleModuleConfig),
		NgsWidgetTypesModule,
		NgsUserRoutingModule,
		GwtStepsModule,

		StaticPageModule,
		AppRoutingModule,
		DashboardModule,

		OiModule
	],
	declarations: [ AppComponent ],
	providers: [
		{ provide: LOCALE_ID, useValue: 'fa-IR' },
		{ provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
		{ provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
