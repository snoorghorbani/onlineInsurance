import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { getFormModuleConfig } from "@soushians/config";

import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG, ReportModuleConfig } from "../report.config";
import { AppReportState } from "../report.reducer";

@Injectable({
	providedIn: "root"
})
export class ReportConfigurationService {
	private _config: ReportModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<AppReportState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		this.store.select(getFormModuleConfig).subscribe(userConfig => {
			if (!userConfig) return;
			this._config = Object.assign({}, this._config, userConfig.Config);
			this.config$.next(this._config);
		});
	}
}
