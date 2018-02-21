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
import { Store } from "@ngrx/store";
import { MatSidenav, MatTabGroup, MatSnackBar } from "@angular/material";

import { SigninService } from "@soushians/authentication";
import { UtilityService, DateClass } from "@soushians/infra";
import { responseStatusTypes } from "@soushians/shared";
import { ChangeLayout } from "@soushians/layout";

import { RequestModel } from "app/models/cartable";

import * as Reducers from "../../reducers";

@Component({
	selector: "cartable",
	templateUrl: "./cartable.component.html",
	styleUrls: [ "./cartable.component.scss" ]
})
export class CartableComponent implements AfterViewInit {
	@Input("status") status$: Observable<responseStatusTypes>;
	@Input("data") data$: Observable<boolean>;
	@Input() formGroup: FormGroup;
	activeRequest: RequestModel;
	nowInPersian: DateClass;
	years: string[];
	months: string[];
	monthAndYearFormGroup: FormGroup;
	set RequestFinalPrice(value) {
		this.activeRequest.Request.FinalPrice = value;
		this.activeRequest.Request.Marketing = this.activeRequest.Request.FinalPrice * 0.1;
	}
	get RequestFinalPrice() {
		return this.activeRequest.Request.FinalPrice;
	}
	@ViewChild("requestDetailNav") sidebar: MatSidenav;
	@ViewChild("requestDetailTabs") sidebarTabs: MatTabGroup;

	constructor(
		private store: Store<Reducers.FeatureState>,
		private utilityService: UtilityService,
		private signinService: SigninService,
		private snackBar: MatSnackBar
	) {
		this.activeRequest = new RequestModel();
		this.store.dispatch(new ChangeLayout("without-margin"));
	}

	openRequest(request: RequestModel) {
		this.activeRequest = request;
		setTimeout(() => {
			this.sidebar.open();
		}, 100);
	}
	openRequestDetailsTab() {
		this.sidebarTabs.selectedIndex = 0;
	}
	openHistoryTab() {
		this.sidebarTabs.selectedIndex = 2;
	}
	openAttachmentTab() {
		this.sidebarTabs.selectedIndex = 3;
	}
	openCommunicationTab() {
		this.sidebarTabs.selectedIndex = 4;
	}
	openMoneyTab() {
		this.sidebarTabs.selectedIndex = 5;
	}
	submit() {
		this.openHistoryTab();
		this.snackBar.open("اطلاعات ثبت گردید");
	}

	ngAfterViewInit() {}
}
