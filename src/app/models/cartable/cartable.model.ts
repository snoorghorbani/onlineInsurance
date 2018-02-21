import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpParams } from "@angular/common/http";

import { RequestModel } from "./request.model";

export module CartableApiModel {
    export class Request {
        Message: string;

        constructor(params?: Request) {
            Object.keys(params).forEach(key => this[key] = params[key]);
        }

        // getRequestQueryParams(): HttpParams {
        //     let params = new HttpParams()
        //         .set('fromDate', this.fromDate)
        //         .set('toDate', this.toDate);

        //     return params;
        // }

        static get formGroup() {
            return new FormGroup({
                // fromDate: new FormControl(null, [Validators.required]),
                // toDate: new FormControl(null, [Validators.required])
            })
        }

    }

    export class Response {
        data: RequestModel[] = [];
        constructor(params?: Response) {
            if (!params) return;
            Object.keys(params).forEach(key => this[key] = params[key]);
        }
    }
}
