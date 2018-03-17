import { Component, Output, EventEmitter, Injector, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BpmnElement, ActionTypes, TaskModel } from "../../models";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
	selector: "navigate-task",
	templateUrl: "./navigate-task.component.html"
})
export class NavigateTaskComponent implements OnInit {
	done: BehaviorSubject<any> = new BehaviorSubject({});
	State: TaskModel;
	constructor(private injector: Injector, private router: Router) {
		this.State = this.injector.get("State");
	}
	ngOnInit() {
		debugger;
		this.router.navigate([ this.State.Properties.Route ]);
		// .then(response => {
		// 	this.doned(ActionTypes.RESOLVE);
		// })
		// .catch(err => {
		// 	this.doned(ActionTypes.REJECT);
		// 	return Observable.empty();
		// });
		this.doned(ActionTypes.RESOLVE);
	}
	doned(result: ActionTypes) {
		const data = result;
		const flow = this.State.Flows.find(f => f.Action == ActionTypes[result]);
		this.done.next({ data, flow });
	}
}
