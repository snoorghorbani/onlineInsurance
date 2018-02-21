/** The default month names to use if Intl API is not available. */
import { NativeDateAdapter } from "@angular/material";
import { Injectable } from "@angular/core";
import { UtilityService } from "@soushians/infra";

export const PERSIAN_DATE_FORMATS = {
	parse: {
		dateInput: { month: "short", year: "numeric", day: "numeric" }
	},
	display: {
		// dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
		dateInput: "input",
		monthYearLabel: { year: "numeric", month: "short" },
		dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
		monthYearA11yLabel: { year: "numeric", month: "long" }
	}
};

const DEFAULT_MONTH_NAMES = {
	long: [ "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند" ],
	short: [ "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند" ],
	narrow: [ "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند" ]
};

/** The default date names to use if Intl API is not available. */
const DEFAULT_DATE_NAMES = range(31, (i) => String(i + 1));

/** The default day of the week names to use if Intl API is not available. */
const DEFAULT_DAY_OF_WEEK_NAMES = {
	long: [ "شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار‌شنبه", "پنجشنبه", "جمعه" ],
	short: [ "شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار‌شنبه", "پنجشنبه", "جمعه" ],
	narrow: [ "ش", "ی", "د", "س", "چ", "پ", "ج" ]
};

/** Creates an array and fills it with values. */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
	const valuesArray = Array(length);
	for (let i = 0; i < length; i++) {
		valuesArray[i] = valueFunction(i);
	}
	return valuesArray;
}

/** Adapts the native JS Date for use with cdk-based components that work with dates. */
export class PersianDateAdapter extends NativeDateAdapter {
	utilityService: UtilityService = new UtilityService();
	// constructor(localeId: any) {
	//     super('fa-IR');
	// };
	/**
     * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
     * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
     * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
     * will produce `'8/13/1800'`.
     */
	useUtcForDisplay: boolean = true;
	// getYear(date: Date): number {
	//     debugger
	//     var persianDate = this.utilityService.date.georgian.to.persian(date.getFullYear(), date.getMonth(), date.getDate());
	//     return parseInt(persianDate.year);
	// };
	// getMonth(date: Date): number {
	//     debugger
	//     // var persianDate = this.utilityService.date.georgian.to.persian(date.getFullYear(), date.getMonth(), date.getDate());
	//     // let persian = this.utilityService.date.georgian.to.persian(year.toString(), month.toString(), date.toString());
	//     // let mapOfDateToPersian = this.utilityService.date.persian.to.georgian(persian.year, (parseInt(persian.month)).toString(), date);
	//     // return parseInt(persianDate.month);
	//     return (date.getMonth() + 3) % 11;
	// };
	// getDate(date: Date): number {
	//     debugger
	//     var persianDate = this.utilityService.date.georgian.to.persian(date.getFullYear(), date.getMonth(), date.getDate());
	//     return parseInt(persianDate.date);
	// };
	// getDayOfWeek(date: Date): number {
	//     var persianDate = this.utilityService.date.georgian.to.persian(date.getFullYear(), date.getMonth(), date.getDate());

