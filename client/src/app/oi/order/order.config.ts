import { InjectionToken } from "@angular/core";

export interface OrderModuleConfig {
	endpoints?: {};
	env?: {
		production?: boolean;
		server?: string;
	};
}
export const MODULE_DEFAULT_CONFIG: OrderModuleConfig = {
	endpoints: {},
	env: {
		production: false
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<OrderModuleConfig>("OrderModuleConfig");
