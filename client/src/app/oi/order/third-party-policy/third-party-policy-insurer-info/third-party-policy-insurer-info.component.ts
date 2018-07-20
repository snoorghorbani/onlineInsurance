import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { SigninRequiredAction } from '@soushians/authentication';
import { getAccountInfo } from '@soushians/user';

import { FirePolicyOrderFormModel, DeliveryTimeModel, ThirdPartyPolicyOrderFormModel } from '../../models';
import { SaveOrderStartAction } from '../../services/api/save-order';
import { GeoBoundaryService } from '../../../geo-boundary';
import { CityModel } from '../../../geo-boundary/models';
import { AppState } from '../../order.reducers';
import { OrderService } from '../../services';
import { Subject } from '../../../../../../node_modules/rxjs';

@Component({
	selector: 'order-third-party-policy-insurer-info',
	templateUrl: './third-party-policy-insurer-info.component.html',
	styleUrls: [ './third-party-policy-insurer-info.component.css' ]
})
export class ThirdPartyPolicyInsurerInfoComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	@Output('signInRequest') signInRequest$ = new EventEmitter();
	unsubscribe = new Subject<void>();
	submited = false;
	orderForm$: Observable<FirePolicyOrderFormModel>;
	signedIn: boolean;
	formGroup: FormGroup;
	orderForm: FirePolicyOrderFormModel;
	insurerInfoForm: any;
	reciverInfoForm: any;
	carCardForm: any;
	policyForm: any;
	constructor(
		private store: Store<AppState>,
		private orderService: OrderService,
		private activeRouter: ActivatedRoute,
		private router: Router,
		private geoBoundaryService: GeoBoundaryService
	) {
		this._select_order_form();
		this._init_formgroup();
		this._init_insurerInfoForm();
		this._init_reciverInfoForm();
		this._init_carCardForm();
		this._init_policyForm();

		this.store.select(getAccountInfo).subscribe((user) => (this.signedIn = !!user.DisplayName));
	}

	ngOnInit() {
		this._set_formGroup_relation_logic();
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	save() {
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		this.submited = true;
		Object.keys(this.formGroup.value).forEach((key) => (this.orderForm[key].Value = this.formGroup.value[key]));

		this.orderService.SaveOrder<ThirdPartyPolicyOrderFormModel>(this.orderForm).subscribe((response) => {
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
			/**
			 * Reciver Part
			 */
			ReceiverFirstName: new FormControl('', [ Validators.required ]),
			ReceiverLastName: new FormControl('', [ Validators.required ]),
			ReceiverPhone: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			ReceiverMobile: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			CustomerDescription: new FormControl('', [ Validators.required ]),
			/**
			 * Delivery Time
			 */
			DeliveryPlaceCityId: new FormControl('', [ Validators.required ]),
			DeliveryPlaceDistrict: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/) ]),
			DeliveryPlaceGeoLatitude: new FormControl('', [ Validators.required ]),
			DeliveryPlaceGeoLongitude: new FormControl('', [ Validators.required ]),
			DeliveryPlaceAddress: new FormControl('', [ Validators.required ]),
			DeliveryDate: new FormControl('', [ Validators.required ]),
			DeliveryTime: new FormControl('', [ Validators.required ]),
			/**
			 * Car Card Part
			 */
			CarCardFrontImage: new FormControl('test', [ Validators.required ]),
			CarCardBackImage: new FormControl('test', [ Validators.required ]),
			LastPolicyImage: new FormControl('test', [ Validators.required ]),
			/**
			 * Policy Part
			 */
			PolicyAddressSource: new FormControl('', [ Validators.required ]),
			PolicyAddressCityId: new FormControl('', [ Validators.required ]),
			PolicyAddress: new FormControl('', [ Validators.required ])
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
	_select_order_form() {
		this.orderForm$ = this.activeRouter.params.pipe(
			// pluck("Id"),
			switchMap((parmas) => this.orderService.GetOrder<FirePolicyOrderFormModel>(parmas))
		);
		this.orderForm$.subscribe((orderForm) => (this.orderForm = orderForm));
	}
	_set_formGroup_relation_logic() {
		this.formGroup
			.get('PolicyAddressSource')
			.valueChanges.pipe(takeUntil(this.unsubscribe))
			.subscribe((source) => this._check_and_contol_PolicyAddressSource_formControls(source));
	}
	_check_and_contol_PolicyAddressSource_formControls(source) {
		if (source == 1) {
			this.formGroup.patchValue({
				PolicyAddressCityId: this.formGroup.get('DeliveryPlaceCityId').value,
				PolicyAddress: this.formGroup.get('DeliveryPlaceAddress').value
			});
			this.formGroup.get('PolicyAddressCityId').disable();
			this.formGroup.get('PolicyAddress').disable();
		} else if (source == 2) {
			this.formGroup.get('PolicyAddressCityId').reset();
			this.formGroup.get('PolicyAddress').reset();
			this.formGroup.get('PolicyAddressCityId').disable();
			this.formGroup.get('PolicyAddress').disable();
		} else {
			this.formGroup.get('PolicyAddressCityId').enable();
			this.formGroup.get('PolicyAddress').enable();
		}
	}
}
