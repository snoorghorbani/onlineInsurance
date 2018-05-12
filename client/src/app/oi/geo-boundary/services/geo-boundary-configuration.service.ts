import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

// import { getGeoBoundaryModuleConfig } from "@soushians/config";
import { GeoBoundaryModuleConfig } from "../geo-boundary.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../geo-boundary.config";
import { GeoBoundaryState } from "../geo-boundary.reducers";

@Injectable()
export class GeoBoundaryConfigurationService {
	private _config: GeoBoundaryModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<GeoBoundaryState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getGeoBoundaryModuleConfig).subscribe(userConfig => {
		// 	if (!userConfig) return;
		// 	this._config = Object.assign({}, this._config, userConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
