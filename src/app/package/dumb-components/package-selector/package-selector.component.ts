import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs/Observable";

import { PackageAddModel } from "app/models/package";
import { responseStatusTypes } from '@soushians/shared';

@Component({
    selector: 'package-selector',
    templateUrl: './package-selector.component.html',
    styleUrls: ['./package-selector.component.scss']
})
export class PackageSelectorComponent implements OnInit {
    // @Input('data') data$: Observable<PackageListModel.Response>;
    // @Input('status') status$: Observable<responseStatusTypes>;


    @Output() compared = new EventEmitter();
    @Input() formGroup: FormGroup;
    @Input() years: any;
    @Input() cars: any;
    @Input() takhfifs: any;
    carBrand;
    carModel;

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    compare() {
        this.compared.emit(this.firstFormGroup.value)
    }
    // birthdateSelected(date: string) {
    //     this.formGroup.patchValue({
    //         Birthdate: date
    //     })
    // }
    constructor(
        private _formBuilder: FormBuilder
    ) {

    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            carBrand: ['', Validators.required],
            carModel: [{ models: [] }, Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            year: ['', Validators.required],
            takhfif: ['', Validators.required]
        });


        //   this.firstFormGroup.get('carBrand').value
        //   this.firstFormGroup.get('carBrand').valueChanges.subscribe(val => {
        //     this.formattedMessage = `My name is ${val}.`;
        //   });
    }


}