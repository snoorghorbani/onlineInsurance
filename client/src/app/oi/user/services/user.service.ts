import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SubscribeApiModel } from "../../user/services/api/subscribe/subscribe.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class UserService {
	constructor(private http: HttpClient) {}
	SubscribeToNewsletter(email: string): Observable<any> {
		return this.http.post<SubscribeApiModel.Response>("http://185.208.174.92:2000/user/SubscribeToNewsletter", {
			email
		});
		// .pipe(map(res => res.Result));
	}
}
