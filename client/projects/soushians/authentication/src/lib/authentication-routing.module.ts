import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
        AuthenticationContainerComponent,
        SigninContainerComponent,
} from './smart-components';

import { SigninGuard } from './routing-guards';

const routes: Routes = [
        {
                path: 'auth',
                component: AuthenticationContainerComponent,
                children: [
                        {
                                path: 'signin',
                                canActivate: [SigninGuard],
                                component: SigninContainerComponent
                        }
                ]
        }
];

export const AuthenticationRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);