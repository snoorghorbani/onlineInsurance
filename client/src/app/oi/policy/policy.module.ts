import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { TestComponent } from "./test/test.component";
import { PolicyRoutingModule } from "./policy-routing.module";
import { FeatureReducers } from "./policy.reducers";
import { GetCarModelsOfBrandApiEffects, ComparePoliciesApiEffects } from "./services/api";

@NgModule({
	imports: [
		CommonModule,
		PolicyRoutingModule,
		StoreModule.forFeature("policy", FeatureReducers),
		EffectsModule.forFeature([ GetCarModelsOfBrandApiEffects, ComparePoliciesApiEffects ])
	],
	declarations: [ TestComponent ]
})
export class PolicyModule {}
