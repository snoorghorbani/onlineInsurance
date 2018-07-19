import { Component, Input } from '@angular/core';
import { OrderFormType } from '../../models';

@Component({
	selector: 'order-third-party-policy-review',
	templateUrl: './third-party-policy-review.component.html',
	styleUrls: [ './third-party-policy-review.component.css' ]
})
export class ThirdPartyPolicyOrderReviewComponent {
	@Input() orderForm: OrderFormType;
	constructor() {}
}
