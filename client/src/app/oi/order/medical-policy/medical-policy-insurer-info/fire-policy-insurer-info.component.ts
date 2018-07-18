import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { filter, distinctUntilChanged, switchMap, pluck } from 'rxjs/operators';
import { MatExpansionPanel } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { UploadEvent } from 'ngx-file-drop';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { SigninRequiredAction } from '@soushians/authentication';
import { getAccountInfo } from '@soushians/user';

import { MedicalPolicyOrderFormModel, DeliveryTimeModel } from '../../models';
import { AppState } from '../../order.reducers';
import { FieldModel } from '../../models/field.model';
import { FileService } from '../../services/file.service';
import { GetNewOrderFormStartAction } from '../../services/api';
import { OrderService, OrderFormService } from '../../services';
import { GeoBoundaryService } from '../../../geo-boundary';
import { CityModel } from '../../../geo-boundary/models';
import { NewOrderFormUpdateAction } from '../../new-order/new-order.actions';
import { SaveOrderStartAction } from '../../services/api/save-order';

@Component({
	selector: 'order-medical-policy-insurer-info',
	templateUrl: './medical-policy-insurer-info.component.html',
	styleUrls: [ './medical-policy-insurer-info.component.css' ]
})
export class MedicalPolicyInsurerInfoComponent implements OnInit {
	@Output() done = new EventEmitter();
	@Output('signInRequest') signInRequest$ = new EventEmitter();
	orderForm$: Observable<MedicalPolicyOrderFormModel>;
	signedIn: boolean;
	formGroup: FormGroup;
	orderForm: MedicalPolicyOrderFormModel;
	insurerInfoForm: any;
	reciverInfoForm: any;
	buildingInfoForm: any;
	DelieryTimeTableDisplayColumns: string[];
	DelieryTimeTableDataSource$: Observable<DeliveryTimeModel[]>;
	Cities$: Observable<CityModel[]>;
	constructor(
		private store: Store<AppState>,
		private fileService: FileService,
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

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction(4));
	}
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
			switchMap((parmas) => this.orderService.GetOrder<MedicalPolicyOrderFormModel>(parmas))
		);
		this.orderForm$.subscribe((orderForm) => (this.orderForm = orderForm));
	}
}
