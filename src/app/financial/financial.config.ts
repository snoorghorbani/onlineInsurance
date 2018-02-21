import { InjectionToken } from "@angular/core";

interface endpoints {
    //monthlyFinancialReport: string,
    //detailFinancialReport: string,
    //dailyFinancialReport: string,
}

export interface FinancialModuleConfig {
    endpoints: endpoints;
}

export const MODULE_DEFAULT_CONFIG: FinancialModuleConfig = {
    endpoints:{
        //monthlyFinancialReport: '',
        //detailFinancialReport: '',
        //dailyFinancialReport: ''
    }
}

export abstract class FinancialModuleConfiguration implements FinancialModuleConfig {
    endpoints: endpoints;

    constructor(config: FinancialModuleConfig) { }
}

export const MODULE_CONFIG_TOKEN = new InjectionToken<FinancialModuleConfig>('FinancialModuleConfig');