import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/infra";
import {
	UpsertApiModel,
	ProcessModel,
	GetApiModel,
	GetAllApiModel,
	EditApiModel,
	TaskModel,
	ActionTypes
} from "../models";
import { BpmnConfigurationService } from "./bpmn-configuration.service";

import { MainContainerState } from "../main-container/main-container.reducers";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router } from "@angular/router";

@Injectable()
export class FlowService {
	constructor(
		private http: HttpClient,
		private store: Store<MainContainerState>,
		private router: Router,
		private configurationService: BpmnConfigurationService
	) {}

	get(_id: string): Observable<ProcessModel> {
		return this.configurationService.config$
			.filter(config => config.endpoints.get != "")
			.take(1)
			.switchMap(config => this.http.get(stringTemplate(config.endpoints.get, { _id })))
			.map((response: GetApiModel.Response) => new ProcessModel(response.Result));
	}

	selectById(_id: string): Observable<ProcessModel> {
		const subject = new BehaviorSubject<ProcessModel>(undefined);
		if (!_id) subject.next(new ProcessModel());

		this.store
			.select(state => state.bpmn.flows.data)
			.filter(entities => entities != null)
			.map(entities => entities.find(entity => entity._id == _id))
			.filter(entities => entities != null)
			.subscribe(enitity => subject.next(new ProcessModel(enitity)));
		return subject.asObservable().filter(flow => flow != null);
	}
	navigate(state: TaskModel) {
		this.router
			.navigate([ state.Properties.Route ])
			.then(response => {
				const data = ActionTypes.RESOLVE;
				const flow = state.Flows.find(f => f.Action == ActionTypes.RESOLVE);
			})
			.catch(err => {
				// this.doned(ActionTypes.REJECT);
				return Observable.empty();
			});
	}
}
