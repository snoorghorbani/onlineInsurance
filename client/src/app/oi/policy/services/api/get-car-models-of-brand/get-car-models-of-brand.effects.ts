import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { PolicyService } from "../../policy.service";
import {
	GET_CAR_MODELS_OF_BRAND_ACTION_TYPES,
	GetCarModelsOfBrandActions,
	GetCarModelsOfBrandSucceedAction,
	GetCarModelsOfBrandFailedAction
} from "./get-car-models-of-brand.actions";

@Injectable()
export class GetCarModelsOfBrandApiEffects {
	constructor(private actions$: Actions<GetCarModelsOfBrandActions>, private service: PolicyService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_CAR_MODELS_OF_BRAND_ACTION_TYPES.START)
		.pipe(
			map(action => action.payload),
			switchMap(payload => this.service.GetCarModelsOfBrand(payload)),
			map(res => new GetCarModelsOfBrandSucceedAction(res)),
			catchError(err => Observable.of(new GetCarModelsOfBrandFailedAction(err)))
		);
}
