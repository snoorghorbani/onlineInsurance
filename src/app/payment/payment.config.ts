import { InjectionToken } from "@angular/core";

interface endpoints {
    bankList: string,
    payment: string,
 //   successfulPaymentReport: string,
}

export interface PaymentModuleConfig {
    endpoints: endpoints;
}

export const MODULE_DEFAULT_CONFIG: PaymentModuleConfig = {
    endpoints:{
        bankList: '',
        payment: '',
      //  successfulPaymentReport: ''
    }
}

export abstract class PaymentModuleConfiguration implements PaymentModuleConfig {
    endpoints: endpoints;

    constructor(config: PaymentModuleConfig) { }
}

export const MODULE_CONFIG_TOKEN = new InjectionToken<PaymentModuleConfig>('PaymentModuleConfig');