import { NgModule, ModuleWithProviders } from "@angular/core";
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
	MatTooltipModule,
	MatTableModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatCheckboxModule,
	MatStepperModule,
	MatChipsModule,
	MatRadioModule,
	MatListModule,
	MatBottomSheetModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { EffectsModule } from "@ngrx/effects";
import { FileDropModule } from "ngx-file-drop";
import { StoreModule } from "@ngrx/store";

import { NgsFormModule } from "@soushians/form";
import { SharedModule } from "@soushians/shared";

import { TestComponent } from "./test/test.component";
import { OrderRoutingModule } from "./order-routing.module";
import { FeatureReducers } from "./order.reducers";
import {
	GetOrderTypesApiEffects,
	SaveOrderFormApiEffects,
	GetNewOrderFormApiEffects,
	PlaceOrderApiEffects,
	GetMyCartableApiEffects,
	ApproveOrderApiEffects,
	RejectOrderApiEffects
} from "./services/api";
import { OrderComponent } from "./order.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import { RouterModule } from "@angular/router";
import { PoliciesCompareItemComponent } from "./policies-compare-item/policies-compare-item.component";
import { InsurerInfoComponent } from "./insurer-info/insurer-info.component";
import { SaveOrderApiEffects } from "./services/api/save-order";
import { PurchaseComponent } from "./purchase/purchase.component";
import { ReviewOrderComponent } from "./review-order/review-order.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { ViewOrderComponent } from "./view-order/view-order.component";
import { OrderModuleConfig, MODULE_CONFIG_TOKEN } from "./order.config";
import { CartableComponent } from "./cartable/cartable.component";
import { RedirectToBankComponent } from "./redirect-to-bank/redirect-to-bank.component";
import { DestroyableComponent } from "./destroyable/destroyable.component";
import { OiCommonModule } from "../common/common.module";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { SelectProductComponent } from "./select-product/select-product.component";
import { FieldSelectComponent } from "./field-select/field-select.component";
import { FieldDatepickerComponent } from "./field-datepicker/field-datepicker.component";
import { RootEffects } from "./root/root.effects";

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
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
		MatChipsModule,
		MatRadioModule,
		MatBottomSheetModule,
		SharedModule,
		MatTableModule,
		MatStepperModule,
		MatSidenavModule,
		MatCheckboxModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatExpansionModule,
		MatGridListModule,
		FlexLayoutModule,
		FileDropModule,
		NgsFormModule.forRoot(),
		OiCommonModule
	],
	declarations: [
		TestComponent,
		OrderComponent,
		NewOrderComponent,
		CarDetailComponent,
		SelectProductComponent,
		PoliciesCompareItemComponent,
		InsurerInfoComponent,
		PurchaseComponent,
		ReviewOrderComponent,
		MyOrdersComponent,
		ViewOrderComponent,
		CartableComponent,
		RedirectToBankComponent,
		DestroyableComponent,
		FieldSelectComponent,
		FieldDatepickerComponent
	],
	exports: [ NewOrderComponent ]
})
export class OrderModule {
	static forRoot(config?: OrderModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootOrderModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		OrderModule,
		StoreModule.forFeature("order", FeatureReducers),
		EffectsModule.forFeature([
			RootEffects,
			GetOrderTypesApiEffects,
			SaveOrderFormApiEffects,
			GetNewOrderFormApiEffects,
			SaveOrderApiEffects,
			PlaceOrderApiEffects,
			GetMyCartableApiEffects,
			ApproveOrderApiEffects,
			RejectOrderApiEffects
		]),
		OrderRoutingModule
	],
	exports: [ OrderModule ]
})
export class RootOrderModule {}
