import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { PackageModel } from "app/models/package";
import { responseStatusTypes } from '@soushians/shared';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
import { PackageListModel as model } from "app/models/package";
import { Sort, MatSort } from '@angular/material';

@Component({
    selector: 'package-list',
    templateUrl: './package-list.component.html',
    styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
    @Input('data') data$: Observable<model.Response>;
    @Input('status') status$: Observable<responseStatusTypes>;

    dataSource: TabeleDataSource;
    displayedColumns = ['ShowOrder', 'Name', 'Price', 'OffPrice', 'TimeCredit', 'ExpireHours', 'DownloadSpeed', 'UploadSpeed'];
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        debugger;
    }

    ngOnInit() {
        this.dataSource = new TabeleDataSource(this.data$, this.sort);
    }

}

export class TabeleDataSource extends DataSource<any> {
    source: BehaviorSubject<PackageModel[]>;
    constructor(data: Observable<model.Response>, private _sort: MatSort) {
        super();
        this.source = new BehaviorSubject([] as PackageModel[]);
        data.subscribe(resp => this.source.next(resp.data));
    }

    connect(): Observable<PackageModel[]> {
        // return this.source;
        const displayDataChanges = [
            this.source,
            this._sort.sortChange,
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            debugger
            return this.getSortedData(this.source);
        });
    }

    disconnect(): void {
        // this.subject.complete();
        // this.subject.observers = [];
    }
    getSortedData(source): PackageModel[] {
        if (!this._sort.active || this._sort.direction == '') { return source.value; }
        return source.value.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._sort.active) {
                case 'Name': [propertyA, propertyB] = [a.Name, b.Name]; break;
                case 'ShowOrder': [propertyA, propertyB] = [a.ShowOrder, b.ShowOrder]; break;
                case 'Price': [propertyA, propertyB] = [a.ShowOrder, b.ShowOrder]; break;
                case 'OffPrice': [propertyA, propertyB] = [a.ShowOrder, b.ShowOrder]; break;
                case 'TimeCredit': [propertyA, propertyB] = [a.ShowOrder, b.ShowOrder]; break;
            }

            let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
        });
    }
}