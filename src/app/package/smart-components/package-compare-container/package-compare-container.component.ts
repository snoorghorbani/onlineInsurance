import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as FeatureReducer from "../../reducers";

import { PackageAddModel as model } from "app/models/package";
import { responseStatusTypes } from "@soushians/shared";
import { PackageAddAction, PackageAddStartAction } from "../../actions";
import { PackageService } from "app/package/services";
import { FlowService } from "app/bpmn";
import { ProcessModel, TaskModel } from "app/bpmn/models";
import { ProcessTraversedAction, GetProcessAction } from "app/bpmn/view";
import { PackageCompareComponent } from "../../dumb-components";
import { GetBpmnSchemaAction } from "app/bpmn/list";
import { BehaviorSubject } from "rxjs";

@Component({
	//compare: 'package-add-container',
	template: `
      <package-compare #dumb
        [comparision]="comparision$ | async"
        (select)="done($event)"
      ></package-compare>
    `
})
export class PackageCompareContainerComponent implements OnInit {
	comparision$: BehaviorSubject<any[]>;
	proccessId: string;
	process$: BehaviorSubject<ProcessModel>;
	state: TaskModel;
	@ViewChild("dumb") dumb: PackageCompareComponent;
	constructor(
		private store: Store<FeatureReducer.FeatureState>,
		private packageService: PackageService,
		private flowService: FlowService
	) {
		this.proccessId = "5aa3cf2d7bd3552a247f42b9";
		this.store.dispatch(new GetProcessAction(this.proccessId));
		this.comparision$ = new BehaviorSubject([]);
	}
	ngOnInit() {
		this.flowService.selectById(this.proccessId).subscribe(process => {
			this.process$ = new BehaviorSubject<ProcessModel>(process);
			this.process$.subscribe(process => this.comparision$.next(process.Data.Policies));
		});
		this.process$.subscribe(process => (this.state = process.currentState as TaskModel));
	}
	done(selectedPolicy) {
		const process = this.process$.getValue();
		const flow = this.state.Flows[0];
		process.Data.Policy = selectedPolicy;
		this.store.dispatch(new ProcessTraversedAction({ process, data: process.Data, flow }));
	}
	compare(formData) {
		var res = this.packageService.compare();
	}
}
