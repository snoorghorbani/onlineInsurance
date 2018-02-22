import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { UserModel } from "@soushians/authentication";
import * as fromLayout from "@soushians/layout";
import * as authReducer from "@soushians/authentication";
import { UserService } from "@soushians/user";

import * as appReducer from "app/reducers";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: [ "./dashboard.component.css" ]
})
export class DashboardComponent implements OnInit {
	user$: Observable<UserModel>;
	// is_agent : Observable<boolean>;
	constructor(private store: Store<appReducer.State>, public userService: UserService) {
		this.user$ = this.store.select(authReducer.getUser);
		// this.is_agent = signinService.is_agent();
		this.store.dispatch(new fromLayout.CloseSidenavAction());
		this.store.dispatch(new fromLayout.ChangeLayout("with-margin"));
	}

	ngOnInit() {}
}
