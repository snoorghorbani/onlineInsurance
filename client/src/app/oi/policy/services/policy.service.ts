import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map, share } from "rxjs/operators";
import { of } from "rxjs";

import { PolicyModel } from "../models";
import { GetCarModelsOfBrand } from "./mock";
import { GetCarModelsOfBrandApiModel, ComparePoliciesApiModel } from "./api";
import { PolicyCompareModel } from "../models/policy-compare.model";
import { PolicyConfigurationService } from "./policy-configuration.service";

@Injectable({
	providedIn: "root"
})
export class PolicyService {
	constructor(private http: HttpClient, private configurationService: PolicyConfigurationService) {}

	GetCarModelsOfBrand(data: GetCarModelsOfBrandApiModel.Request): Observable<PolicyModel[]> {
		const model = new GetCarModelsOfBrandApiModel.Request(data);
		return this.http
			.get<GetCarModelsOfBrandApiModel.Response>(
				`${this.configurationService.config.env.server}/policy/GetCarModelsOfBrand`,
				{
					params: model.getRequestQueryParams()
				}
			)
			.map(response => response.Result);
	}
	ComparePolicies(data: ComparePoliciesApiModel.Request): Observable<PolicyCompareModel[]> {
		const model = new ComparePoliciesApiModel.Request(data);
		return this.http
			.post<ComparePoliciesApiModel.Response>(
				`${this.configurationService.config.env.server}/policy/ComparePolicies`,
				model.getRequestBody()
			)
			.pipe(map(response => response.Result.Items), share());
	}
}
