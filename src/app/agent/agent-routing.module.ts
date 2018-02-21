import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AgentContainerComponent, CartableContainerComponent } from "./smart-components";

const routes: Routes = [
	{
		path: "agent",
		component: AgentContainerComponent,
		children: [
			{
				path: "cartable",
				component: CartableContainerComponent
			}
		]
	}
];

export const AgentRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
