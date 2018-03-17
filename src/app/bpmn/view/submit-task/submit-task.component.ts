import { Component, Output, EventEmitter, Injector, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BpmnElement, ActionTypes, TaskModel } from "../../models";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
	selector: "submit-task",
	templateUrl: "./submit-task.component.html"
})
export class SubmitTaskComponent implements OnInit {
	done: BehaviorSubject<any> = new BehaviorSubject({});
	State: TaskModel;
	constructor(private injector: Injector, private http: HttpClient) {
		this.State = this.injector.get("State");
	}
	ngOnInit() {
		this.http
			.post(this.State.Properties.Endpoint, {})
			.map(response => {
				this.doned(ActionTypes.RESOLVE);
			})
			.catch(err => {
				this.doned(ActionTypes.REJECT);
				return Observable.empty();
			})
			.subscribe(response => {});
	}
	doned(result: ActionTypes) {
		const data = result;
		const flow = this.State.Flows.find(f => f.Action == ActionTypes[result]);
		this.done.next({ data, flow });
	}
}
