import { Component, Input } from '@angular/core';
import { OrderFormType } from '../../models';

@Component({
	selector: 'order-medical-policy-review',
	templateUrl: './medical-policy-review.component.html',
	styleUrls: [ './medical-policy-review.component.css' ]
})
export class MedicalPolicyOrderReviewComponent {
	@Input() orderForm: OrderFormType;
	constructor() {}
}
