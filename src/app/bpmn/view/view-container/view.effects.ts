// ./effects/auth.ts
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { FlowService } from "../../services";
import { FlowModel, ProcessModel } from "../../models";
import { FlowViewActionTypes, GoToStateAction } from "./view.actions";

@Injectable()
export class FlowViewEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FlowService) {}

	// @Effect()
	// EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(data => new FormsListStartAction());

	// @Effect()
	// GetForm$ = this.actions$
	// 	.ofType(FormsListActionTypes.GET_FORM_SCHEMA)
	// 	.map(toPayload)
	// 	.switchMap(id => this.service.get(id))
	// 	.map(formSchema => new FormSchemaFechedAction(formSchema));

	@Effect()
	get_forms_list$ = this.actions$
		.ofType(FlowViewActionTypes.PROCESS_TRAVERSED)
		.map(action => action.payload)
		.map(({ process, data, flow }: { process: ProcessModel; data: any; flow: FlowModel }) => {
			return new GoToStateAction({ process, data, flow });
		});
}
