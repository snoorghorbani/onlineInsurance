import { NgModule } from '@angular/core';
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
	MatDialogModule,
	MatMenuModule
} from '@angular/material';
import { FileDropModule } from 'ngx-file-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';

import { NgsFormModule } from '@soushians/form';
import { SharedModule } from '@soushians/shared';

import { GmapsModule } from '../gmaps/gmaps.module';

import { FooterComponent } from './footer/footer.component';
import { ReminderComponent } from './reminder/reminder.component';
import { WeAreComponent } from './we-are/we-are.component';
import { HowToBuyPolicyComponent } from './how-to-buy-policy/how-to-buy-policy.component';
import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { FieldSelectComponent } from './field-select/field-select.component';
import { FieldDatepickerComponent } from './field-datepicker/field-datepicker.component';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldFileComponent } from './field-file/field-file.component';

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
		MatMenuModule,
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
		GmapsModule
	],
	declarations: [
		FieldSelectComponent,
		FieldInputComponent,
		FieldFileComponent,
		FieldDatepickerComponent,
		FooterComponent,
		NewsletterComponent,
		ReminderComponent,
		ReminderComponent,
		WeAreComponent,
		ToolbarMenuComponent,
		HowToBuyPolicyComponent
	],
	entryComponents: [
		// TODO: move to @soushians/form module
		FieldInputComponent,
		FieldFileComponent,
		FieldSelectComponent,
		FieldDatepickerComponent
	],
	exports: [
		FooterComponent,
		NewsletterComponent,
		ReminderComponent,
		ReminderComponent,
		WeAreComponent,
		HowToBuyPolicyComponent,
		FieldInputComponent,
		FieldFileComponent,
		FieldSelectComponent,
		FieldDatepickerComponent
	]
})
export class OiCommonModule {}
