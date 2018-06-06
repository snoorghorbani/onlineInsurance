import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { trigger, state, style, transition, animate, query, stagger } from "@angular/animations";
import { Observable } from "rxjs";

@Component({
	selector: "app-field-datepicker",
	templateUrl: "./field-datepicker.component.html",
	styleUrls: [ "./field-datepicker.component.css" ],
	animations: [
		trigger("filedAnimation", [
			state("view", style({ top: "-60px" })),
			state("edit", style({ top: "0" })),
			transition("edit => view", [
				animate("300ms ease-out")
				// query(".mat-form-field-wrapper", style({ position: "relative" })),
				// query(".mat-form-field-wrapper", animate("300ms ease-out", style({ top: "-50px" })))
				// query(".mat-form-field-wrapper", style({ top: "-50px" }))
			]),
			transition("view => edit", [
				animate("300ms ease-out")
				// query(".mat-form-field-wrapper", animate("300ms ease-out", style({ top: "0" })))
				// query(".mat-form-field-wrapper", style({ top: "0" }))
			])
		])
	]
})
export class FieldDatepickerComponent implements OnInit {
	@Input() formGroup: FormGroup;
	@Input() placeholder: string;
	@Input() controlName: string;
	@Input() description: string;
	@Input() mode: "view" | "edit";
	@Input() hint: string;
	@Input() tooltip: string;
	DisplayValue$: Observable<string>;
	constructor() {
		this.mode = "edit";
	}

	ngOnInit() {
		this.DisplayValue$ = this.formGroup.get(this.controlName).valueChanges.map(value => value);
	}
}
