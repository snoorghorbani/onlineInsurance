import { Action } from '@ngrx/store';
import { OrderFormType } from '../models';

export const enum ORDER_PANEL_ACTION_TYPES {
	NEXT_STATE = '[ORDER][ORDER_PANEL] next state',
	RESET = '[ORDER][ORDER_PANEL] reset'
}

export class NextStateAction implements Action {
	readonly type = ORDER_PANEL_ACTION_TYPES.NEXT_STATE;
	constructor(public payload: OrderFormType) {}
}

export type OrderPanelActions = NextStateAction;
