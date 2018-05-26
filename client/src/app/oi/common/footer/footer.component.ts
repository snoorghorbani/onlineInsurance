import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: [ "./footer.component.css" ]
})
export class FooterComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	GuidesFooterItem = [
		{
			lable: "راهنمای مشتریان",
			link: ""
		},
		{
			lable: "بیمه شخص ثالث",
			link: ""
		},
		{
			lable: "بیمه آتش سوزی",
			link: ""
		},
		{
			lable: "بیمه زلزله",
			link: ""
		},
		{
			lable: "بیمه عمر",
			link: ""
		}
	];
	LinksFooterItem = [
		{
			lable: "شرایط و قوانین بیمه آنلاین",
			link: ""
		},
		{
			lable: "درباره بیمه آنلاین",
			link: ""
		},
		{
			lable: "بیمه تامین اجتماعی",
			link: ""
		},
		{
			lable: "تماس با ما",
			link: ""
		}
	];
}
