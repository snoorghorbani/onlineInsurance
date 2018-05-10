import { FieldModel } from "./field.model";

export class OrderFormModel {
	Agent: FieldModel;
	AmountPayable: FieldModel;
	CarBrand: FieldModel;
	CarModel: FieldModel;
	CarProductionYear: FieldModel;
	CarUsage: FieldModel;
	CarYearsWithoutIncident: FieldModel;
	Customer: FieldModel;
	DeliveryAddress: FieldModel;
	DeliveryAddressCityId: FieldModel;
	DeliveryDate: FieldModel;
	DeliveryTime: FieldModel;
	Discount: FieldModel;
	LastPolicyExpirationDate: FieldModel;
	LastPolicyImage: FieldModel;
	LastPolicyNumOfUsedPersonCoupon: FieldModel;
	LastPolicyNumOfUsedPropertyCoupon: FieldModel;
	LastPolicyYearsWithoutIncident: FieldModel;
	NetPremium: FieldModel;
	PaymentId: FieldModel;
	PaymentMethod: FieldModel;
	PolicyAddress: FieldModel;
	PolicyAddressCityId: FieldModel;
	PolicyAddressSource: FieldModel;
	PolicyExpirationDate: FieldModel;
	PolicyImage: FieldModel;
	PolicyNo: FieldModel;
	PolicyPushesheMali: FieldModel;
	PolicyPushesheRanande: FieldModel;
	PolicyPushesheSarneshin: FieldModel;
	PolicyStartValidityDate: FieldModel;
	PolicyTerm: FieldModel;
	PolicyholderBirthDate: FieldModel;
	PolicyholderFatherName: FieldModel;
	PolicyholderFirstName: FieldModel;
	PolicyholderLastName: FieldModel;
	PolicyholderMobile: FieldModel;
	PolicyholderNationalCode: FieldModel;
	PolicyholderPhone: FieldModel;
	ProductId: FieldModel;
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

	constructor(initValue = {}) {
		Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
	}
}
