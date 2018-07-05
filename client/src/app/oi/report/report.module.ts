import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

import { AgentSalesComponent } from "./agent-sales/agent-sales.component";
import { ReportRoutingModule } from "./report-routing.module";

@NgModule({
	imports: [ CommonModule, FormsModule, MatTableModule, ReportRoutingModule ],
	declarations: [ AgentSalesComponent ],
	exports: [ AgentSalesComponent ]
})
export class ReportModule {}
