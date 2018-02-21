import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    PaymentModuleContainerComponent,
    SuccessPaymentReportContainerComponent,
    BankListContainerComponent
} from './smart-components';
// import { SuccessfulPaymentReportComponent } from './dump-components';

const routes: Routes = [
    {
        path: 'payment/:MobileNumber',
        component: PaymentModuleContainerComponent,
        children: [
            {
                path: "success-payment-report",
                component: SuccessPaymentReportContainerComponent
            }
        ]
    }
];

export const PaymentRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);