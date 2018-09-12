export class DeliveryTimeModel {
	Id: string;
	Date: string;
	DayOfWeek: string;
	TimeFrom: {
		'Hours': number;
	};
	TimeTo: {
		'Hours': number;
	};
}
