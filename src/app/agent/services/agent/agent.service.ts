import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { AgentConfigurationService } from "../agent-module-configuration";
import { CartableApiModel } from 'app/models/cartable';

@Injectable()
export class AgentService {

        constructor(
                private http: HttpClient,
                private agentConfigurationService: AgentConfigurationService
        ) { }

        getCartableRequests(): Observable<CartableApiModel.Response> {
                // let model = new CartableApiModel.Request();
                return Observable.of(getCartableRequests)
                // return this.http.get(`http://wifi.shatel.ir/api/v1/agents/${Username}/monthly`, {
                //         withCredentials: true,
                //         params: model.getRequestQueryParams()
                // })
                //         .map(response => response as CartableApiModel.Response);
        }
}

export var AgentServiceStub = {}


var getCartableRequests = {
        data: [
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
                {
                        Message: 'درخواست ثبت بیمه نامه ثالث آسیا به شماره رسید 300125',
                        Name: 'علی طاهری',
                        Request: {
                                Coveragelevel: Math.random() * 100000,
                                NoDamagedYears: 456,
                                InsuranceTerm: 123,
                                DueDate: new Date(),
                                PaidMoney: Math.random() * 100000,
                                insuranceCompany: 'آسیا',
                                CarProductionYear: 321,
                                Marketing: 1,
                                FinalPrice: 1,
                                History: [
                                        {

                                        }
                                ]
                        }
                },
        ]
}