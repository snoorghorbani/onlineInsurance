import { Component, Input } from '@angular/core';
import { FirePolicyOrderFormModel } from '../../models';

@Component({
	selector: 'order-fire-policy-review',
	templateUrl: './fire-policy-review.component.html',
	styleUrls: [ './fire-policy-review.component.css' ]
})
export class FirePolicyOrderReviewComponent {
	@Input() orderForm: FirePolicyOrderFormModel;
	constructor() {}
}
