import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { FetchPackageModel, UserPackagesModel, PackageListModel, PackageAddModel, PackageEditModel } from "app/models/package";

@Injectable()
export class PackageService {

    constructor(private http: Http) { }

    getCarTypes() {
        return carTypes;
    }

    compare() {
        return compareResult;
    }


    getUserPackage(data: UserPackagesModel.Request): Observable<UserPackagesModel.Response> {
        let model = new UserPackagesModel.Request(data);
        let { Username } = model;
        return this.http.get(`http://wifi.shatel.ir/api/v1/packages/user/${Username}`, {
            withCredentials: true
        }).map(response => { return { data: response.json() } })
    }

    getPackageList(data: PackageListModel.Request): Observable<PackageListModel.Response> {
        return this.http.get(`http://wifi.shatel.ir/api/v1/packages/details`, {
            withCredentials: true
        }).map(response => { return { data: response.json() } })
    }
    PackageAdd(data: PackageAddModel.Request): Observable<PackageAddModel.Response> {
        debugger

        let model = new PackageAddModel.Request(data);

        return this.http.post(`http://wifi.shatel.ir/api/v1/packages`, model.getRequestBody(), { withCredentials: true })
            .map(response => response.json());
    }
    PackageEdit(data: PackageEditModel.Request): Observable<PackageEditModel.Response> {
        let model = new PackageEditModel.Request(data);
        let { Id } = model;
        return this.http.get(`http://wifi.shatel.ir/api/v1/packages/${Id}`, {
            withCredentials: true
        }).map(response => response.json())
    }
    FetchPackage(id: string): Observable<FetchPackageModel.Response> {
        debugger
        return this.http.get(`http://wifi.shatel.ir/api/v1/packages/${id}/details`, {
            withCredentials: true
        }).map(response => response.json())
    }

}

