import { InjectionToken } from "@angular/core";

export interface GeoBoundaryModuleConfig {
	endpoints: {
		addGeoBoundary: string;
		editGeoBoundary: string;
		getGeoBoundary: string;
		getList: string;
		deleteGeoBoundary: string;
	};
}
export const MODULE_DEFAULT_CONFIG: GeoBoundaryModuleConfig = {
	endpoints: {
		addGeoBoundary: "",
		editGeoBoundary: "",
		getGeoBoundary: "",
		getList: "",
		deleteGeoBoundary: ""
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<GeoBoundaryModuleConfig>("GeoBoundaryModuleConfig");
