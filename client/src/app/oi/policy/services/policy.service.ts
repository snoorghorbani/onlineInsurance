import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { PolicyModel } from "../models";
import { GetCarModelsOfBrand } from "./mock";
import { of } from "rxjs";
import { GetCarModelsOfBrandApiModel, ComparePoliciesApiModel } from "./api";
import { PolicyCompareModel } from "../models/policy-compare.model";

const URI = "http://185.208.174.92:2500/policy/";

@Injectable({
	providedIn: "root"
})
export class PolicyService {
	constructor(private http: HttpClient) {}

	GetCarModelsOfBrand(data: GetCarModelsOfBrandApiModel.Request): Observable<PolicyModel[]> {
		const model = new GetCarModelsOfBrandApiModel.Request(data);
		model.carBrand = 1;
		return this.http
			.get<GetCarModelsOfBrandApiModel.Response>(`${URI}GetCarModelsOfBrand`, {
				params: model.getRequestQueryParams()
			})
			.map(response => response.Result);
	}
	ComparePolicies(data: ComparePoliciesApiModel.Request): Observable<PolicyCompareModel[]> {
		const model = new ComparePoliciesApiModel.Request(data);
		return this.http
			.post<ComparePoliciesApiModel.Response>(`${URI}ComparePolicies`, model.getRequestBody())
			.map(response => response.Result.Items);
	}
}
