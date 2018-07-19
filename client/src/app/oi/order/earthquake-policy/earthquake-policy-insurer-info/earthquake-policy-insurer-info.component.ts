import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { SigninRequiredAction } from '@soushians/authentication';
import { getAccountInfo } from '@soushians/user';

import { FirePolicyOrderFormModel, DeliveryTimeModel } from '../../models';
import { AppState } from '../../order.reducers';
import { FileService } from '../../services/file.service';
import { OrderService } from '../../services';
import { GeoBoundaryService } from '../../../geo-boundary';
import { CityModel } from '../../../geo-boundary/models';
import { SaveOrderStartAction } from '../../services/api/save-order';

@Component({
	selector: 'earthquake-policy-insurer-info',
	templateUrl: './earthquake-policy-insurer-info.component.html',
	styleUrls: [ './earthquake-policy-insurer-info.component.css' ]
})
export class EarthquakePolicyInsurerInfoComponent implements OnInit {
	@Output() done = new EventEmitter();
	@Output('signInRequest') signInRequest$ = new EventEmitter();
	orderForm$: Observable<FirePolicyOrderFormModel>;
	signedIn: boolean;
	formGroup: FormGroup;
	orderForm: FirePolicyOrderFormModel;
	insurerInfoForm: any;
	reciverInfoForm: any;
	buildingInfoForm: any;
	DeliverDateTime: string;
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
		this._init_buildingInfoForm();
		this._set_properties_value_of_delivery_table();

		this.store.select(getAccountInfo).subscribe((user) => (this.signedIn = !!user.DisplayName));
	}

	ngOnInit() {}

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
			PolicyholderNationalCode: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderFatherName: new FormControl('', [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderBirthDate: new FormControl('', [ Validators.required ]),
			PolicyholderFirstName: new FormControl('', [
				Validators.required,
				Validators.pattern(/[\u0600-\u06FF\s]/)
			]),
			PolicyholderLastName: new FormControl('', [ Validators.required, Validators.pattern(/[\u0600-\u06FF\s]/) ]),
			PolicyholderMobile: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			PolicyholderGender: new FormControl('', [ Validators.required ]),
			PolicyholderPhone: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			/**
			 * Reciver Part
			 */
			DeliveryPlaceGeoLongitude: new FormControl('1', [ Validators.required ]),
			DeliveryPlaceGeoLatitude: new FormControl('1', [ Validators.required ]),
			DeliveryPlaceDistrict: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			DeliveryPlaceAddress: new FormControl('', [ Validators.required ]),
			DeliveryPlaceCityId: new FormControl('', [ Validators.required ]),
			CustomerDescription: new FormControl('', [ Validators.required ]),
			ReceiverFirstName: new FormControl('', [ Validators.required ]),
			ReceiverLastName: new FormControl('', [ Validators.required ]),
			ReceiverMobile: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			ReceiverPhone: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			/**
			 * Building Part
			 */
			BuildingAddressMainStreet: new FormControl('', [ Validators.required ]),
			BuildingAddressSubStreet: new FormControl('', [ Validators.required ]),
			BuildingAddressDistrict: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingAddressCityId: new FormControl('', [ Validators.required ]),
			BuildingAddressAlley: new FormControl('', [ Validators.required ]),
			BuildingPostalCode: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingAddressNo: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingFloors: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			BuildingUsage: new FormControl('', [ Validators.required ]),
			BuildingAge: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ])
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
