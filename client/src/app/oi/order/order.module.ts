import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
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
	MatBottomSheetModule,
	MatDividerModule,
	MatDialogModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgsFormModule } from '@soushians/form';
import { SharedModule } from '@soushians/shared';
import { RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { OrderRoutingModule } from './order-routing.module';
import { FeatureReducers } from './order.reducers';
import {
	GetOrderTypesApiEffects,
	SaveOrderFormApiEffects,
	GetNewOrderFormApiEffects,
	PlaceOrderApiEffects,
	GetMyCartableApiEffects,
	ApproveOrderApiEffects,
	RejectOrderApiEffects
} from './services/api';
import { OrderComponent } from './order.component';
import { PoliciesCompareItemComponent } from './policies-compare-item/policies-compare-item.component';
import { SaveOrderApiEffects } from './services/api/save-order';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderModuleConfig, MODULE_CONFIG_TOKEN } from './order.config';
import { CartableComponent } from './cartable/cartable.component';
import { RedirectToBankComponent } from './redirect-to-bank/redirect-to-bank.component';
import { OiCommonModule } from '../common/common.module';
import { RootEffects } from './root/root.effects';
import { OrderPanelComponent } from './order-panel/order-panel.component';
import { AboutThirdPartyPolicyComponent } from './about-third-party-policy/about-third-party-policy.component';
import { OrderPanelEffects } from './order-panel/order-panel.effects';
import { DeliveryTimeComponent } from './delivery-time/delivery-time.component';
import { TermsComponent } from './terms/terms.component';
import { DynamicOrderFieldDirective } from './dynamic-field/dynamic-field.directive';
import { GmapsModule } from '../gmaps/gmaps.module';

