export const FielsCategory = [
	{
		label: 'بیمه گزار',
		fields: [
			'PolicyholderFirstName',
			'PolicyholderLastName',
			'PolicyholderNationalCode',
			'PolicyholderBirthDate',
			'PolicyholderFatherName',
			'PolicyholderGender',
			'PolicyholderMobile',
			'PolicyholderPhone'
		]
	},
	{
		label: 'ارسال',
		fields: [
			'ReceiverFirstName',
			'ReceiverLastName',
			'ReceiverMobile',
			'ReceiverPhone',
			'DeliveryPlaceCityId',
			'DeliveryPlaceDistrict',
			'DeliveryPlaceAddress',
			'DeliveryPlaceGeoLatitude',
			'DeliveryPlaceGeoLongitude',
			'DeliveryTime',
			'DeliveryDate'
		]
	},
	{
		label: 'پرداخت',
		fields: [
			'PaymentId',
			'PaymentMethod',
			'NetPremium',
			'TaxesAndDuties',
			'TotalPremium',
			'Discount',
			'ShippingCost',
			'AmountPayable'
		]
	},
	{
		label: 'فروشنده',
		fields: [
			'SellerName',
			'SellerNationalId',
			'SellerRegistrationNo',
			'SellerEconomicNo',
			'SellerAddress',
			'SellerZipCode',
			'SellerPhone'
		]
	}
];
