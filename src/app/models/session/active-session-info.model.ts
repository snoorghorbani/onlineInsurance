import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpParams } from "@angular/common/http";
import { SessionDetailModel } from "app/models/session";

export namespace ActiveSessionInfoModel {
	export class Request {
		fromDate: Date;
		toDate: Date;
		Username: string;

		constructor(initValue: Request) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
		getRequestQueryParams() {
			let params: any = {};
			if (this.fromDate) params.fromDate = formatDate(this.fromDate);
			if (this.toDate) params.toDate = formatDate(this.toDate);
			return params;
		}

		static get formGroup() {
			return {};
		}
	}

	export class Response {
		data: SessionDetailModel;
		constructor() {}
	}
}

let formatDate = (date: Date) => [ date.getFullYear(), date.getMonth() + 1, date.getDate() ].join("-");
