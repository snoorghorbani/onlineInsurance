import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from '@angular/router';

import * as FeatureReducer from '../../reducers';

import { PackageEditModel as model, PackageModel } from "app/models/package";
import { responseStatusTypes } from '@soushians/shared';
import { PackageEditAction, PackageEditStartAction, FetchPackageAction } from "../../actions";

@Component({
    //selector: 'package-edit-container',
    template: `
      <package-edit
      [formGroup]='formGroup'
      (submited)="edit($event)"
      ></package-edit>
    `
})
export class PackageEditContainerComponent implements OnInit {
    //  prePackageAddModel = new PackageEditAction();
    packageId: string;
    formGroup: FormGroup = model.Request.formGroup;
    data$: Observable<PackageModel>;
    constructor(
        private store: Store<FeatureReducer.FeatureState>,
        private route: ActivatedRoute
    ) {
        this.data$ = this.store.select(FeatureReducer.getPackage)
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.packageId = params['PackageId'];
            this.store.dispatch(new FetchPackageAction(this.packageId))
        });

        this.data$.subscribe(data => {
            if (data == null) return;
            this.formGroup.patchValue({
                Id: data.Id,
                Name: data.Name,
                Price: data.Price,
                OffPrice: data.OffPrice,
                ExpireHours: data.ExpireHours,
                QuotaVolume: data.QuotaVolume,
                TimeCredit: data.TimeCredit,
                ShowOrder: data.ShowOrder,
                UploadSpeed: data.UploadSpeed,
                DownloadSpeed: data.DownloadSpeed
            })
        })
    }

    edit(formData) {
        this.store.dispatch(new PackageEditStartAction());
    }
}