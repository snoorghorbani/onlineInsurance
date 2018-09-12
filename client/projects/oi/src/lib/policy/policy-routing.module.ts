﻿import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestComponent } from "./test/test.component";

const routes: Routes = [
	{
		path: "policy",
		children: [
			{
				path: "test",
				component: TestComponent
			}
		]
	}
];

export const PolicyRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
