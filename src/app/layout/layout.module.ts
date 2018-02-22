import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgsLayoutModule } from "@soushians/layout";
import { MainMenuComponent } from "app/layout/dumb-components";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatListModule } from "@angular/material";

@NgModule({
	imports: [
		CommonModule,
		CommonModule,
		RouterModule,
		// FormsModule,
		// HttpClientModule,
		// FlexLayoutModule,
		MatIconModule,
		// MatButtonModule,
		// MatCardModule,
		// MatSnackBarModule,
		// MatSidenavModule,
		// MatExpansionModule,
		// MatSelectModule,
		// MatFormFieldModule,
		MatListModule,
		// MatMenuModule,
		// MatRadioModule,
		// MatInputModule,
		// MatToolbarModule,
		// MatDatepickerModule,
		// MatProgressBarModule,
		RouterModule,
		BrowserAnimationsModule,
		NgsLayoutModule.forRoot()
	],
	declarations: [ MainMenuComponent ],
	exports: [ MainMenuComponent, NgsLayoutModule ]
})
export class LayoutModule {}
