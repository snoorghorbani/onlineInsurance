import { Action } from '@ngrx/store';
import { CartableApiModel } from 'app/models/cartable';

// import { CartableModel } from 'app/models/agent';

export enum CartableActionTypes {
    GET_CARTABLE_DATA = '[CARTABLE] GET_CARTABLE_DATA',
    CARTABLE_DATA_FETCHED = '[CARTABLE] CARTABLE_DATA_FETCHED',
    CARTABLE_DATA_FAILED = '[CARTABLE] CARTABLE_DATA_FAILED',
}

export class GetCartableDataAction implements Action {
    readonly type = CartableActionTypes.GET_CARTABLE_DATA;
    constructor() { }
}

export class CartableDataFetchedAction implements Action {
    readonly type = CartableActionTypes.CARTABLE_DATA_FETCHED;
    constructor(public payload: CartableApiModel.Response) { }
}

export class CartableDataFailedAction implements Action {
    readonly type = CartableActionTypes.CARTABLE_DATA_FAILED;
    constructor() { }
}

export type CartableAction =
    GetCartableDataAction
    | CartableDataFetchedAction
    | CartableDataFailedAction;