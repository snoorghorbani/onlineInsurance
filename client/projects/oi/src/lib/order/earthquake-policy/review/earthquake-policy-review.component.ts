import { Component, Input } from '@angular/core';
import { EarthquakePolicyOrderFormModel } from '../../models';

@Component({
	selector: 'order-earthquake-policy-review',
	templateUrl: './earthquake-policy-review.component.html',
	styleUrls: [ './earthquake-policy-review.component.css' ]
})
export class EarthquakePolicyOrderReviewComponent {
	@Input() orderForm: EarthquakePolicyOrderFormModel;
	constructor() {}
}
