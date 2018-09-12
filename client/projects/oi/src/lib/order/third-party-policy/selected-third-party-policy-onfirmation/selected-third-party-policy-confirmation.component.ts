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
	) {
		debugger;

		data.orderForm.CarModel.DisplayValue = data.orderForm.CarModel.Options.find(
			(o) => o.Value == data.orderForm.CarModel.Value
		).DisplayName;
		data.orderForm.PolicyPushesheMali.DisplayValue = data.orderForm.PolicyPushesheMali.Options.find(
			(o) => o.Value == data.orderForm.PolicyPushesheMali.Value
		).DisplayValue;
		data.orderForm.NoDamageRecord.DisplayValue = data.orderForm.NoDamageRecord.Options.find(
			(o) => o.Value == data.orderForm.NoDamageRecord.Value
		).DisplayValue;
		data.orderForm.PolicyTerm.DisplayValue = data.orderForm.PolicyTerm.Options.find(
			(o) => o.Value == data.orderForm.PolicyTerm.Value
		).DisplayValue;
		// data.orderForm.PolicyTerm.DisplayValue = data.orderForm.PolicyTerm.Options(
		// 	(o) => o.Value == data.orderForm.PolicyTerm.Value
		// ).DisplayValue;
	}

	approved(): void {
		this.dialogRef.close(true);
	}
}
