import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as FeatureReducer from '../../reducers';

import { PackageAddModel as model } from "app/models/package";
import { responseStatusTypes } from '@soushians/shared';
import { PackageAddAction, PackageAddStartAction } from "../../actions";
import { PackageService } from 'app/package/services';

@Component({
    selector: 'package-simple-compare-container',
    template: `
      <package-simple-compare
        [comparision]="comparision"
      ></package-simple-compare>
    `
})
export class PackageSimpleCompareContainerComponent implements OnInit {

    comparision;
    constructor(
        private store: Store<FeatureReducer.FeatureState>,
        private packageService: PackageService
    ) {
        this.comparision = this.packageService.compare();
    }
    ngOnInit() {
    }

    compare(formData) {
        var res = this.packageService.compare();
        // this.store.dispatch(new PackageAddAction(formData));
    }

}