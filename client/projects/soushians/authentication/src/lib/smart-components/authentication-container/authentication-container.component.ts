import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { selectCaptchaState } from "../../reducers";
import * as FeatureReducer from "../../reducers/index";
import { TokenReceived, NewCaptcha } from "../../actions";
import { CaptchaModel } from "../../models";

@Component({
	template: `
          <router-outlet></router-outlet>
        `
})
export class AuthenticationContainerComponent {
	captcha$: Observable<CaptchaModel>;
	constructor(private store: Store<FeatureReducer.FeatureState>) {
		this.captcha$ = this.store.select(FeatureReducer.getCaptcha);
	}

	newCaptcha() {
		this.store.dispatch(new NewCaptcha());
	}
}
