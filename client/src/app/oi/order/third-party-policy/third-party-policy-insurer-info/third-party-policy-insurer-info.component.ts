import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { SigninRequiredAction } from '@soushians/authentication';
import { getAccountInfo } from '@soushians/user';

import { FirePolicyOrderFormModel, DeliveryTimeModel } from '../../models';
import { SaveOrderStartAction } from '../../services/api/save-order';
import { GeoBoundaryService } from '../../../geo-boundary';
import { CityModel } from '../../../geo-boundary/models';
import { AppState } from '../../order.reducers';
import { OrderService } from '../../services';

@Component({
	selector: 'order-third-party-policy-insurer-info',
	templateUrl: './third-party-policy-insurer-info.component.html',
	styleUrls: [ './third-party-policy-insurer-info.component.css' ]
})
export class ThirdPartyPolicyInsurerInfoComponent implements OnInit {
	@Output() done = new EventEmitter();
	@Output('signInRequest') signInRequest$ = new EventEmitter();
	orderForm$: Observable<FirePolicyOrderFormModel>;
	signedIn: boolean;
	formGroup: FormGroup;
	orderForm: FirePolicyOrderFormModel;
	insurerInfoForm: any;
	reciverInfoForm: any;
	carCardForm: any;
	policyForm: any;
	DelieryTimeTableDisplayColumns: string[];
	DelieryTimeTableDataSource$: Observable<DeliveryTimeModel[]>;
	Cities$: Observable<CityModel[]>;
	constructor(
		private store: Store<AppState>,
		private orderService: OrderService,
		private router: ActivatedRoute,
		private geoBoundaryService: GeoBoundaryService
	) {
		this._select_order_form();
		this._init_formgroup();
		this._init_insurerInfoForm();
		this._init_reciverInfoForm();
		this._init_carCardForm();
		this._init_policyForm();
		this._set_properties_value_of_delivery_table();

		this.store.select(getAccountInfo).subscribe((user) => (this.signedIn = !!user.DisplayName));
	}

	ngOnInit() {}
	DeliverDateTime: string;

	selectDeliveryTime(row: DeliveryTimeModel) {
		this.DeliverDateTime = row.DayOfWeek + row.TimeFrom.Hours + row.TimeTo.Hours;
		this.formGroup.patchValue({
			DeliveryDate: row.Date,
			DeliveryTime: row.TimeFrom.Hours
		});
	}
	save() {
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		Object.keys(this.formGroup.value).forEach((key) => (this.orderForm[key].Value = this.formGroup.value[key]));
		this.store.dispatch(new SaveOrderStartAction(this.orderForm));
	}
	signInRequest() {
		this.store.dispatch(new SigninRequiredAction());
	}
	currentLocationOfUser({ lat, lng }) {
		debugger;
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
			PolicyholderFirstName: new FormControl('سیبلسیب', [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderLastName: new FormControl('شسیب', [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderFatherName: new FormControl('شسیب', [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderNationalCode: new FormControl('0078125812', [
				Validators.required,
				Validators.pattern(/[0-9]/)
			]),
			PolicyholderMobile: new FormControl('09125029344', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderPhone: new FormControl('02144556633', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderBirthDate: new FormControl('1396/12/12', [ Validators.required ]),
			PolicyholderGender: new FormControl('1', [ Validators.required ]),
			/**
			 * Reciver Part
			 */
			ReceiverFirstName: new FormControl('سیبیبسل', [ Validators.required ]),
			ReceiverLastName: new FormControl('سیبلسیبل', [ Validators.required ]),
			ReceiverPhone: new FormControl('02144554455', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			ReceiverMobile: new FormControl('09125029344', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			CustomerDescription: new FormControl('شسیب', [ Validators.required ]),
			/**
			 * Delivery Time
			 */
			DeliveryPlaceCityId: new FormControl('1', [ Validators.required ]),
			DeliveryPlaceDistrict: new FormControl('1', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			DeliveryPlaceGeoLatitude: new FormControl('1', [ Validators.required ]),
			DeliveryPlaceGeoLongitude: new FormControl('1', [ Validators.required ]),
			DeliveryPlaceAddress: new FormControl('سیبلیبل', [ Validators.required ]),
			DeliveryDate: new FormControl('', [ Validators.required ]),
			DeliveryTime: new FormControl('', [ Validators.required ]),
			/**
			 * Car Card Part
			 */
			CarCardFrontImage: new FormControl('34', [ Validators.required ]),
			CarCardBackImage: new FormControl('34', [ Validators.required ]),
			LastPolicyImage: new FormControl('34', [ Validators.required ]),
			/**
			 * Policy Part
			 */
			PolicyAddressSource: new FormControl('34', [ Validators.required ]),
			PolicyAddressCityId: new FormControl('34', [ Validators.required ]),
			PolicyAddress: new FormControl('34', [ Validators.required ])
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
	_init_carCardForm() {
		this.carCardForm = [
			{
				name: 'CarCardFrontImage',
				fxFlex: 46
			},
			{
				name: 'CarCardBackImage',
				fxFlex: 46
			},
			{
				name: 'LastPolicyImage',
				fxFlex: 46
			}
		];
	}
	_init_policyForm() {
		this.policyForm = [
			{
				name: 'PolicyAddressSource',
				fxFlex: 46
			},
			{
				name: 'PolicyAddressCityId',
				fxFlex: 46
			},
			{
				name: 'PolicyAddress',
				fxFlex: 46
			}
		];
	}
	_set_properties_value_of_delivery_table() {
		this.DelieryTimeTableDisplayColumns = [ 'Checkbox', 'Day', 'Date', 'Time' ];
		this.DelieryTimeTableDataSource$ = this.orderService.GetDeliveryTimeTable();
		this.Cities$ = this.geoBoundaryService.GetCities();
	}
	_select_order_form() {
		this.orderForm$ = this.router.params.pipe(
			// pluck("Id"),
			switchMap((parmas) => this.orderService.GetOrder<FirePolicyOrderFormModel>(parmas))
		);
		this.orderForm$.subscribe((orderForm) => (this.orderForm = orderForm));
	}
}
