import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container";
import { ProcessModel, FlowModel } from "../../models";
import { ViewBpmnAction } from "../view.actions";
import { AddBpmnSchemaAction, UpdateBpmnSchemaAction, GetBpmnSchemaAction } from "../../list";
import { BpmnService, FlowService } from "../../services";
import { BehaviorSubject } from "rxjs";
import { ProcessTraversedAction } from "./view.actions";

@Component({
	selector: "ngs-flow-view",
	templateUrl: "./view.component.html"
})
export class FlowViewContainerComponent implements OnInit {
	@Input() id: string;
	process$: BehaviorSubject<ProcessModel>;
	constructor(public store: Store<MainContainerState>, private route: ActivatedRoute, public service: FlowService) {
		this.process$ = new BehaviorSubject<ProcessModel>(undefined);
	}
	ngOnInit() {
		this.store.dispatch(new GetBpmnSchemaAction(this.id));
		this.service.selectById(this.id).subscribe(process => this.process$.next(process));
	}
	traversed({ data, flow }: { data: any; flow: FlowModel }) {
		const process = this.process$.getValue();
		process.Data = Object.assign({}, process.Data, data);
		this.store.dispatch(new ProcessTraversedAction({ process, data, flow }));
	}
}
