import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import { DoSignoutAction } from "@soushians/authentication";

import { LayoutActionTypes } from "./actions/layout";

@Injectable()
export class LayoutEffects {
	constructor(private actions$: Actions, private router: Router) {}

	@Effect() DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(map(() => new DoSignoutAction()));
}
