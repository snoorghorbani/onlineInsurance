import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import "./http-request-base-model";
import "./http-response-base-model";
import "./enums";
// import "./animations";


import {
        MatIconModule, MatButtonModule,
        MatCardModule, MatSnackBarModule,
        MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule,
        MatRadioModule, MatInputModule,
        MatToolbarModule, MatDatepickerModule, MatProgressBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
        imports: [
                CommonModule,
                RouterModule,
                FormsModule,
                HttpClientModule,
                FlexLayoutModule,
                MatIconModule, MatButtonModule,
                MatCardModule, MatSnackBarModule,
                MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule,
                MatRadioModule, MatInputModule,
                MatToolbarModule, MatDatepickerModule, MatProgressBarModule,
                BrowserAnimationsModule
        ],
        declarations: [],
        exports: [
                CommonModule,
                RouterModule,
                FormsModule,
                HttpClientModule,
                FlexLayoutModule,
                MatIconModule, MatButtonModule,
                MatCardModule, MatSnackBarModule,
                MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule,
                MatRadioModule, MatInputModule,
                MatToolbarModule, MatDatepickerModule, MatProgressBarModule
        ]
})
export class SharedModule { }