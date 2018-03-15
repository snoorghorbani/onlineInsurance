import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProcessModel, BpmnElement } from "../../models";
import { Observable } from "rxjs/Observable";
import { MatDrawer } from "@angular/material";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container";

@Component({
	selector: "flow-view",
	templateUrl: "./view.component.html",
	styleUrls: [ "./view.component.css" ]
})
export class FlowViewComponent implements OnInit {
	@Output() traverse = new EventEmitter();
	_flow: ProcessModel;
	@Input()
	set flow(flow: ProcessModel) {
		if (!flow) return;
		this._flow = flow;
		flow.currentState;
	}
	get flow() {
		return this._flow;
	}
	constructor(private store: Store<MainContainerState>) {}
	ngOnInit() {}
	traversed(State: BpmnElement) {
		debugger;
		this.traverse.emit(this.flow);
		// this.flow.traverse(State.Flows.filter(f => f.traversed == true));
	}
}
