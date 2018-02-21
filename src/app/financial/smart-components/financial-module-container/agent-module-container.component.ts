import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
// import { MatSnackBar } from '@angular/material';

import * as FeatureReducer from '../../reducers/index'
import { ActivatedRoute } from '@angular/router';

@Component({
        template: `
          <router-outlet></router-outlet>
        `,
        styleUrls: ['./financial-module-container.component.scss']
})
export class FinancialContainerComponent implements OnInit {

        constructor(
                private route: ActivatedRoute,
                private store: Store<FeatureReducer.FeatureState>
        ) {
               
        }
        ngOnInit() {

        }

}