	//     return this.utilityService.date.persian.getDayOfWeek(persianDate.year, persianDate.month, persianDate.date);
	// };
	// getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
	//     return ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
	// };
	getDateNames(): string[] {
		return DEFAULT_DATE_NAMES;
	}
	// getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
	//     debugger
	//     return ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار‌شنبه', 'پنجشنبه', 'جمعه']
	// };
	// getYearName(date: Date): string {
	//     debugger
	//     var persianDate = this.utilityService.date.georgian.to.persian(date.getFullYear(), date.getMonth(), date.getDate());
	//     return persianDate.year;
	// };
	getFirstDayOfWeek(): number {
		return 6;
	}
	getNumDaysInMonth(date: Date): number {
		let persian = this.utilityService.date.georgian.to.persian(date.getFullYear(), date.getMonth(), date.getDate());
		var month = +persian.month;
		return this.utilityService.date.persian.PERSIAN_MONTH_DAYS_COUNT[month];
	}
	// clone(date: Date): Date {
	//         return new Date();
	// };
	createDate(year: number, month: number, date: number): Date {
		if (month < 0 || month > 11) {
			throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
		}

		if (date < 1) {
			throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
		}
		var firstOfNewMotnt = 23;
		var persianMonthLength;
		var firstDayMonth;
		var persian = this.utilityService.date.georgian.to.persian(year.toString(), month.toString(), date.toString());
		persianMonthLength = this.utilityService.date.persian.PERSIAN_MONTH_DAYS_COUNT[+persian.month - 1];
		var firstDat_geo = this.utilityService.date.persian.to.georgian(persian.year, persian.month, 1);
		// var lastDayOfMonth = new Date(parseInt(firstDat_geo.year), parseInt(firstDat_geo.month), 30)
		firstOfNewMotnt = +firstDat_geo.date;

		// for (var index = 1; index <= persianMonthLength; index++) {
		//     var tempDate = this.utilityService.date.persian.to.georgian(persian.year, persian.month, index);
		//     if (tempDate.month != firstDayMonth) {
		//         firstOfNewMotnt = +tempDate.date;
		//         break;
		//     }
		// }

		persianMonthLength;
		// let georgian = this.utilityService.date.persian.to.georgian(year.toString(), month.toString(), date.toString());
		let mapOfDateToPersian = this.utilityService.date.persian.to.georgian(
			persian.year,
			+date < firstOfNewMotnt ? parseInt(persian.month).toString() : (parseInt(persian.month) - 1).toString(),
			date
		);
		// let persian = this.utilityService.date.persian.create(year.toString(), month.toString(), date.toString());

		let result = mapOfDateToPersian.nativeDate();
		// Check that the date wasn't above the upper bound for the month, causing the month to overflow
		// if (result.getMonth() != month) {
		//     throw Error(`Invalid date "${date}" for month with index "${month}".`);
		// }

		return result;
	}
	// today(): Date {

	//     debugger
	//     //  this.utilityService.date.persian.now().nativeDate();
	//     // return this.utilityService.date.persian.now().nativeDate();
	//     let georgianDate = this.utilityService.date.persian.to.georgian(1396, 6, 5);
	//     return georgianDate.nativeDate();
	//     // return new Date()
	// };
	// parse(value: any): Date | null {
	//     if (!value) return;
	//     debugger
	//     let inEnglish = toEnglishDigits(value);
	//     let dateParts = inEnglish.split('/');
	//     let georgianDate = this.utilityService.date.persian.to.georgian(1396, 6, 5);
	//     return georgianDate.nativeDate();
	// };
	// // format(date: Date, displayFormat: Object): string {
	// //     debugger
	// //     return 'format'
	// // };
	// addCalendarYears(date: Date, years: number): Date {
	//     debugger
	//     return new Date();
	// };
	// addCalendarMonths(date: Date, months: number): Date {
	//     var persianDate = this.utilityService.date.georgian.to.persian(date.getFullYear(), date.getMonth(), date.getDate());
	//     // return parseInt(persianDate.month);
	//     return new Date();
	// };
	// addCalendarDays(date: Date, days: number): Date {
	//         return new Date();
	// };
	// getISODateString(date: Date): string {
	//     debugger
	//         return 'asdf';
	// };
	// isDateInstance(obj: any): boolean {
	//         return true
	// };
	// isValid(date: Date): boolean {
	//     return true
	// };

	// private __createDateWithOverflow(year: number, month: number, date: number) {
	//     let result = new Date(year, month, date);

	//     // We need to correct for the fact that JS native Date treats years in range [0, 99] as
	//     // abbreviations for 19xx.
	//     if (year >= 0 && year < 100) {
	//         result.setFullYear(this.getYear(result) - 1900);
	//     }
	//     return result;
	// }
}

let toEnglishDigits = function(str): string {
	var num_dic = {
		"۰": "0",
		"۱": "1",
		"۲": "2",
		"۳": "3",
		"۴": "4",
		"۵": "5",
		"۶": "6",
		"۷": "7",
		"۸": "8",
		"۹": "9"
	};

	return str.replace(/[۰-۹]/g, function(w) {
		return num_dic[w];
	});
};
