import { FieldModel } from './field.model';
import { BasePolicyOrderFormModel } from './base-policy-order-form.model';

export class MotorcyclePolicyOrderFormModel extends BasePolicyOrderFormModel {
	MotorType: FieldModel;
	MotorProductionYear: FieldModel;
	DamageStatus: FieldModel;
	NoDamageRecord: FieldModel;
	LastPolicyDiscountYears: FieldModel;
	LastPolicyUsedPropertyCoupons: FieldModel;
	LastPolicyUsedPersonCoupons: FieldModel;
	LastPolicyExpirationDate: FieldModel;
	PolicyTerm: FieldModel;
	PolicyPushesheMali: FieldModel;
	MotorCardFrontImage: FieldModel;
	MotorCardBackImage: FieldModel;
	LastPolicyImage: FieldModel;
	PolicyAddressSource: FieldModel;
	PolicyAddressCityId: FieldModel;
	PolicyAddress: FieldModel;

	constructor(initValue = {}) {
		super(initValue);
		Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
	}
}
