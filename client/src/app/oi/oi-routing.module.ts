import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { FooterComponent, NewsletterComponent } from "./common";

const routes: Routes = [
	{
		path: "",
		outlet: "footer_A",
		component: NewsletterComponent
	},
	{
		path: "",
		outlet: "footer_B",
		component: FooterComponent
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
