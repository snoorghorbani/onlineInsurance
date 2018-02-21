import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";
import { MatSort } from "@angular/material";
import { Store } from "@ngrx/store";

import * as fromLayout from "@soushians/layout";
import { responseStatusTypes } from "@soushians/shared";

import { PackageAddModel } from "app/models/package";
import * as appReducer from "app/reducers";

@Component({
	selector: "package-compare",
	templateUrl: "./package-compare.component.html",
	styleUrls: [ "./package-compare.component.scss" ]
})
export class PackageCompareComponent implements OnInit {
	@Input() comparision: any;
	dataSource: ReportDataSource | null;
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	displayedColumns = [
		"icon",
		"companyName",
		"price",
		"cover",
		"totalPenalty",
		"dayPenalty",
		"penalty",
		"satisfaction",
		"portion",
		"branch",
		"actions"
	];
	links: any;
	policyTimebox: { value: string; dispalyValue: string }[];
	constructor(private store: Store<appReducer.State>) {
		this.store.dispatch(new fromLayout.CloseSidenavAction());
		this.store.dispatch(new fromLayout.ChangeLayout("without-margin"));

		this.links = [
			{
				title: "درخواست مشاوره",
				description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
				icon: "phone_in_talk"
			}
		];
		this.policyTimebox = [
			{
				value: "1",
				dispalyValue: "یک سال"
			},
			{
				value: "2",
				dispalyValue: "شیش ماه"
			},
			{
				value: "3",
				dispalyValue: "3سه ماه"
			}
		];
	}

	ngOnInit() {
		this.dataSource = new ReportDataSource(this.comparision);
	}
}

export interface compareRecord {
	// "prices": [{ "id": "1396-15-269-386-680-85", "title": "یک ساله", "price": 1005786, "cover": 7000000 }],
	"companyName": string;
	"id": number;
	"totalPenalty": number;
	"dayPenalty": number;
	"penalty": number;
	"icon": string;
	"satisfaction": number;
	"portion": number;
	"complaint": number;
	"branch": number;
	"discount": number;
	// "installment": [{ "percent": 0.3, "date": 0 }, { "percent": 0.35, "date": 2 }, { "percent": 0.35, "date": 4 }]
}

export class ReportDataSource extends DataSource<any> {
	constructor(private data) {
		super();
	}

	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<compareRecord[]> {
		return Observable.of(this.data);
	}

	disconnect() {}
}
