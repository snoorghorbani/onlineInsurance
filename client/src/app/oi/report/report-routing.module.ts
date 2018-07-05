import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AgentSalesComponent } from "./agent-sales/agent-sales.component";

const routes: Routes = [
	{
		path: "report",
		children: [
			{
				path: "",
				component: AgentSalesComponent
			}
		]
	}
];

export const ReportRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
