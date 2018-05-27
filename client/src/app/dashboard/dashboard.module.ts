import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@soushians/shared";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./smart-components";
import { OrderModule } from "../oi/order";
import { OiCommonModule } from "../oi/common/common.module";

@NgModule({
	imports: [ CommonModule, SharedModule, DashboardRoutingModule, OrderModule, OiCommonModule ],
	declarations: [ DashboardComponent ],
	providers: []
})
export class DashboardModule {}
