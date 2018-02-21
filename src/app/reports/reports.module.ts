import { NgModule, ModuleWithProviders, InjectionToken, Injectable, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FlexLayoutModule } from "@angular/flex-layout";
// import { MatSnackBar, MatIcon, MatButton, MatCard, MdNativeDateModule} from "@angular/material";
import { MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { InfraModule } from "@soushians/infra";

import { ReportModuleConfig, MODULE_CONFIG_TOKEN } from "./reports.config";
import { ReportRoutingModule } from "./reports-routing.module";
import { ReportsListContainerComponent, ReportContainerComponent } from "./smart-components";
import { ReportListComponent } from "./dump-components";
import { ReportsConfigurationService } from "./services";
import { ReportReducers } from "./reducers";
//  import {  } from './effects';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		HttpModule,
		FlexLayoutModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		InfraModule
	],
	declarations: [ ReportsListContainerComponent, ReportContainerComponent, ReportListComponent ],
	exports: []
})
export class ReportsModule {
	static forRoot(config?: ReportModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootReportsModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, ReportsConfigurationService ]
		};
	}
}

@NgModule({
	imports: [
		ReportsModule,
		StoreModule.forFeature("reports", ReportReducers),
		EffectsModule.forFeature([]),
		ReportRoutingModule
	]
})
export class RootReportsModule {}
