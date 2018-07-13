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
	MatAutocompleteModule,
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
import { OrderPanelComponent } from "./order-panel/order-panel.component";
import { AboutThirdPartyPolicyComponent } from "./about-third-party-policy/about-third-party-policy.component";
import { PurchaseFirePolicyComponent } from "./fire-policy/purchase-fire-policy/purchase-fire-policy.component";
import { HomeDetailComponent } from "./fire-policy/home-detail/home-detail.component";
import { FieldInputComponent } from "./field-input/field-input.component";
import { SelectFirePolicyProductComponent } from "./fire-policy/select-fire-policy-product/select-fire-policy-product.component";
import { OrderPanelEffects } from "./order-panel/order-panel.effects";

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
		MatAutocompleteModule,
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
		PurchaseFirePolicyComponent,
		HomeDetailComponent,
		ReviewOrderComponent,
		MyOrdersComponent,
		ViewOrderComponent,
		CartableComponent,
		RedirectToBankComponent,
		DestroyableComponent,
		FieldSelectComponent,
		FieldInputComponent,
		SelectFirePolicyProductComponent,
		FieldDatepickerComponent,
		OrderPanelComponent,
		AboutThirdPartyPolicyComponent
	],
	exports: [ AboutThirdPartyPolicyComponent ]
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
			RejectOrderApiEffects,
			OrderPanelEffects
		]),
		OrderRoutingModule
	],
	exports: [ OrderModule ]
})
export class RootOrderModule {}
