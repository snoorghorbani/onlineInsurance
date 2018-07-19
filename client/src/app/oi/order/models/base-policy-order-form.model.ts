import { FieldModel } from './field.model';

export class BasePolicyOrderFormModel {
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
	ExtensionData: {};

	constructor(initValue = {}) {
		Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
	}
}
