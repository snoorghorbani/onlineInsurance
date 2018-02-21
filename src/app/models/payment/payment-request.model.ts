import { FormGroup, FormControl, Validators } from "@angular/forms";

export module PaymentRequestModel {
    export class Request {
        PackageId: number;
        BankGatewayId: number;

        constructor(initValues: PaymentRequestModel.Request) {
            Object.keys(initValues).forEach(key => this[key] = initValues[key])
        }

        getRequestBody() {
            return {
                BankGatewayId: this.BankGatewayId,
                PackageId: this.PackageId
            }
        }
        getRequestQueryParams() {
            return {
            }
        }

        static get formGroup() {
            return new FormGroup({
                BankGatewayId: new FormControl(null, [Validators.required]),
                PackageId: new FormControl(null, [Validators.required])
            })
        }
    }

    export class Response {
        Succeeded: boolean;
        Message?: string;
        Action: string;
        Method: 'GET' | 'POST' | 'get' | 'post';
        Params: string;

        constructor(params: Response) {
            Object.keys(params).forEach(key => this[key] = params[key]);
        }
    }
}