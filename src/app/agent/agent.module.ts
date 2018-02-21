import { NgModule, ModuleWithProviders, InjectionToken, Injectable, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
	MatDatepickerModule,
	MatSelectModule,
	MatSnackBarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatNativeDateModule,
	DateAdapter,
	MAT_DATE_FORMATS,
	NativeDateAdapter,
	MatInputModule,
	MatFormFieldModule,
	MatExpansionModule,
	MatSidenavModule,
	MatTabsModule,
	MatListModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { InfraModule } from "@soushians/infra";

import { AgentModuleConfig, MODULE_CONFIG_TOKEN } from "./agent.config";
import { AgentRoutingModule } from "./agent-routing.module";

import { PersianDateAdapter, PERSIAN_DATE_FORMATS } from "./persian-data-adapter";
import { AgentContainerComponent, CartableContainerComponent } from "./smart-components";
import { CartableComponent, ChatComponent } from "./dump-components";
import { AgentConfigurationService, AgentService } from "./services";
import { AgentReducers } from "./reducers";
import { AgentEffects, CartableEffects } from "./effects";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		HttpModule,
		FlexLayoutModule,
		MatDatepickerModule,
		MatSelectModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		MatExpansionModule,
		MatSidenavModule,
		MatTabsModule,
		MatListModule,
		MatNativeDateModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		InfraModule,
		AgentRoutingModule
	],
	declarations: [
		// smart components
		AgentContainerComponent,
		CartableContainerComponent,
		// dump components
		CartableComponent,
		ChatComponent
	],
	exports: [ ChatComponent ]
})
export class AgentModule {
	static forRoot(config?: AgentModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootAgentModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config },
				{ provide: DateAdapter, useClass: PersianDateAdapter },
				//services
				AgentConfigurationService,
				AgentService
				//guards
			]
		};
	}
}

@NgModule({
	imports: [
		AgentModule,
		StoreModule.forFeature("agent", AgentReducers),
		EffectsModule.forFeature([ AgentEffects, CartableEffects ]),
		AgentRoutingModule
	]
})
export class RootAgentModule {}
