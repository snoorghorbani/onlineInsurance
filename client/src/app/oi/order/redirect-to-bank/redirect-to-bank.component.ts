import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { PlaceOrderApiModel } from "../services/api";
import { InitiationGatewayResultuModel } from "../models";
import { MatButton } from "@angular/material";
import { empty } from "rxjs";
import { delay, tap } from "rxjs/operators";

@Component({
	selector: "order-redirect-to-bank",
	templateUrl: "./redirect-to-bank.component.html",
	styleUrls: [ "./redirect-to-bank.component.css" ]
})
export class RedirectToBankComponent {
	@ViewChild("form") form: ElementRef;
	PaymentRequestData: { Name: string; Value: string }[];
	GatewayUrl: string;
	@Input()
	set data(data: InitiationGatewayResultuModel) {
		if (!data) return;
		this.PaymentRequestData = data.PaymentRequestData;
		this.GatewayUrl = data.GatewayUrl;
		empty().pipe(delay(300), tap(() => this.form.nativeElement.submit()));
	}
	constructor() {
		this.PaymentRequestData = [];
	}
}
