import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { BankModel } from "app/models/payment";
import { FeatureState, getBanks } from '../../reducers'
import { FetchBacks, SelectBank } from "../../actions";


@Component({
  template: `
  <payment-bank-list
    [banks]="banks$"
    (bankSelected)='selectBank($event)'
  ></payment-bank-list>
  `
})
export class BankListContainerComponent implements OnInit {
  banks$: Observable<BankModel[]>;

  constructor(
    private store: Store<FeatureState>
  ) {
    this.banks$ = this.store.select(getBanks);
  }

  ngOnInit() {
    this.store.dispatch(new FetchBacks());
  }
  selectBank(bank) {
    this.store.dispatch(new SelectBank(bank));
  }

}