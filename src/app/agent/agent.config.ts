import { InjectionToken } from "@angular/core";

interface endpoints {
    //monthlyAgentReport: string,
    //detailAgentReport: string,
    //dailyAgentReport: string,
}

export interface AgentModuleConfig {
    endpoints: endpoints;
}

export const MODULE_DEFAULT_CONFIG: AgentModuleConfig = {
    endpoints:{
        //monthlyAgentReport: '',
        //detailAgentReport: '',
        //dailyAgentReport: ''
    }
}

export abstract class AgentModuleConfiguration implements AgentModuleConfig {
    endpoints: endpoints;

    constructor(config: AgentModuleConfig) { }
}

export const MODULE_CONFIG_TOKEN = new InjectionToken<AgentModuleConfig>('AgentModuleConfig');