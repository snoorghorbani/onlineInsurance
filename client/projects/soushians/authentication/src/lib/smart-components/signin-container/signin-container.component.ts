import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as FeatureReducer from "../../reducers";
import { Signin, ClearCaptcha } from "../../actions";
import { CaptchaModel } from "../../models";
import { SigninService, AuthenticationConfigurationService } from "../../services";

@Component({
	template: `
        <auth-signin 
                [formId]='(formId$ | async)'
                (signedin)="signIn($event)"
        ></auth-signin>
  `
})
export class SigninContainerComponent {
	formId$: Observable<string>;
	constructor(
		private configurationService: AuthenticationConfigurationService,
		private store: Store<FeatureReducer.FeatureState>
	) {
		this.formId$ = this.configurationService.config$.map(config => config.forms.signIn);
	}

	signIn(formValue: any) {
		this.store.dispatch(new Signin(formValue));
	}
}
