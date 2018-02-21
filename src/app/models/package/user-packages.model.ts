import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MyPackageModel } from "app/models/package";

export module UserPackagesModel {

    export class Request {
        fromDate?: Date;
        toDate?: Date;
        Username: string;

        constructor(initValue: Request) {
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
            return {}
        }

    }

    export class Response {
        data: MyPackageModel[];
        constructor(params?:Response) {
            Object.keys(params).forEach(key=>this[key]= params[key]);
        }
    }
}

let formatDate = (date: Date) => [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');