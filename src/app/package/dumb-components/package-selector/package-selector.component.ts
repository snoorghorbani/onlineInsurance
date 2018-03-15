import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import { PackageAddModel } from "app/models/package";
import { responseStatusTypes } from "@soushians/shared";

@Component({
	selector: "package-selector",
	templateUrl: "./package-selector.component.html",
	styleUrls: [ "./package-selector.component.scss" ]
})
export class PackageSelectorComponent implements OnInit {
	// @Input('data') data$: Observable<PackageListModel.Response>;
	// @Input('status') status$: Observable<responseStatusTypes>;

	@Output() compared = new EventEmitter();
	@Input() proccessId: string;

	isLinear = false;

	compare() {
		debugger;
		// this.compared.emit(this.firstFormGroup.value);
	}

	constructor() {}

	ngOnInit() {}
}