var compareResult = [{ "prices": [{ "id": "1396-15-269-386-680-85", "title": "یک ساله", "price": 1005786, "cover": 7000000 }], "companyName": "پارسیان", "id": 15, "totalPenalty": 36153, "dayPenalty": 13, "penalty": 2781, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/15.png", "satisfaction": 5.0, "portion": 8.0, "complaint": 9.0, "branch": 41, "discount": 0.0, "installment": [{ "percent": 0.3, "date": 0 }, { "percent": 0.35, "date": 2 }, { "percent": 0.35, "date": 4 }] }, { "prices": [{ "id": "1396-13-385-560-952-88", "title": "یک ساله", "price": 1005786, "cover": 7000000 }], "companyName": "معلم", "id": 13, "totalPenalty": 33150, "dayPenalty": 13, "penalty": 2550, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/13.png", "satisfaction": 4.0, "portion": 6.0, "complaint": 30.0, "branch": 50, "discount": 0.0, "installment": [{ "percent": 1, "date": 0 }] }, { "prices": [{ "id": "1396-9-415-601-1036-100", "title": "سه ماهه", "price": 402314, "cover": 7000000 }, { "id": "1396-9-415-601-1036-101", "title": "چهار ماهه", "price": 502893, "cover": 7000000 }, { "id": "1396-9-415-601-1036-102", "title": "شش ماهه", "price": 804629, "cover": 7000000 }, { "id": "1396-9-415-601-1036-103", "title": "نه ماهه", "price": 804629, "cover": 7000000 }, { "id": "1396-9-415-601-1036-1052", "title": "یک ساله", "price": 1005786, "cover": 7000000 }], "companyName": "كوثر", "id": 9, "totalPenalty": 33150, "dayPenalty": 13, "penalty": 2550, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/9.png", "satisfaction": 5.0, "portion": 8.0, "complaint": 18.0, "branch": 91, "discount": 0.0, "installment": [{ "percent": 1, "date": 0 }] }, { "prices": [{ "id": "1396-1-289-406-724-70", "title": "سه ماهه", "price": 301735, "cover": 7000000 }, { "id": "1396-1-289-406-724-71", "title": "شش ماهه", "price": 603471, "cover": 7000000 }, { "id": "1396-1-289-406-724-72", "title": "یک ساله", "price": 1005786, "cover": 7000000 }], "companyName": "البرز", "id": 1, "totalPenalty": 33150, "dayPenalty": 13, "penalty": 2550, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/1.png", "satisfaction": 5.0, "portion": 15.0, "complaint": 15.0, "branch": 40, "discount": 0.0, "installment": [{ "percent": 0.4, "date": 0 }, { "percent": 0.3, "date": 2 }, { "percent": 0.3, "date": 5 }] }, { "prices": [{ "id": "1396-14-243-326-572-55", "title": "سه ماهه", "price": 282789, "cover": 7000000 }, { "id": "1396-14-243-326-572-56", "title": "شش ماهه", "price": 565768, "cover": 7000000 }, { "id": "1396-14-243-326-572-57", "title": "یک ساله", "price": 942946, "cover": 7000000 }], "companyName": "پاسارگاد", "id": 14, "totalPenalty": 33150, "dayPenalty": 13, "penalty": 2550, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/14.png", "satisfaction": 5.0, "portion": 14.0, "complaint": 14.0, "branch": 69, "discount": 0.0, "installment": [{ "percent": 1, "date": 0 }] }, { "prices": [{ "id": "1396-3-317-503-800-74", "title": "یک ساله", "price": 1005786, "cover": 7000000 }], "companyName": "آسیا", "id": 3, "totalPenalty": 33150, "dayPenalty": 13, "penalty": 2550, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/3.png", "satisfaction": 5.0, "portion": 3.0, "complaint": 9.0, "branch": 74, "discount": 0.0, "installment": [{ "percent": 1, "date": 0 }] }, { "prices": [{ "id": "1396-10-375-541-938-87", "title": "یک ساله", "price": 1005786, "cover": 7000000 }], "companyName": "ما", "id": 10, "totalPenalty": 33150, "dayPenalty": 13, "penalty": 2550, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/10.png", "satisfaction": 5.0, "portion": 7.0, "complaint": 10.0, "branch": 41, "discount": 0.0, "installment": [{ "percent": 1, "date": 0 }] }, { "prices": [{ "id": "1396-5-361-483-900-84", "title": "یک ساله", "price": 1005786, "cover": 7000000 }, { "id": "1396-5-361-483-900-97", "title": "شش ماهه", "price": 603471, "cover": 7000000 }], "companyName": "دانا", "id": 5, "totalPenalty": 33150, "dayPenalty": 13, "penalty": 2550, "icon": "https://www.bimito.com/BimiTO/Resources/Image/HC/InsureCompany/5.png", "satisfaction": 4.0, "portion": 4.0, "complaint": 22.0, "branch": 55, "discount": 0.0, "installment": [{ "percent": 1, "date": 0 }] }];


var carTypes = [
    {
        "name": "پژو  ",
        "model": [
            {
                "id": 182041,
                "name": "206",
                "type": 0
            },
            {
                "id": 182051,
                "name": "406",
                "type": 0
            },
            {
                "id": 182061,
                "name": "407",
                "type": 0
            },
            {
                "id": 182071,
                "name": "504",
                "type": 0
            },
            {
                "id": 182081,
                "name": "206تیپ1",
                "type": 0
            },
            {
                "id": 182091,
                "name": "206تیپ2",
                "type": 0
            },
            {
                "id": 182101,
                "name": "206تیپ3",
                "type": 0
            },
            {
                "id": 182111,
                "name": "206تیپ4",
                "type": 0
            },
            {
                "id": 182121,
                "name": "206تیپ5",
                "type": 0
            },
            {
                "id": 182131,
                "name": "206تیپ6",
                "type": 0
            },
            {
                "id": 182141,
                "name": "206کروک",
                "type": 0
            },
            {
                "id": 182151,
                "name": "207اتوماتیک",
                "type": 0
            },
            {
                "id": 182161,
                "name": "207دنده ای",
                "type": 0
            },
            {
                "id": 182171,
                "name": "405GL",
                "type": 0
            },
            {
                "id": 182181,
                "name": "405GLI",
                "type": 0
            },
            {
                "id": 182191,
                "name": "405GLX",
                "type": 0
            },
            {
                "id": 182201,
                "name": "405SLX",
                "type": 0
            },
            {
                "id": 182211,
                "name": "405استیشن",
                "type": 0
            },
            {
                "id": 182221,
                "name": "RD",
                "type": 0
            },
            {
                "id": 182231,
                "name": "RDI",
                "type": 0
            },
            {
                "id": 182241,
                "name": "Roa",
                "type": 0
            },
            {
                "id": 182251,
                "name": "RoaG2",
                "type": 0
            },
            {
                "id": 182261,
                "name": "SDV1",
                "type": 0
            },
            {
                "id": 182271,
                "name": "SDV10",
                "type": 0
            },
            {
                "id": 182281,
                "name": "SDV19",
                "type": 0
            },
            {
                "id": 182291,
                "name": "SDV2",
                "type": 0
            },
            {
                "id": 182301,
                "name": "SDV20",
                "type": 0
            },
            {
                "id": 182311,
                "name": "SDV6",
                "type": 0
            },
            {
                "id": 182321,
                "name": "SDV8",
                "type": 0
            },
            {
                "id": 182331,
                "name": "SDV9",
                "type": 0
            },
            {
                "id": 182341,
                "name": "پارس",
                "type": 0
            },
            {
                "id": 182351,
                "name": "پارسELX",
                "type": 0
            },
            {
                "id": 182361,
                "name": "پارسLX",
                "type": 0
            },
            {
                "id": 182371,
                "name": "پارسXUM)ELX)",
                "type": 0
            },
            {
                "id": 182381,
                "name": "پارس اتوماتیک",
                "type": 0
            },
            {
                "id": 182391,
                "name": "پارس دوگانه سوز",
                "type": 0
            },
            {
                "id": 182402,
                "name": " وانت 1 تن",
                "type": 1
            },
            {
                "id": 806641,
                "name": "پارسXU7",
                "type": 0
            }
        ],
        "latinName": "Peugeot",
        "id": 18,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/18.png",
        "order": 21
    },
    {
        "name": "پراید  ",
        "model": [
            {
                "id": 161751,
                "name": "111EX",
                "type": 0
            },
            {
                "id": 161761,
                "name": "111LE",
                "type": 0
            },
            {
                "id": 161771,
                "name": "111SE",
                "type": 0
            },
            {
                "id": 161781,
                "name": "111SL",
                "type": 0
            },
            {
                "id": 161791,
                "name": "111SX",
                "type": 0
            },
            {
                "id": 161801,
                "name": "131EX",
                "type": 0
            },
            {
                "id": 161811,
                "name": "131LE",
                "type": 0
            },
            {
                "id": 161821,
                "name": "131SE",
                "type": 0
            },
            {
                "id": 161831,
                "name": "131SL",
                "type": 0
            },
            {
                "id": 161841,
                "name": "132EX",
                "type": 0
            },
            {
                "id": 161851,
                "name": "132SE",
                "type": 0
            },
            {
                "id": 161861,
                "name": "132SL",
                "type": 0
            },
            {
                "id": 161871,
                "name": "132SX",
                "type": 0
            },
            {
                "id": 161881,
                "name": "132ساده",
                "type": 0
            },
            {
                "id": 161891,
                "name": "141EX",
                "type": 0
            },
            {
                "id": 161901,
                "name": "141SE",
                "type": 0
            },
            {
                "id": 161911,
                "name": "141SL",
                "type": 0
            },
            {
                "id": 161921,
                "name": "141SX",
                "type": 0
            },
            {
                "id": 161931,
                "name": "141ساده",
                "type": 0
            },
            {
                "id": 161941,
                "name": "151LE(وانت)",
                "type": 1
            },
            {
                "id": 161951,
                "name": "151SE(وانت)",
                "type": 1
            },
            {
                "id": 161961,
                "name": "151SL(وانت)",
                "type": 1
            },
            {
                "id": 161971,
                "name": "151TL(وانت)",
                "type": 1
            },
            {
                "id": 161981,
                "name": "استیشن",
                "type": 0
            },
            {
                "id": 161991,
                "name": "صندوقدار",
                "type": 0
            },
            {
                "id": 162001,
                "name": "هاچبک",
                "type": 0
            },
            {
                "id": 806636,
                "name": "131SX",
                "type": 0
            },
            {
                "id": 806637,
                "name": "صبا",
                "type": 0
            },
            {
                "id": 806640,
                "name": "GTXi",
                "type": 0
            }
        ],
        "latinName": "Pride",
        "id": 16,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/16.png",
        "order": 20
    },
    {
        "name": "هیوندای",
        "model": [
            {
                "id": 716211,
                "name": "H1",
                "type": 0
            },
            {
                "id": 716221,
                "name": "i20",
                "type": 0
            },
            {
                "id": 716231,
                "name": "i30",
                "type": 0
            },
            {
                "id": 716241,
                "name": "i40",
                "type": 0
            },
            {
                "id": 716251,
                "name": "i40 استیشن",
                "type": 0
            },
            {
                "id": 716261,
                "name": "ix35",
                "type": 0
            },
            {
                "id": 716271,
                "name": "ix45",
                "type": 0
            },
            {
                "id": 716281,
                "name": "ix55",
                "type": 0
            },
            {
                "id": 716291,
                "name": "اکسل",
                "type": 0
            },
            {
                "id": 716301,
                "name": "اکسنت",
                "type": 0
            },
            {
                "id": 716311,
                "name": "النترا",
                "type": 0
            },
            {
                "id": 716321,
                "name": "آزرا",
                "type": 0
            },
            {
                "id": 716331,
                "name": "آوانته",
                "type": 0
            },
            {
                "id": 716341,
                "name": "تراکان",
                "type": 0
            },
            {
                "id": 716351,
                "name": "توسان 4 سیلندر",
                "type": 0
            },
            {
                "id": 716361,
                "name": "توسان 6 سیلندر",
                "type": 0
            },
            {
                "id": 716371,
                "name": "جنسیس",
                "type": 0
            },
            {
                "id": 716381,
                "name": "جنسیس کوپه",
                "type": 0
            },
            {
                "id": 716391,
                "name": "سانتافه 4 سیلندر",
                "type": 0
            },
            {
                "id": 716401,
                "name": "سانتافه 6 سیلندر",
                "type": 0
            },
            {
                "id": 716411,
                "name": "سنتنیال",
                "type": 0
            },
            {
                "id": 716421,
                "name": "سوناتا 4 سیلندر",
                "type": 0
            },
            {
                "id": 716431,
                "name": "سوناتا 6 سیلندر",
                "type": 0
            },
            {
                "id": 716441,
                "name": "سوناتاLF",
                "type": 0
            },
            {
                "id": 716451,
                "name": "کوپه",
                "type": 0
            },
            {
                "id": 716461,
                "name": "ورنا",
                "type": 0
            },
            {
                "id": 716471,
                "name": "ولستر",
                "type": 0
            },
            {
                "id": 806638,
                "name": "i10",
                "type": 4
            }
        ],
        "latinName": "Hyundai",
        "id": 71,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/71.png",
        "order": 19
    },
    {
        "name": "کیا  ",
        "model": [
            {
                "id": 554821,
                "name": "اپتیما 4 سیلندر",
                "type": 0
            },
            {
                "id": 554811,
                "name": "اپتیما 6 سیلندر",
                "type": 0
            },
            {
                "id": 554841,
                "name": "اپتیماTF",
                "type": 0
            },
            {
                "id": 554831,
                "name": "اپتیماJF",
                "type": 0
            },
            {
                "id": 554861,
                "name": "اسپورتیج 4 سیلندر",
                "type": 0
            },
            {
                "id": 554871,
                "name": "اسپورتیج 6 سیلندر",
                "type": 0
            },
            {
                "id": 554881,
                "name": "پیکانتو",
                "type": 0
            },
            {
                "id": 554891,
                "name": "ریو(مونتاژ)",
                "type": 0
            },
            {
                "id": 554901,
                "name": "ریو2",
                "type": 0
            },
            {
                "id": 554911,
                "name": "ریو5",
                "type": 0
            },
            {
                "id": 554921,
                "name": "ریو5هاچبک",
                "type": 0
            },
            {
                "id": 554931,
                "name": "ریواتوماتیک(مونتاژ)",
                "type": 0
            },
            {
                "id": 554941,
                "name": "سراتو1600",
                "type": 0
            },
            {
                "id": 554951,
                "name": "سراتو1600(مونتاژ)",
                "type": 0
            },
            {
                "id": 554961,
                "name": "سراتو2000",
                "type": 0
            },
            {
                "id": 554971,
                "name": "سراتو2000(مونتاژ)",
                "type": 0
            },
            {
                "id": 554981,
                "name": "سراتوکوپه",
                "type": 0
            },
            {
                "id": 554991,
                "name": "سورنتو 4 سیلندر",
                "type": 0
            },
            {
                "id": 555001,
                "name": "سورنتو 6 سیلندر",
                "type": 0
            },
            {
                "id": 555011,
                "name": "سول",
                "type": 0
            },
            {
                "id": 555021,
                "name": "کادنزا",
                "type": 0
            },
            {
                "id": 555031,
                "name": "کارناوال",
                "type": 0
            },
            {
                "id": 555041,
                "name": "کارنز",
                "type": 0
            },
            {
                "id": 555051,
                "name": "موهاوی",
                "type": 0
            },
            {
                "id": 555061,
                "name": "موهاویV6",
                "type": 0
            },
            {
                "id": 556661,
                "name": "موهاوی V8",
                "type": 0
            },
            {
                "id": 554851,
                "name": "اپیروس",
                "type": 0
            }
        ],
        "latinName": "Kia",
        "id": 55,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/55.png",
        "order": 18
    },
    {
        "name": "تویوتا  ",
        "model": [
            {
                "id": 232641,
                "name": "86GT",
                "type": 0
            },
            {
                "id": 232651,
                "name": "RJ77",
                "type": 0
            },
            {
                "id": 232661,
                "name": "اریون",
                "type": 0
            },
            {
                "id": 232671,
                "name": "اف جی کروزر",
                "type": 0
            },
            {
                "id": 232681,
                "name": "پرادوGXچهاردر",
                "type": 0
            },
            {
                "id": 232691,
                "name": "پرادوGXدودر",
                "type": 0
            },
            {
                "id": 232701,
                "name": "پرادوTXLچهاردر",
                "type": 0
            },
            {
                "id": 232711,
                "name": "پرادوTXدودر",
                "type": 0
            },
            {
                "id": 232721,
                "name": "پرادوVXLچهاردر",
                "type": 0
            },
            {
                "id": 232731,
                "name": "پرادوVXچهاردر",
                "type": 0
            },
            {
                "id": 232741,
                "name": "پرادوVXدودر",
                "type": 0
            },
            {
                "id": 232751,
                "name": "پریوس",
                "type": 0
            },
            {
                "id": 232761,
                "name": "راو4",
                "type": 0
            },
            {
                "id": 232771,
                "name": "سکویا",
                "type": 0
            },
            {
                "id": 232781,
                "name": "سولارا",
                "type": 0
            },
            {
                "id": 232791,
                "name": "فرچونر",
                "type": 0
            },
            {
                "id": 232801,
                "name": "کارینا",
                "type": 0
            },
            {
                "id": 232811,
                "name": "کراون",
                "type": 0
            },
            {
                "id": 232821,
                "name": "کرولاGL",
                "type": 0
            },
            {
                "id": 232831,
                "name": "کرولاGLI",
                "type": 0
            },
            {
                "id": 232841,
                "name": "کرولاXLI",
                "type": 0
            },
            {
                "id": 232851,
                "name": "کرونا",
                "type": 0
            },
            {
                "id": 232861,
                "name": "کریسیدا",
                "type": 0
            },
            {
                "id": 232871,
                "name": "کمری",
                "type": 0
            },
            {
                "id": 232882,
                "name": "1600 وانت 1 تن",
                "type": 1
            },
            {
                "id": 232892,
                "name": "1600 وانت 2 تن",
                "type": 1
            },
            {
                "id": 232902,
                "name": "1800 وانت 2 تن",
                "type": 1
            },
            {
                "id": 232912,
                "name": "2000 وانت 1 تن",
                "type": 1
            },
            {
                "id": 232922,
                "name": "2000 وانت 2 تن",
                "type": 1
            },
            {
                "id": 232932,
                "name": " وانت 1 تن",
                "type": 1
            },
            {
                "id": 232942,
                "name": "اف جي وانت 1 تن",
                "type": 1
            },
            {
                "id": 232952,
                "name": "اف جي 45 وانت 2 تن",
                "type": 1
            },
            {
                "id": 232962,
                "name": "اف جي 45 وانت 1.5 تن",
                "type": 1
            },
            {
                "id": 232972,
                "name": "داينا وانت 2 تن",
                "type": 1
            },
            {
                "id": 232982,
                "name": "لندكروز وانت 1 تن",
                "type": 1
            },
            {
                "id": 232992,
                "name": "لندكروز وانت 2 تن",
                "type": 1
            },
            {
                "id": 233002,
                "name": "لندكروز اف.جي 75 وانت 1.5 تن",
                "type": 1
            },
            {
                "id": 233012,
                "name": "هايس وانت 1 تن",
                "type": 1
            },
            {
                "id": 233022,
                "name": "هايلوكس وانت 1 تن",
                "type": 1
            },
            {
                "id": 233032,
                "name": "هايلوكس وانت 1 تن",
                "type": 1
            },
            {
                "id": 233042,
                "name": "هايلوكس وانت 2 تن",
                "type": 1
            },
            {
                "id": 236911,
                "name": "کمری GLX  ",
                "type": 0
            },
            {
                "id": 236921,
                "name": "کمری LE هایبرید  ",
                "type": 0
            },
            {
                "id": 236931,
                "name": "کمری SE  ",
                "type": 0
            },
            {
                "id": 236941,
                "name": "کمری XLE  ",
                "type": 0
            },
            {
                "id": 236951,
                "name": "کمری XLE هایبرید  ",
                "type": 0
            },
            {
                "id": 236961,
                "name": "کمری XLI  ",
                "type": 0
            },
            {
                "id": 236971,
                "name": "کمری گرند  ",
                "type": 0
            },
            {
                "id": 236981,
                "name": "گوناگون  ",
                "type": 0
            },
            {
                "id": 236991,
                "name": "لندکروزر GXR  ",
                "type": 0
            },
            {
                "id": 237001,
                "name": "لندکروزر VXR  ",
                "type": 0
            },
            {
                "id": 237011,
                "name": "هایس  ",
                "type": 0
            },
            {
                "id": 237021,
                "name": "یاریس صندوق دار  ",
                "type": 0
            },
            {
                "id": 237031,
                "name": "یاریس هاچ بک",
                "type": 0
            },
            {
                "id": 806633,
                "name": "CHR",
                "type": 0
            }
        ],
        "latinName": "Toyota",
        "id": 23,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/23.png",
        "order": 17
    },
    {
        "name": "بنز  ",
        "model": [
            {
                "id": 121001,
                "name": "A170",
                "type": 0
            },
            {
                "id": 121011,
                "name": "A180",
                "type": 0
            },
            {
                "id": 121021,
                "name": "AMGGTS",
                "type": 0
            },
            {
                "id": 121031,
                "name": "B170",
                "type": 0
            },
            {
                "id": 121041,
                "name": "B200",
                "type": 0
            },
            {
                "id": 121051,
                "name": "B200Turbo",
                "type": 0
            },
            {
                "id": 121061,
                "name": "C180",
                "type": 0
            },
            {
                "id": 121071,
                "name": "C200",
                "type": 0
            },
            {
                "id": 121081,
                "name": "C220",
                "type": 0
            },
            {
                "id": 121091,
                "name": "C230",
                "type": 0
            },
            {
                "id": 121101,
                "name": "C240",
                "type": 0
            },
            {
                "id": 121111,
                "name": "C250",
                "type": 0
            },
            {
                "id": 121121,
                "name": "C280",
                "type": 0
            },
            {
                "id": 121131,
                "name": "C350",
                "type": 0
            },
            {
                "id": 121141,
                "name": "C350کوپه",
                "type": 0
            },
            {
                "id": 121151,
                "name": "CLA200",
                "type": 0
            },
            {
                "id": 121161,
                "name": "CLK200کوپه",
                "type": 0
            },
            {
                "id": 121171,
                "name": "CLK280کروک",
                "type": 0
            },
            {
                "id": 121181,
                "name": "CLK280کوپه",
                "type": 0
            },
            {
                "id": 121191,
                "name": "CLS350",
                "type": 0
            },
            {
                "id": 121201,
                "name": "CLS500",
                "type": 0
            },
            {
                "id": 121211,
                "name": "E190",
                "type": 0
            },
            {
                "id": 121221,
                "name": "E200",
                "type": 0
            },
            {
                "id": 121231,
                "name": "E200(مونتاژ)",
                "type": 0
            },
            {
                "id": 121241,
                "name": "E220",
                "type": 0
            },
            {
                "id": 121251,
                "name": "E230",
                "type": 0
            },
            {
                "id": 121261,
                "name": "E230(مونتاژ)",
                "type": 0
            },
            {
                "id": 121271,
                "name": "E240",
                "type": 0
            },
            {
                "id": 121281,
                "name": "E250",
                "type": 0
            },
            {
                "id": 121291,
                "name": "E250کروک",
                "type": 0
            },
            {
                "id": 121301,
                "name": "E250کوپه",
                "type": 0
            },
            {
                "id": 121311,
                "name": "E260",
                "type": 0
            },
            {
                "id": 121321,
                "name": "E280",
                "type": 0
            },
            {
                "id": 121331,
                "name": "E280(مونتاژ)",
                "type": 0
            },
            {
                "id": 121341,
                "name": "E300",
                "type": 0
            },
            {
                "id": 121351,
                "name": "E350",
                "type": 0
            },
            {
                "id": 121361,
                "name": "E350کروک",
                "type": 0
            },
            {
                "id": 121371,
                "name": "E350کوپه",
                "type": 0
            },
            {
                "id": 121381,
                "name": "GLA200",
                "type": 0
            },
            {
                "id": 121391,
                "name": "GLA250",
                "type": 0
            },
            {
                "id": 121401,
                "name": "GLK280",
                "type": 0
            },
            {
                "id": 121411,
                "name": "GLK350",
                "type": 0
            },
            {
                "id": 121421,
                "name": "ML350",
                "type": 0
            },
            {
                "id": 121431,
                "name": "S280",
                "type": 0
            },
            {
                "id": 121441,
                "name": "S320",
                "type": 0
            },
            {
                "id": 121451,
                "name": "S350",
                "type": 0
            },
            {
                "id": 121461,
                "name": "S420",
                "type": 0
            },
            {
                "id": 121471,
                "name": "S500",
                "type": 0
            },
            {
                "id": 121481,
                "name": "SL350",
                "type": 0
            },
            {
                "id": 121491,
                "name": "SL450",
                "type": 0
            },
            {
                "id": 121501,
                "name": "SL500",
                "type": 0
            },
            {
                "id": 121511,
                "name": "SL65",
                "type": 0
            },
            {
                "id": 121521,
                "name": "SLC350",
                "type": 0
            },
            {
                "id": 121531,
                "name": "SLC450",
                "type": 0
            },
            {
                "id": 121541,
                "name": "SLK200",
                "type": 0
            },
            {
                "id": 121551,
                "name": "SLK280",
                "type": 0
            },
            {
                "id": 121561,
                "name": "SLK350",
                "type": 0
            },
            {
                "id": 121571,
                "name": "SLK55",
                "type": 0
            },
            {
                "id": 121581,
                "name": "کلاسSE",
                "type": 0
            },
            {
                "id": 121591,
                "name": "کلاسSEL",
                "type": 0
            },
            {
                "id": 121601,
                "name": "کلاسیک 4 سیلندر",
                "type": 0
            },
            {
                "id": 121611,
                "name": "کلاسیک 6 سیلندر",
                "type": 0
            },
            {
                "id": 121621,
                "name": "ون",
                "type": 0
            }
        ],
        "latinName": "Mercedes-Benz",
        "id": 12,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/12.png",
        "order": 16
    },
    {
        "name": "ب ام و  ",
        "model": [
            {
                "id": 8391,
                "name": "2002",
                "type": 0
            },
            {
                "id": 8401,
                "name": "118i",
                "type": 0
            },
            {
                "id": 8411,
                "name": "120i",
                "type": 0
            },
            {
                "id": 8421,
                "name": "125iکوپه  ",
                "type": 0
            },
            {
                "id": 8431,
                "name": "220iکوپه",
                "type": 0
            },
            {
                "id": 8441,
                "name": "228iکروک",
                "type": 0
            },
            {
                "id": 8451,
                "name": "316i",
                "type": 0
            },
            {
                "id": 8461,
                "name": "318i",
                "type": 0
            },
            {
                "id": 8471,
                "name": "320i",
                "type": 0
            },
            {
                "id": 8481,
                "name": "320iکروک",
                "type": 0
            },
            {
                "id": 8491,
                "name": "320iکوپه",
                "type": 0
            },
            {
                "id": 8501,
                "name": "325i",
                "type": 0
            },
            {
                "id": 8511,
                "name": "325iکروک",
                "type": 0
            },
            {
                "id": 8521,
                "name": "325iکوپه",
                "type": 0
            },
            {
                "id": 8531,
                "name": "328i",
                "type": 0
            },
            {
                "id": 8541,
                "name": "328iGT",
                "type": 0
            },
            {
                "id": 8551,
                "name": "330i",
                "type": 0
            },
            {
                "id": 8561,
                "name": "330iکروک",
                "type": 0
            },
            {
                "id": 8571,
                "name": "330iکوپه",
                "type": 0
            },
            {
                "id": 8581,
                "name": "335i",
                "type": 0
            },
            {
                "id": 8591,
                "name": "335iکروک",
                "type": 0
            },
            {
                "id": 8601,
                "name": "420iکوپه",
                "type": 0
            },
            {
                "id": 8611,
                "name": "420iگرن کوپه",
                "type": 0
            },
            {
                "id": 8621,
                "name": "428iکروک",
                "type": 0
            },
            {
                "id": 8631,
                "name": "428iگرن کوپه",
                "type": 0
            },
            {
                "id": 8641,
                "name": "518i",
                "type": 0
            },
            {
                "id": 8651,
                "name": "520i 4 سیلندر",
                "type": 0
            },
            {
                "id": 8861,
                "name": "520i 6 سیلندر",
                "type": 0
            },
            {
                "id": 8671,
                "name": "525i",
                "type": 0
            },
            {
                "id": 8681,
                "name": "528GT",
                "type": 0
            },
            {
                "id": 8691,
                "name": "528i",
                "type": 0
            },
            {
                "id": 8701,
                "name": "530i",
                "type": 0
            },
            {
                "id": 8711,
                "name": "530xi",
                "type": 0
            },
            {
                "id": 8721,
                "name": "535i",
                "type": 0
            },
            {
                "id": 8731,
                "name": "535iGT",
                "type": 0
            },
            {
                "id": 8741,
                "name": "540i",
                "type": 0
            },
            {
                "id": 8751,
                "name": "550i",
                "type": 0
            },
            {
                "id": 8761,
                "name": "630iکروک",
                "type": 0
            },
            {
                "id": 8771,
                "name": "630iکوپه",
                "type": 0
            },
            {
                "id": 8781,
                "name": "640iکوپه",
                "type": 0
            },
            {
                "id": 8791,
                "name": "640iگرن کوپه",
                "type": 0
            },
            {
                "id": 8801,
                "name": "650iکروک",
                "type": 0
            },
            {
                "id": 8811,
                "name": "650iگرن کوپه",
                "type": 0
            },
            {
                "id": 8821,
                "name": "730i",
                "type": 0
            },
            {
                "id": 8831,
                "name": "730Li",
                "type": 0
            },
            {
                "id": 8841,
                "name": "735i",
                "type": 0
            },
            {
                "id": 8851,
                "name": "740Li",
                "type": 0
            },
            {
                "id": 8661,
                "name": "523i",
                "type": 0
            },
            {
                "id": 86701,
                "name": "i8",
                "type": 0
            },
            {
                "id": 86711,
                "name": "M6",
                "type": 0
            },
            {
                "id": 86721,
                "name": "X1 18",
                "type": 0
            },
            {
                "id": 86731,
                "name": "X1 2.5",
                "type": 0
            },
            {
                "id": 86741,
                "name": "X1 20",
                "type": 0
            },
            {
                "id": 86751,
                "name": "X1 28",
                "type": 0
            },
            {
                "id": 86761,
                "name": "X3 25",
                "type": 0
            },
            {
                "id": 86771,
                "name": "X3 28",
                "type": 0
            },
            {
                "id": 86781,
                "name": "X3 30",
                "type": 0
            },
            {
                "id": 86791,
                "name": "X3 35",
                "type": 0
            },
            {
                "id": 86801,
                "name": "X4 28",
                "type": 0
            },
            {
                "id": 86811,
                "name": "X5",
                "type": 0
            },
            {
                "id": 86821,
                "name": "X6 35",
                "type": 0
            },
            {
                "id": 86831,
                "name": "X6 50",
                "type": 0
            },
            {
                "id": 86841,
                "name": "Z4 20",
                "type": 0
            },
            {
                "id": 86851,
                "name": "Z4 28",
                "type": 0
            },
            {
                "id": 86861,
                "name": "Z4 30",
                "type": 0
            },
            {
                "id": 86691,
                "name": "750",
                "type": 0
            }
        ],
        "latinName": "BMW",
        "id": 8,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/8.png",
        "order": 15
    },
    {
        "name": "مزدا  ",
        "model": [
            {
                "id": 645521,
                "name": "6",
                "type": 0
            },
            {
                "id": 645531,
                "name": "323",
                "type": 0
            },
            {
                "id": 645541,
                "name": "2(مونتاژ)",
                "type": 0
            },
            {
                "id": 645551,
                "name": "3(مونتاژ)",
                "type": 0
            },
            {
                "id": 645561,
                "name": "3جدیدصندوقدار",
                "type": 0
            },
            {
                "id": 645571,
                "name": "3جدیدهاچبک",
                "type": 0
            },
            {
                "id": 645582,
                "name": "1000 وانت 1 تن",
                "type": 1
            },
            {
                "id": 645592,
                "name": "1600 وانت 1 تن",
                "type": 1
            },
            {
                "id": 645602,
                "name": "1600 وانت 2 تن",
                "type": 1
            },
            {
                "id": 645612,
                "name": "1800 وانت 1 تن",
                "type": 1
            },
            {
                "id": 645622,
                "name": "1800 وانت 2 تن",
                "type": 1
            },
            {
                "id": 645632,
                "name": "2000 وانت 1 تن",
                "type": 1
            },
            {
                "id": 645642,
                "name": "2000 وانت 2 تن",
                "type": 1
            },
            {
                "id": 645652,
                "name": "2600 وانت 1 تن",
                "type": 1
            },
            {
                "id": 645662,
                "name": "2600 وانت 2 تن",
                "type": 1
            },
            {
                "id": 645672,
                "name": "1700I كارا وانت 2 تن",
                "type": 1
            }
        ],
        "latinName": "Mazda",
        "id": 64,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/64.png",
        "order": 14
    },
    {
        "name": "سمند  ",
        "model": [
            {
                "id": 434061,
                "name": "EL",
                "type": 0
            },
            {
                "id": 434071,
                "name": "LX",
                "type": 0
            },
            {
                "id": 434081,
                "name": "LXEF7",
                "type": 0
            },
            {
                "id": 434091,
                "name": "LXEF7دوگانه سوز",
                "type": 0
            },
            {
                "id": 434101,
                "name": "SE",
                "type": 0
            },
            {
                "id": 434111,
                "name": "X7",
                "type": 0
            },
            {
                "id": 434121,
                "name": "دنا",
                "type": 0
            },
            {
                "id": 434131,
                "name": "سریر",
                "type": 0
            },
            {
                "id": 434141,
                "name": "سورن",
                "type": 0
            },
            {
                "id": 434151,
                "name": "سورنELX",
                "type": 0
            },
            {
                "id": 434161,
                "name": "سورنELXتوربو",
                "type": 0
            }
        ],
        "latinName": "Samand",
        "id": 43,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/43.png",
        "order": 13
    },
    {
        "name": "ام وی ام  ",
        "model": [
            {
                "id": 5201,
                "name": "530",
                "type": 0
            },
            {
                "id": 5211,
                "name": "550",
                "type": 0
            },
            {
                "id": 5221,
                "name": "110sسه سیلندر",
                "type": 0
            },
            {
                "id": 5231,
                "name": "110چهارسیلندر",
                "type": 0
            },
            {
                "id": 5241,
                "name": "110سه سیلندر",
                "type": 0
            },
            {
                "id": 5251,
                "name": "315صندوقدار",
                "type": 0
            },
            {
                "id": 5261,
                "name": "315هاچبک",
                "type": 0
            },
            {
                "id": 5271,
                "name": "315هاچبکاسپرت",
                "type": 0
            },
            {
                "id": 5281,
                "name": "X33",
                "type": 0
            },
            {
                "id": 5291,
                "name": "X33S",
                "type": 0
            },
            {
                "id": 5301,
                "name": "آریزو5",
                "type": 0
            },
            {
                "id": 5311,
                "name": "تیگو5",
                "type": 0
            },
            {
                "id": 5321,
                "name": "تیگو5اسپرت",
                "type": 0
            },
            {
                "id": 5331,
                "name": "x22",
                "type": 0
            }
        ],
        "latinName": "MVM",
        "id": 5,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/5.png",
        "order": 12
    },
    {
        "name": "رنو  ",
        "model": [
            {
                "id": 383491,
                "name": "5",
                "type": 0
            },
            {
                "id": 383501,
                "name": "21",
                "type": 0
            },
            {
                "id": 383511,
                "name": "5(مونتاژ)",
                "type": 0
            },
            {
                "id": 383521,
                "name": "اسکالا",
                "type": 0
            },
            {
                "id": 383531,
                "name": "اسکالاکروک",
                "type": 0
            },
            {
                "id": 383541,
                "name": "پارس تندر",
                "type": 0
            },
            {
                "id": 383551,
                "name": "پیکی",
                "type": 0
            },
            {
                "id": 383561,
                "name": "تالیسمان",
                "type": 0
            },
            {
                "id": 383571,
                "name": "تندر 90 - E0",
                "type": 0
            },
            {
                "id": 383581,
                "name": "تندر90- E1",
                "type": 0
            },
            {
                "id": 383591,
                "name": "تندر90- E2",
                "type": 0
            },
            {
                "id": 383601,
                "name": "تندر 90 اتوماتیک",
                "type": 0
            },
            {
                "id": 383611,
                "name": "داستر",
                "type": 0
            },
            {
                "id": 383621,
                "name": "ساندرواتوماتیک(مونتاژ)",
                "type": 0
            },
            {
                "id": 383631,
                "name": "ساندرو استپوی اتوماتیک",
                "type": 0
            },
            {
                "id": 383641,
                "name": "ساندرواستپ وی دنده ای",
                "type": 0
            },
            {
                "id": 383651,
                "name": "ساندرودنده ای(مونتاژ)",
                "type": 0
            },
            {
                "id": 383661,
                "name": "سپند",
                "type": 0
            },
            {
                "id": 383671,
                "name": "سفران2.0",
                "type": 0
            },
            {
                "id": 383681,
                "name": "سفران2.5",
                "type": 0
            },
            {
                "id": 383691,
                "name": "سیمبلLE",
                "type": 0
            },
            {
                "id": 383701,
                "name": "سیمبلPE",
                "type": 0
            },
            {
                "id": 383711,
                "name": "فلوئنس",
                "type": 0
            },
            {
                "id": 383721,
                "name": "کپچر",
                "type": 0
            },
            {
                "id": 383731,
                "name": "کولیوس",
                "type": 0
            },
            {
                "id": 383741,
                "name": "لتیتود",
                "type": 0
            },
            {
                "id": 383751,
                "name": "مگان1600",
                "type": 0
            },
            {
                "id": 383761,
                "name": "مگان1600(مونتاژ)",
                "type": 0
            },
            {
                "id": 383771,
                "name": "مگان2000",
                "type": 0
            },
            {
                "id": 383781,
                "name": "مگان2000(مونتاژ)",
                "type": 0
            },
            {
                "id": 383791,
                "name": "مگان کروک",
                "type": 0
            },
            {
                "id": 383801,
                "name": "مگان هاچبک",
                "type": 0
            },
            {
                "id": 383812,
                "name": "L90 وانت 1 تن",
                "type": 1
            },
            {
                "id": 383822,
                "name": "پيكاپ وانت 1 تن",
                "type": 1
            },
            {
                "id": 383832,
                "name": "پيكاپ وانت 2 تن",
                "type": 1
            },
            {
                "id": 383842,
                "name": "تندر 90 وانت 2 تن",
                "type": 1
            },
            {
                "id": 383852,
                "name": "L 90 وانت 2 تن",
                "type": 1
            },
            {
                "id": 806635,
                "name": "تالیسمان",
                "type": 4
            },
            {
                "id": 806639,
                "name": "تندر 90 پلاس",
                "type": 0
            },
            {
                "id": 806652,
                "name": "تندر 90 پلاس اتوماتیک",
                "type": 0
            }
        ],
        "latinName": "Renault",
        "id": 38,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/38.png",
        "order": 12
    },
    {
        "name": "لکسوس  ",
        "model": [
            {
                "id": 595171,
                "name": "CT200H",
                "type": 0
            },
            {
                "id": 595181,
                "name": "ES250",
                "type": 0
            },
            {
                "id": 595191,
                "name": "ES350",
                "type": 0
            },
            {
                "id": 595201,
                "name": "GS250",
                "type": 0
            },
            {
                "id": 595211,
                "name": "GS430",
                "type": 0
            },
            {
                "id": 595221,
                "name": "GS460",
                "type": 0
            },
            {
                "id": 595231,
                "name": "IS250",
                "type": 0
            },
            {
                "id": 595241,
                "name": "IS300",
                "type": 0
            },
            {
                "id": 595251,
                "name": "IS300کروک",
                "type": 0
            },
            {
                "id": 595261,
                "name": "LS460",
                "type": 0
            },
            {
                "id": 595271,
                "name": "LX570",
                "type": 0
            },
            {
                "id": 595281,
                "name": "NX200T",
                "type": 0
            },
            {
                "id": 595291,
                "name": "NX300H",
                "type": 0
            },
            {
                "id": 595301,
                "name": "RX350",
                "type": 0
            },
            {
                "id": 806634,
                "name": "RX200T",
                "type": 4
            }
        ],
        "latinName": "Lexus",
        "id": 59,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/59.png",
        "order": 11
    },
    {
        "name": "هوندا  ",
        "model": [
            {
                "id": 706181,
                "name": "CR-V",
                "type": 0
            },
            {
                "id": 706191,
                "name": "آکورد",
                "type": 0
            },
            {
                "id": 706201,
                "name": "سیویک",
                "type": 0
            }
        ],
        "latinName": "Honda",
        "id": 70,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/70.png",
        "order": 10
    },
    {
        "name": "دنا  ",
        "model": [
            {
                "id": 333351,
                "name": "1.7لیتر",
                "type": 0
            }
        ],
        "latinName": "Dena",
        "id": 33,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/33.png",
        "order": 9
    },
    {
        "name": "نیسان  ",
        "model": [
            {
                "id": 675831,
                "name": "ZF",
                "type": 0
            },
            {
                "id": 675841,
                "name": "ایکس تریل",
                "type": 0
            },
            {
                "id": 675851,
                "name": "آلتیما",
                "type": 0
            },
            {
                "id": 675861,
                "name": "پاترول 2 درب 6 سیلندر",
                "type": 0
            },
            {
                "id": 675871,
                "name": "پاترول 2 درب چهارسیلندر",
                "type": 0
            },
            {
                "id": 675881,
                "name": "پاترول 4 درب 6 سیلندر",
                "type": 0
            },
            {
                "id": 675891,
                "name": "پاترول 4 درب چهار سیلندر",
                "type": 0
            },
            {
                "id": 675901,
                "name": "تیینا",
                "type": 0
            },
            {
                "id": 675911,
                "name": "تیینا(مونتاژ)",
                "type": 0
            },
            {
                "id": 675921,
                "name": "جوک",
                "type": 0
            },
            {
                "id": 675931,
                "name": "رونیز",
                "type": 0
            },
            {
                "id": 675941,
                "name": "سافاری",
                "type": 0
            },
            {
                "id": 675951,
                "name": "سرانزا",
                "type": 0
            },
            {
                "id": 675961,
                "name": "قشقایی",
                "type": 0
            },
            {
                "id": 675971,
                "name": "قشقایی(مونتاژ)",
                "type": 0
            },
            {
                "id": 675981,
                "name": "ماکسیما",
                "type": 0
            },
            {
                "id": 675991,
                "name": "مورانو",
                "type": 0
            },
            {
                "id": 676002,
                "name": "24 وانت 3 تن",
                "type": 1
            },
            {
                "id": 676012,
                "name": "24 وانت 2 تن",
                "type": 1
            },
            {
                "id": 676022,
                "name": "1200 وانت 1 تن",
                "type": 1
            },
            {
                "id": 676032,
                "name": "1800 وانت 1 تن",
                "type": 1
            },
            {
                "id": 676042,
                "name": "2000 وانت 3 تن",
                "type": 1
            },
            {
                "id": 676052,
                "name": "2000 وانت 2 تن",
                "type": 1
            },
            {
                "id": 676062,
                "name": "2400 وانت 3 تن",
                "type": 1
            },
            {
                "id": 676072,
                "name": "2400 وانت 2 تن",
                "type": 1
            },
            {
                "id": 676082,
                "name": " وانت 2 تن",
                "type": 1
            },
            {
                "id": 676092,
                "name": "DX وانت 2 تن",
                "type": 1
            },
            {
                "id": 676102,
                "name": "FGD21 وانت 1 تن",
                "type": 1
            },
            {
                "id": 676112,
                "name": "پاترول وانت 1 تن",
                "type": 1
            },
            {
                "id": 676122,
                "name": "پاترول وانت 2 تن",
                "type": 1
            },
            {
                "id": 676132,
                "name": "پيكاپ وانت 2 تن",
                "type": 1
            },
            {
                "id": 676142,
                "name": "زامياد وانت 1 تن",
                "type": 1
            },
            {
                "id": 676152,
                "name": "سايپا وانت 1 تن",
                "type": 1
            }
        ],
        "latinName": "Nissan",
        "id": 67,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/67.png",
        "order": 8
    },
    {
        "name": "لیفان  ",
        "model": [
            {
                "id": 625361,
                "name": "1.662",
                "type": 0
            },
            {
                "id": 625371,
                "name": "1.862",
                "type": 0
            },
            {
                "id": 625381,
                "name": "520",
                "type": 0
            },
            {
                "id": 625391,
                "name": "820",
                "type": 0
            },
            {
                "id": 625401,
                "name": "520i",
                "type": 0
            },
            {
                "id": 625411,
                "name": "X50",
                "type": 0
            },
            {
                "id": 625421,
                "name": "X50 اتوماتیک",
                "type": 0
            },
            {
                "id": 625431,
                "name": "X60",
                "type": 0
            },
            {
                "id": 625441,
                "name": "X60 اتوماتیک",
                "type": 0
            }
        ],
        "latinName": "Lifan",
        "id": 62,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/62.png",
        "order": 7
    },
    {
        "name": "سیتروئن  ",
        "model": [
            {
                "id": 464251,
                "name": "C5",
                "type": 0
            },
            {
                "id": 464261,
                "name": "زانتیا",
                "type": 0
            },
            {
                "id": 464271,
                "name": "ژیان",
                "type": 0
            }
        ],
        "latinName": "Citroen",
        "id": 46,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/46.png",
        "order": 6
    },
    {
        "name": "سانگ یانگ  ",
        "model": [
            {
                "id": 413891,
                "name": "اکتیون",
                "type": 0
            },
            {
                "id": 413901,
                "name": "تیوولی",
                "type": 0
            },
            {
                "id": 413911,
                "name": "چیرمن500",
                "type": 0
            },
            {
                "id": 413921,
                "name": "چیرمن600",
                "type": 0
            },
            {
                "id": 413931,
                "name": "رکستون",
                "type": 0
            },
            {
                "id": 413941,
                "name": "رودیوس",
                "type": 0
            },
            {
                "id": 413951,
                "name": "کایرون",
                "type": 0
            },
            {
                "id": 413961,
                "name": "کوراندو 4 سیلندر",
                "type": 0
            },
            {
                "id": 413971,
                "name": "کوراندو 6 سیلندر",
                "type": 0
            },
            {
                "id": 413981,
                "name": "موسو 4 سیلندر",
                "type": 0
            },
            {
                "id": 413991,
                "name": "موسو 6 سیلندر",
                "type": 0
            },
            {
                "id": 414001,
                "name": "نیواکتیون",
                "type": 0
            },
            {
                "id": 414011,
                "name": "نیوکوراندو",
                "type": 0
            }
        ],
        "latinName": "SsangYong",
        "id": 41,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/41.png",
        "order": 5
    },
    {
        "name": "چری  ",
        "model": [
            {
                "id": 313311,
                "name": "A15",
                "type": 0
            },
            {
                "id": 313321,
                "name": "تیگو",
                "type": 0
            },
            {
                "id": 313331,
                "name": "ویانا",
                "type": 0
            },
            {
                "id": 806645,
                "name": "آریزو 5",
                "type": 0
            }
        ],
        "latinName": "Chery",
        "id": 31,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/31.png",
        "order": 4
    },
    {
        "name": "رانا  ",
        "model": [
            {
                "id": 373471,
                "name": "EL",
                "type": 0
            },
            {
                "id": 373481,
                "name": "LX",
                "type": 0
            }
        ],
        "latinName": "Rana",
        "id": 37,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/37.png",
        "order": 3
    },
    {
        "name": "جیلی  ",
        "model": [
            {
                "id": 293251,
                "name": "امگرند7",
                "type": 0
            },
            {
                "id": 293261,
                "name": "امگرندRV-7",
                "type": 0
            },
            {
                "id": 293271,
                "name": "امگرندX7",
                "type": 0
            },
            {
                "id": 806644,
                "name": "GS6",
                "type": 0
            }
        ],
        "latinName": "Geely",
        "id": 29,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/29.png",
        "order": 2
    },
    {
        "name": "جک  ",
        "model": [
            {
                "id": 253071,
                "name": "S5اتوماتیک",
                "type": 0
            },
            {
                "id": 253081,
                "name": "S5دنده ای",
                "type": 0
            },
            {
                "id": 253091,
                "name": "جی3",
                "type": 0
            },
            {
                "id": 253101,
                "name": "جی3-هاچبک",
                "type": 0
            },
            {
                "id": 253111,
                "name": "جی5-",
                "type": 0
            },
            {
                "id": 253121,
                "name": "جی5-1.5",
                "type": 0
            },
            {
                "id": 806642,
                "name": "S3",
                "type": 0
            }
        ],
        "latinName": "JAC",
        "id": 25,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/25.png",
        "order": 1
    },
    {
        "name": "بی وای دی  ",
        "model": [
            {
                "id": 131631,
                "name": "s6",
                "type": 0
            }
        ],
        "latinName": "BYD",
        "id": 13,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/13.png",
        "order": 0
    },
    {
        "name": "بیوک  ",
        "model": [
            {
                "id": 141641,
                "name": "B2",
                "type": 0
            },
            {
                "id": 141651,
                "name": "B3",
                "type": 0
            },
            {
                "id": 141661,
                "name": "B3(مونتاژ)",
                "type": 0
            },
            {
                "id": 141671,
                "name": "B4",
                "type": 0
            },
            {
                "id": 141681,
                "name": "B6",
                "type": 0
            },
            {
                "id": 141691,
                "name": "الکترا",
                "type": 0
            },
            {
                "id": 141701,
                "name": "سنچری",
                "type": 0
            },
            {
                "id": 141711,
                "name": "گوناگون",
                "type": 0
            },
            {
                "id": 146881,
                "name": "رگال",
                "type": 0
            },
            {
                "id": 146891,
                "name": "لسابر",
                "type": 0
            },
            {
                "id": 146901,
                "name": "اسکای لارک",
                "type": 0
            }
        ],
        "latinName": "Buick",
        "id": 14,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/14.png",
        "order": 0
    },
    {
        "name": "پاژن  ",
        "model": [
            {
                "id": 151721,
                "name": "گوناگون",
                "type": 0
            },
            {
                "id": 151731,
                "name": "هرور",
                "type": 0
            },
            {
                "id": 151742,
                "name": "42405 وانت 1 تن",
                "type": 1
            }
        ],
        "latinName": "Pajan",
        "id": 15,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/15.png",
        "order": 0
    },
    {
        "name": "پروتون  ",
        "model": [
            {
                "id": 172011,
                "name": "ایمپیان",
                "type": 0
            },
            {
                "id": 172021,
                "name": "جنتو",
                "type": 0
            },
            {
                "id": 172031,
                "name": "ویرا",
                "type": 0
            }
        ],
        "latinName": "Proton",
        "id": 17,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/17.png",
        "order": 0
    },
    {
        "name": "پورشه  ",
        "model": [
            {
                "id": 192411,
                "name": "911",
                "type": 0
            },
            {
                "id": 192421,
                "name": "911GT3-RS",
                "type": 0
            },
            {
                "id": 192431,
                "name": "911توربو",
                "type": 0
            },
            {
                "id": 192441,
                "name": "باکستر",
                "type": 0
            },
            {
                "id": 192451,
                "name": "باکسترS",
                "type": 0
            },
            {
                "id": 192461,
                "name": "پانامرا",
                "type": 0
            },
            {
                "id": 192471,
                "name": "پانامرا4S",
                "type": 0
            },
            {
                "id": 192481,
                "name": "پانامراتوربو",
                "type": 0
            },
            {
                "id": 192491,
                "name": "کاین",
                "type": 0
            },
            {
                "id": 192501,
                "name": "کاینGTS",
                "type": 0
            },
            {
                "id": 192511,
                "name": "کاینS",
                "type": 0
            },
            {
                "id": 192521,
                "name": "کاینتوربو",
                "type": 0
            },
            {
                "id": 192531,
                "name": "کیمنS",
                "type": 0
            },
            {
                "id": 192541,
                "name": "ماکان",
                "type": 0
            },
            {
                "id": 192551,
                "name": "ماکانS",
                "type": 0
            },
            {
                "id": 192561,
                "name": "ماکان توربو",
                "type": 0
            }
        ],
        "latinName": "Porsche",
        "id": 19,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/19.png",
        "order": 0
    },
    {
        "name": "پونتیاک  ",
        "model": [
            {
                "id": 202571,
                "name": "فایربرد",
                "type": 0
            },
            {
                "id": 202581,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Pontiac",
        "id": 20,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/20.png",
        "order": 0
    },
    {
        "name": "پیکان  ",
        "model": [
            {
                "id": 212591,
                "name": "گوناگون",
                "type": 0
            },
            {
                "id": 212602,
                "name": "1600 وانت 1 تن",
                "type": 1
            },
            {
                "id": 212612,
                "name": " وانت 1 تن",
                "type": 1
            },
            {
                "id": 212622,
                "name": "باردو وانت 1 تن",
                "type": 1
            }
        ],
        "latinName": "Peykan",
        "id": 21,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/21.png",
        "order": 0
    },
    {
        "name": "تریومف  ",
        "model": [
            {
                "id": 222631,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Triumph",
        "id": 22,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/22.png",
        "order": 0
    },
    {
        "name": "تیبا  ",
        "model": [
            {
                "id": 243051,
                "name": "صندوقدار",
                "type": 0
            },
            {
                "id": 243061,
                "name": "هاچبک",
                "type": 0
            }
        ],
        "latinName": "Tiba",
        "id": 24,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/24.png",
        "order": 0
    },
    {
        "name": "جگوار  ",
        "model": [
            {
                "id": 263131,
                "name": "jx",
                "type": 0
            },
            {
                "id": 263141,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Jaguar",
        "id": 26,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/26.png",
        "order": 0
    },
    {
        "name": "جی ام سی  ",
        "model": [
            {
                "id": 273151,
                "name": "سیرا",
                "type": 0
            }
        ],
        "latinName": "GMC",
        "id": 27,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/27.png",
        "order": 0
    },
    {
        "name": "جیپ  ",
        "model": [
            {
                "id": 283161,
                "name": "KM",
                "type": 0
            },
            {
                "id": 283171,
                "name": "آهو",
                "type": 0
            },
            {
                "id": 283181,
                "name": "چروکی",
                "type": 0
            },
            {
                "id": 283191,
                "name": "شهباز",
                "type": 0
            },
            {
                "id": 283201,
                "name": "صحرا",
                "type": 0
            },
            {
                "id": 283211,
                "name": "کامپس",
                "type": 0
            },
            {
                "id": 283222,
                "name": "سيمرغ وانت 1 تن",
                "type": 1
            },
            {
                "id": 283232,
                "name": "سيمرغ وانت 3 تن",
                "type": 1
            },
            {
                "id": 283242,
                "name": "سيمرغ وانت 2 تن",
                "type": 1
            }
        ],
        "latinName": "Jeep",
        "id": 28,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/28.png",
        "order": 0
    },
    {
        "name": "چانگان  ",
        "model": [
            {
                "id": 303281,
                "name": "CS35",
                "type": 0
            },
            {
                "id": 303291,
                "name": "CS35(مونتاژ)",
                "type": 0
            },
            {
                "id": 303301,
                "name": "ایدو",
                "type": 0
            }
        ],
        "latinName": "Changan",
        "id": 30,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/30.png",
        "order": 0
    },
    {
        "name": "دانگ فنگ  ",
        "model": [
            {
                "id": 323341,
                "name": "H30Cross",
                "type": 0
            }
        ],
        "latinName": "Dongfeng",
        "id": 32,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/32.png",
        "order": 0
    },
    {
        "name": "دوج  ",
        "model": [
            {
                "id": 343361,
                "name": "پلیموت",
                "type": 0
            },
            {
                "id": 343371,
                "name": "چارجر",
                "type": 0
            },
            {
                "id": 343381,
                "name": "چالنجر",
                "type": 0
            },
            {
                "id": 343391,
                "name": "دسوتو",
                "type": 0
            }
        ],
        "latinName": "Dodge",
        "id": 34,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/34.png",
        "order": 0
    },
    {
        "name": "دوو  ",
        "model": [
            {
                "id": 353401,
                "name": "اسپرو",
                "type": 0
            },
            {
                "id": 353411,
                "name": "ریسر",
                "type": 0
            },
            {
                "id": 353421,
                "name": "سیلو",
                "type": 0
            },
            {
                "id": 353431,
                "name": "ماتیز3سیلندر",
                "type": 0
            },
            {
                "id": 353441,
                "name": "ماتیز4سیلندر",
                "type": 0
            }
        ],
        "latinName": "Daewoo",
        "id": 35,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/35.png",
        "order": 0
    },
    {
        "name": "دی اس  ",
        "model": [
            {
                "id": 363451,
                "name": "5",
                "type": 0
            },
            {
                "id": 363461,
                "name": "6",
                "type": 0
            }
        ],
        "latinName": "DS",
        "id": 36,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/36.png",
        "order": 0
    },
    {
        "name": "روور  ",
        "model": [
            {
                "id": 393861,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Rover",
        "id": 39,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/39.png",
        "order": 0
    },
    {
        "name": "زوتی  ",
        "model": [
            {
                "id": 403871,
                "name": "z300",
                "type": 0
            },
            {
                "id": 403881,
                "name": "اریو1600",
                "type": 0
            }
        ],
        "latinName": "Zotye",
        "id": 40,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/40.png",
        "order": 0
    },
    {
        "name": "ساینا  ",
        "model": [
            {
                "id": 424021,
                "name": "EX",
                "type": 0
            },
            {
                "id": 424031,
                "name": "SX",
                "type": 0
            },
            {
                "id": 424041,
                "name": "TTکروک",
                "type": 0
            },
            {
                "id": 424051,
                "name": "TTکوپه",
                "type": 0
            }
        ],
        "latinName": "Saina",
        "id": 42,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/42.png",
        "order": 0
    },
    {
        "name": "اپل  ",
        "model": [
            {
                "id": 111,
                "name": "امگا",
                "type": 0
            },
            {
                "id": 121,
                "name": "اینسیگنیا",
                "type": 0
            },
            {
                "id": 131,
                "name": "آسترا",
                "type": 0
            },
            {
                "id": 141,
                "name": "آسترا هاچبک",
                "type": 0
            },
            {
                "id": 151,
                "name": "کورسا اتوماتیک",
                "type": 0
            },
            {
                "id": 161,
                "name": "کورسادنده ای",
                "type": 0
            },
            {
                "id": 171,
                "name": "موکا",
                "type": 0
            },
            {
                "id": 181,
                "name": "وکترا",
                "type": 0
            }
        ],
        "latinName": "Opel",
        "id": 1,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/1.png",
        "order": 0
    },
    {
        "name": "سوبارو  ",
        "model": [
            {
                "id": 444171,
                "name": "XV",
                "type": 0
            },
            {
                "id": 444181,
                "name": "فارستر",
                "type": 0
            },
            {
                "id": 444191,
                "name": "لگاسی",
                "type": 0
            }
        ],
        "latinName": "Subaro",
        "id": 44,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/44.png",
        "order": 0
    },
    {
        "name": "سوزوکی  ",
        "model": [
            {
                "id": 454201,
                "name": "کیزاشی",
                "type": 0
            },
            {
                "id": 454211,
                "name": " ویتارا",
                "type": 0
            },
            {
                "id": 454221,
                "name": "ویتارا2.0(مونتاژ)",
                "type": 0
            },
            {
                "id": 454231,
                "name": "ویتارا2.4(مونتاژ)",
                "type": 0
            }
        ],
        "latinName": "Suzuki",
        "id": 45,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/45.png",
        "order": 0
    },
    {
        "name": "الدزمبیل  ",
        "model": [
            {
                "id": 291,
                "name": "کاتلاس",
                "type": 0
            },
            {
                "id": 26671,
                "name": "سیرا",
                "type": 0
            }
        ],
        "latinName": "Oldsmobile",
        "id": 2,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/2.png",
        "order": 0
    },
    {
        "name": "سیناد  ",
        "model": [
            {
                "id": 474281,
                "name": "سیناد2",
                "type": 0
            }
        ],
        "latinName": "Sinad",
        "id": 47,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/47.png",
        "order": 0
    },
    {
        "name": "شورولت  ",
        "model": [
            {
                "id": 484291,
                "name": "ایمپالا",
                "type": 0
            },
            {
                "id": 484301,
                "name": "بلر",
                "type": 0
            },
            {
                "id": 484311,
                "name": "بلیزر",
                "type": 0
            },
            {
                "id": 484321,
                "name": "جیامسی",
                "type": 0
            },
            {
                "id": 484331,
                "name": "جیمی",
                "type": 0
            },
            {
                "id": 484341,
                "name": "رویال(مونتاژ)",
                "type": 0
            },
            {
                "id": 484351,
                "name": "سابربن",
                "type": 0
            },
            {
                "id": 484361,
                "name": "کاپریس",
                "type": 0
            },
            {
                "id": 484371,
                "name": "کامارو",
                "type": 0
            },
            {
                "id": 484381,
                "name": "ملیبو",
                "type": 0
            },
            {
                "id": 484391,
                "name": "نوا",
                "type": 0
            },
            {
                "id": 484401,
                "name": "نوا(مونتاژ)",
                "type": 0
            },
            {
                "id": 484412,
                "name": "1800 وانت 1 تن",
                "type": 1
            },
            {
                "id": 484422,
                "name": "2000 وانت 1 تن",
                "type": 1
            },
            {
                "id": 484432,
                "name": " وانت 2 تن",
                "type": 1
            },
            {
                "id": 484442,
                "name": "GMC وانت 2 تن",
                "type": 1
            },
            {
                "id": 484452,
                "name": "اس 10 وانت 1 تن",
                "type": 1
            },
            {
                "id": 484462,
                "name": "كاستوم وانت 1 تن",
                "type": 1
            },
            {
                "id": 484472,
                "name": "لاو وانت 1 تن",
                "type": 1
            }
        ],
        "latinName": "Chevrolet",
        "id": 48,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/48.png",
        "order": 0
    },
    {
        "name": "فورد  ",
        "model": [
            {
                "id": 494481,
                "name": "اج",
                "type": 0
            },
            {
                "id": 494491,
                "name": "برانکو",
                "type": 0
            },
            {
                "id": 494501,
                "name": "تاروس",
                "type": 0
            },
            {
                "id": 494511,
                "name": "ترانزیت",
                "type": 0
            },
            {
                "id": 494521,
                "name": "کنتیننتال",
                "type": 0
            },
            {
                "id": 494531,
                "name": "موستانگ",
                "type": 0
            }
        ],
        "latinName": "Ford",
        "id": 49,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/49.png",
        "order": 0
    },
    {
        "name": "فولکس  ",
        "model": [
            {
                "id": 504541,
                "name": "استیشن",
                "type": 0
            },
            {
                "id": 504551,
                "name": "بیتل",
                "type": 0
            },
            {
                "id": 504561,
                "name": "بیتل کروک",
                "type": 0
            },
            {
                "id": 504571,
                "name": "پاسات",
                "type": 0
            },
            {
                "id": 504581,
                "name": "ترانسپورتر",
                "type": 0
            },
            {
                "id": 504591,
                "name": "تینگ",
                "type": 0
            },
            {
                "id": 504601,
                "name": "جتا",
                "type": 0
            },
            {
                "id": 504611,
                "name": "کدی",
                "type": 0
            },
            {
                "id": 504621,
                "name": "گل",
                "type": 0
            },
            {
                "id": 504631,
                "name": "گلف",
                "type": 0
            },
            {
                "id": 504641,
                "name": "گوناگون",
                "type": 0
            },
            {
                "id": 504652,
                "name": "ترانسپورتر وانت 1 تن",
                "type": 1
            },
            {
                "id": 504662,
                "name": " وانت 1 تن",
                "type": 1
            },
            {
                "id": 504672,
                "name": " وانت 2 تن",
                "type": 1
            }
        ],
        "latinName": "Volkswagen",
        "id": 50,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/50.png",
        "order": 0
    },
    {
        "name": "فیات  ",
        "model": [
            {
                "id": 514681,
                "name": "سیینا",
                "type": 0
            },
            {
                "id": 514691,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Fiat",
        "id": 51,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/51.png",
        "order": 0
    },
    {
        "name": "کاپرا  ",
        "model": [
            {
                "id": 526642,
                "name": " وانت 1 تن",
                "type": 1
            },
            {
                "id": 806647,
                "name": "2",
                "type": 0
            }
        ],
        "latinName": "Capra",
        "id": 52,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/52.png",
        "order": 0
    },
    {
        "name": "کادیلاک  ",
        "model": [
            {
                "id": 534701,
                "name": "ATS",
                "type": 0
            },
            {
                "id": 534711,
                "name": "اسکلید",
                "type": 0
            },
            {
                "id": 534721,
                "name": "دویل",
                "type": 0
            },
            {
                "id": 534731,
                "name": "سویل",
                "type": 0
            },
            {
                "id": 534741,
                "name": "سویل(مونتاژ)",
                "type": 0
            },
            {
                "id": 534751,
                "name": "فلیتوود",
                "type": 0
            }
        ],
        "latinName": "Cadillac",
        "id": 53,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/53.png",
        "order": 0
    },
    {
        "name": "کرایسلر  ",
        "model": [
            {
                "id": 544761,
                "name": "ATS",
                "type": 0
            },
            {
                "id": 544771,
                "name": "اسکلید",
                "type": 0
            },
            {
                "id": 544781,
                "name": "دویل",
                "type": 0
            },
            {
                "id": 544791,
                "name": "سویل",
                "type": 0
            },
            {
                "id": 544801,
                "name": "سویل(مونتاژ)",
                "type": 0
            },
            {
                "id": 544811,
                "name": "فلیتوود",
                "type": 0
            }
        ],
        "latinName": "Chrysler",
        "id": 54,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/54.png",
        "order": 0
    },
    {
        "name": "آلفارومئو  ",
        "model": [
            {
                "id": 3101,
                "name": "4c",
                "type": 0
            },
            {
                "id": 3111,
                "name": "جولیتا",
                "type": 0
            },
            {
                "id": 3121,
                "name": "گوناگون",
                "type": 0
            },
            {
                "id": 3131,
                "name": "میتو",
                "type": 0
            }
        ],
        "latinName": "Alfa Romeo",
        "id": 3,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/3.png",
        "order": 0
    },
    {
        "name": "گریت وال  ",
        "model": [
            {
                "id": 565071,
                "name": "هاوالH6",
                "type": 0
            },
            {
                "id": 565081,
                "name": "هاوالM4",
                "type": 0
            },
            {
                "id": 565091,
                "name": "هاوالM4(مونتاژ)",
                "type": 0
            },
            {
                "id": 565101,
                "name": "ولکسC30اتوماتیک",
                "type": 0
            },
            {
                "id": 565111,
                "name": "ولکسC30دنده ای",
                "type": 0
            },
            {
                "id": 565121,
                "name": "وینگل",
                "type": 0
            },
            {
                "id": 565131,
                "name": "وینگل3",
                "type": 0
            }
        ],
        "latinName": "Great wall",
        "id": 56,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/56.png",
        "order": 0
    },
    {
        "name": "گک گونو  ",
        "model": [
            {
                "id": 575141,
                "name": "G5",
                "type": 0
            }
        ],
        "latinName": "Gac Gonow",
        "id": 57,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/57.png",
        "order": 0
    },
    {
        "name": "لادا  ",
        "model": [
            {
                "id": 585151,
                "name": "گوناگون",
                "type": 0
            },
            {
                "id": 585161,
                "name": "نیوا",
                "type": 0
            }
        ],
        "latinName": "Lada",
        "id": 58,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/58.png",
        "order": 0
    },
    {
        "name": "ام جی  ",
        "model": [
            {
                "id": 4141,
                "name": "3",
                "type": 0
            },
            {
                "id": 4151,
                "name": "6",
                "type": 0
            },
            {
                "id": 4161,
                "name": "350",
                "type": 0
            },
            {
                "id": 4171,
                "name": "550",
                "type": 0
            },
            {
                "id": 4181,
                "name": "GS",
                "type": 0
            },
            {
                "id": 4191,
                "name": "گوناگون",
                "type": 0
            },
            {
                "id": 46681,
                "name": "GT",
                "type": 0
            }
        ],
        "latinName": "MG",
        "id": 4,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/4.png",
        "order": 0
    },
    {
        "name": "لندرور  ",
        "model": [
            {
                "id": 605311,
                "name": "دیفندر",
                "type": 0
            },
            {
                "id": 605321,
                "name": "رنجرور",
                "type": 0
            },
            {
                "id": 605331,
                "name": "رنجروراسپرت",
                "type": 0
            },
            {
                "id": 605341,
                "name": "رنجرورایووک",
                "type": 0
            }
        ],
        "latinName": "Land Rover",
        "id": 60,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/60.png",
        "order": 0
    },
    {
        "name": "هافی لوبو ",
        "model": [
            {
                "id": 615351,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Hafei Lobo",
        "id": 61,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/61.png",
        "order": 0
    },
    {
        "name": "ایسوزو  ",
        "model": [
            {
                "id": 6331,
                "name": "دیمکس",
                "type": 0
            },
            {
                "id": 66542,
                "name": "1600 وانت 2 تن",
                "type": 1
            },
            {
                "id": 66552,
                "name": "1800 وانت 1 تن",
                "type": 1
            },
            {
                "id": 66562,
                "name": "1800 وانت 2 تن",
                "type": 1
            },
            {
                "id": 66572,
                "name": " وانت 1 تن",
                "type": 1
            }
        ],
        "latinName": "Isuzu",
        "id": 6,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/6.png",
        "order": 0
    },
    {
        "name": "مازراتی  ",
        "model": [
            {
                "id": 635451,
                "name": "کواتروپورته",
                "type": 0
            },
            {
                "id": 635461,
                "name": "گرنتوریسموMC",
                "type": 0
            },
            {
                "id": 635471,
                "name": "گرنتوریسموS",
                "type": 0
            },
            {
                "id": 635481,
                "name": "گرنکبریو",
                "type": 0
            },
            {
                "id": 635491,
                "name": "گرنکبریوMC",
                "type": 0
            },
            {
                "id": 635501,
                "name": "گرنکبریوS",
                "type": 0
            },
            {
                "id": 635511,
                "name": "گیبلی",
                "type": 0
            }
        ],
        "latinName": "Maserati",
        "id": 63,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/63.png",
        "order": 0
    },
    {
        "name": "آئودی  ",
        "model": [
            {
                "id": 7341,
                "name": "A6",
                "type": 0
            },
            {
                "id": 7351,
                "name": "Q5",
                "type": 0
            },
            {
                "id": 7361,
                "name": "Q7",
                "type": 0
            },
            {
                "id": 7371,
                "name": "TTکروک",
                "type": 0
            },
            {
                "id": 7381,
                "name": "TTکوپه",
                "type": 0
            }
        ],
        "latinName": "Audi",
        "id": 7,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/7.png",
        "order": 0
    },
    {
        "name": "میتسوبیشی  ",
        "model": [
            {
                "id": 655681,
                "name": "ASX",
                "type": 0
            },
            {
                "id": 655691,
                "name": "اوتلندر",
                "type": 0
            },
            {
                "id": 655701,
                "name": "پاجرو(مونتاژ)",
                "type": 0
            },
            {
                "id": 655711,
                "name": "پاجروچهاردر",
                "type": 0
            },
            {
                "id": 655721,
                "name": "پاجرودودر",
                "type": 0
            },
            {
                "id": 655731,
                "name": "گالانت",
                "type": 0
            },
            {
                "id": 655741,
                "name": "لنسر",
                "type": 0
            },
            {
                "id": 655751,
                "name": "میراژ",
                "type": 0
            },
            {
                "id": 655762,
                "name": " وانت 2 تن",
                "type": 1
            },
            {
                "id": 655772,
                "name": "ال 200 وانت 1 تن",
                "type": 1
            },
            {
                "id": 655782,
                "name": "كلت وانت 1 تن",
                "type": 1
            },
            {
                "id": 655792,
                "name": "گالانت 1600 وانت 1 تن",
                "type": 1
            }
        ],
        "latinName": "Mitsubishi",
        "id": 65,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/65.png",
        "order": 0
    },
    {
        "name": "مینی ماینر  ",
        "model": [
            {
                "id": 665801,
                "name": "کانتریمنS",
                "type": 0
            },
            {
                "id": 665811,
                "name": "کوپرS",
                "type": 0
            },
            {
                "id": 665821,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Mini-Minor",
        "id": 66,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/66.png",
        "order": 0
    },
    {
        "name": "بایک  ",
        "model": [
            {
                "id": 9861,
                "name": "سابریناهاچبک",
                "type": 0
            },
            {
                "id": 9871,
                "name": "سابریناهاچبک(مونتاژ)",
                "type": 0
            },
            {
                "id": 9881,
                "name": "سنوا",
                "type": 0
            }
        ],
        "latinName": "BAIC",
        "id": 9,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/9.png",
        "order": 0
    },
    {
        "name": "هامر  ",
        "model": [
            {
                "id": 686161,
                "name": "H2",
                "type": 0
            }
        ],
        "latinName": "Hummer",
        "id": 68,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/68.png",
        "order": 0
    },
    {
        "name": "هایما  ",
        "model": [
            {
                "id": 696171,
                "name": "S7",
                "type": 0
            }
        ],
        "latinName": "Haima",
        "id": 69,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/69.png",
        "order": 0
    },
    {
        "name": "برلیانس  ",
        "model": [
            {
                "id": 10891,
                "name": "H220اتوماتیک",
                "type": 0
            },
            {
                "id": 10901,
                "name": "H220دنده ای",
                "type": 0
            },
            {
                "id": 10911,
                "name": "H230اتوماتیک",
                "type": 0
            },
            {
                "id": 10921,
                "name": "H230دنده ای",
                "type": 0
            },
            {
                "id": 10931,
                "name": "H320اتوماتیک",
                "type": 0
            },
            {
                "id": 10941,
                "name": "H320دنده ای",
                "type": 0
            },
            {
                "id": 10951,
                "name": "H330اتوماتیک",
                "type": 0
            },
            {
                "id": 10961,
                "name": "H330دنده ای",
                "type": 0
            },
            {
                "id": 10971,
                "name": "V5",
                "type": 0
            },
            {
                "id": 106871,
                "name": "H2L",
                "type": 0
            },
            {
                "id": 806646,
                "name": "کراس C3",
                "type": 0
            }
        ],
        "latinName": "Brilliance",
        "id": 10,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/10.png",
        "order": 0
    },
    {
        "name": "بسترن  ",
        "model": [
            {
                "id": 11981,
                "name": "B50",
                "type": 0
            },
            {
                "id": 11991,
                "name": "B50F",
                "type": 0
            },
            {
                "id": 806643,
                "name": "B30",
                "type": 0
            }
        ],
        "latinName": "Besturn",
        "id": 11,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/11.png",
        "order": 0
    },
    {
        "name": "وست فیلد  ",
        "model": [
            {
                "id": 726481,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Westfield",
        "id": 72,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/72.png",
        "order": 0
    },
    {
        "name": "ولوو  ",
        "model": [
            {
                "id": 736491,
                "name": "C70کروک",
                "type": 0
            },
            {
                "id": 736501,
                "name": "V40",
                "type": 0
            },
            {
                "id": 736511,
                "name": "XC60",
                "type": 0
            },
            {
                "id": 736521,
                "name": "XC90",
                "type": 0
            },
            {
                "id": 736531,
                "name": "گوناگون",
                "type": 0
            }
        ],
        "latinName": "Volvo",
        "id": 73,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/73.png",
        "order": 0
    },
    {
        "name": "لوتوس",
        "model": [],
        "latinName": "Lotus",
        "id": 74,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/74.png",
        "order": 0
    },
    {
        "name": "اینفینیتی",
        "model": [],
        "latinName": "Infiniti",
        "id": 75,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/75.png",
        "order": 0
    },
    {
        "name": "بنتلی",
        "model": [],
        "latinName": "Bentely",
        "id": 76,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/76.png",
        "order": 0
    },
    {
        "name": "آريسان",
        "model": [
            {
                "id": 776582,
                "name": "آريسان وانت 2 تن",
                "type": 1
            }
        ],
        "latinName": "arisan",
        "id": 77,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/77.png",
        "order": 0
    },
    {
        "name": "زامياد",
        "model": [
            {
                "id": 786592,
                "name": " وانت 3 تن",
                "type": 1
            },
            {
                "id": 786602,
                "name": "Z24 وانت 3 تن",
                "type": 1
            },
            {
                "id": 786612,
                "name": "Z28 وانت 3 تن",
                "type": 1
            }
        ],
        "latinName": "zamiad",
        "id": 78,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/78.png",
        "order": 0
    },
    {
        "name": "كاكی",
        "model": [
            {
                "id": 796652,
                "name": "KYS وانت 2 تن",
                "type": 1
            }
        ],
        "latinName": "Caky",
        "id": 79,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/79.png",
        "order": 0
    },
    {
        "name": "سايپا",
        "model": [
            {
                "id": 806622,
                "name": "151 وانت 1 تن",
                "type": 1
            },
            {
                "id": 806632,
                "name": "151 وانت 1 تن",
                "type": 1
            }
        ],
        "latinName": "saipa",
        "id": 80,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/80.png",
        "order": 0
    },
    {
        "name": "آریو",
        "model": [
            {
                "id": 806648,
                "name": "S300",
                "type": 0
            }
        ],
        "latinName": "ario",
        "id": 81,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/81.png",
        "order": 0
    },
    {
        "name": "فوتون",
        "model": [
            {
                "id": 806649,
                "name": "تونلند",
                "type": 0
            }
        ],
        "latinName": "foton",
        "id": 82,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/82.png",
        "order": 0
    },
    {
        "name": "سابرینا",
        "model": [
            {
                "id": 806650,
                "name": "صندوق دار",
                "type": 0
            },
            {
                "id": 806651,
                "name": "هاچ بک تیپ 4",
                "type": 0
            }
        ],
        "latinName": "sabrina",
        "id": 83,
        "icon": "https://bimito.com/BimiTO/Resources/Image/HC/CarType/83.png",
        "order": 0
    }
]