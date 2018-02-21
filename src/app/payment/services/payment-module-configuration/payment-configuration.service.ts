import { Injectable, Inject } from "@angular/core";

import { PaymentModuleConfig } from '../../payment.config';
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from '../../payment.config';

@Injectable()
export class PaymentConfigurationService {
    private _config: PaymentModuleConfig;
    get config() { return this._config }

    constructor(
        @Inject(MODULE_CONFIG_TOKEN) config,
    ) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
}