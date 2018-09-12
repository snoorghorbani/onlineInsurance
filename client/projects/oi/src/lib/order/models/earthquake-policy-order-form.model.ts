import { FieldModel } from './field.model';
import { BasePolicyOrderFormModel } from './base-policy-order-form.model';

export class EarthquakePolicyOrderFormModel extends BasePolicyOrderFormModel {
	Area: FieldModel;
	BuildType: FieldModel;
	BuildingAddressAlley: FieldModel;
	BuildingAddressCityId: FieldModel;
	BuildingAddressDistrict: FieldModel;
	BuildingAddressMainStreet: FieldModel;
	BuildingAddressNo: FieldModel;
	BuildingAddressSubStreet: FieldModel;
	BuildingAge: FieldModel;
	BuildingFloors: FieldModel;
	BuildingPostalCode: FieldModel;
	BuildingUsage: FieldModel;
	ConstructionCostPerSquareMeter: FieldModel;
	DoctorEngineerDiscount: FieldModel;
	EstateType: FieldModel;
	LifeInsuranceCompanyId: FieldModel;
	LifeInsuranceDiscount: FieldModel;
	LongTermAccountBankId: FieldModel;
	LongTermAccountDiscount: FieldModel;
	ThingsValue: FieldModel;
	Units: FieldModel;
	AcceptAgreementTerms: FieldModel;

	constructor(initValue = {}) {
		super();
		Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
	}
}
