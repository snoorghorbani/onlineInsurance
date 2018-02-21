import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import { PackageAddModel } from "app/models/package";
import { responseStatusTypes } from "@soushians/shared";

@Component({
	selector: "package-add",
	templateUrl: "./package-add.component.html",
	styleUrls: [ "./package-add.component.scss" ]
})
export class PackageAddComponent implements OnInit {
	// @Input('data') data$: Observable<PackageListModel.Response>;
	// @Input('status') status$: Observable<responseStatusTypes>;

	@Output() submited = new EventEmitter();
	@Input() formGroup: FormGroup;

	add() {
		if (!this.formGroup.valid) return;
		// TODO:
		this.submited.emit(this.formGroup.value);
	}
	// birthdateSelected(date: string) {
	//     this.formGroup.patchValue({
	//         Birthdate: date
	//     })
	// }
	constructor() {}

	ngOnInit() {}
}
