import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestComponent } from "./test/test.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import { OrderComponent } from "./order.component";
import { InsurerInfoComponent } from "./insurer-info/insurer-info.component";
import { PurchaseComponent } from "./purchase/purchase.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { ViewOrderComponent } from "./view-order/view-order.component";
import { CartableComponent } from "./cartable/cartable.component";
import { OrderPanelComponent } from "./order-panel/order-panel.component";

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
				path: "insurer-info",
				component: InsurerInfoComponent
			},
			{
				path: "purchase",
				component: PurchaseComponent
			},
			{
				path: "my-orders",
				component: MyOrdersComponent
			},
			{
				path: "view/:Id",
				component: ViewOrderComponent
			},
			{
				path: "cartable",
				component: CartableComponent
			},
			{
				path: "panel/:id",
				component: OrderPanelComponent
			}
		]
	}
];

export const OrderRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
