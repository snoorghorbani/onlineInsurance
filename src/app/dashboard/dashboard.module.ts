import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@soushians/shared";
import { DashboardComponent, BannerComponent, LogosComponent, AgentPanelLinksComponent } from "./smart-components";

import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
	imports: [ CommonModule, SharedModule, DashboardRoutingModule ],
	declarations: [ DashboardComponent, BannerComponent, LogosComponent, AgentPanelLinksComponent ],
	providers: []
})
export class DashboardModule {}
