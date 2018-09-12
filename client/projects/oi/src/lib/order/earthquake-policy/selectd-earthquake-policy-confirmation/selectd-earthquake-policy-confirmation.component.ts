import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
	templateUrl: "./selectd-earthquake-policy-confirmation.component.html",
	styleUrls: [ "./selectd-earthquake-policy-confirmation.component.css" ]
})
export class SelectdEarthquakePolicyConfirmationComponent {
	constructor(
		public dialogRef: MatDialogRef<SelectdEarthquakePolicyConfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {}

	approved(): void {
		this.dialogRef.close(true);
	}
}
