import { Component, Input } from '@angular/core';
import { MotorcyclePolicyOrderFormModel } from '../../models';

@Component({
	selector: 'order-motorcycle-policy-review',
	templateUrl: './motorcycle-policy-review.component.html',
	styleUrls: [ './motorcycle-policy-review.component.css' ]
})
export class MotorcyclePolicyOrderReviewComponent {
	@Input() orderForm: MotorcyclePolicyOrderFormModel;
	constructor() {}
}
