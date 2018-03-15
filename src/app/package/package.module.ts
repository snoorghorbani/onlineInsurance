import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
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
	MatTableModule,
	MatSortModule,
	MatStepperModule,
	MatCheckboxModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatAutocompleteModule
} from "@angular/material";

// import * as ng2Charts from 'ng2-charts';

import { SharedModule } from "@soushians/shared";
import { InfraModule } from "@soushians/infra";

import { PackageRoutingModule } from "./package-routing.module";
import {
	PackageContainerComponent,
	UserPackagesContainerComponent,
	PackageListContainerComponent,
	PackageAddContainerComponent,
	PackageEditContainerComponent,
	PackageSelectorContainerComponent,
	PackageCompareContainerComponent,
	PackageSimpleCompareContainerComponent
} from "./smart-components";
import {
	PackageListComponent,
	PackageAddComponent,
	PackageEditComponent,
	DataFilterPipe,
	UserPackagesListComponent,
	PackageSelectorComponent,
	PackageCompareComponent,
	PackageSimpleCompareComponent
} from "./dumb-components";
import { PackageService } from "./services";
import { PackageReducers } from "./reducers";
import { UserPackagesEffects, UserEffects, PackageListEffects, PackageAddEffects, PackageEditEffects } from "./effects";
import { AgentModule } from "app/agent";
import { NgsBpmnModule } from "app/bpmn";

@NgModule({
	imports: [
		SharedModule,
		NgsBpmnModule,
		InfraModule,
		FormsModule,
		ReactiveFormsModule,
		PackageRoutingModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		FlexLayoutModule,
		MatRadioModule,
		MatTableModule,
		MatSortModule,
		MatStepperModule,
		MatCheckboxModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatAutocompleteModule,
		AgentModule
	],
	declarations: [
		PackageContainerComponent,
		UserPackagesContainerComponent,
		PackageListContainerComponent,
		PackageListComponent,
		PackageAddComponent,
		PackageEditComponent,
		PackageAddContainerComponent,
		PackageEditContainerComponent,
		PackageSelectorContainerComponent,
		PackageCompareComponent,
		PackageSimpleCompareComponent,
		PackageCompareContainerComponent,
		PackageSimpleCompareContainerComponent,
		PackageSelectorComponent,
		DataFilterPipe,
		UserPackagesListComponent
	],
	exports: [ UserPackagesContainerComponent ]
})
export class PackageModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: RootPackageModule,
			providers: [ PackageService ]
		};
	}
}
@NgModule({
	imports: [
		PackageModule,
		StoreModule.forFeature("packages", PackageReducers),
		EffectsModule.forFeature([
			UserPackagesEffects,
			UserEffects,
			PackageListEffects,
			PackageAddEffects,
			PackageEditEffects
		]),
		PackageRoutingModule
	]
})
export class RootPackageModule {}
