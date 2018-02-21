import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
// import { MatSnackBar } from '@angular/material';

import * as FeatureReducer from '../../reducers/index'

@Component({
        template: `
          <router-outlet></router-outlet>
        `,
        styleUrls: ['./reports-module-container.component.scss']
})
export class ReportContainerComponent implements OnInit {

        constructor(
                private store: Store<FeatureReducer.FeatureState>
        ) {
        }

        ngOnInit() {
        }

}