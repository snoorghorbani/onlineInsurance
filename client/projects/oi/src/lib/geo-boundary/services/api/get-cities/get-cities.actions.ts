import { Action } from "@ngrx/store";

import { GetCitiesApiModel } from "./get-cities.model";
import { CityModel } from "../../../models";

export const enum GET_CITIES_ACTION_TYPES {
	START = "[GET_CITIES][API][GetCities] start",
	SUCCEED = "[GET_CITIES][API][GetCities] succeed",
	FAILED = "[GET_CITIES][API][GetCities] failed"
}

export class GetCitiesStartAction implements Action {
	readonly type = GET_CITIES_ACTION_TYPES.START;
	constructor(public payload: GetCitiesApiModel.Request) {}
}
export class GetCitiesSucceedAction implements Action {
	readonly type = GET_CITIES_ACTION_TYPES.SUCCEED;
	constructor(public payload: CityModel[]) {}
}
export class GetCitiesFailedAction implements Action {
	readonly type = GET_CITIES_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetCitiesActions = GetCitiesStartAction | GetCitiesSucceedAction | GetCitiesFailedAction;
