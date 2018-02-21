import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SuccessfulPaymentModel } from "app/models/payment";

export module UserSuccessfulPaymentsModel {

    export class Request {
        fromDate?: Date;
        toDate?: Date;
        Username: string;

        constructor(initValue?: Request) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key])
        }

        getRequestBody() {
            return {}
        }
        getRequestQueryParams() {
            let params: any = {};
            if (this.fromDate) params.fromDate = formatDate(this.fromDate);
            if (this.toDate) params.toDate = formatDate(this.toDate);
            return params;
        }

        static get formGroup() {
            return new FormGroup({
                fromDate: new FormControl(null, []),
                toDate: new FormControl(null, []),
                Username : new FormControl(null, [])
            })
        }

    }

    export class Response {
        data: SuccessfulPaymentModel[];
        constructor({ data }) {
            this.data = data;
        }
    }
}

let formatDate = (date: Date) => [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');