import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DaySessionReportModel } from "app/models/session/day-session-report.model";
import { HttpParams } from "@angular/common/http";

export module DailySessionReportModel {
    export class Request {
        fromDate: string;
        toDate: string;
        Username: string;

        constructor(params: Request) {
            Object.keys(params).forEach(key => this[key] = params[key]);
        }

        getRequestQueryParams(): HttpParams {
            let params = new HttpParams()
                .set('fromDate', this.fromDate)
                .set('toDate', this.toDate);

            return params;
        }

        static get formGroup() {
            return new FormGroup({
                fromDate: new FormControl(null, [Validators.required]),
                toDate: new FormControl(null, [Validators.required])
            })
        }

    }

    export class Response {
        data: DaySessionReportModel[];
        constructor({ data }) {
            this.data = data;
        }
    }
}
