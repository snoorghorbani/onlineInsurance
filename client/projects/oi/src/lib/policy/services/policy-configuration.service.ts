import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

// import { getPolicyModuleConfig } from "@soushians/config";
import { PolicyModuleConfig, MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../policy.config";
import { AppState } from "../policy.reducers";

@Injectable({
	providedIn: "root"
})
export class PolicyConfigurationService {
	private _config: PolicyModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<AppState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getPolicyModuleConfig).subscribe(userConfig => {
		// 	if (!userConfig) return;
		// 	this._config = Object.assign({}, this._config, userConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
