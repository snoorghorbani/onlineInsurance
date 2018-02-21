import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as userReducer from "@soushians/user";
import { responseStatusTypes } from "@soushians/shared";

import { ProfileViewModel } from "@soushians/user";
import * as FeatureReducer from "../../reducers";
import { FetchUserSuccessfulPayments } from "../../actions";
import { UserSuccessfulPaymentsModel as model, UserModel, UserSuccessfulPaymentsModel } from "app/models/payment";

@Component({
	selector: "payment-success-payment-report-container",
	template: `
    <successful-payment-report
        [data]='reportData$'
        [status]='reportDataStatus$'
        [formGroup]='formGroup'
    ></successful-payment-report>
  `
})
export class SuccessPaymentReportContainerComponent implements OnInit {
	user$: Observable<ProfileViewModel.Response>;
	reportData$: Observable<model.Response>;
	reportDataStatus$: Observable<responseStatusTypes>;
	formGroup: FormGroup = model.Request.formGroup;

	constructor(private store: Store<FeatureReducer.FeatureState>) {
		this.user$ = this.store.select(userReducer.getUserInfo);
		this.reportData$ = this.store.select(FeatureReducer.getSuccessPaymentReportData);
		this.reportDataStatus$ = this.store.select(FeatureReducer.getSuccessPaymentReportStatus);
	}

	ngOnInit() {
		// TODO:
		this.user$.subscribe((data: any) => {
			if (!data) return;
			this.store.dispatch(new FetchUserSuccessfulPayments(data as UserSuccessfulPaymentsModel.Request));
		});
	}
}
