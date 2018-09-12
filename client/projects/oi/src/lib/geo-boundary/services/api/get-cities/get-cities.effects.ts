import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { GeoBoundaryService } from "../../geo-boundary.service";
import {
	GET_CITIES_ACTION_TYPES,
	GetCitiesActions,
	GetCitiesSucceedAction,
	GetCitiesFailedAction
} from "./get-cities.actions";

@Injectable()
export class GetCitiesApiEffects {
	constructor(private actions$: Actions<GetCitiesActions>, private service: GeoBoundaryService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_CITIES_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.GetCities()),
			map(res => new GetCitiesSucceedAction(res)),
			catchError(err => Observable.of(new GetCitiesFailedAction(err)))
		);
}
