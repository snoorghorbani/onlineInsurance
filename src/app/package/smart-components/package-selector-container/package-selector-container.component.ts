import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as FeatureReducer from "../../reducers";

import { PackageAddModel as model } from "app/models/package";
import { responseStatusTypes } from "@soushians/shared";
import { PackageAddAction, PackageAddStartAction } from "../../actions";
import { PackageService } from "app/package/services";
import { ProcessStartAction } from "app/bpmn/view";
import { BpmnService } from "app/bpmn";

@Component({
	//selector: 'package-add-container',
	template: `
      <package-selector
        [proccessId]="proccessId"
        (compared)="compare($event)"
      ></package-selector>
    `
})
export class PackageSelectorContainerComponent implements OnInit {
	proccessId: string;
	constructor(
		private store: Store<FeatureReducer.FeatureState>,
		private packageService: PackageService,
		private bpmnService: BpmnService
	) {
		this.proccessId = "5aa3cf2d7bd3552a247f42b9";
		// FlowStartAction;
		this.bpmnService.selectById(this.proccessId).subscribe(bpmn => {
			this.store.dispatch(new ProcessStartAction(bpmn));
		});
	}
	ngOnInit() {}

	compare(formData) {
		debugger;
		var res = this.packageService.compare();
	}

	reset() {}
}
