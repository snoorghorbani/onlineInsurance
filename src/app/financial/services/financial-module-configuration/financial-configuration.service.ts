import { Injectable, Inject } from "@angular/core";

import { FinancialModuleConfig } from '../../financial.config';
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from '../../financial.config';

@Injectable()
export class FinancialConfigurationService {
    private _config: FinancialModuleConfig;
    get config() { return this._config }

    constructor(
        @Inject(MODULE_CONFIG_TOKEN) config,
    ) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
}