import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent, BannerComponent, LogosComponent,AgentPanelLinksComponent } from './smart-components';
import { PackageSelectorContainerComponent } from 'app/package/smart-components';
const routes: Routes = [
        {
                path: 'dashboard',
                component: DashboardComponent,
                children: [
                        {
                                path: '',
                                component: BannerComponent,
                                outlet: 'banner',
                                children: [
                                        {
                                                path: '',
                                                component: PackageSelectorContainerComponent,
                                        }
                                ]

                        },
                        {
                                path: '',
                                component: LogosComponent,
                                outlet: 'logos'
                        },
                        {
                                path: '',
                                component: AgentPanelLinksComponent,
                                outlet: 'agent_panel'
                        }
                ]
        }
];
//{ path: '**', component: PageNotFoundComponent }


export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);