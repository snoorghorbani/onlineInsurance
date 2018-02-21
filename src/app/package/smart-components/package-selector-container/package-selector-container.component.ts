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
    //selector: 'package-add-container',
    template: `
      <package-selector
        [formGroup]='formGroup'
        [cars]='carTypes'
        [takhfifs]='takhfifs'
        [years]='years'
        (compared)="compare($event)"
      ></package-selector>
    `
})
export class PackageSelectorContainerComponent implements OnInit {

    formGroup: FormGroup = model.Request.formGroup;
    carTypes;
    years: { value: string, displayValue: string }[] = [];
    takhfifs: { value: string, displayValue: string }[] = [];
    constructor(
        private store: Store<FeatureReducer.FeatureState>,
        private packageService: PackageService
    ) {
        this.packageService
    }
    ngOnInit() {
        this.carTypes = this.packageService.getCarTypes();
        this.years = generteYears();
        this.takhfifs = generteTakhfifs();
    }

    compare(formData) {
        var res = this.packageService.compare();
        debugger
        // this.store.dispatch(new PackageAddAction(formData));
    }

    reset() {
    }
}

var generteYears = () => {
    var years = [];
    for (var i = 30; i > 0; i--) {
        years.push({
            value: 1396 - i,
            displayValue: (1396 - i) + ' - ' + (2017 - i)
        })
    }
    return years;
}

var generteTakhfifs = () => {
    var takhfifs = [];
    for (var i = 0; i < 8; i++) {
        takhfifs.push({
            value:  i,
            displayValue:  i + " سال"
        })
    }
    return takhfifs;
}