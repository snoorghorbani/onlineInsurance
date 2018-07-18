import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	templateUrl: './selected-third-party-policy-confirmation.component.html',
	styleUrls: [ './selected-third-party-policy-confirmation.component.css' ]
})
export class SelectedThirdPartyPolicyConfirmationComponent {
	constructor(
		public dialogRef: MatDialogRef<SelectedThirdPartyPolicyConfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {}

	approved(): void {
		this.dialogRef.close(true);
	}
}
