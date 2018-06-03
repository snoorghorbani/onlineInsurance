import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class CommonService {
	constructor(private http: HttpClient) {}

	SetPolicyRenewationReminder({
		Mobile,
		ExpireDay,
		ExpireMonth
	}: {
		Mobile: string;
		ExpireDay: string;
		ExpireMonth: string;
	}): Observable<any> {
		return this.http.post("http://185.208.174.92:2500/customer/SetPolicyRenewationReminder", {
			Mobile,
			ExpireDay,
			ExpireMonth
		});
	}
}
