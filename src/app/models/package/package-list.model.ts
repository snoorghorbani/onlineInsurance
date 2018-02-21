import { retry } from 'rxjs/operator/retry';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PackageModel } from "app/models/package/package.model";

export module PackageListModel {
    export class Request  {
        Id: number;
        Name: string;
        Price: number;
        OffPrice: number;
        ExpireHours: number;
        QuotaVolume: number;
        TimeCredit: number;
        ShowOrder: number;
        UploadSpeed: number;
        DownloadSpeed: number;

        constructor({ }) { }

        getRequestBody() {
            return {}
        }
        getRequestQueryParams() {
            return {
            }
        }

        static get formGroup() {
            return {}
        }

    }

    export class Response {
        data: PackageModel[];
        constructor({ data }) {
            this.data = data;
        }
    }
}

let formatDate = (date: Date) => [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');