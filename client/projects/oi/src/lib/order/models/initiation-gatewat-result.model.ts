export class InitiationGatewayResultuModel {
	GatewayMessage: number;
	GatewayUrl: string;
	IsSuccessful: boolean;
	Message: string;
	PaymentId: number;
	PaymentRequestData: {
		Name: string;
		Value: string;
	}[];
	constructor() {}
}
