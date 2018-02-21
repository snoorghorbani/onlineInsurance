import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { BankModel, UserSuccessfulPaymentsModel, SuccessfulPaymentModel, PaymentRequestModel } from "app/models/payment";
import { UtilityService } from "@soushians/infra";
import { PaymentConfigurationService } from "app/payment/services/payment-module-configuration";
import { HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpInterceptor } from "@angular/common/http";

@Injectable()
export class PaymentService {

  constructor(
    private http: Http,
    private paymentConfiguration: PaymentConfigurationService
  ) { }

  canPay(): Observable<boolean> {
    return Observable.of(true);
  }

  paymentRequest(data: PaymentRequestModel.Request): Observable<PaymentRequestModel.Response> {
    let model = new PaymentRequestModel.Request(data);

    return this.http.post(this.paymentConfiguration.config.endpoints.payment, model.getRequestBody(), {
      withCredentials: true
    })
      .map(response => response.json());
  }

  successfulPaymentsReport(data: UserSuccessfulPaymentsModel.Request): Observable<UserSuccessfulPaymentsModel.Response> {
    return Observable.of(successfulPaymentsReport);
    // let model = new UserSuccessfulPaymentsModel.Request(data);
    // let {Username} = model;
    // return this.http.get(`http://wifi.shatel.ir/api/v1/payments/${Username}`, {
    //   withCredentials: true,
    //   params: model.getRequestQueryParams()
    // })
    //   .map(response => { return { data: response.json() } })
  }

  redirectToBank(data: PaymentRequestModel.Response): Observable<any> {

    let model = new PaymentRequestModel.Response(data)

    let method = (model.Method).toLowerCase();
    return this.http[method](model.Action, { withCredentials: true })
      .map(response => response.json())
  }


}


@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Before doing anything, it's important to only cache GET requests.
    // Skip this interceptor if the request method isn't GET.
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    // First, check the cache to see if this request exists.

    // No cached response exists. Go to the network, and cache
    // the response when it arrives.
    return next.handle(req).do(event => {
      // Remember, there may be other events besides just the response.
      if (event instanceof HttpResponse) {
        // Update the cache.
      }
    });
  }
}



const successfulPaymentsReport: UserSuccessfulPaymentsModel.Response = {
  data: [
    {
      PaymentId: Math.floor(Math.random() * 200),
      PackageName: "متن لورم ایپسوم صنعت  شرایط".substring(0, Math.floor(Math.random() * 15)),
      Price: Math.floor(Math.random() * 10000),
      VAX: Math.floor(Math.random() * 1000),
      TAX: Math.floor(Math.random() * 1000),
      TotalAmount: Math.floor(Math.random() * 10000),
      IssueDate: new Date(),
      BankName: 'ملت'
    },
    {
      PaymentId: Math.floor(Math.random() * 200),
      PackageName: "متن لورم ایپسوم صنعت  شرایط".substring(0, Math.floor(Math.random() * 15)),
      Price: Math.floor(Math.random() * 10000),
      VAX: Math.floor(Math.random() * 1000),
      TAX: Math.floor(Math.random() * 1000),
      TotalAmount: Math.floor(Math.random() * 10000),
      IssueDate: new Date(),
      BankName: 'ملت'
    },
    {
      PaymentId: Math.floor(Math.random() * 200),
      PackageName: "متن لورم ایپسوم صنعت  شرایط".substring(0, Math.floor(Math.random() * 15)),
      Price: Math.floor(Math.random() * 10000),
      VAX: Math.floor(Math.random() * 1000),
      TAX: Math.floor(Math.random() * 1000),
      TotalAmount: Math.floor(Math.random() * 10000),
      IssueDate: new Date(),
      BankName: 'ملت'
    },
    {
      PaymentId: Math.floor(Math.random() * 200),
      PackageName: "متن لورم ایپسوم صنعت  شرایط".substring(0, Math.floor(Math.random() * 15)),
      Price: Math.floor(Math.random() * 10000),
      VAX: Math.floor(Math.random() * 1000),
      TAX: Math.floor(Math.random() * 1000),
      TotalAmount: Math.floor(Math.random() * 10000),
      IssueDate: new Date(),
      BankName: 'ملت'
    },
    {
      PaymentId: Math.floor(Math.random() * 200),
      PackageName: "متن لورم ایپسوم صنعت  شرایط".substring(0, Math.floor(Math.random() * 15)),
      Price: Math.floor(Math.random() * 10000),
      VAX: Math.floor(Math.random() * 1000),
      TAX: Math.floor(Math.random() * 1000),
      TotalAmount: Math.floor(Math.random() * 10000),
      IssueDate: new Date(),
      BankName: 'ملت'
    },
    {
      PaymentId: Math.floor(Math.random() * 200),
      PackageName: "متن لورم ایپسوم صنعت  شرایط".substring(0, Math.floor(Math.random() * 15)),
      Price: Math.floor(Math.random() * 10000),
      VAX: Math.floor(Math.random() * 1000),
      TAX: Math.floor(Math.random() * 1000),
      TotalAmount: Math.floor(Math.random() * 10000),
      IssueDate: new Date(),
      BankName: 'ملت'
    },
    {
      PaymentId: Math.floor(Math.random() * 200),
      PackageName: "متن لورم ایپسوم صنعت  شرایط".substring(0, Math.floor(Math.random() * 15)),
      Price: Math.floor(Math.random() * 10000),
      VAX: Math.floor(Math.random() * 1000),
      TAX: Math.floor(Math.random() * 1000),
      TotalAmount: Math.floor(Math.random() * 10000),
      IssueDate: new Date(),
      BankName: 'ملت'
    }
  ]
}