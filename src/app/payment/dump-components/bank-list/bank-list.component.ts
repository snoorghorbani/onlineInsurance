import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { BankModel } from 'app/models/payment';
import { Store } from "@ngrx/store";
import { MatRadioChange } from "@angular/material";

@Component({
  selector: 'payment-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  @Output() bankSelected = new EventEmitter<BankModel>();
  @Input() banks: Observable<BankModel[]>;

  constructor() { }

  ngOnInit() {
  }

  selectBank(event: MatRadioChange) {
    if(event == null){debugger; return}
    this.bankSelected.emit(event.value)
  }
}