import { Component, OnInit, Input } from "@angular/core";

import { UserFacadeService } from "@soushians/user";

@Component({
	templateUrl: "./profile.component.html",
	styleUrls: [ "./profile.component.css" ]
})
export class ProfileComponent implements OnInit {
	info: any = {};
	constructor(private userService: UserFacadeService) {
		console.log("laoadsfasfafadfdf");
		this.userService.getInfo().subscribe(info => {
			if (!info) return;

			this.info = info;
		});
	}

	ngOnInit() {}
}
