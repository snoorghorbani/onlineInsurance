import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatExpansionModule,
	MatSnackBarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatDividerModule,
	MatCheckbox,
	MatCheckboxModule,
	MatTableModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";

import { GeoBoundaryModuleConfig, MODULE_CONFIG_TOKEN } from "./geo-boundary.config";
import { RoutingModule } from "./geo-boundary-routing.module";
import { GeoBoundaryReducers } from "./geo-boundary.reducers";
import { GeoBoundaryService, GeoBoundaryConfigurationService } from "./services";
import { TestApiEffects } from "./services/api";

import { GeoBoundaryComponent } from "./geo-boundary.component";
import { TestComponent } from "./test";

@NgModule({
	imports: [
		HttpClientModule,
		FormsModule,
		RouterModule,
		CommonModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatTableModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatDividerModule,
		FlexLayoutModule,
		MatRadioModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [ GeoBoundaryComponent, TestComponent ],
	entryComponents: [],
	exports: []
})
export class GeoBoundaryModule {
	static forRoot(config?: GeoBoundaryModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootGeoBoundaryModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config },
				GeoBoundaryService,
				GeoBoundaryConfigurationService
			]
		};
	}
}

@NgModule({
	imports: [
		GeoBoundaryModule,
		StoreModule.forFeature("geo-boundary", GeoBoundaryReducers),
		EffectsModule.forFeature([ TestApiEffects ]),
		RoutingModule
	],
	exports: [ GeoBoundaryModule ]
})
export class RootGeoBoundaryModule {}
