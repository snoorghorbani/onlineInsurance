import { Injectable, Inject } from "@angular/core";

import { ReportModuleConfig, MODULE_DEFAULT_CONFIG } from '../../reports.config';
import { MODULE_CONFIG_TOKEN } from '../../reports.config';


@Injectable()
export class ReportsConfigurationService {
    private _config: ReportModuleConfig;
    get config() { return this._config }

    constructor(
        @Inject(MODULE_CONFIG_TOKEN) config,
    ) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
}