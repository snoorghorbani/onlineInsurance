import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { AppState } from "../../order.reducers";
import { Store } from "@ngrx/store";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../../services/api";
import { GetCarModelsOfBrandStartAction } from "../../../policy/services/api";
import { Subject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { FieldModel, FieldOptionModel } from "../../models/field.model";
import { FirePolicyOrderFormModel } from "../../models";
import { PolicyCompareModel } from "../../../policy/models/policy-compare.model";
import { NewOrderFormUpdateAction } from "../../new-order/new-order.actions";
import { takeUntil, map, distinctUntilChanged, filter, take } from "rxjs/operators";

@Component({
	selector: "order-home-detail",
	templateUrl: "./home-detail.component.html",
	styleUrls: [ "./home-detail.component.css" ]
})
export class HomeDetailComponent implements OnInit, OnDestroy {
	@Output() done = new EventEmitter();
	@Input() mode: "view" | "edit" = "edit";
	unsubscribe = new Subject<void>();
	pauser = new Subject();
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	formGroup: FormGroup;
	orderForm: FirePolicyOrderFormModel;
	orderForm$: Observable<FirePolicyOrderFormModel>;

	noemelk$: Observable<FieldModel>;
	tedadvahed$: Observable<FieldModel>;
	noesaze$: Observable<FieldModel>;
	metrazh$: Observable<FieldModel>;
	arzeshlavazem$: Observable<FieldModel>;

	FocuseddPolicy: PolicyCompareModel;
	companyInfoDataSource: any[];
	policyInfoDataSource: any[];
	companyInfoDisplayCol: any[];
	constructor(private store: Store<AppState>) {
		this._init_properties();
		this._select_orderForm();
		this._create_formGroup();
		this._set_formGroup_validation();
		this._patchValue_formGroup_on_orderForm_change();
		this._subscribe_on_orderForm();
		this._map_orderForm_to_fields();
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction(2));
		this._set_formGroup_relation_logic();
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}

	complete() {
		debugger;
		if (this.formGroup.invalid) {
			this._validate_all_form_fields(this.formGroup);
			return;
		}
		const formValue = this.formGroup.value;
		Object.keys(formValue || {}).forEach(key => (this.orderForm[key].Value = formValue[key]));
		this.store.dispatch(new NewOrderFormUpdateAction(this.orderForm));
		this.done.emit();
	}

	viewMode() {
		this.mode = "view";
	}
	editMode() {
		this.mode = "edit";
	}

	/**
	 * Private methods
	 */
	_subscribe_on_orderForm() {
		this.orderForm$.subscribe(orderForm => (this.orderForm = orderForm));
	}
	_select_orderForm() {
		this.orderForm$ = this.store
			.select(state => state.order.newOrder.data as FirePolicyOrderFormModel)
			.pipe(takeUntil(this.unsubscribe), filter(orderForm => orderForm != null), distinctUntilChanged());
	}
	_init_properties() {
		this.companyInfoDataSource = [];
		this.policyInfoDataSource = [];
		this.companyInfoDisplayCol = [ "key", "value" ];
	}
	_check_and_contol_incident_formControls(years) {
		debugger;
		if (years > 0) {
			this.formGroup.get("LastPolicyYearsWithoutIncident").disable();
			this.formGroup.get("LastPolicyNumOfUsedPropertyCoupon").disable();
			this.formGroup.get("LastPolicyNumOfUsedPersonCoupon").disable();
		} else {
			this.formGroup.get("LastPolicyYearsWithoutIncident").enable();
			this.formGroup.get("LastPolicyNumOfUsedPropertyCoupon").enable();
			this.formGroup.get("LastPolicyNumOfUsedPersonCoupon").enable();
		}
	}
	_create_formGroup() {
		this.formGroup = new FormGroup({
			noemelk: new FormControl("", Validators.required),
			tedadvahed: new FormControl("", Validators.required),
			noesaze: new FormControl("", Validators.required),
			metrazh: new FormControl("", Validators.required),
			arzeshlavazem: new FormControl("", Validators.required)
		});
	}
	_set_formGroup_validation() {
		this.orderForm$.pipe(take(1)).subscribe(orderForm => {
			Object.keys(this.formGroup.controls).forEach(key => {
				if (orderForm[key].Status == 4) {
					this.formGroup.get(key).setValidators([ Validators.required ]);
					this.formGroup.get(key).updateValueAndValidity();
				}
			});
			this.formGroup.updateValueAndValidity();
		});
	}
	_patchValue_formGroup_on_orderForm_change() {
		this.orderForm$
			.pipe(
				map(orderForm => {
					var values = {};
					Object.keys(orderForm)
						.filter(key => key in this.formGroup.controls)
						.filter(key => orderForm[key].Value)
						.map(key => (values[key] = orderForm[key].Value));
					return values;
				})
			)
			.subscribe(values => {
				this.formGroup.patchValue(values);
			});
	}
	_set_formGroup_relation_logic() {}
	_map_orderForm_to_fields() {
		this.noemelk$ = this.orderForm$.map(orderForm => {
			debugger;
			return orderForm.noemelk;
		});
		this.noesaze$ = this.orderForm$.map(orderForm => orderForm.noesaze);
		this.tedadvahed$ = this.orderForm$.map(orderForm => orderForm.tedadvahed);
		this.metrazh$ = this.orderForm$.map(orderForm => orderForm.metrazh);
		this.arzeshlavazem$ = this.orderForm$.map(orderForm => orderForm.arzeshlavazem);
	}
	_validate_all_form_fields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this._validate_all_form_fields(control);
			}
		});
	}
}
