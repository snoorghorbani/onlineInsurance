import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { of } from "rxjs/internal/observable/of";

import { stringTemplate } from "@soushians/infra";

import { GeoBoundaryModel, TestModel, CityModel } from "../models";
import { GeoBoundaryConfigurationService } from "./geo-boundary-configuration.service";
import { TestApiMock } from "./mock/test.api-mock";

import { AppState } from "../geo-boundary.reducers";
import { GetCitiesApiModel } from "./api/get-cities";

@Injectable()
export class GeoBoundaryService {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: GeoBoundaryConfigurationService
	) {}

	GetCities(): Observable<CityModel[]> {
		return this.http.get<GetCitiesApiModel.Response>("").map(response => response.Result);
	}
	test(): Observable<TestModel> {
		return of(TestApiMock.Result);
		// const model = new AddGeoBoundaryApiModel.Request(data);
		// return this.configurationService.config$
		// 	.filter(config => config.endpoints.addGeoBoundary != "")
		// 	.take(1)
		// 	.switchMap(config => this.http.post(config.endpoints.addGeoBoundary, model.getRequestBody()))
		// 	.map((response: AddGeoBoundaryApiModel.Response) => response.Result);
	}
}
