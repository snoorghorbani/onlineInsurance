import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as FeatureReducer from '../../reducers';
import { UserSuccessfulPaymentsModel } from 'app/models/payment';
import { responseStatusTypes } from "@soushians/shared";

@Component({
        selector: 'successful-payment-report',
        templateUrl: './successful-payment-report.component.html',
        styleUrls: ['./successful-payment-report.component.scss']
})
export class SuccessfulPaymentReportComponent implements OnInit {


        @Input('data') data$: Observable<UserSuccessfulPaymentsModel.Response>;
        @Input('status') status$: Observable<responseStatusTypes>;
        @Input() formGroup: FormGroup;

        constructor() {
        }

        ngOnInit() { }
}