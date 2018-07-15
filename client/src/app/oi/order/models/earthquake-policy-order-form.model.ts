import { FieldModel } from "./field.model";

export class EarthquakePolicyOrderFormModel {
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
	Agent: FieldModel;
	AmountPayable: FieldModel;
	Customer: FieldModel;
	CustomerDescription: FieldModel;
	DeliveryDate: FieldModel;
	DeliveryPlaceAddress: FieldModel;
	DeliveryPlaceCityId: FieldModel;
	DeliveryPlaceDistrict: FieldModel;
	DeliveryPlaceGeoLatitude: FieldModel;
	DeliveryPlaceGeoLongitude: FieldModel;
	DeliveryTime: FieldModel;
	Discount: FieldModel;
	IssuedPolicyExpirationDate: FieldModel;
	IssuedPolicyImage: FieldModel;
	IssuedPolicyNo: FieldModel;
	IssuedPolicyStartValidityDate: FieldModel;
	NetPremium: FieldModel;
	PaymentId: FieldModel;
	PaymentMethod: FieldModel;
	PolicyholderBirthDate: FieldModel;
	PolicyholderFatherName: FieldModel;
	PolicyholderFirstName: FieldModel;
	PolicyholderGender: FieldModel;
	PolicyholderInfoSource: FieldModel;
	PolicyholderLastName: FieldModel;
	PolicyholderMobile: FieldModel;
	PolicyholderNationalCode: FieldModel;
	PolicyholderPhone: FieldModel;
	ProductId: FieldModel;
	ReceiverFirstName: FieldModel;
	ReceiverLastName: FieldModel;
	ReceiverMobile: FieldModel;
	ReceiverPhone: FieldModel;
	SellerAddress: FieldModel;
	SellerEconomicNo: FieldModel;
	SellerName: FieldModel;
	SellerNationalId: FieldModel;
	SellerPhone: FieldModel;
	SellerRegistrationNo: FieldModel;
	SellerZipCode: FieldModel;
	ShippingCost: FieldModel;
	TaxesAndDuties: FieldModel;
	TotalPremium: FieldModel;
	TrackingCode: FieldModel;
	Actor: FieldModel;
	CanAttachFile: FieldModel;
	Id: FieldModel;
	NewNote: FieldModel;
	SaveDateTime: FieldModel;
	Type: FieldModel;
	Version: FieldModel;
	WorkflowState: FieldModel;
	ExtensionData: {};

	constructor(initValue = {}) {
		Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
	}
}