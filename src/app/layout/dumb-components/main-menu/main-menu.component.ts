import { Component, Output, EventEmitter, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Routes } from "@angular/router";

import * as authReducer from "@soushians/authentication";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";

@Component({
	selector: "layout-main-menu",
	templateUrl: "./main-menu.component.html",
	styleUrls: [ "./main-menu.component.css" ],
	animations: [
		trigger("childMenu", [
			state(
				"inactive",
				style({
					// transform: 'scale(1)',
					height: "0px",
					opacity: "0"
				})
			),
			state(
				"active",
				style({
					// transform: 'scale(1.1)',
					height: "48px",
					opacity: "1"
				})
			),
			transition("inactive => active", animate("100ms ease-in")),
			transition("active => inactive", animate("100ms ease-out"))
		]),
		trigger("menuItem", [
			state(
				"inactive",
				style({
					height: "48px"
				})
			),
			state(
				"active",
				style({
					height: "100px"
				})
			),
			transition("inactive => active", animate("100ms ease-in")),
			transition("active => inactive", animate("100ms ease-out"))
		])
	]
})
export class MainMenuComponent implements AfterViewInit {
	@Output() closeSidebar = new EventEmitter();

	@Input() authenticated: Observable<boolean>;

	customerStatus$: Observable<responseStatusTypes>;
	routes: any = routes;

	@ViewChild("customerMobileInput") customerMobileInput: ElementRef;
	constructor() {}

	ngAfterViewInit() {}
}

var routes = [
	{
		route: "/diagrams",
		icon: "multiline_chart",
		roles: [ "Admin", "User" ],
		title: "صفحه اصلی"
	},
	{
		route: "/configs",
		icon: "settings",
		roles: [ "Admin" ],
		title: "تنظیمات"
	},
	{
		route: "/source",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "آدرس سرویس ها"
	},
	{
		route: "/static/about-us",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "درباره ما"
	},
	{
		route: "/static/contact-us",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "تماس با ما"
	},
	{
		route: "/static/policies",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "مقررات"
	},
	{
		route: "/static/faq",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "سوالات متداول"
	},
	{
		route: "/reports",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "گزارشات"
	},
	{
		route: "/packages/list",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "لیست محصولات"
	},
	// {
	// 	route: "/packages/add",
	// 	icon: "device_hub",
	// 	roles: [ "Admin" ],
	// 	title: "ثبت محصول جدید"
	// },
	{
		route: "/packages/compare",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "مقایسه محصول"
	},
	{
		route: "/financial/payments",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "کارتابل مالی"
	},
	{
		route: "/agent/cartable",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "مقایسه نماینده"
	}
];
