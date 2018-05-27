import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user";

@Component({
	selector: "app-newsletter",
	templateUrl: "./newsletter.component.html",
	styleUrls: [ "./newsletter.component.css" ]
})
export class NewsletterComponent {
	email: string;
	subscribed: boolean;
	constructor(private userService: UserService) {
		this.subscribed = false;
	}

	subscribe() {
		debugger;
		this.userService.SubscribeToNewsletter(this.email).subscribe(data => {
			this.subscribed = true;
		});
	}
}
