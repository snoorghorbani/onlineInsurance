import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";

import { PackageListModel } from "app/models/package";
import { responseStatusTypes } from '@soushians/shared';


@Component({
    selector: 'package-edit',
    templateUrl: './package-edit.component.html',
    styleUrls: ['./package-edit.component.scss']
})
export class PackageEditComponent implements OnInit {

    // @Input('status') status$: Observable<responseStatusTypes>;

    @Output() submited = new EventEmitter();
    @Input() formGroup: FormGroup;

    edit() {
        if (!this.formGroup.valid) return;
        // TODO:
        this.submited.emit(this.formGroup.value);
    }
    // birthdateSelected(date: string) {
    //     this.formGroup.patchValue({
    //         Birthdate: date
    //     })
    // }
    constructor() {
    }

    ngOnInit() {
    }


}