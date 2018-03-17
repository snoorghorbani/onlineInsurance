import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as userReducer from "@soushians/user";
import { responseStatusTypes } from "@soushians/shared";
import { ProfileViewModel } from "@soushians/user";

import * as FeatureReducer from "../../reducers";
import { FetchUserSuccessfulPayments } from "../../actions";
import { FlowService } from "app/bpmn";
import { ProcessModel, TaskModel } from "app/bpmn/models";
import { BehaviorSubject } from "rxjs";
import { ProcessTraversedAction } from "app/bpmn/view";

@Component({
	selector: "payment-invoice",
	templateUrl: "./invoice.component.html"
})
export class InvoiceComponent implements OnInit {
	proccessId: string;
	process$: BehaviorSubject<ProcessModel>;
	state: TaskModel;
	constructor(private store: Store<FeatureReducer.FeatureState>, private flowService: FlowService) {
		debugger;
		this.proccessId = "5aa3cf2d7bd3552a247f42b9";
		this.process$ = new BehaviorSubject<ProcessModel>(undefined);
		this.flowService.selectById(this.proccessId).subscribe(process => this.process$.next(process));
		this.process$.subscribe(process => (this.state = process.currentState as TaskModel));
	}

	ngOnInit() {}
	done() {
		debugger;
		const process = this.process$.getValue();
		const flow = this.state.Flows[0];
		this.store.dispatch(new ProcessTraversedAction({ process, data: process.Data, flow }));
	}
}
