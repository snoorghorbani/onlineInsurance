import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { UserModel } from "../models";
import { SubscribeApiModel, IsAuthenticatedApiModel } from "./api";

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
	IsAuthenticated(): Observable<UserModel> {
		return this.http
			.get<IsAuthenticatedApiModel.Response>("http://185.208.174.92:2000/user/IsAuthenticated")
			.pipe(map(res => res.Result));
	}
}
