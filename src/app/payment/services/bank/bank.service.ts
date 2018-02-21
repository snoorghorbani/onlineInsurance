import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { BankModel } from "app/models/payment";

@Injectable()
export class BankService {

  constructor(private http: Http) { }

  canGetBanks(): Observable<boolean> {
    return Observable.of(true);
  }

  getBanks(): Observable<BankModel[]> {
    return this.http.get("http://wifi.shatel.ir/api/v1/payments/banks", {
      withCredentials: true
    })
      .map(response => response.json() as BankModel[]);
  }

}