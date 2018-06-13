import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { TestComponent } from "./test/test.component";
import { PolicyRoutingModule } from "./policy-routing.module";
import { FeatureReducers } from "./policy.reducers";
import { ComparePoliciesApiEffects, GetCarModelsOfBrandApiEffects } from "./services/api/effects";
import { PolicyModuleConfig, MODULE_CONFIG_TOKEN } from "./policy.config";

@NgModule({
	imports: [ CommonModule ],
	declarations: [ TestComponent ]
})
export class PolicyModule {
	static forRoot(config?: PolicyModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootOrderModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		PolicyModule,
		PolicyRoutingModule,
		StoreModule.forFeature("policy", FeatureReducers),
		EffectsModule.forFeature([ GetCarModelsOfBrandApiEffects, ComparePoliciesApiEffects ])
	],
	exports: [ PolicyModule ]
})
export class RootOrderModule {}
