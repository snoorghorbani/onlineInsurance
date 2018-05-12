import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GeoBoundaryComponent } from "./geo-boundary.component";
import { TestComponent } from "./test";

const routes: Routes = [
	{
		path: "geo-boundary",
		component: GeoBoundaryComponent,
		children: [
			{
				path: "test",
				component: TestComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
