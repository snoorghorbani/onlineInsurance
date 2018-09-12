import { Component } from "@angular/core";
import { CommonService } from "../common.service";
import { MatSnackBar } from "@angular/material";

@Component({
	selector: "common-reminder",
	templateUrl: "./reminder.component.html",
	styleUrls: [ "./reminder.component.css" ]
})
export class ReminderComponent {
	Mobile: string;
	ExpireDay: string;
	ExpireMonth: string;
	days: number[];
	months: number[];
	constructor(private commonService: CommonService, private snack: MatSnackBar) {
		this.days = [];
		this.months = [];
		for (let index = 1; index < 32; index++) {
			this.days.push(index);
		}
		for (let index = 1; index < 13; index++) {
			this.months.push(index);
		}
	}

	SetPolicyRenewationReminder() {
		this.commonService
			.SetPolicyRenewationReminder({
				Mobile: this.Mobile,
				ExpireDay: this.ExpireDay,
				ExpireMonth: this.ExpireMonth
			})
			.subscribe(data => this.snack.open("ثبت شد"));
	}
}
