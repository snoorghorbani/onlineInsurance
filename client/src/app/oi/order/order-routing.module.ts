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
import { PurchaseFirePolicyComponent } from "./fire-policy/purchase-fire-policy/purchase-fire-policy.component";
import { SelectFirePolicyProductComponent } from "./fire-policy/select-fire-policy-product/select-fire-policy-product.component";
import { FirePolicyInsurerInfoComponent } from "./fire-policy/fire-policy-insurer-info/fire-policy-insurer-info.component";
import { PurchaseEarthquakePolicyComponent } from "./earthquake-policy/purchase-earthquake-policy/purchase-earthquake-policy.component";
import { SelectEarthquakePolicyProductComponent } from "./earthquake-policy/select-earthquake-policy-product/select-earthquake-policy-product.component";
import { EarthquakePolicyInsurerInfoComponent } from "./earthquake-policy/earthquake-policy-insurer-info/earthquake-policy-insurer-info.component";
import { PurchaseMedicalPolicyComponent } from "./medical-policy/purchase-medical-policy/purchase-medical-policy.component";
import { SelectMedicalPolicyProductComponent } from "./medical-policy/select-medical-policy-product/select-medical-policy-product.component";
import { MedicalPolicyInsurerInfoComponent } from "./medical-policy/medical-policy-insurer-info/medical-policy-insurer-info.component";

const routes: Routes = [
	{
		path: "order",
		component: OrderComponent,
		children: [
			{
				path: "insurer-info",
				children: [
					{
						path: "4/:Id",
						component: FirePolicyInsurerInfoComponent
					},
					{
						path: "5/:Id",
						component: EarthquakePolicyInsurerInfoComponent
					}
				]
			},
			{
				path: "purchase",
				children: [
					{
						path: "fire-policy",
						component: PurchaseFirePolicyComponent,
						children: [
							{
								path: "select-product",
								component: SelectFirePolicyProductComponent
							}
						]
					},
					{
						path: "earthquake-policy",
						component: PurchaseEarthquakePolicyComponent,
						children: [
							{
								path: "select-product",
								component: SelectEarthquakePolicyProductComponent
							}
						]
					},
					{
						path: "third-party-policy",
						component: PurchaseComponent
					},
					{
						path: "medical-policy",
						component: PurchaseMedicalPolicyComponent,
						children: [
							{
								path: "select-product",
								component: SelectMedicalPolicyProductComponent
							}
						]
					}
				]
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
