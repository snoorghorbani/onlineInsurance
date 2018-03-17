import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";
import { HttpModule } from "@angular/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
	MatExpansionModule,
	MatRadioModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatProgressBarModule,
	MatDatepickerModule,
	MatToolbarModule,
	MatInputModule,
	MatMenuModule,
	MatListModule,
	MatFormFieldModule,
	MatSelectModule,
	MatSnackBarModule,
	MatSidenavModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InfraModule } from "@soushians/infra";

import { PaymentModuleConfig, MODULE_CONFIG_TOKEN } from "./payment.config";
import { PaymentRoutingModule } from "./payment-routing.module";
import {
	BankListContainerComponent,
	SuccessPaymentReportContainerComponent,
	PaymentModuleContainerComponent,
	PayComponent
} from "./smart-components";
import { BankListComponent, SuccessfulPaymentReportComponent } from "./dump-components";
import { PaymentConfigurationService, BankService, CachingInterceptor, PaymentService } from "./services";
import { PaymentReducers } from "./reducers";
import { BankEffects, PaymentEffects, UserSuccessfulPaymentEffects, UserEffects } from "./effects";
import { InvoiceComponent } from "./smart-components/invoice/invoice.component";
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		FlexLayoutModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatFormFieldModule,
		MatListModule,
		MatMenuModule,
		MatRadioModule,
		MatInputModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		BrowserAnimationsModule,
		InfraModule,
		PaymentRoutingModule
	],
	declarations: [
		BankListContainerComponent,
		PaymentModuleContainerComponent,
		BankListComponent,
		SuccessPaymentReportContainerComponent,
		SuccessfulPaymentReportComponent,
		InvoiceComponent,
		PayComponent
	],
	exports: [ SuccessPaymentReportContainerComponent ]
})
export class PaymentModule {
	static forRoot(config?: PaymentModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootPaymentModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config || {} } as any,
				PaymentConfigurationService,
				BankService,
				CachingInterceptor,
				PaymentService
			]
		};
	}
}

@NgModule({
	imports: [
		PaymentModule,
		StoreModule.forFeature("payment", PaymentReducers),
		EffectsModule.forFeature([ BankEffects, PaymentEffects, UserSuccessfulPaymentEffects, UserEffects ]),
		PaymentRoutingModule
	]
})
export class RootPaymentModule {}
