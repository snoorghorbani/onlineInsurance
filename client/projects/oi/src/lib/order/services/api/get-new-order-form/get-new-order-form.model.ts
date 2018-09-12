import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { RouterAction } from '@ngrx/router-store';
import { map, switchMap } from 'rxjs/operators';

import { HttpRequestBaseModel, HttpResponseBaseModel } from '@soushians/shared';

import { HttpParams } from '@angular/common/http';

export namespace GetNewOrderFormApiModel {
	export class Request {
		type: number;
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}

		getRequestQueryParams() {
			let params = new HttpParams();
			params = params.append('type', this.type.toString());
			return params;
		}
	}

	export class Response<T> {
		Result: T;
		constructor() {}
	}
}
