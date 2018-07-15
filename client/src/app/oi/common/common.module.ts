import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	MatGridListModule,
	MatListModule,
	MatInputModule,
	MatRadioModule,
	MatCardModule,
	MatIconModule,
	MatButtonModule,
	MatCheckboxModule,
	MatSnackBarModule,
	MatTableModule,
	MatSelectModule,
	MatFormFieldModule,
	MatMenuModule
} from "@angular/material";

import { FooterComponent } from "./footer/footer.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { ReminderComponent } from "./reminder/reminder.component";
import { WeAreComponent } from "./we-are/we-are.component";
import { HowToBuyPolicyComponent } from "./how-to-buy-policy/how-to-buy-policy.component";
import { MainComponent } from "./main/main.component";

@NgModule({
	imports: [
		CommonModule,
		MatGridListModule,
		MatListModule,
		MatInputModule,
		FormsModule,
		MatFormFieldModule,
		MatRadioModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		RouterModule,
		MatCheckboxModule,
		MatSnackBarModule,
		ReactiveFormsModule,
		MatTableModule,
		MatSelectModule,
		FlexLayoutModule
	],
	declarations: [
		FooterComponent,
		NewsletterComponent,
		ReminderComponent,
		ReminderComponent,
		WeAreComponent,
		MainComponent,
		HowToBuyPolicyComponent
	],
	exports: [
		FooterComponent,
		NewsletterComponent,
		ReminderComponent,
		ReminderComponent,
		WeAreComponent,
		HowToBuyPolicyComponent
	]
})
export class OiCommonModule {}
