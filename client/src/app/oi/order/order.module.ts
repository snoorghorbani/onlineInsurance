import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
	MatNativeDateModule,
	MatIconModule,
	MatTableModule,
	MatSidenavModule,
	MatSlideToggleModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { InfraModule } from "@soushians/infra";

import { TestComponent } from "./test/test.component";
import { OrderRoutingModule } from "./order-routing.module";
import { StoreModule } from "@ngrx/store";
import { FeatureReducers } from "./order.reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetOrderTypesApiEffects, SaveOrderFormApiEffects, GetNewOrderFormApiEffects } from "./services/api";
import { OrderComponent } from "./order.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import { RouterModule } from "@angular/router";
import { CompareComponent } from "./compare/compare.component";
import { PoliciesCompareItemComponent } from './policies-compare-item/policies-compare-item.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
		MatSelectModule,
		MatInputModule,
		MatSlideToggleModule,
		MatTabsModule,
		MatIconModule,
		MatButtonModule,
		MatTableModule,
		MatSidenavModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatExpansionModule,
		MatGridListModule,
		FlexLayoutModule,
		StoreModule.forFeature("order", FeatureReducers),
		InfraModule,
		OrderRoutingModule,
		EffectsModule.forFeature([ GetOrderTypesApiEffects, SaveOrderFormApiEffects, GetNewOrderFormApiEffects ])
	],
	declarations: [ TestComponent, OrderComponent, NewOrderComponent, CompareComponent, PoliciesCompareItemComponent ]
})
export class OrderModule {}
