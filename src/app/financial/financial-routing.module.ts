import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FinancialContainerComponent, CartableContainerComponent } from "./smart-components";
// import { AgentGuard } from 'app/authentication/routing-guards';

const routes: Routes = [
	{
		path: "financial",
		component: FinancialContainerComponent,
		// canActivate: [AgentGuard],
		children: [
			{
				path: "payments",
				component: CartableContainerComponent
			}
		]
	}
];

export const FinancialRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
