import { Action } from "@ngrx/store";

import { GetCarModelsOfBrandApiModel } from "./get-car-models-of-brand.model";

export const enum GET_CAR_MODELS_OF_BRAND_ACTION_TYPES {
	START = "[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] start",
	SUCCEED = "[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] succeed",
	FAILED = "[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] failed"
}

export class GetCarModelsOfBrandStartAction implements Action {
	readonly type = GET_CAR_MODELS_OF_BRAND_ACTION_TYPES.START;
	constructor(public payload: Partial<GetCarModelsOfBrandApiModel.Request>) {}
}
export class GetCarModelsOfBrandSucceedAction implements Action {
	readonly type = GET_CAR_MODELS_OF_BRAND_ACTION_TYPES.SUCCEED;
	constructor(public payload: any[]) {}
}
export class GetCarModelsOfBrandFailedAction implements Action {
	readonly type = GET_CAR_MODELS_OF_BRAND_ACTION_TYPES.FAILED;
	constructor(public payload: any) {}
}

export type GetCarModelsOfBrandActions =
	| GetCarModelsOfBrandStartAction
	| GetCarModelsOfBrandSucceedAction
	| GetCarModelsOfBrandFailedAction;
