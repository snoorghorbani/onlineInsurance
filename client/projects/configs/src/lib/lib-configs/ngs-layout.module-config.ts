import { LayoutModuleConfigModel } from "@soushians/layout";
import { DoSignoutAction } from "@soushians/authentication";

export class NgsLayoutModuleConfig implements LayoutModuleConfigModel {
	static signoutAction: DoSignoutAction;
}
