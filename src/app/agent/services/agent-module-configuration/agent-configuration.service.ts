import { Injectable, Inject } from "@angular/core";

import { AgentModuleConfig } from '../../agent.config';
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from '../../agent.config';

@Injectable()
export class AgentConfigurationService {
    private _config: AgentModuleConfig;
    get config() { return this._config }

    constructor(
        @Inject(MODULE_CONFIG_TOKEN) config,
    ) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
}