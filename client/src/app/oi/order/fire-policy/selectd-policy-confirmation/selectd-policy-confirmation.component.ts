import { Component, OnInit, OnDestroy, Inject } from "@angular/core";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
	templateUrl: "./selectd-policy-confirmation.component.html",
	styleUrls: [ "./selectd-policy-confirmation.component.css" ]
})
export class SelectdPolicyConfirmationComponent implements OnInit, OnDestroy {
	constructor(
		public dialogRef: MatDialogRef<SelectdPolicyConfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {}

	approved(): void {
		this.dialogRef.close(true);
	}
}
