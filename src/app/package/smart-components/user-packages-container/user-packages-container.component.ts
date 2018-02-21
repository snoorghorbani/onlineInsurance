import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";

import * as FeatureReducer from "../../reducers";
import { responseStatusTypes } from "@soushians/shared";

import { UserModel, UserPackagesModel } from "app/models/package";
//import { FeatureState, getMyLoadedPackages, getMyPackageDataStatus } from '../../reducers'
import { FetchUserPackages } from "../../actions";
import { ProfileViewModel } from "@soushians/user";
import { Search } from "@soushians/user";
import * as userReducer from "@soushians/user";

@Component({
	selector: "package-user-packages-container",
	template: `
    <package-user-packages-list
      [data]='packages$'
      [status]='packagesStatus$'
    ></package-user-packages-list>
  `
})
export class UserPackagesContainerComponent implements OnInit {
	user$: Observable<ProfileViewModel.Response>;
	packages$: Observable<UserPackagesModel.Response>;
	packagesStatus$: Observable<responseStatusTypes>;

	constructor(private route: ActivatedRoute, private store: Store<FeatureReducer.FeatureState>) {
		this.user$ = this.store.select(userReducer.getUserInfo);
		this.packages$ = this.store.select(FeatureReducer.getUserPackages);
		this.packagesStatus$ = this.store.select(FeatureReducer.getUserPackagesStatus);
		this.route.params.subscribe((params) => {
			// let model = new ProfileViewModel.Request({ Username: params.MobileNumber } as ProfileViewModel.Request);
			// this.store.dispatch(new Search(model));
			// this.store.dispatch(new FetchUserPackages(model as UserPackagesModel.Request));
		});
	}

	ngOnInit() {}
}
