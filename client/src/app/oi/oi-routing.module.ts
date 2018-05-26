import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { FooterComponent } from "./common";

const routes: Routes = [
	{
		path: "",
		outlet: "footer",
		component: FooterComponent
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
