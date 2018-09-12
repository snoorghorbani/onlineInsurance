import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { trigger, state, style, transition, animate, query, stagger } from "@angular/animations";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
	selector: "app-field-button-toggle",
	templateUrl: "./field-button-toggle.component.html",
	styleUrls: [ "./field-button-toggle.component.css" ],
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
export class FieldButtonToggleComponent implements OnInit {
	@Input() formGroup: FormGroup;
	@Input() placeholder: string;
	@Input() controlName: string;
	@Input() description: string;
	@Input() mode: "view" | "edit";
	@Input() hint: string;
	@Input() tooltip: string;
	@Input() appearance: string;
	@Input() options: any[];
	DisplayValue$: Observable<string>;
	constructor() {
		this.mode = "edit";
		this.appearance = "legacy";
	}

	ngOnInit() {
		this.DisplayValue$ = this.formGroup.get(this.controlName).valueChanges.pipe(
			map(value => {
				debugger;
				if (!this.options) return "";
				let option = this.options.find(o => o.Value == value);
				if (option) return option.DisplayValue || option.DisplayName;
				return "";
			})
		);
	}
}
