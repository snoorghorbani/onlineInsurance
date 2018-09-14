import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { JalaliMomentDateAdapter } from "../../../persian-data-adapter";

@Component({
	templateUrl: "./selected-third-party-policy-confirmation.component.html",
	styleUrls: [ "./selected-third-party-policy-confirmation.component.css" ]
})
export class SelectedThirdPartyPolicyConfirmationComponent {
	jalaliMomentDateAdapter: JalaliMomentDateAdapter;
	date;
	constructor(
		public dialogRef: MatDialogRef<SelectedThirdPartyPolicyConfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {
		debugger;
		this.jalaliMomentDateAdapter = new JalaliMomentDateAdapter();

		if (data.orderForm.LastPolicyExpirationDate.Value.format) {
			this.date = data.orderForm.LastPolicyExpirationDate.Value.format();
		} else {
			this.date = this.jalaliMomentDateAdapter
				.parse(data.orderForm.LastPolicyExpirationDate.Value, undefined)
				.format("YY/MM/DD");
		}

		data.orderForm.CarModel.DisplayValue = data.orderForm.CarModel.Options.find(
			o => o.Value == data.orderForm.CarModel.Value
		).DisplayName;
		data.orderForm.PolicyPushesheMali.DisplayValue = data.orderForm.PolicyPushesheMali.Options.find(
			o => o.Value == data.orderForm.PolicyPushesheMali.Value
		).DisplayValue;

		if (data.orderForm.NoDamageRecord.Value == 0) {
			data.orderForm.PolicyTerm.DisplayValue = "بدون سابقه خسارت";
		} else {
			data.orderForm.NoDamageRecord.DisplayValue = data.orderForm.NoDamageRecord.Options.find(
				o => o.Value == data.orderForm.NoDamageRecord.Value
			).DisplayValue;
		}

		data.orderForm.PolicyTerm.DisplayValue = data.orderForm.PolicyTerm.Options.find(
			o => o.Value == data.orderForm.PolicyTerm.Value
		).DisplayValue;
		// data.orderForm.PolicyTerm.DisplayValue = data.orderForm.PolicyTerm.Options(
		// 	(o) => o.Value == data.orderForm.PolicyTerm.Value
		// ).DisplayValue;
	}

	approved(): void {
		this.dialogRef.close(true);
	}
}