// fire policy
import { PurchaseFirePolicyComponent } from './fire-policy/purchase-fire-policy/purchase-fire-policy.component';
import { HomeDetailComponent } from './fire-policy/home-detail/home-detail.component';
import { SelectdPolicyConfirmationComponent } from './fire-policy/selectd-policy-onfirmation/selectd-policy-confirmation.component';
import { FirePolicyProductsListComponent } from './fire-policy/fire-policy-products-list/fire-policy-products-list.component';
import { SelectFirePolicyProductComponent } from './fire-policy/select-fire-policy-product/select-fire-policy-product.component';
import { FirePolicyInsurerInfoComponent } from './fire-policy/fire-policy-insurer-info/fire-policy-insurer-info.component';
import { FirePolicyOrderReviewComponent } from './fire-policy/review/fire-policy-review.component';
// earthquake policy
import { PurchaseEarthquakePolicyComponent } from './earthquake-policy/purchase-earthquake-policy/purchase-earthquake-policy.component';
import { EarthquakeHomeDetailComponent } from './earthquake-policy/home-detail/home-detail.component';
import { SelectdEarthquakePolicyConfirmationComponent } from './earthquake-policy/selectd-earthquake-policy-confirmation/selectd-earthquake-policy-confirmation.component';
import { EarthquakePolicyProductsListComponent } from './earthquake-policy/earthquake-policy-products-list/earthquake-policy-products-list.component';
import { EarthquakePolicyInsurerInfoComponent } from './earthquake-policy/earthquake-policy-insurer-info/earthquake-policy-insurer-info.component';
import { SelectEarthquakePolicyProductComponent } from './earthquake-policy/select-earthquake-policy-product/select-earthquake-policy-product.component';
import { EarthquakePolicyOrderReviewComponent } from './earthquake-policy/review/earthquake-policy-review.component';
// third party policy
import { PurchaseThirdPartyPolicyComponent } from './third-party-policy/purchase-third-party-policy/purchase-third-party-policy.component';
import { SelectThirdPartyPolicyProductComponent } from './third-party-policy/select-third-party-policy-product/select-third-party-policy-product.component';
import { SelectedThirdPartyPolicyConfirmationComponent } from './third-party-policy/selected-third-party-policy-onfirmation/selected-third-party-policy-confirmation.component';
import { ThirdPartyPolicyProductsListComponent } from './third-party-policy/third-party-policy-products-list/third-party-policy-products-list.component';
import { ThirdPartyCarDetailComponent } from './third-party-policy/car-detail/car-detail.component';
import { ThirdPartyPolicyInsurerInfoComponent } from './third-party-policy/third-party-policy-insurer-info/third-party-policy-insurer-info.component';
import { ThirdPartyPolicyOrderReviewComponent } from './third-party-policy/review/third-party-policy-review.component';
// motorcycle policy
import { PurchaseMotorcyclePolicyComponent } from './motorcycle-policy/purchase-motorcycle-policy/purchase-motorcycle-policy.component';
import { SelectMotorcyclePolicyProductComponent } from './motorcycle-policy/select-motorcycle-policy-product/select-motorcycle-policy-product.component';
import { SelectedMotorcyclePolicyConfirmationComponent } from './motorcycle-policy/selected-motorcycle-policy-onfirmation/selected-motorcycle-policy-confirmation.component';
import { MotorcyclePolicyProductsListComponent } from './motorcycle-policy/motorcycle-policy-products-list/motorcycle-policy-products-list.component';
import { MotorcycleDetailComponent } from './motorcycle-policy/motorcycle-detail/motorcycle-detail.component';
import { MotorcyclePolicyInsurerInfoComponent } from './motorcycle-policy/motorcycle-policy-insurer-info/motorcycle-policy-insurer-info.component';
import { MotorcyclePolicyOrderReviewComponent } from './motorcycle-policy/review/motorcycle-policy-review.component';
// medical policy
import { PurchaseMedicalPolicyComponent } from './medical-policy/purchase-medical-policy/purchase-medical-policy.component';
import { MedicalHomeDetailComponent } from './medical-policy/medical-home-detail/medical-home-detail.component';
import { SelectedMedicalPolicyConfirmationComponent } from './medical-policy/selected-medical-policy-confirmation/selected-medical-policy-confirmation.component';
import { MedicalPolicyProductsListComponent } from './medical-policy/medical-policy-products-list/medical-policy-products-list.component';
import { SelectMedicalPolicyProductComponent } from './medical-policy/select-medical-policy-product/select-medical-policy-product.component';
import { MedicalPolicyInsurerInfoComponent } from './medical-policy/medical-policy-insurer-info/medical-policy-insurer-info.component';
import { MedicalPolicyOrderReviewComponent } from './medical-policy/review/medical-policy-review.component';

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
		MatDialogModule,
		MatChipsModule,
		MatDividerModule,
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
		NgsFormModule.forRoot(),
		OiCommonModule,
		GmapsModule
	],
	declarations: [
		TestComponent,
		OrderComponent,
		PoliciesCompareItemComponent,
		ReviewOrderComponent,
		MyOrdersComponent,
		TermsComponent,
		CartableComponent,
		RedirectToBankComponent,
		OrderPanelComponent,
		AboutThirdPartyPolicyComponent,
		DynamicOrderFieldDirective,
		DeliveryTimeComponent,

		// third party policy components
		PurchaseThirdPartyPolicyComponent,
		ThirdPartyCarDetailComponent,
		SelectedThirdPartyPolicyConfirmationComponent,
		ThirdPartyPolicyProductsListComponent,
		SelectThirdPartyPolicyProductComponent,
		ThirdPartyPolicyInsurerInfoComponent,
		ThirdPartyPolicyOrderReviewComponent,
		// motorcycle policy components
		PurchaseMotorcyclePolicyComponent,
		MotorcycleDetailComponent,
		SelectedMotorcyclePolicyConfirmationComponent,
		MotorcyclePolicyProductsListComponent,
		SelectMotorcyclePolicyProductComponent,
		MotorcyclePolicyInsurerInfoComponent,
		MotorcyclePolicyOrderReviewComponent,
		// fire policy components
		PurchaseFirePolicyComponent,
		HomeDetailComponent,
		SelectdPolicyConfirmationComponent,
		FirePolicyProductsListComponent,
		FirePolicyInsurerInfoComponent,
		SelectFirePolicyProductComponent,
		FirePolicyOrderReviewComponent,
		// earthquake policy components
		PurchaseEarthquakePolicyComponent,
		EarthquakeHomeDetailComponent,
		SelectdEarthquakePolicyConfirmationComponent,
		EarthquakePolicyProductsListComponent,
		EarthquakePolicyInsurerInfoComponent,
		SelectEarthquakePolicyProductComponent,
		EarthquakePolicyOrderReviewComponent,
		// Medical Policy
		PurchaseMedicalPolicyComponent,
		MedicalHomeDetailComponent,
		SelectedMedicalPolicyConfirmationComponent,
		MedicalPolicyProductsListComponent,
		SelectMedicalPolicyProductComponent,
		MedicalPolicyInsurerInfoComponent,
		MedicalPolicyOrderReviewComponent
	],
	entryComponents: [
		SelectdPolicyConfirmationComponent,
		SelectdEarthquakePolicyConfirmationComponent,
		SelectedThirdPartyPolicyConfirmationComponent,
		SelectedMotorcyclePolicyConfirmationComponent,
		SelectedMedicalPolicyConfirmationComponent
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
		StoreModule.forFeature('order', FeatureReducers),
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
