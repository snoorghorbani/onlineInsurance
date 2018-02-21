import { retry } from 'rxjs/operator/retry';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PackageModel } from "./package.model";
import { PackageAddModel } from "./package-add.model";

export module FetchPackageModel {
    export class Request extends PackageAddModel.Request {

        constructor(params: Request) {
            super(params);
        }

        getRequestQueryParams() {
            return {
            }
        }

    }
    
    export class Response extends PackageModel {
        
                constructor() {
                    super();
                }
            }
}