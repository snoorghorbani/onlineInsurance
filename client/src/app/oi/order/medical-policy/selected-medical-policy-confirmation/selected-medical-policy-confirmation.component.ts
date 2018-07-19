import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
	templateUrl: "./selected-medical-policy-confirmation.component.html",
	styleUrls: [ "./selected-medical-policy-confirmation.component.css" ]
})
export class SelectedMedicalPolicyConfirmationComponent {
	constructor(
		public dialogRef: MatDialogRef<SelectedMedicalPolicyConfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {}

	approved(): void {
		this.dialogRef.close(true);
	}
}
