import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.css' ]
})
export class FooterComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	GuidesFooterItem = [
		{
			lable: 'راهنمای مشتریان',
			link: 'http://185.208.174.92:8080/blog/customer_guide'
		},
		{
			lable: 'بیمه شخص ثالث',
			link: 'http://185.208.174.92:8080/blog/third_party_policy'
		},
		{
			lable: 'بیمه آتش سوزی',
			link: 'http://185.208.174.92:8080/blog/fire_policy'
		},
		{
			lable: 'بیمه زلزله',
			link: 'http://185.208.174.92:8080/blog/motto_policy'
		},
		{
			lable: 'بیمه عمر',
			link: 'http://185.208.174.92:8080/blog/life_policy'
		}
	];
	LinksFooterItem = [
		{
			lable: 'شرایط و قوانین بیمه آنلاین',
			link: '/faq'
		},
		{
			lable: 'درباره بیمه آنلاین',
			link: '/static/about-us'
		},
		{
			lable: 'تماس با ما',
			link: 'static/contact-us'
		}
	];
}
