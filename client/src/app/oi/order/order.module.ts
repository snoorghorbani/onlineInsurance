import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestComponent } from "./test/test.component";
import { OrderRoutingModule } from "./order-routing.module";
import { StoreModule } from "@ngrx/store";
import { FeatureReducers } from "./order.reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetOrderTypesApiEffects, SaveOrderFormApiEffects, GetNewOrderFormApiEffects } from "./services/api";
import { OrderComponent } from "./order.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import {
	MatFormFieldModule,
	MatButtonModule,
	MatSelectModule,
	MatGridListModule,
	MatCardModule,
	MatExpansionModule,
	MatInputModule,
	MatTabsModule,
	MatDatepickerModule,
	MatNativeDateModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
		MatSelectModule,
		MatInputModule,
		MatTabsModule,
		MatButtonModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatExpansionModule,
		MatGridListModule,
		FlexLayoutModule,
		StoreModule.forFeature("order", FeatureReducers),
		OrderRoutingModule,
		EffectsModule.forFeature([ GetOrderTypesApiEffects, SaveOrderFormApiEffects, GetNewOrderFormApiEffects ])
	],
	declarations: [ TestComponent, OrderComponent, NewOrderComponent ]
})
export class OrderModule {}
