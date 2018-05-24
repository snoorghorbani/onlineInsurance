import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../reducers';

@Injectable()
export class SigninGuard implements CanActivate {
        constructor(
                private store: Store<fromAuth.FeatureState>
        ) { }

        canActivate(
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
        ): Observable<boolean> {
                return this.store.select(fromAuth.getLoggedIn)
                        .take(1)
                        .map(authed => !authed);
        }
}