import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { SigninRequiredAction } from '@soushians/authentication';
import { getAccountInfo } from '@soushians/user';

import { FirePolicyOrderFormModel } from '../../models';
import { AppState } from '../../order.reducers';
import { OrderService } from '../../services';
import { GeoBoundaryService } from '../../../geo-boundary';
import { CityModel } from '../../../geo-boundary/models';
import { SaveOrderStartAction } from '../../services/api/save-order';

@Component({
	selector: 'order-fire-policy-insurer-info',
	templateUrl: './fire-policy-insurer-info.component.html',
	styleUrls: [ './fire-policy-insurer-info.component.css' ]
})
export class FirePolicyInsurerInfoComponent implements OnInit {
	@Output() done = new EventEmitter();
	@Output('signInRequest') signInRequest$ = new EventEmitter();
	orderForm$: Observable<FirePolicyOrderFormModel>;
	signedIn: boolean;
	formGroup: FormGroup;
	submited = false;
	orderForm: FirePolicyOrderFormModel;
	insurerInfoForm: any;
	reciverInfoForm: any;
	buildingInfoForm: any;
	constructor(
		private store: Store<AppState>,
		private orderService: OrderService,
		private activatedRouter: ActivatedRoute,
		private router: Router,
		private geoBoundaryService: GeoBoundaryService
	) {
		this._select_order_form();
		this._init_formgroup();
		this._init_insurerInfoForm();
		this._init_reciverInfoForm();
		this._init_buildingInfoForm();
		this._set_properties_value_of_delivery_table();

		this.store.select(getAccountInfo).subscribe((user) => (this.signedIn = !!user.DisplayName));
	}

	ngOnInit() {}

	save() {
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		this.submited = true;

		Object.keys(this.formGroup.value).forEach((key) => (this.orderForm[key].Value = this.formGroup.value[key]));

		this.orderService.SaveOrder<FirePolicyOrderFormModel>(this.orderForm).subscribe((response) => {
			this.router.navigate([ '/order/review', this.orderForm.Id.Value ]);
		});
	}
	signInRequest() {
		this.store.dispatch(new SigninRequiredAction());
	}
	currentLocationOfUser({ lat, lng }) {
		this.formGroup.patchValue({
			DeliveryPlaceGeoLatitude: lat,
			DeliveryPlaceGeoLongitude: lng
		});
	}
	/**
	 * private methods
	 */
	_validate_all_form_fields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach((field) => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this._validate_all_form_fields(control);
			}
		});
	}
	_init_formgroup() {
		this.formGroup = new FormGroup({
			/**
			 * Insurer Part
			 */
			PolicyholderFirstName: new FormControl('', [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderLastName: new FormControl('', [ Validators.required, Validators.pattern(/[\u0600-\u06FF\s]/) ]),
			PolicyholderFatherName: new FormControl('', [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderNationalCode: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderMobile: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderPhone: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderBirthDate: new FormControl('', [ Validators.required ]),
			PolicyholderGender: new FormControl('', [ Validators.required ]),
			// LastPolicyImage: new FormControl("3dfce20f-47f6-495d-975e-a5dd646eb4f8"),
			// CarCardBackImage: new FormControl("3dfce20f-47f6-495d-975e-a5dd646eb4f8"),
			// CarCardFrontImage: new FormControl("3dfce20f-47f6-495d-975e-a5dd646eb4f8"),
			/**
			 * Reciver Part
			 */
			ReceiverFirstName: new FormControl('', [ Validators.required ]),
			ReceiverLastName: new FormControl('', [ Validators.required ]),
			ReceiverPhone: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			ReceiverMobile: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			DeliveryPlaceCityId: new FormControl('', [ Validators.required ]),
			DeliveryPlaceDistrict: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			DeliveryPlaceGeoLatitude: new FormControl('1', [ Validators.required ]),
			DeliveryPlaceGeoLongitude: new FormControl('1', [ Validators.required ]),
			DeliveryPlaceAddress: new FormControl('', [ Validators.required ]),
			CustomerDescription: new FormControl('', [ Validators.required ]),

			/**
			 * Building Part
			 */
			BuildingAddressCityId: new FormControl('', [ Validators.required ]),
			BuildingAddressDistrict: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingAddressMainStreet: new FormControl('', [ Validators.required ]),
			BuildingAddressSubStreet: new FormControl('', [ Validators.required ]),
			BuildingAddressAlley: new FormControl('', [ Validators.required ]),
			BuildingAddressNo: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingPostalCode: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingUsage: new FormControl('', [ Validators.required ]),
			BuildingFloors: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingAge: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			/**
			 * Delivery Time
			 */
			DeliveryDate: new FormControl('', [ Validators.required ]),
			DeliveryTime: new FormControl('', [ Validators.required ])
		});
	}
	_init_insurerInfoForm() {
		this.insurerInfoForm = [
			{
				name: 'PolicyholderFirstName',
				fxFlex: 46
			},
			{
				name: 'PolicyholderLastName',
				fxFlex: 46
			},
			{
				name: 'PolicyholderFatherName',
				fxFlex: 46
			},
			{
				name: 'PolicyholderGender',
				fxFlex: 46
			},
			{
				name: 'PolicyholderNationalCode',
				fxFlex: 46
			},
			{
				name: 'PolicyholderMobile',
				fxFlex: 46
			},
			{
				name: 'PolicyholderPhone',
				fxFlex: 46
			},
			{
				name: 'PolicyholderBirthDate',
				fxFlex: 46
			}
		];
	}
	_init_reciverInfoForm() {
		this.reciverInfoForm = [
			{
				name: 'ReceiverFirstName',
				fxFlex: 46
			},
			{
				name: 'ReceiverLastName',
				fxFlex: 46
			},
			{
				name: 'DeliveryPlaceCityId',
				fxFlex: 46
			},
			{
				name: 'DeliveryPlaceDistrict',
				fxFlex: 46
			},
			{
				name: 'ReceiverPhone',
				fxFlex: 46
			},
			{
				name: 'ReceiverMobile',
				fxFlex: 46
			},
			{
				name: 'DeliveryPlaceAddress',
				fxFlex: 46
			},
			{
				name: 'CustomerDescription',
				fxFlex: 46
			}
		];
	}
	_init_buildingInfoForm() {
		this.buildingInfoForm = [
			{
				name: 'BuildingAddressCityId',
				fxFlex: 46
			},
			{
				name: 'BuildingAddressDistrict',
				fxFlex: 46
			},
			{
				name: 'BuildingAddressMainStreet',
				fxFlex: 46
			},
			{
				name: 'BuildingAddressSubStreet',
				fxFlex: 46
			},
			{
				name: 'BuildingAddressAlley',
				fxFlex: 46
			},
			{
				name: 'BuildingAddressNo',
				fxFlex: 46
			},
			{
				name: 'BuildingPostalCode',
				fxFlex: 46
			},
			{
				name: 'BuildingUsage',
				fxFlex: 46
			},
			{
				name: 'BuildingFloors',
				fxFlex: 46
			},
			{
				name: 'BuildingAge',
				fxFlex: 46
			}
		];
	}
	_set_properties_value_of_delivery_table() {}
	_select_order_form() {
		this.orderForm$ = this.activatedRouter.params.pipe(
			// pluck("Id"),
			switchMap((parmas) => this.orderService.GetOrder<FirePolicyOrderFormModel>(parmas))
		);
		this.orderForm$.subscribe((orderForm) => (this.orderForm = orderForm));
	}
}
