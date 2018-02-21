import { Action } from '@ngrx/store';

import { UserModel } from 'app/models/payment';

export enum UserActionTypes {
    USER_CHANGED = '[PAYMENT][USER] USER_CHANGED',
}

export class UserChangeAction implements Action {
    readonly type = UserActionTypes.USER_CHANGED;
    constructor(public payload: UserModel) { }
}

export type UserAction =
    UserChangeAction;