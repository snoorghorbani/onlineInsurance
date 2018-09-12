import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../../src/environments/environment";

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
		return this.http.post(`${environment.server}/customer/SetPolicyRenewationReminder`, {
			Mobile,
			ExpireDay,
			ExpireMonth
		});
	}
}
