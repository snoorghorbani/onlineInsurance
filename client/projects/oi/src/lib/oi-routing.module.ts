import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { LayoutOutlets } from "@soushians/layout";

import { FooterComponent, NewsletterComponent } from "./common";
import { ToolbarMenuComponent } from "./common/toolbar-menu/toolbar-menu.component";

const routes: Routes = [
	{
		path: "",
		component: NewsletterComponent,
		outlet: LayoutOutlets.footer_A
	},
	{
		path: "",
		component: FooterComponent,
		outlet: LayoutOutlets.footer_B
	},
	{
		path: "",
		component: ToolbarMenuComponent,
		outlet: LayoutOutlets.ngs_layout_toolbar_menu
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
