import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestComponent } from "./test/test.component";
import { OrderRoutingModule } from "./order-routing.module";
import { StoreModule } from "@ngrx/store";
import { FeatureReducers } from "./order.reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetOrderTypesApiEffects } from "./services/api";

@NgModule({
	imports: [
		CommonModule,
		OrderRoutingModule,
		StoreModule.forFeature("order", FeatureReducers),
		EffectsModule.forFeature([ GetOrderTypesApiEffects ])
	],
	declarations: [ TestComponent ]
})
export class OrderModule {}
