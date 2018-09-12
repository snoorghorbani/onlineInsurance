import { FieldModel } from './field.model';
import { BasePolicyOrderFormModel } from './base-policy-order-form.model';

export class MedicalPolicyOrderFormModel extends BasePolicyOrderFormModel {
	MedicalRole: FieldModel;
	DoctorSpecialty: FieldModel;
	ParamedicineSpecialty: FieldModel;
	IsResident: FieldModel;
	IsStudent: FieldModel;
	MedicalNoDamageRecord: FieldModel;
	BloodMoneyIncreaseCoverage: FieldModel;
	BloodMoneyInNormalMonths: FieldModel;
	BloodMoneyInForbiddenMonths: FieldModel;
	HasActiveOffice: FieldModel;
	OfficeAddress: FieldModel;
	ActivityDescription: FieldModel;
	ActivityPlaceAddress: FieldModel;
	NationalCardImage: FieldModel;
	MediacalCardImage: FieldModel;
	LastPolicyImage: FieldModel;

	constructor(initValue = {}) {
		super();
		Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
	}
}
