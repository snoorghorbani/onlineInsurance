﻿import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CartableComponent } from './cartable/cartable.component';
import { OrderPanelComponent } from './order-panel/order-panel.component';
import { PurchaseFirePolicyComponent } from './fire-policy/purchase-fire-policy/purchase-fire-policy.component';
import { SelectFirePolicyProductComponent } from './fire-policy/select-fire-policy-product/select-fire-policy-product.component';
import { FirePolicyInsurerInfoComponent } from './fire-policy/fire-policy-insurer-info/fire-policy-insurer-info.component';
import { PurchaseEarthquakePolicyComponent } from './earthquake-policy/purchase-earthquake-policy/purchase-earthquake-policy.component';
import { SelectEarthquakePolicyProductComponent } from './earthquake-policy/select-earthquake-policy-product/select-earthquake-policy-product.component';
import { EarthquakePolicyInsurerInfoComponent } from './earthquake-policy/earthquake-policy-insurer-info/earthquake-policy-insurer-info.component';
import { PurchaseThirdPartyPolicyComponent } from './third-party-policy/purchase-third-party-policy/purchase-third-party-policy.component';
import { SelectThirdPartyPolicyProductComponent } from './third-party-policy/select-third-party-policy-product/select-third-party-policy-product.component';
import { ThirdPartyPolicyInsurerInfoComponent } from './third-party-policy/third-party-policy-insurer-info/third-party-policy-insurer-info.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { SelectMedicalPolicyProductComponent } from './medical-policy/select-medical-policy-product/select-medical-policy-product.component';
import { PurchaseMedicalPolicyComponent } from './medical-policy/purchase-medical-policy/purchase-medical-policy.component';
import { MotorcyclePolicyInsurerInfoComponent } from './motorcycle-policy/motorcycle-policy-insurer-info/motorcycle-policy-insurer-info.component';
import { PurchaseMotorcyclePolicyComponent } from './motorcycle-policy/purchase-motorcycle-policy/purchase-motorcycle-policy.component';
import { SelectMotorcyclePolicyProductComponent } from './motorcycle-policy/select-motorcycle-policy-product/select-motorcycle-policy-product.component';
import { MedicalPolicyInsurerInfoComponent } from './medical-policy/medical-policy-insurer-info/medical-policy-insurer-info.component';

const routes: Routes = [
	{
		path: 'order',
		component: OrderComponent,
		children: [
			{
				path: 'insurer-info',
				children: [
					{
						path: '1/:Id',
						component: ThirdPartyPolicyInsurerInfoComponent
					},
					{
						path: '3/:Id',
						component: MotorcyclePolicyInsurerInfoComponent
					},
					{
						path: '4/:Id',
						component: FirePolicyInsurerInfoComponent
					},
					{
						path: '5/:Id',
						component: EarthquakePolicyInsurerInfoComponent
					},
					{
						path: '8/:Id',
						component: MedicalPolicyInsurerInfoComponent
					}
				]
			},
			{
				path: 'purchase',
				children: [
					{
						path: 'third-party-policy',
						component: PurchaseThirdPartyPolicyComponent,
						children: [
							{
								path: 'select-product',
								component: SelectThirdPartyPolicyProductComponent
							}
						]
					},
					{
						path: 'motorcycle-policy',
						component: PurchaseMotorcyclePolicyComponent,
						children: [
							{
								path: 'select-product',
								component: SelectMotorcyclePolicyProductComponent
							}
						]
					},
					{
						path: 'fire-policy',
						component: PurchaseFirePolicyComponent,
						children: [
							{
								path: 'select-product',
								component: SelectFirePolicyProductComponent
							}
						]
					},
					{
						path: 'earthquake-policy',
						component: PurchaseEarthquakePolicyComponent,
						children: [
							{
								path: 'select-product',
								component: SelectEarthquakePolicyProductComponent
							}
						]
					},
					{
						path: 'medical-policy',
						component: PurchaseMedicalPolicyComponent,
						children: [
							{
								path: 'select-product',
								component: SelectMedicalPolicyProductComponent
							}
						]
					}
				]
				// {
				// 	path: "third-party-policy",
				// 	component: PurchaseComponent
				// }
			},
			{
				path: 'review/:Id',
				component: ReviewOrderComponent
			},
			{
				path: 'view/:Id',
				component: ReviewOrderComponent
			},
			{
				path: 'my-orders',
				component: MyOrdersComponent
			},
			{
				path: 'cartable',
				component: CartableComponent
			},
			{
				path: 'panel/:id',
				component: OrderPanelComponent
			}
		]
	}
];

export const OrderRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
