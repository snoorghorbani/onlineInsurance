import { FieldModel } from './field.model';
import { BasePolicyOrderFormModel } from './base-policy-order-form.model';

export class ThirdPartyPolicyOrderFormModel extends BasePolicyOrderFormModel {
	CarBrand: FieldModel;
	CarModel: FieldModel;
	CarProductionYear: FieldModel;
	CarUsage: FieldModel;
	DamageStatus: FieldModel;
	NoDamageRecord: FieldModel;
	LastPolicyDiscountYears: FieldModel;
	LastPolicyUsedPropertyCoupons: FieldModel;
	LastPolicyUsedPersonCoupons: FieldModel;
	LastPolicyExpirationDate: FieldModel;
	PolicyTerm: FieldModel;
	PolicyPushesheMali: FieldModel;
	PolicyPushesheSarneshin: FieldModel;
	PolicyPushesheRanande: FieldModel;
	CarCardFrontImage: FieldModel;
	CarCardBackImage: FieldModel;
	LastPolicyImage: FieldModel;
	PolicyAddressSource: FieldModel;
	PolicyAddressCityId: FieldModel;
	PolicyAddress: FieldModel;

	constructor(initValue = {}) {
		super(initValue);
		Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
	}
}
