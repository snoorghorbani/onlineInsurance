import { InjectionToken } from "@angular/core";

export interface ReportModuleConfig {
	endpoints?: {};
	env?: {
		production: boolean;
		frontend_server: string;
		server: string;
	};
}
export const MODULE_DEFAULT_CONFIG: ReportModuleConfig = {
	endpoints: {},
	env: {
		production: false,
		frontend_server: "http://localhost:3000",
		server: ""
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<ReportModuleConfig>("ReportModuleConfig");
