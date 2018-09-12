import { InjectionToken } from "@angular/core";

export interface PolicyModuleConfig {
	endpoints?: {};
	env?: {
		production?: boolean;
		server?: string;
	};
}
export const MODULE_DEFAULT_CONFIG: PolicyModuleConfig = {
	endpoints: {},
	env: {
		production: false
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<PolicyModuleConfig>("PolicyModuleConfig");
