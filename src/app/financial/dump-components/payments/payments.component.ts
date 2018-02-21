import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef,
	ViewChildren,
	AfterViewInit
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { MatSidenav, MatTabGroup, MatSnackBar } from "@angular/material";
import { DataSource } from "@angular/cdk/collections";
import { Store } from "@ngrx/store";

import { UtilityService, DateClass } from "@soushians/infra";
import { responseStatusTypes } from "@soushians/shared";
import * as fromLayout from "@soushians/layout";

import { FeatureState } from "../../reducers";

@Component({
	selector: "agent-payments",
	templateUrl: "./payments.component.html",
	styleUrls: [ "./payments.component.scss" ]
})
export class PaymentsComponent implements OnInit {
	@Input("data") data$: any;
	dataSource: ReportDataSource | null;
	displayedColumns = [ "Id", "Amount", "Time", "Description" ];
	layout: Observable<fromLayout.State>;

	constructor(private store: Store<FeatureState>) {
		this.layout = this.store.select(fromLayout.getLayout);
		this.store.dispatch(new fromLayout.ChangeLayout("without-margin"));
		this.store.dispatch(new fromLayout.OpenSidenavAction());
	}

	ngOnInit() {
		this.dataSource = new ReportDataSource(this.data$);
	}
}

export interface compareRecord {
	Id: string;
	Amount: number;
	Time: Date;
	Description: string;
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
