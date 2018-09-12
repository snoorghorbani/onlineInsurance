import { FieldModel } from './field.model';
import { BasePolicyOrderFormModel } from './base-policy-order-form.model';

export class FirePolicyOrderFormModel extends BasePolicyOrderFormModel {
	AirplanFallExtraCoverage: FieldModel;
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
	EarthSummitExtraCoverage: FieldModel;
	EarthquakeExtraCoverage: FieldModel;
	EstateType: FieldModel;
	FloodExtraCoverage: FieldModel;
	HarzExtraCoverage: FieldModel;
	LifeInsuranceCompanyId: FieldModel;
	LifeInsuranceDiscount: FieldModel;
	LongTermAccountBankId: FieldModel;
	LongTermAccountDiscount: FieldModel;
	PipeExplotionExtraCoverage: FieldModel;
	SnowRainExtraCoverage: FieldModel;
	StormExtraCoverage: FieldModel;
	ThingsValue: FieldModel;
	Units: FieldModel;
	AcceptAgreementTerms: FieldModel;

	constructor(initValue = {}) {
		super();
		Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
	}
}
