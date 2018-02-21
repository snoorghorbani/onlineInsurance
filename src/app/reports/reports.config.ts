import { InjectionToken } from "@angular/core";
import { ReportDefinitionModel } from "app/models/reports";

interface endpoints {
}

export interface ReportModuleConfig {
    endpoints: endpoints;
    reports: ReportDefinitionModel[]
}

export const MODULE_DEFAULT_CONFIG: ReportsModuleConfiguration = {
    endpoints:{},
    reports:[]
}

export abstract class ReportsModuleConfiguration implements ReportModuleConfig {
    endpoints: endpoints;
    reports: ReportDefinitionModel[];

    constructor(config: ReportModuleConfig) { }
}

export const MODULE_CONFIG_TOKEN = new InjectionToken<ReportModuleConfig>('ReportModuleConfig');