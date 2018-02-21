import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs/Observable";

import { PackageAddModel } from "app/models/package";
import { responseStatusTypes } from '@soushians/shared';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { debug } from 'util';

@Component({
    selector: 'package-simple-compare',
    templateUrl: './package-simple-compare.component.html',
    styleUrls: ['./package-simple-compare.component.scss']
})
export class PackageSimpleCompareComponent implements OnInit {

    @Input() comparision: any;
    dataSource: ReportDataSource | null;
    // displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
    displayedColumns = ['selectCheckbox','companyName', 'price', 'cover','actions'];
    constructor(
    ) {
    }

    ngOnInit() {
        this.dataSource = new ReportDataSource(this.comparision)
    }

    selectPlicy(policy){
        debugger;
    }

}


interface compareRecord {
    // "prices": [{ "id": "1396-15-269-386-680-85", "title": "یک ساله", "price": 1005786, "cover": 7000000 }],
    "companyName": string,
    "id": number,
    "totalPenalty": number,
    "dayPenalty": number,
    "penalty": number,
    "icon": string,
    "satisfaction": number,
    "portion": number,
    "complaint": number,
    "branch": number,
    "discount": number,
    // "installment": [{ "percent": 0.3, "date": 0 }, { "percent": 0.35, "date": 2 }, { "percent": 0.35, "date": 4 }]
}

class ReportDataSource extends DataSource<any> {
    constructor(private data) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<compareRecord[]> {
        return Observable.of(this.data.slice(0,5));
    }

    disconnect() { }
}