import { Component, Input, Output, EventEmitter, Injector } from "@angular/core";
import { TaskModel, EventModel, GatewayModel, ActionTypes } from "app/bpmn/models";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "start-event",
	templateUrl: "./start-event.component.html"
})
export class StartEventComponent {
	@Output() accept = new EventEmitter();
	done: BehaviorSubject<any> = new BehaviorSubject({});
	State: TaskModel | EventModel | GatewayModel;
	Actions: string[];
	ActionType = ActionTypes;
	constructor(private injector: Injector) {
		this.State = this.injector.get("State");
		this.Actions = this.State.Flows.map(f => f.Action);
	}
	accepted() {
		const data = {};
		const flow = this.State.Flows.find(f => f.Action == ActionTypes.ACCEPT);
		this.done.next({ data, flow });
	}
}
