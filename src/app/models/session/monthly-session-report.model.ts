import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpParams } from "@angular/common/http";

export namespace MonthlySessionReportModel {
	// export class Request implements HttpRequestBaseModel<SigninModel>{
	export class Request implements HttpRequestBaseModel<Request> {
		fromDate: string;
		toDate: string;
		Username: string;

		constructor(initValue: MonthlySessionReportModel.Request) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				fromDate: this.fromDate,
				toDate: this.toDate
			};
		}
		getRequestQueryParams() {
			let params = new HttpParams().set("fromDate", this.fromDate).set("toDate", this.toDate);
			return params;
		}

		static get formGroup() {
			return new FormGroup({
				fromDate: new FormControl(null, [ Validators.required ]),
				toDate: new FormControl(null, [ Validators.required ]),
				username: new FormControl(null, [ Validators.required ])
			});
		}
	}

	export class Response {
		YearNumber: number;
		MonthNumber: string;
		ConnectionDuration: number;
		UploadQuotaUsage: number;
		DownloadQuotaUsage: number;
		TotalQuotaUsage: number;

		constructor({
			YearNumber,
			MonthNumber,
			ConnectionDuration,
			UploadQuotaUsage,
			DownloadQuotaUsage,
			TotalQuotaUsage
		}) {
			this.YearNumber = YearNumber;
			this.MonthNumber = MonthNumber;
			this.ConnectionDuration = ConnectionDuration;
			this.UploadQuotaUsage = UploadQuotaUsage;
			this.DownloadQuotaUsage = DownloadQuotaUsage;
			this.TotalQuotaUsage = TotalQuotaUsage;
		}
	}
}
