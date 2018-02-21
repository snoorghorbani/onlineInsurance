import { Action } from '@ngrx/store';

import { BankModel } from 'app/models/payment';

export enum BankActionTypes {
    FETCH_BANKS = '[bank] new FETCH_BANKS',
    FETCH_BANKS_START = '[bank] FETCH_BANKS_START',
    FETCH_BANKS_SUCCEED = '[bank] FETCH_BANKS_SUCCEED',
    FETCH_BANKS_FAILD = '[bank] FETCH_BANKS_FAILD',
    CLEAR_BANK_LIST_STATE = '[bank] CLEAR_BANK_LIST_STATE',
    SELECT_BANK = '[bank] SELECT_BANK',
}

export class FetchBacks implements Action {
    readonly type = BankActionTypes.FETCH_BANKS;
}

export class FetchBanksStart implements Action {
    readonly type = BankActionTypes.FETCH_BANKS_START;
}

export class FetchBanksSucceed implements Action {
    readonly type = BankActionTypes.FETCH_BANKS_SUCCEED;
    constructor(public payload: BankModel[]) { }
}

export class FetchBanksFaild implements Action {
    readonly type = BankActionTypes.FETCH_BANKS_FAILD;
}

export class ClearBankListState implements Action {
    readonly type = BankActionTypes.CLEAR_BANK_LIST_STATE;
}

export class SelectBank implements Action {
    readonly type = BankActionTypes.SELECT_BANK;
    constructor(public payload: BankModel) { }
}

export type BankAction =
    | FetchBacks
    | FetchBanksStart
    | FetchBanksSucceed
    | FetchBanksFaild
    | ClearBankListState
    | SelectBank;