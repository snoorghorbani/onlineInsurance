import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	MatTableModule,
	MatCardModule,
	MatSelectModule,
	MatOptionModule,
	MatInputModule,
	MatDatepickerModule,
	MatButtonModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { AgentSalesComponent } from "./agent-sales/agent-sales.component";
import { ReportRoutingModule } from "./report-routing.module";
import { ReportModuleConfig, MODULE_CONFIG_TOKEN } from "./report.config";
import { GridReducer } from "./report.reducer";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatTableModule,
		MatSelectModule,
		MatOptionModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatDatepickerModule,
		FlexLayoutModule,
		ReportRoutingModule
	],

	declarations: [ AgentSalesComponent ],
	exports: [ AgentSalesComponent ]
})
export class ReportModule {
	static forRoot(config?: ReportModuleConfig): ModuleWithProviders {
		return {
			ngModule: NgsReportRootModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		ReportModule,
		ReportRoutingModule,
		StoreModule.forFeature("reports", GridReducer),
		EffectsModule.forFeature([])
	],
	exports: [ ReportModule ]
})
export class NgsReportRootModule {}
