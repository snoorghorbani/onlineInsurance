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
	MatListModule,
	MatTableModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { InfraModule } from "@soushians/infra";

import { FinancialModuleConfig, MODULE_CONFIG_TOKEN } from "./financial.config";
import { FinancialRoutingModule } from "./financial-routing.module";

import { PersianDateAdapter, PERSIAN_DATE_FORMATS } from "./persian-data-adapter";
import { FinancialContainerComponent, CartableContainerComponent } from "./smart-components";
import { PaymentsComponent } from "./dump-components";
import { FinancialConfigurationService, FinancialService } from "./services";
import { FinancialReducers } from "./reducers";
import { FinancialEffects, PaymentsEffects } from "./effects";

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
		MatTableModule,
		MatNativeDateModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		InfraModule,
		FinancialRoutingModule
	],
	declarations: [
		// smart components
		FinancialContainerComponent,
		CartableContainerComponent,
		// dump components
		PaymentsComponent
	],
	exports: []
})
export class FinancialModule {
	static forRoot(config?: FinancialModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootFinancialModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config },
				{ provide: DateAdapter, useClass: PersianDateAdapter },
				//services
				FinancialConfigurationService,
				FinancialService
				//guards
			]
		};
	}
}

@NgModule({
	imports: [
		FinancialModule,
		StoreModule.forFeature("financial", FinancialReducers),
		EffectsModule.forFeature([ FinancialEffects ]),
		FinancialRoutingModule
	]
})
export class RootFinancialModule {}
