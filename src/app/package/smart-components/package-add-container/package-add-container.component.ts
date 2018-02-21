import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as FeatureReducer from '../../reducers';

import { PackageAddModel as model } from "app/models/package";
import { responseStatusTypes } from '@soushians/shared';
import { PackageAddAction, PackageAddStartAction } from "../../actions";

@Component({
    //selector: 'package-add-container',
    template: `
      <package-add
      [formGroup]='formGroup'
      (submited)="add($event)"
      ></package-add>
    `
})
export class PackageAddContainerComponent implements OnInit {
    //  prePackageAddModel = new PackageAddAction();

    formGroup: FormGroup = model.Request.formGroup;

    constructor(
        private store: Store<FeatureReducer.FeatureState>
    ) {

    }
    ngOnInit() {

    }

    add(formData) {
        debugger
        this.store.dispatch(new PackageAddAction(formData));
    }

    reset() {
        //     this.store.dispatch(new NewCaptcha());
    }
}