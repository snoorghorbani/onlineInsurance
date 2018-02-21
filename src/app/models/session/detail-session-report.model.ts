import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SessionDetailModel } from "../session/session-detail.model";
import { HttpParams } from "@angular/common/http";

export module DetailSessionReportModel {

    export class Request {
        fromDate: string;
        toDate: string;
        Username: string;
        
        constructor(initValues: DetailSessionReportModel.Request = {} as DetailSessionReportModel.Request) {
            Object.keys(initValues).forEach(key => this[key] = initValues[key])
        }

        getRequestBody() {
            return {
            }
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
        data: SessionDetailModel[];

        constructor({ data }) {
            this.data = data;
        }
    }

}
