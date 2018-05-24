import { SigninAction, SignInActionTypes } from '../actions';
import { UserModel } from '../models';
// import 'app/authentication';
// import '@app';

import { AuthenticationConfigurationService } from '../services';
import { ReflectiveInjector } from "@angular/core";

export interface State {
        loggedIn: boolean;
        user: UserModel;
}

export const initialState: State = {
        loggedIn: false,
        user: new UserModel({ Id: 1 })
};

export function UserReducer(state = initialState, action: SigninAction): State {
        switch (action.type) {
                case SignInActionTypes.SIGNIN_SUCCEED: {
                        return {
                                ...state,
                                loggedIn: true,
                                user: action.payload
                        };
                }

                case SignInActionTypes.SIGNOUT: {
                        return initialState;
                }

                default: {
                        return state;
                }
        }
}

//#region  selectors
export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
//#endregion 
