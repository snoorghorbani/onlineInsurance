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
	MatSelectModule
} from "@angular/material";

import { FooterComponent } from "./footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		CommonModule,
		MatGridListModule,
		MatListModule,
		MatInputModule,
		MatRadioModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		RouterModule,
		MatCheckboxModule,
		MatSnackBarModule,
		ReactiveFormsModule,
		MatTableModule,
		MatSelectModule,
		FlexLayoutModule
	],
	declarations: [ FooterComponent ]
})
export class OiCommonModule {}
