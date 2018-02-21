import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { responseStatusTypes } from "@soushians/shared";

import { AgentPaymentsApiModel, PaymentModel } from "app/models/financial";

import { FeatureState } from "../../reducers";
// import { GetAgentPaymentsDataAction } from '../../actions';
import { FinancialService } from "../../services";

@Component({
	selector: "payments-container",
	template: `
        <agent-payments
                [data]='paymentsData'
        ></agent-payments>
  `
})
export class CartableContainerComponent implements OnInit {
	// user$: Observable<UserModel>;
	paymentsData: PaymentModel[] = [];
	paymentsDataStatus$: Observable<responseStatusTypes>;

	formGroup: FormGroup = AgentPaymentsApiModel.Request.formGroup;

	constructor(private store: Store<FeatureState>, private agentService: FinancialService) {
		// this.user$ = this.store.select(userReducer.getUserInfo);
		// this.paymentsData$ = this.store.select(FeatureReducer.getCartableData);
		// this.paymentsDataStatus$ = this.store.select(FeatureReducer.getCartableStatus);
		this.agentService.getAgentPayments().subscribe((resp) => {
			this.paymentsData = resp.data;
		});
	}

	ngOnInit() {
		// this.store.dispatch(new GetCartableDataAction());
	}

	getRrequests(data) {
		// this.user$.subscribe(value => {
		//         if (!value) return;
		// })
	}
}
