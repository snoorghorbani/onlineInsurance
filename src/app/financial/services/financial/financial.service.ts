import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { FinancialConfigurationService } from "../financial-module-configuration";
import { AgentPaymentsApiModel } from 'app/models/financial';

@Injectable()
export class FinancialService {

        constructor(
                private http: HttpClient,
                private financialConfigurationService: FinancialConfigurationService
        ) { }

        getAgentPayments(): Observable<AgentPaymentsApiModel.Response> {
                // let model = new CartableApiModel.Request();
                return Observable.of(getCartableRequests)
                // return this.http.get(`http://wifi.shatel.ir/api/v1/financials/${Username}/monthly`, {
                //         withCredentials: true,
                //         params: model.getRequestQueryParams()
                // })
                //         .map(response => response as CartableApiModel.Response);
        }
}

export var FinancialServiceStub = {}


var getCartableRequests = {
        data: [
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
                {
                        Id: '1',
                        Amount: Math.random() * 10000,
                        Time: new Date(),
                        Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'.substring(0, Math.random() * 50)
                },
        ]
}