import { Action } from "@ngrx/store";
import { Signin_ApiModel } from "../models";
export declare enum SignInActionTypes {
    WHO_AM_I = "[AUTHENTICATION] who am i",
    SIGNIN = "[AUTHENTICATION] Signin",
    DO_SIGNOUT = "[AUTHENTICATION] Do Signout",
    SIGNOUT = "[AUTHENTICATION] Signout",
    SIGNIN_SUCCEED = "[AUTHENTICATION][Signin] Success",
    SIGNIN_FAILURE = "[AUTHENTICATION][Signin] Failure",
    SIGNIN_REDIRECT = "[AUTHENTICATION][Signin] Redirect",
    SIGNIN_REQUIRED = "[AUTHENTICATION][Signin] Required",
}
export declare class WhoAmIAction implements Action {
    readonly type: SignInActionTypes;
}
export declare class Signin implements Action {
    payload: Signin_ApiModel.Request;
    readonly type: SignInActionTypes;
    constructor(payload: Signin_ApiModel.Request);
}
export declare class SigninSecceed implements Action {
    payload: any;
    readonly type: SignInActionTypes;
    constructor(payload: any);
}
export declare class SigninFailed implements Action {
    payload: any;
    readonly type: SignInActionTypes;
    constructor(payload: any);
}
export declare class SigninRedirect implements Action {
    readonly type: SignInActionTypes;
}
export declare class DoSignoutAction implements Action {
    readonly type: SignInActionTypes;
}
export declare class SignoutAction implements Action {
    readonly type: SignInActionTypes;
}
export declare class SigninRequiredAction implements Action {
    readonly type: SignInActionTypes;
}
export declare type SigninAction = WhoAmIAction | Signin | SigninSecceed | SigninFailed | SigninRedirect | DoSignoutAction | SignoutAction | SigninRequiredAction;