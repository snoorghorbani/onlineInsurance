import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestComponent } from "./test/test.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import { OrderComponent } from "./order.component";
import { CompareComponent } from "./compare/compare.component";
import { InsurerInfoComponent } from "./insurer-info/insurer-info.component";

const routes: Routes = [
	{
		path: "order",
		component: OrderComponent,
		children: [
			{
				path: "test",
				component: TestComponent
			},
			{
				path: "neworder",
				component: NewOrderComponent
			},
			{
				path: "compare",
				component: CompareComponent
			},
			{
				path: "insurer-info",
				component: InsurerInfoComponent
			}
		]
	}
];

export const OrderRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
