import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import './dump-components';
import {
    ReportContainerComponent,
    ReportsListContainerComponent
} from './smart-components';


const routes: Routes = [
    {
        path: 'reports',
        component: ReportContainerComponent,
        children: [
            {
                path: '',
                component: ReportsListContainerComponent
            }
        ]
    }
];

export const ReportRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);