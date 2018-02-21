import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef,
	ViewChildren,
	AfterViewInit
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import { UtilityService, DateClass } from "@soushians/infra";
import { responseStatusTypes } from "@soushians/shared";

import { RequestModel } from "app/models/cartable";

@Component({
	selector: "chat",
	templateUrl: "./chat.component.html",
	styleUrls: [ "./chat.component.scss" ]
})
export class ChatComponent implements AfterViewInit {
	constructor(private utilityService: UtilityService) {}

	ngAfterViewInit() {}

	send_message() {}
}
