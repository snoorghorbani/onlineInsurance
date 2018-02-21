import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageListContainerComponent, PackageAddContainerComponent, PackageEditContainerComponent, UserPackagesContainerComponent, PackageCompareContainerComponent } from './smart-components';

const routes: Routes = [
    // packages/:id
    {
        path: 'packages',
        // component: PackageListContainerComponent,
        children: [
            {
                path: 'list',
                component: PackageListContainerComponent
            },
            {
                path: 'add',
                component: PackageAddContainerComponent
            },
            {
                path: 'edit/:PackageId',
                component: PackageEditContainerComponent
            },
            {
                path: 'user-packages/:MobileNumber',
                component: UserPackagesContainerComponent
            },
            {
                path: 'compare',
                component: PackageCompareContainerComponent
            }
        ]
    }
];

export const PackageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);