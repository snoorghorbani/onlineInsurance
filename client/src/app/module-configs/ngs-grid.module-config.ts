import { env } from "./env";

import { DiagramSelectorComponent, diagramViewComponent } from "@soushians/diagram";

export const NgsGridModuleConfig = {
	env,
	types: {
		// article: { configComponent: WidgetSelectorComponent, viewComponent: DynamicWidgetViewComponent },
		diagram: { configComponent: DiagramSelectorComponent, viewComponent: diagramViewComponent }
	}
};
