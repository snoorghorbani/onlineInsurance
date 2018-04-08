import { Component, Output, EventEmitter, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BpmnElement, ActionTypes, GatewayModel } from "../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "form-task",
	templateUrl: "./form-task.component.html"
})
export class FormTaskComponent {
	done: BehaviorSubject<any> = new BehaviorSubject({});
	State: GatewayModel;
	constructor(private injector: Injector) {
		this.State = this.injector.get("State");
	}
	doned(formGroup: FormGroup) {
		const data = formGroup.value;
		const flow = this.State.Flows.find(f => f.Action == ActionTypes.ACCEPT);
		this.done.next({ data, flow });
	}
}
