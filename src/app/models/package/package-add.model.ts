import { retry } from 'rxjs/operator/retry';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PackageModel } from "app/models/package/package.model";

export module PackageAddModel {
    export class Request {
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

        constructor(params: Request) {
            Object.keys(params).forEach(key => this[key] = params[key]);
        }

        getRequestBody() {
            return {
                Id: this.Id,
                Name: this.Name,
                Price: this.Price,
                OffPrice: this.OffPrice,
                ExpireHours: this.ExpireHours,
                QuotaVolume: this.QuotaVolume,
                TimeCredit: this.TimeCredit,
                ShowOrder: this.ShowOrder,
                UploadSpeed: this.UploadSpeed,
                DownloadSpeed: this.DownloadSpeed
            }
        }
        getRequestQueryParams() {
            return {
            }
        }

        static get formGroup() {
            return new FormGroup({
                Name: new FormControl('', [Validators.required]),
                Price: new FormControl('', [Validators.required]),
                OffPrice: new FormControl(''),
                ExpireHours: new FormControl(''),
                QuotaVolume: new FormControl(''),
                TimeCredit: new FormControl(''),
                ShowOrder: new FormControl('', [Validators.required]),
                UploadSpeed: new FormControl(''),
                DownloadSpeed: new FormControl('')
            })
        }

    }

    export class Response extends PackageModel {

        constructor() {
            super();
        }
    }
}

let formatDate = (date: Date) => [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');