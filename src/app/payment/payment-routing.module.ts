import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
	PaymentModuleContainerComponent,
	SuccessPaymentReportContainerComponent,
	BankListContainerComponent,
	InvoiceComponent,
	PayComponent
} from "./smart-components";
// import { SuccessfulPaymentReportComponent } from './dump-components';

const routes: Routes = [
	{
		path: "payment/:MobileNumber",
		component: PaymentModuleContainerComponent,
		children: [
			{
				path: "success-payment-report",
				component: SuccessPaymentReportContainerComponent
			}
		]
	},
	{
		path: "payment/user/invoice",
		component: InvoiceComponent
	},
	{
		path: "payment/user/pay",
		component: PayComponent
	}
];

export const PaymentRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
