import { FieldModel } from "./field.model";

export class MedicalPolicyOrderFormModel {
	Id: FieldModel;
	Version: FieldModel;
	CanAttachFile: FieldModel;
	NewNote: FieldModel;
	Actor: FieldModel;
	Type: FieldModel;
	TrackingCode: FieldModel;
	SaveDateTime: FieldModel;
	WorkflowState: FieldModel;
	ProductId: FieldModel;
	Customer: FieldModel;
	Agent: FieldModel;
	SellerName: FieldModel;
	SellerNationalId: FieldModel;
	SellerRegistrationNo: FieldModel;
	SellerEconomicNo: FieldModel;
	SellerAddress: FieldModel;
	SellerZipCode: FieldModel;
	SellerPhone: FieldModel;
	PolicyholderInfoSource: FieldModel;
	PolicyholderFirstName: FieldModel;
	PolicyholderLastName: FieldModel;
	PolicyholderNationalCode: FieldModel;
	PolicyholderBirthDate: FieldModel;
	PolicyholderFatherName: FieldModel;
	PolicyholderGender: FieldModel;
	PolicyholderMobile: FieldModel;
	PolicyholderPhone: FieldModel;
	ReceiverFirstName: FieldModel;
	ReceiverLastName: FieldModel;
	ReceiverMobile: FieldModel;
	ReceiverPhone: FieldModel;
	DeliveryPlaceCityId: FieldModel;
	DeliveryPlaceDistrict: FieldModel;
	DeliveryPlaceAddress: FieldModel;
	DeliveryPlaceGeoLatitude: FieldModel;
	DeliveryPlaceGeoLongitude: FieldModel;
	DeliveryTime: FieldModel;
	DeliveryDate: FieldModel;
	PaymentId: FieldModel;
	PaymentMethod: FieldModel;
	NetPremium: FieldModel;
	TaxesAndDuties: FieldModel;
	TotalPremium: FieldModel;
	Discount: FieldModel;
	ShippingCost: FieldModel;
	AmountPayable: FieldModel;
	CustomerDescription: FieldModel;
	AcceptAgreementTerms: FieldModel;
	IssuedPolicyNo: FieldModel;
	IssuedPolicyStartValidityDate: FieldModel;
	IssuedPolicyExpirationDate: FieldModel;
	IssuedPolicyImage: FieldModel;

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
	ExtensionData: {};

	constructor(initValue = {}) {
		Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
	}
}
