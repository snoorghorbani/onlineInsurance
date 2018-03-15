"use strict";
import * as express from "express";
import * as async from "async";
import * as request from "request";
import { Response, Request, NextFunction } from "express";

const router = express.Router();

router.get("/", function(req, res) {
	try {
		res.json({
			name: "asdfasf",
			another: [ 1, 3, 4, 5, 6 ],
			obj: {
				Upload: Math.floor(Math.random() * 100),
				Download: Math.floor(Math.random() * 100),
				all: Math.floor(Math.random() * 100),
				sex: Math.floor(Math.random() * 100)
			},
			data: [
				{ value: Math.floor(Math.random() * 400), name: "data1" },
				{ value: Math.floor(Math.random() * 200), name: "data2" },
				{ value: Math.floor(Math.random() * 300), name: "data3" },
				{ value: Math.floor(Math.random() * 500), name: "data4" }
			]
		});
	} catch (e) {
		debugger;
	}
});

const c = () => {
	return Math.floor(Math.random() * 400);
};

router.get("/fake2", function(req, res) {
	try {
		res.json({
			status: true,
			data: [
				{ value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data1" },
				{ value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data2" },
				{ value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data3" },
				{ value: Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map(i => c()), name: "data4" }
			]
		});
	} catch (e) {
		debugger;
	}
});

router.get("/packgeCompareSimpleList", function(req, res) {
	debugger;
	return res.json({
		displayedColumns: [ "selectCheckbox", "companyName", "price", "cover", "actions" ],
		filedDisplayedColumns: [ "companyName", "price", "cover" ],
		dataSource: [
			{
				prices: [
					{
						id: "1396-15-269-386-680-85",
						title: "یک ساله",
						price: 1005786,
						cover: 7000000
					}
				],
				companyName: "پارسیان",
				id: 15,
				totalPenalty: 36153,
				dayPenalty: 13,
				penalty: 2781,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/15.png",
				satisfaction: 5,
				portion: 8,
				complaint: 9,
				branch: 41,
				discount: 0,
				installment: [
					{
						percent: 0.3,
						date: 0
					},
					{
						percent: 0.35,
						date: 2
					},
					{
						percent: 0.35,
						date: 4
					}
				],
				price: 1005786,
				cover: 7000000
			},
			{
				prices: [
					{
						id: "1396-13-385-560-952-88",
						title: "یک ساله",
						price: 1005786,
						cover: 7000000
					}
				],
				companyName: "معلم",
				id: 13,
				totalPenalty: 33150,
				dayPenalty: 13,
				penalty: 2550,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/13.png",
				satisfaction: 4,
				portion: 6,
				complaint: 30,
				branch: 50,
				discount: 0,
				installment: [
					{
						percent: 1,
						date: 0
					}
				],
				price: 1005786,
				cover: 7000000
			},
			{
				prices: [
					{
						id: "1396-9-415-601-1036-100",
						title: "سه ماهه",
						price: 402314,
						cover: 7000000
					},
					{
						id: "1396-9-415-601-1036-101",
						title: "چهار ماهه",
						price: 502893,
						cover: 7000000
					},
					{
						id: "1396-9-415-601-1036-102",
						title: "شش ماهه",
						price: 804629,
						cover: 7000000
					},
					{
						id: "1396-9-415-601-1036-103",
						title: "نه ماهه",
						price: 804629,
						cover: 7000000
					},
					{
						id: "1396-9-415-601-1036-1052",
						title: "یک ساله",
						price: 1005786,
						cover: 7000000
					}
				],
				companyName: "كوثر",
				id: 9,
				totalPenalty: 33150,
				dayPenalty: 13,
				penalty: 2550,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/9.png",
				satisfaction: 5,
				portion: 8,
				complaint: 18,
				branch: 91,
				discount: 0,
				installment: [
					{
						percent: 1,
						date: 0
					}
				],
				price: 402314,
				cover: 7000000
			},
			{
				prices: [
					{
						id: "1396-1-289-406-724-70",
						title: "سه ماهه",
						price: 301735,
						cover: 7000000
					},
					{
						id: "1396-1-289-406-724-71",
						title: "شش ماهه",
						price: 603471,
						cover: 7000000
					},
					{
						id: "1396-1-289-406-724-72",
						title: "یک ساله",
						price: 1005786,
						cover: 7000000
					}
				],
				companyName: "البرز",
				id: 1,
				totalPenalty: 33150,
				dayPenalty: 13,
				penalty: 2550,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/1.png",
				satisfaction: 5,
				portion: 15,
				complaint: 15,
				branch: 40,
				discount: 0,
				installment: [
					{
						percent: 0.4,
						date: 0
					},
					{
						percent: 0.3,
						date: 2
					},
					{
						percent: 0.3,
						date: 5
					}
				],
				price: 301735,
				cover: 7000000
			},
			{
				prices: [
					{
						id: "1396-14-243-326-572-55",
						title: "سه ماهه",
						price: 282789,
						cover: 7000000
					},
					{
						id: "1396-14-243-326-572-56",
						title: "شش ماهه",
						price: 565768,
						cover: 7000000
					},
					{
						id: "1396-14-243-326-572-57",
						title: "یک ساله",
						price: 942946,
						cover: 7000000
					}
				],
				companyName: "پاسارگاد",
				id: 14,
				totalPenalty: 33150,
				dayPenalty: 13,
				penalty: 2550,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/14.png",
				satisfaction: 5,
				portion: 14,
				complaint: 14,
				branch: 69,
				discount: 0,
				installment: [
					{
						percent: 1,
						date: 0
					}
				],
				price: 282789,
				cover: 7000000
			},
			{
				prices: [
					{
						id: "1396-3-317-503-800-74",
						title: "یک ساله",
						price: 1005786,
						cover: 7000000
					}
				],
				companyName: "آسیا",
				id: 3,
				totalPenalty: 33150,
				dayPenalty: 13,
				penalty: 2550,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/3.png",
				satisfaction: 5,
				portion: 3,
				complaint: 9,
				branch: 74,
				discount: 0,
				installment: [
					{
						percent: 1,
						date: 0
					}
				],
				price: 1005786,
				cover: 7000000
			},
			{
				prices: [
					{
						id: "1396-10-375-541-938-87",
						title: "یک ساله",
						price: 1005786,
						cover: 7000000
					}
				],
				companyName: "ما",
				id: 10,
				totalPenalty: 33150,
				dayPenalty: 13,
				penalty: 2550,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/10.png",
				satisfaction: 5,
				portion: 7,
				complaint: 10,
				branch: 41,
				discount: 0,
				installment: [
					{
						percent: 1,
						date: 0
					}
				],
				price: 1005786,
				cover: 7000000
			},
			{
				prices: [
					{
						id: "1396-5-361-483-900-84",
						title: "یک ساله",
						price: 1005786,
						cover: 7000000
					},
					{
						id: "1396-5-361-483-900-97",
						title: "شش ماهه",
						price: 603471,
						cover: 7000000
					}
				],
				companyName: "دانا",
				id: 5,
				totalPenalty: 33150,
				dayPenalty: 13,
				penalty: 2550,
				icon: "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/5.png",
				satisfaction: 4,
				portion: 4,
				complaint: 22,
				branch: 55,
				discount: 0,
				installment: [
					{
						percent: 1,
						date: 0
					}
				],
				price: 1005786,
				cover: 7000000
			}
		]
	});
});

export { router };
