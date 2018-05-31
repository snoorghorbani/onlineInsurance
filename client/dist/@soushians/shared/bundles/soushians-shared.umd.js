(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@soushians/shared', ['exports', '@angular/core'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.shared = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DataUnitPipe = (function () {
        function DataUnitPipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        DataUnitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (value == 0)
                    return "0 بایت";
                if (value == null)
                    return "نامحدود";
                var /** @type {?} */ B = 1;
                var /** @type {?} */ KB = B * 1024;
                var /** @type {?} */ MB = KB * 1024;
                var /** @type {?} */ GB = MB * 1024;
                var /** @type {?} */ convertedValue;
                var /** @type {?} */ suffix = "بایت";
                if (value >= GB) {
                    suffix = "گیگا بایت";
                    convertedValue = (value / GB).toFixed(2);
                }
                else if (value >= MB) {
                    suffix = "مگا بایت";
                    convertedValue = (value / MB).toFixed(2);
                }
                else if (value >= KB) {
                    suffix = "کیلو بایت";
                    convertedValue = (value / KB).toFixed(2);
                }
                else {
                    suffix = "بایت";
                    convertedValue = value.toFixed(2);
                }
                return convertedValue + " " + suffix;
            };
        DataUnitPipe.decorators = [
            { type: i0.Pipe, args: [{ name: "dataUnit" },] },
        ];
        return DataUnitPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimeUnitPipe = (function () {
        function TimeUnitPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getDays = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60 * 60 * 24;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' روز',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getHours = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60 * 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' ساعت',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getMinuts = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' دقیقه',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeUnitPipe.prototype.getSeconds = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ count = Math.floor((value));
                return {
                    count: count,
                    value: count + ' ثانیه',
                    remaining: value - count
                };
            };
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        TimeUnitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (value === 0)
                    return '0 دقیقه';
                if (!value)
                    return '';
                var /** @type {?} */ connector = ' و ';
                var /** @type {?} */ daysData = this.getDays(value);
                var /** @type {?} */ hoursData = this.getHours(daysData.remaining);
                var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
                // let secondssData = this.getSeconds(minutsData.remaining);
                return [daysData, hoursData, minutsData]
                    .filter(function (i) { return i.count; })
                    .map(function (i) { return i.value; }).join(connector);
            };
        TimeUnitPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'timeUnit' },] },
        ];
        return TimeUnitPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PersianDatePipe = (function () {
        function PersianDatePipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        PersianDatePipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value)
                    return "";
                var /** @type {?} */ date = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
                var /** @type {?} */ persianDate = _.date.georgian.to.persian(date.getFullYear(), date.getMonth() + 1, date.getDate());
                return [
                    parseInt(persianDate[0]).toLocaleString("fa-IR", { useGrouping: false }),
                    parseInt(persianDate[1]).toLocaleString("fa-IR", { useGrouping: false }),
                    parseInt(persianDate[2]).toLocaleString("fa-IR", { useGrouping: false })
                ].join("/");
            };
        PersianDatePipe.decorators = [
            { type: i0.Pipe, args: [{ name: "persianDate" },] },
        ];
        return PersianDatePipe;
    }());
    var ɵ0 = function (_) {
        var /** @type {?} */ is = function (node, selector) {
            if (node.matches)
                return node.matches(selector);
            var /** @type {?} */ nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
            return nodes.indexOf(node) > -1 ? true : false;
        };
        is.object = function (_var) {
            return Object.prototype.toString.call(_var) === "[object Object]";
        };
        is.nodeList = function (obj) {
            if (_.is.not.ie())
                return Object.prototype.toString.call(obj) === "[object NodeList]";
            else
                return (obj.length !== undefined &&
                    obj.push === undefined &&
                    (obj.length > 0 ? obj[0].tagName !== undefined : true));
        };
        is.element = function (obj) {
            return Object.prototype.toString.call(obj).search("Element") > -1;
            //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
        };
        is.HTMLCollection = function (obj) {
            return Object.prototype.toString.call(obj) === "[object HTMLCollection]";
        };
        is.array = function (_var) {
            return Object.prototype.toString.call(_var) === "[object Array]";
        };
        is.number = function (_var) {
            return Object.prototype.toString.call(_var) === "[object Number]";
        };
        is["function"] = function (_var) {
            return Object.prototype.toString.call(_var) === "[object Function]";
        };
        is.string = function (_var) {
            return Object.prototype.toString.call(_var) === "[object String]"; //&& ((isEmpty));
        };
        is.undefined = function (_var) {
            return Object.prototype.toString.call(_var) === "[object Undefined]";
        };
        is.event = function (_var) {
            return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
        };
        is.defined = function (_var) {
            //return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
            return _var !== undefined && _var !== null && _var !== "";
        };
        is.json = function () { };
        is.error = function () { };
        is.startWith = function (str, prefix) {
            return str.indexOf(prefix) === 0;
        };
        is.endWith = function (str) { };
        is.value = function (_var) {
            return _var ? true : false;
        };
        is.empty = function (o) {
            if (_.is.object(0))
                for (var /** @type {?} */ i in o)
                    if (o.hasOwnProperty(i))
                        return false;
            if (_.is.array(o))
                return o.length === 0;
            return true;
        };
        is.truthy = function () { };
        is.scalar = function (_var) {
            //TODO : improve
            return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
        };
        is.prototypeProp = function (obj, prop) {
            return obj[prop] && !obj.hasOwnProperty(prop);
        };
        is.equal = function (fv, sv) {
            //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
            //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
            return JSON.stringify(fv) == JSON.stringify(sv) ? true : false;
        };
        is.equalText = function (fv, sv) {
            return fv.toLowerCase(fv) === sv.toLowerCase(sv) ? true : false;
        };
        is.closet = function (fo, so) {
            return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
        };
        is.contain = function (str, searchStr) {
            var /** @type {?} */ reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
            return str.match(reg) && str.match(reg).length > 0;
        };
        is.regex = function (r) {
            return r.constructor.name === "RegExp";
        };
        is.same = function (fv, sv) {
            //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
            //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
            return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
        };
        is.persianLeapYear = function (year) {
            return (((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682) % 2816 < 682;
        };
        is.georgianLeapYear = function (year) {
            return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
        };
        var /** @type {?} */ not = {};
        var /** @type {?} */ i;
        for (i in is)
            (function (i) {
                if (is.hasOwnProperty(i))
                    not[i] = function (a, b, c) {
                        return !is[i](a, b, c);
                    };
            })(i);
        is.not = not;
        //TODO : impelement
        var /** @type {?} */ all = {};
        for (i in is)
            (function (i) {
                if (is.hasOwnProperty(i))
                    all[i] = function (o) { };
            })(i);
        is.all = all;
        var /** @type {?} */ any = {};
        for (var /** @type {?} */ j in is)
            (function (j) {
                if (is.hasOwnProperty(j))
                    any[j] = function (o) { };
            })(j);
        is.any = any;
        return is;
    }, ɵ1 = function () {
        var /** @type {?} */ math = {};
        math.mod = function (a, b) {
            return a - b * Math.floor(a / b);
        };
        return math;
    }, ɵ2 = function () {
        var /** @type {?} */ PERSIAN_EPOCH = 1948320.5, /** @type {?} */ GREGORIAN_EPOCH = 1721425.5;
        var /** @type {?} */ date = {};
        date.persian = {};
        date.persian.to = {};
        date.georgian = {};
        date.georgian.to = {};
        date.julian = {};
        date.julian.to = {};
        var /** @type {?} */ insertZero = function (i) {
            i = i.toString();
            return i.length == 1 ? "0" + i : i;
        };
        date.persian.to.julian = function (year, month, day) {
            var /** @type {?} */ epbase, /** @type {?} */ epyear;
            year = parseInt(year);
            month = parseInt(month);
            day = parseInt(day);
            epbase = year - (year >= 0 ? 474 : 473);
            epyear = 474 + _.math.mod(epbase, 2820);
            return (day +
                (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
                Math.floor((epyear * 682 - 110) / 2816) +
                (epyear - 1) * 365 +
                Math.floor(epbase / 2820) * 1029983 +
                (PERSIAN_EPOCH - 1));
        };
        date.persian.to.georgian = function (year, month, day, joinCharacter) {
            var /** @type {?} */ dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year), parseInt(month) + 1, parseInt(day)));
            return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
        };
        date.georgian.to.julian = function (year, month, day) {
            year = parseInt(year);
            month = parseInt(month);
            day = parseInt(day);
            return (GREGORIAN_EPOCH -
                1 +
                365 * (year - 1) +
                Math.floor((year - 1) / 4) +
                -Math.floor((year - 1) / 100) +
                Math.floor((year - 1) / 400) +
                Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : _.is.georgianLeapYear(year) ? -1 : -2) + day));
        };
        date.georgian.to.persian = function (year, month, day, joinCharacter) {
            var /** @type {?} */ dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year), parseInt(month), parseInt(day)));
            return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
        };
        date.julian.to.georgian = function (jd) {
            var /** @type {?} */ wjd, /** @type {?} */ depoch, /** @type {?} */ quadricent, /** @type {?} */ dqc, /** @type {?} */ cent, /** @type {?} */ dcent, /** @type {?} */ quad, /** @type {?} */ dquad, /** @type {?} */ yindex, /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ yearday, /** @type {?} */ leapadj;
            jd = parseFloat(jd);
            wjd = Math.floor(jd - 0.5) + 0.5;
            depoch = wjd - GREGORIAN_EPOCH;
            quadricent = Math.floor(depoch / 146097);
            dqc = _.math.mod(depoch, 146097);
            cent = Math.floor(dqc / 36524);
            dcent = _.math.mod(dqc, 36524);
            quad = Math.floor(dcent / 1461);
            dquad = _.math.mod(dcent, 1461);
            yindex = Math.floor(dquad / 365);
            year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
            if (!(cent == 4 || yindex == 4)) {
                year++;
            }
            yearday = wjd - _.date.georgian.to.julian(year, 1, 1);
            leapadj = wjd < _.date.georgian.to.julian(year, 3, 1) ? 0 : _.is.georgianLeapYear(year) ? 1 : 2;
            month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
            day = wjd - _.date.georgian.to.julian(year, month, 1) + 1;
            return new Array(insertZero(year), insertZero(month), insertZero(day));
        };
        date.julian.to.persian = function (jd) {
            var /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ depoch, /** @type {?} */ cycle, /** @type {?} */ cyear, /** @type {?} */ ycycle, /** @type {?} */ aux1, /** @type {?} */ aux2, /** @type {?} */ yday;
            jd = parseFloat(jd);
            jd = Math.floor(jd) + 0.5;
            depoch = jd - _.date.persian.to.julian(475, 1, 1);
            cycle = Math.floor(depoch / 1029983);
            cyear = _.math.mod(depoch, 1029983);
            if (cyear == 1029982) {
                ycycle = 2820;
            }
            else {
                aux1 = Math.floor(cyear / 366);
                aux2 = _.math.mod(cyear, 366);
                ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
            }
            year = ycycle + 2820 * cycle + 474;
            if (year <= 0) {
                year--;
            }
            yday = jd - _.date.persian.to.julian(year, 1, 1) + 1;
            month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
            day = jd - _.date.persian.to.julian(year, month, 1) + 1;
            return new Array(insertZero(year), insertZero(month), insertZero(day));
        };
        return date;
    };
    var /** @type {?} */ _ = {
        is: (ɵ0)(this),
        math: (ɵ1)(),
        date: (ɵ2)()
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CurrencyUnitPipe = (function () {
        function CurrencyUnitPipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        CurrencyUnitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value && value != 0)
                    return '';
                else if (value == 0)
                    return 'رایگان';
                var /** @type {?} */ suffix = 'ریال';
                return [value.toLocaleString('fa-IR'), suffix].join(' ');
            };
        CurrencyUnitPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'currencyUnit' },] },
        ];
        return CurrencyUnitPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PersianNumberPipe = (function () {
        function PersianNumberPipe() {
        }
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        PersianNumberPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value)
                    return '';
                var /** @type {?} */ res = '';
                for (var /** @type {?} */ index = 0; index < value.length; index++) {
                    res += (+value[index]).toLocaleString('fa-IR', {
                        useGrouping: false
                    });
                }
                return res;
            };
        PersianNumberPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'persianNumber' },] },
        ];
        return PersianNumberPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimeCounterPipe = (function () {
        function TimeCounterPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TimeCounterPipe.prototype.getHours = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60 * 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' ساعت',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeCounterPipe.prototype.getMinuts = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ rate = 60;
                var /** @type {?} */ count = Math.floor(value / rate);
                return {
                    count: count,
                    value: count + ' دقیقه',
                    remaining: value - count * rate
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeCounterPipe.prototype.getSeconds = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ count = Math.floor((value));
                return {
                    count: count,
                    value: count + ' ثانیه',
                    remaining: value - count
                };
            };
        /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
        TimeCounterPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} exponent
         * @return {?}
         */
            function (value, exponent) {
                if (!value)
                    return '';
                var /** @type {?} */ connector = ' : ';
                // let daysData = this.getDays(value);
                var /** @type {?} */ hoursData = this.getHours(value);
                var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
                var /** @type {?} */ secondssData = this.getSeconds(minutsData.remaining);
                return [secondssData, minutsData, hoursData]
                    .map(function (i) { return i.count; }).join(connector);
            };
        TimeCounterPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'timeCounter' },] },
        ];
        return TimeCounterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SharedModule = (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                        exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
                    },] },
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var /**
     * @abstract
     * @template T
     */ HttpResponseBaseModel = (function () {
        function HttpResponseBaseModel() {
        }
        return HttpResponseBaseModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var /**
     * @abstract
     * @template T
     */ HttpRequestBaseModel = (function () {
        function HttpRequestBaseModel() {
        }
        return HttpRequestBaseModel;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
    var /** @type {?} */ PERSIAN_MONTH_NAMES = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند"
    ];
    var DateClass = (function () {
        function DateClass(year, month, date) {
            this.year = year;
            this.month = month;
            this.date = date;
        }
        /**
         * @param {?=} seprator
         * @return {?}
         */
        DateClass.prototype.fullDate = /**
         * @param {?=} seprator
         * @return {?}
         */
            function (seprator) {
                if (seprator === void 0) {
                    seprator = "/";
                }
                return [this.year, this.month, this.date].join(seprator);
            };
        /**
         * @return {?}
         */
        DateClass.prototype.nativeDate = /**
         * @return {?}
         */
            function () {
                return new Date(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.date));
            };
        return DateClass;
    }());
    var UtilityService = (function () {
        function UtilityService() {
            this.is = (function (_, undefined) {
                var /** @type {?} */ is = function (node, selector) {
                    if (node.matches)
                        return node.matches(selector);
                    var /** @type {?} */ nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
                    return nodes.indexOf(node) > -1 ? true : false;
                };
                is.object = function (_var) {
                    return Object.prototype.toString.call(_var) === "[object Object]";
                };
                is.nodeList = function (obj) {
                    if (_.is.not.ie())
                        return Object.prototype.toString.call(obj) === "[object NodeList]";
                    else
                        return (obj.length !== undefined &&
                            obj.push === undefined &&
                            (obj.length > 0 ? obj[0].tagName !== undefined : true));
                };
                is.element = function (obj) {
                    return Object.prototype.toString.call(obj).search("Element") > -1;
                    //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
                };
                is.HTMLCollection = function (obj) {
                    return Object.prototype.toString.call(obj) === "[object HTMLCollection]";
                };
                is.array = function (_var) {
                    return Object.prototype.toString.call(_var) === "[object Array]";
                };
                is.number = function (_var) {
                    return Object.prototype.toString.call(_var) === "[object Number]";
                };
                is["function"] = function (_var) {
                    return Object.prototype.toString.call(_var) === "[object Function]";
                };
                is.string = function (_var) {
                    return Object.prototype.toString.call(_var) === "[object String]"; //&& ((isEmpty));
                };
                is.undefined = function (_var) {
                    return Object.prototype.toString.call(_var) === "[object Undefined]";
                };
                is.event = function (_var) {
                    return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
                };
                is.defined = function (_var) {
                    //return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
                    return _var !== undefined && _var !== null && _var !== "";
                };
                is.json = function () { };
                is.error = function () { };
                is.startWith = function (str, prefix) {
                    return str.indexOf(prefix) === 0;
                };
                is.endWith = function (str) { };
                is.value = function (_var) {
                    return _var ? true : false;
                };
                is.empty = function (o) {
                    if (_.is.object(0))
                        for (var /** @type {?} */ i in o)
                            if (o.hasOwnProperty(i))
                                return false;
                    if (_.is.array(o))
                        return o.length === 0;
                    return true;
                };
                is.truthy = function () { };
                is.scalar = function (_var) {
                    //TODO : improve
                    return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
                };
                is.prototypeProp = function (obj, prop) {
                    return obj[prop] && !obj.hasOwnProperty(prop);
                };
                is.equal = function (fv, sv) {
                    //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                    //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                    return JSON.stringify(fv) == JSON.stringify(sv) ? true : false;
                };
                is.equalText = function (fv, sv) {
                    return fv.toLowerCase(fv) === sv.toLowerCase(sv) ? true : false;
                };
                is.contain = function (str, searchStr) {
                    var /** @type {?} */ reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
                    return str.match(reg) && str.match(reg).length > 0;
                };
                is.regex = function (r) {
                    return r.constructor.name === "RegExp";
                };
                is.same = function (fv, sv) {
                    //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                    //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                    return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
                };
                is.persianLeapYear = function (year) {
                    return (((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682) % 2816 < 682;
                };
                is.georgianLeapYear = function (year) {
                    return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
                };
                var /** @type {?} */ not = {};
                var /** @type {?} */ i;
                for (i in is)
                    (function (i) {
                        if (is.hasOwnProperty(i))
                            not[i] = function (a, b, c) {
                                return !is[i](a, b, c);
                            };
                    })(i);
                is.not = not;
                //TODO : impelement
                var /** @type {?} */ all = {};
                for (i in is)
                    (function (i) {
                        if (is.hasOwnProperty(i))
                            all[i] = function (o) { };
                    })(i);
                is.all = all;
                var /** @type {?} */ any = {};
                for (var /** @type {?} */ j in is)
                    (function (j) {
                        if (is.hasOwnProperty(j))
                            any[j] = function (o) { };
                    })(j);
                is.any = any;
                return is;
            })(this);
            this.math = (function (_) {
                var /** @type {?} */ math = {};
                math.mod = function (a, b) {
                    return a - b * Math.floor(a / b);
                };
                return math;
            })(this);
            this.date = (function (_) {
                var /** @type {?} */ PERSIAN_EPOCH = 1948320.5, /** @type {?} */ GREGORIAN_EPOCH = 1721425.5;
                var /** @type {?} */ date = {
                    persian: {
                        PERSIAN_MONTH_DAYS_COUNT: [],
                        now: function () { return null; },
                        create: function (y, m, d) { return null; },
                        getDaysOfoMonth: function (idx) { return null; },
                        getDayOfWeek: function (y, m, d) { return null; },
                        foretimeMonthOfYear: function () { return []; },
                        to: {
                            georgian: function () { return null; },
                            julian: function () { return null; }
                        }
                    },
                    julian: {
                        to: {
                            georgian: function () { return null; },
                            persian: function () { return null; }
                        }
                    },
                    georgian: {
                        // getFutureDate: (n: number) => null,
                        now: function () { return null; },
                        getRelativeDay: function (n) { return null; },
                        parse: function (date) { return null; },
                        to: {
                            persian: function () { return null; },
                            julian: function () { return null; }
                        }
                    },
                    as: {
                        Date: function () { return null; }
                    }
                };
                // date.persian = {};
                // date.persian.to = {};
                // date.georgian = {};
                // date.georgian.to = {};
                // date.julian = {};
                // date.julian.to = {};
                // date.as = {};
                date.as.Date = function (_a) {
                    var _b = __read(_a, 3), y = _b[0], m = _b[1], d = _b[2];
                    return new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
                };
                var /** @type {?} */ insertZero = function (i) {
                    i = i.toString();
                    return i.length == 1 ? "0" + i : i;
                };
                date.persian.PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
                date.persian.now = function () {
                    var /** @type {?} */ now = new Date();
                    return date.georgian.to.persian(now.getFullYear(), now.getMonth(), now.getDate());
                };
                date.persian.create = function (y, m, d) { return new DateClass(y, m, d); };
                date.persian.getDaysOfoMonth = function (idx) {
                    var /** @type {?} */ count = PERSIAN_MONTH_DAYS_COUNT[idx];
                    var /** @type {?} */ res = [];
                    for (var /** @type {?} */ i = 1; i < count + 1; i++) {
                        var /** @type {?} */ dayName = i < 10 ? "0" + i : i.toString();
                        res.push(dayName);
                    }
                    return res;
                };
                date.persian.getDayOfWeek = function (y, m, d) {
                    var /** @type {?} */ persianHoliday = date.persian.create("1396", "1", "1");
                    var /** @type {?} */ persianHolidayInGeorgian = date.persian.to.georgian("1396", "1", "1").nativeDate();
                    var /** @type {?} */ month = +m - 1;
                    var /** @type {?} */ day = +d;
                    var /** @type {?} */ daysOfYear = PERSIAN_MONTH_DAYS_COUNT.reduce(function (a, b, idx) {
                        if (idx == month)
                            return a + day;
                        if (idx > month)
                            return a;
                        return a + b;
                    });
                    return (daysOfYear + persianHolidayInGeorgian.getDay() - 1) % 7;
                };
                date.persian.foretimeMonthOfYear = function () {
                    return PERSIAN_MONTH_NAMES.filter(function (item, idx) { return idx <= +date.persian.now().month - 1; });
                };
                date.persian.to.julian = function (year, month, day) {
                    var /** @type {?} */ epbase, /** @type {?} */ epyear;
                    year = parseInt(year.toString());
                    month = parseInt(month.toString());
                    day = parseInt(day.toString());
                    epbase = year - (year >= 0 ? 474 : 473);
                    epyear = 474 + _.math.mod(epbase, 2820);
                    return (day +
                        (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
                        Math.floor((epyear * 682 - 110) / 2816) +
                        (epyear - 1) * 365 +
                        Math.floor(epbase / 2820) * 1029983 +
                        (PERSIAN_EPOCH - 1));
                };
                date.persian.to.georgian = function (year, month, day) {
                    var /** @type {?} */ dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                    return new DateClass(dateArray[0], parseInt(dateArray[1]), dateArray[2]);
                };
                date.georgian.parse = function (date) {
                    return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
                };
                date.georgian.to.julian = function (year, month, day) {
                    year = parseInt(year.toString());
                    month = parseInt(month.toString()) + 1;
                    day = parseInt(day.toString());
                    return (GREGORIAN_EPOCH -
                        1 +
                        365 * (year - 1) +
                        Math.floor((year - 1) / 4) +
                        -Math.floor((year - 1) / 100) +
                        Math.floor((year - 1) / 400) +
                        Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : _.is.georgianLeapYear(year) ? -1 : -2) + day));
                };
                date.georgian.to.persian = function (year, month, day) {
                    var /** @type {?} */ dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                    return new DateClass(dateArray[0], dateArray[1], dateArray[2]);
                };
                // date.georgian.getFutureDate = function (n) {
                //     var now = new Date();
                //     return new Date(now.getFullYear(), now.getMonth(), now.getDate() + n);
                // }
                date.georgian.now = function () {
                    var /** @type {?} */ now = new Date();
                    return new DateClass(now.getFullYear(), now.getMonth() + 1, now.getDate());
                };
                (date.georgian.getRelativeDay = function (n) {
                    var /** @type {?} */ date = new Date(Date.now() + -1 * n * 24 * 60 * 60 * 1000);
                    return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
                }),
                    (date.julian.to.georgian = function (jd) {
                        var /** @type {?} */ wjd, /** @type {?} */ depoch, /** @type {?} */ quadricent, /** @type {?} */ dqc, /** @type {?} */ cent, /** @type {?} */ dcent, /** @type {?} */ quad, /** @type {?} */ dquad, /** @type {?} */ yindex, /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ yearday, /** @type {?} */ leapadj;
                        jd = parseFloat(jd.toString());
                        wjd = Math.floor(jd - 0.5) + 0.5;
                        depoch = wjd - GREGORIAN_EPOCH;
                        quadricent = Math.floor(depoch / 146097);
                        dqc = _.math.mod(depoch, 146097);
                        cent = Math.floor(dqc / 36524);
                        dcent = _.math.mod(dqc, 36524);
                        quad = Math.floor(dcent / 1461);
                        dquad = _.math.mod(dcent, 1461);
                        yindex = Math.floor(dquad / 365);
                        year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
                        if (!(cent == 4 || yindex == 4)) {
                            year++;
                        }
                        yearday = wjd - _.date.georgian.to.julian(year, 0, 1);
                        leapadj = wjd < _.date.georgian.to.julian(year, 3, 1) ? 0 : _.is.georgianLeapYear(year) ? 1 : 2;
                        month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
                        day = wjd - _.date.georgian.to.julian(year, month - 1, 1) + 1;
                        return new Array(insertZero(year), insertZero(month), insertZero(day));
                    });
                date.julian.to.persian = function (jd) {
                    var /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ depoch, /** @type {?} */ cycle, /** @type {?} */ cyear, /** @type {?} */ ycycle, /** @type {?} */ aux1, /** @type {?} */ aux2, /** @type {?} */ yday;
                    jd = parseFloat(jd.toString());
                    jd = Math.floor(jd) + 0.5;
                    depoch = jd - _.date.persian.to.julian(475, 1, 1);
                    cycle = Math.floor(depoch / 1029983);
                    cyear = _.math.mod(depoch, 1029983);
                    if (cyear == 1029982) {
                        ycycle = 2820;
                    }
                    else {
                        aux1 = Math.floor(cyear / 366);
                        aux2 = _.math.mod(cyear, 366);
                        ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
                    }
                    year = ycycle + 2820 * cycle + 474;
                    if (year <= 0) {
                        year--;
                    }
                    yday = jd - _.date.persian.to.julian(year, 1, 1) + 1;
                    month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
                    day = jd - _.date.persian.to.julian(year, month, 1) + 1;
                    return new Array(insertZero(year), insertZero(month), insertZero(day));
                };
                return date;
            })(this);
        }
        UtilityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
        return UtilityService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ stringTemplate = function (template, model) {
        return eval('`' + template + '`');
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} destination
     * @return {?}
     */
    function MatchValidator(destination) {
        return function (control) {
            if (!control.root.value)
                return;
            var /** @type {?} */ destinationValue = control.root.value[destination];
            return (destinationValue == control.value)
                ? null
                : { key: "don't matched" };
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ IResponse = (function () {
        function IResponse() {
        }
        return IResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.SharedModule = SharedModule;
    exports.HttpResponseBaseModel = HttpResponseBaseModel;
    exports.HttpRequestBaseModel = HttpRequestBaseModel;
    exports.PERSIAN_MONTH_DAYS_COUNT = PERSIAN_MONTH_DAYS_COUNT;
    exports.PERSIAN_MONTH_NAMES = PERSIAN_MONTH_NAMES;
    exports.DateClass = DateClass;
    exports.UtilityService = UtilityService;
    exports.stringTemplate = stringTemplate;
    exports.MatchValidator = MatchValidator;
    exports.IResponse = IResponse;
    exports.ɵd = CurrencyUnitPipe;
    exports.ɵa = DataUnitPipe;
    exports.ɵc = PersianDatePipe;
    exports.ɵe = PersianNumberPipe;
    exports.ɵf = TimeCounterPipe;
    exports.ɵb = TimeUnitPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNoYXJlZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9kYXRhLXVuaXQucGlwZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3BpcGVzL3RpbWUtdW5pdC5waXBlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvcGlwZXMvcGVyc2lhbi1kYXRlLnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9jdXJyZW5jeS11bml0LnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9waXBlcy9wZXJzaWFuLW51bWJlci5waXBlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvcGlwZXMvdGltZS1jb3VudGVyLnBpcGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvaHR0cC1yZXNwb25zZS1iYXNlLW1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvaHR0cC1yZXF1ZXN0LWJhc2UtbW9kZWwudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL3V0aWxpdHkuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zaGFyZWQvbGliL2hlbHBlcnMvc3RyaW5nLXRlbXBsYXRlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC9saWIvdmFsaWRhdG9ycy9tYXRjaC52YWxpZGF0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkL2xpYi9yZXNwb25zZS5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwiZGF0YVVuaXRcIiB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHZhbHVlID09IDApIHJldHVybiBcIjAgw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHJldHVybiBcIsOZwobDmMKnw5nChcOYwq3DmMKvw5nCiMOYwq9cIjtcclxuXHJcblx0XHRsZXQgQiA9IDE7XHJcblx0XHRsZXQgS0IgPSBCICogMTAyNDtcclxuXHRcdGxldCBNQiA9IEtCICogMTAyNDtcclxuXHRcdGxldCBHQiA9IE1CICogMTAyNDtcclxuXHJcblx0XHRsZXQgY29udmVydGVkVmFsdWU7XHJcblx0XHRsZXQgc3VmZml4ID0gXCLDmMKow5jCp8ObwozDmMKqXCI7XHJcblxyXG5cdFx0aWYgKHZhbHVlID49IEdCKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5rCr8ObwozDmsKvw5jCpyDDmMKow5jCp8ObwozDmMKqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gR0IpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlID49IE1CKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5nChcOawq/DmMKnIMOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBNQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPj0gS0IpIHtcclxuXHRcdFx0c3VmZml4ID0gXCLDmsKpw5vCjMOZwoTDmcKIIMOYwqjDmMKnw5vCjMOYwqpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBLQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwiw5jCqMOYwqfDm8KMw5jCqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9IHZhbHVlLnRvRml4ZWQoMik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnZlcnRlZFZhbHVlICsgXCIgXCIgKyBzdWZmaXg7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW50ZXJmYWNlIFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVtYWluaW5nOiBudW1iZXI7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWVVbml0JyB9KVxyXG5leHBvcnQgY2xhc3MgVGltZVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREYXlzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwICogMjRcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCscOZwojDmMKyJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEhvdXJzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKzw5jCp8OYwrnDmMKqJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1pbnV0cyh2YWx1ZTogbnVtYmVyKTogVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwq/DmcKCw5vCjMOZwoLDmcKHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFNlY29uZHModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnIMOYwqvDmMKnw5nChsObwozDmcKHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkgcmV0dXJuICcwIMOYwq/DmcKCw5vCjMOZwoLDmcKHJztcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RvciA9ICcgw5nCiCAnO1xyXG5cclxuICAgICAgICBsZXQgZGF5c0RhdGEgPSB0aGlzLmdldERheXModmFsdWUpO1xyXG4gICAgICAgIGxldCBob3Vyc0RhdGEgPSB0aGlzLmdldEhvdXJzKGRheXNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IG1pbnV0c0RhdGEgPSB0aGlzLmdldE1pbnV0cyhob3Vyc0RhdGEucmVtYWluaW5nKTtcclxuICAgICAgICAvLyBsZXQgc2Vjb25kc3NEYXRhID0gdGhpcy5nZXRTZWNvbmRzKG1pbnV0c0RhdGEucmVtYWluaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtkYXlzRGF0YSwgaG91cnNEYXRhLCBtaW51dHNEYXRhLyosIHNlY29uZHNzRGF0YSovXVxyXG4gICAgICAgICAgICAuZmlsdGVyKGkgPT4gaS5jb3VudClcclxuICAgICAgICAgICAgLm1hcChpID0+IGkudmFsdWUpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQZXJzaWFuRGF0ZUV4dHJhY3RvciB7XHJcblx0Y291bnQ6IG51bWJlcjtcclxuXHR2YWx1ZTogc3RyaW5nO1xyXG5cdHJlbWFpbmluZzogbnVtYmVyO1xyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwicGVyc2lhbkRhdGVcIiB9KVxyXG5leHBvcnQgY2xhc3MgUGVyc2lhbkRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCI7XHJcblx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoXCIvRGF0ZShcIiwgXCJcIikucmVwbGFjZShcIikvXCIsIFwiXCIpLCAxMCkpO1xyXG5cdFx0dmFyIHBlcnNpYW5EYXRlID0gXy5kYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4oZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblxyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0cGFyc2VJbnQocGVyc2lhbkRhdGVbMF0pLnRvTG9jYWxlU3RyaW5nKFwiZmEtSVJcIiwgeyB1c2VHcm91cGluZzogZmFsc2UgfSksXHJcblx0XHRcdHBhcnNlSW50KHBlcnNpYW5EYXRlWzFdKS50b0xvY2FsZVN0cmluZyhcImZhLUlSXCIsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pLFxyXG5cdFx0XHRwYXJzZUludChwZXJzaWFuRGF0ZVsyXSkudG9Mb2NhbGVTdHJpbmcoXCJmYS1JUlwiLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KVxyXG5cdFx0XS5qb2luKFwiL1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciBfID0ge1xyXG5cdGlzOiAoZnVuY3Rpb24oXykge1xyXG5cdFx0dmFyIGlzOiBhbnkgPSBmdW5jdGlvbihub2RlOiBhbnksIHNlbGVjdG9yOiBhbnkpIHtcclxuXHRcdFx0aWYgKG5vZGUubWF0Y2hlcykgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XHJcblx0XHRcdHZhciBub2RlcyA9IHRoaXMuYXJnVG9BcnJheShub2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cdFx0XHRyZXR1cm4gbm9kZXMuaW5kZXhPZihub2RlKSA+IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpcy5vYmplY3QgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ub2RlTGlzdCA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdGlmIChfLmlzLm5vdC5pZSgpKSByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBOb2RlTGlzdF1cIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdG9iai5wdXNoID09PSB1bmRlZmluZWQgJiZcclxuXHRcdFx0XHRcdChvYmoubGVuZ3RoID4gMCA/IG9ialswXS50YWdOYW1lICE9PSB1bmRlZmluZWQgOiB0cnVlKVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9O1xyXG5cdFx0aXMuZWxlbWVudCA9IGZ1bmN0aW9uKG9iajogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zZWFyY2goXCJFbGVtZW50XCIpID4gLTE7XHJcblx0XHRcdC8vcmV0dXJuICEhT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpLnRvTG93ZXJDYXNlKCkuc2VhcmNoKCdlbGVtZW50Jyk7O1xyXG5cdFx0fTtcclxuXHRcdGlzLkhUTUxDb2xsZWN0aW9uID0gZnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuYXJyYXkgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLm51bWJlciA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgTnVtYmVyXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzW1wiZnVuY3Rpb25cIl0gPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLnN0cmluZyA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgU3RyaW5nXVwiOyAvLyYmICgoaXNFbXB0eSkpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnVuZGVmaW5lZCA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpID09PSBcIltvYmplY3QgVW5kZWZpbmVkXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLmV2ZW50ID0gZnVuY3Rpb24oX3ZhcjogYW55KSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikudG9Mb3dlckNhc2UoKS5zZWFyY2goXCJldmVudFwiKSA+IC0xO1xyXG5cdFx0fTtcclxuXHRcdGlzLmRlZmluZWQgPSBmdW5jdGlvbihfdmFyOiBhbnkpIHtcclxuXHRcdFx0Ly9yZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBVbmRlZmluZWRdJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgIT09ICdbb2JqZWN0IE51bGxdJyAmJiBPYmplY3QgIT09ICcnO1xyXG5cdFx0XHRyZXR1cm4gX3ZhciAhPT0gdW5kZWZpbmVkICYmIF92YXIgIT09IG51bGwgJiYgX3ZhciAhPT0gXCJcIjtcclxuXHRcdH07XHJcblx0XHRpcy5qc29uID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLmVycm9yID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcblx0XHRpcy5zdGFydFdpdGggPSBmdW5jdGlvbihzdHI6IGFueSwgcHJlZml4OiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5pbmRleE9mKHByZWZpeCkgPT09IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW5kV2l0aCA9IGZ1bmN0aW9uKHN0cjogYW55KSB7fTtcclxuXHJcblx0XHRpcy52YWx1ZSA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gX3ZhciA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5lbXB0eSA9IGZ1bmN0aW9uKG86IGFueSkge1xyXG5cdFx0XHRpZiAoXy5pcy5vYmplY3QoMCkpIGZvciAodmFyIGkgaW4gbykgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkobykpIHJldHVybiBvLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0aXMudHJ1dGh5ID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLnNjYWxhciA9IGZ1bmN0aW9uKF92YXI6IGFueSkge1xyXG5cdFx0XHQvL1RPRE8gOiBpbXByb3ZlXHJcblx0XHRcdHJldHVybiBpcy5kZWZpbmVkKF92YXIpICYmIGlzLm5vdC5hcnJheShfdmFyKSAmJiBpcy5ub3Qub2JqZWN0KF92YXIpICYmIGlzLm5vdFtcImZ1bmN0aW9uXCJdKF92YXIpO1xyXG5cdFx0fTtcclxuXHRcdGlzLnByb3RvdHlwZVByb3AgPSBmdW5jdGlvbihvYmo6IGFueSwgcHJvcDogYW55KSB7XHJcblx0XHRcdHJldHVybiBvYmpbcHJvcF0gJiYgIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbCA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShmdikgPT0gSlNPTi5zdHJpbmdpZnkoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVxdWFsVGV4dCA9IGZ1bmN0aW9uKGZ2OiBhbnksIHN2OiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIGZ2LnRvTG93ZXJDYXNlKGZ2KSA9PT0gc3YudG9Mb3dlckNhc2Uoc3YpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmNsb3NldCA9IGZ1bmN0aW9uKGZvOiBhbnksIHNvOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIF8uaXMuZXF1YWwoXy5wYXJ0aWFsKGZvLCBfLnJlcG9ydC5za2VsZXRvbihzbykpLCBzbyk7XHJcblx0XHR9O1xyXG5cdFx0aXMuY29udGFpbiA9IGZ1bmN0aW9uKHN0cjogYW55LCBzZWFyY2hTdHI6IGFueSkge1xyXG5cdFx0XHR2YXIgcmVnID0gXy5pcy5yZWdleChzZWFyY2hTdHIpID8gc2VhcmNoU3RyIDogbmV3IFJlZ0V4cChzZWFyY2hTdHIsIFwiZ1wiKTtcclxuXHRcdFx0cmV0dXJuIHN0ci5tYXRjaChyZWcpICYmIHN0ci5tYXRjaChyZWcpLmxlbmd0aCA+IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMucmVnZXggPSBmdW5jdGlvbihyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJSZWdFeHBcIjtcclxuXHRcdH07XHJcblx0XHRpcy5zYW1lID0gZnVuY3Rpb24oZnY6IGFueSwgc3Y6IGFueSkge1xyXG5cdFx0XHQvL2lmICghZnYpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBmdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cdFx0XHQvL2lmICghc3YpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBzdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZ2LmlzRXF1YWxOb2RlID8gZnYuaXNFcXVhbE5vZGUoc3YpIDogZnYgPT09IHN2O1xyXG5cdFx0fTtcclxuXHRcdGlzLnBlcnNpYW5MZWFwWWVhciA9IGZ1bmN0aW9uKHllYXI6IGFueSkge1xyXG5cdFx0XHRyZXR1cm4gKCgoeWVhciAtICh5ZWFyID4gMCA/IDQ3NCA6IDQ3MykpICUgMjgyMCArIDQ3NCArIDM4KSAqIDY4MikgJSAyODE2IDwgNjgyO1xyXG5cdFx0fTtcclxuXHRcdGlzLmdlb3JnaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyOiBhbnkpIHtcclxuXHRcdFx0cmV0dXJuIHllYXIgJSA0ID09IDAgJiYgISh5ZWFyICUgMTAwID09IDAgJiYgeWVhciAlIDQwMCAhPSAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIG5vdDogYW55ID0ge307XHJcblx0XHR2YXIgaTtcclxuXHRcdGZvciAoaSBpbiBpcylcclxuXHRcdFx0KGZ1bmN0aW9uKGk6IGFueSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSlcclxuXHRcdFx0XHRcdG5vdFtpXSA9IGZ1bmN0aW9uKGE6IGFueSwgYjogYW55LCBjOiBhbnkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICFpc1tpXShhLCBiLCBjKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMubm90ID0gbm90O1xyXG5cclxuXHRcdC8vVE9ETyA6IGltcGVsZW1lbnRcclxuXHRcdHZhciBhbGw6IGFueSA9IHt9O1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSkgYWxsW2ldID0gZnVuY3Rpb24obzogYW55KSB7fTtcclxuXHRcdFx0fSkoaSk7XHJcblx0XHRpcy5hbGwgPSBhbGw7XHJcblxyXG5cdFx0dmFyIGFueTogYW55ID0ge307XHJcblx0XHRmb3IgKHZhciBqIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaikge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShqKSkgYW55W2pdID0gZnVuY3Rpb24obzogYW55KSB7fTtcclxuXHRcdFx0fSkoaik7XHJcblx0XHRpcy5hbnkgPSBhbnk7XHJcblxyXG5cdFx0cmV0dXJuIGlzO1xyXG5cdH0pKHRoaXMpLFxyXG5cdG1hdGg6IChmdW5jdGlvbigpIHtcclxuXHRcdHZhciBtYXRoOiBhbnkgPSB7fTtcclxuXHJcblx0XHRtYXRoLm1vZCA9IGZ1bmN0aW9uKGE6IGFueSwgYjogYW55KSB7XHJcblx0XHRcdHJldHVybiBhIC0gYiAqIE1hdGguZmxvb3IoYSAvIGIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gbWF0aDtcclxuXHR9KSgpLFxyXG5cdGRhdGU6IChmdW5jdGlvbigpIHtcclxuXHRcdHZhciBQRVJTSUFOX0VQT0NIID0gMTk0ODMyMC41LFxyXG5cdFx0XHRHUkVHT1JJQU5fRVBPQ0ggPSAxNzIxNDI1LjU7XHJcblxyXG5cdFx0dmFyIGRhdGU6IGFueSA9IHt9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuID0ge307XHJcblx0XHRkYXRlLnBlcnNpYW4udG8gPSB7fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4gPSB7fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8gPSB7fTtcclxuXHRcdGRhdGUuanVsaWFuID0ge307XHJcblx0XHRkYXRlLmp1bGlhbi50byA9IHt9O1xyXG5cclxuXHRcdHZhciBpbnNlcnRaZXJvID0gZnVuY3Rpb24oaTogYW55KSB7XHJcblx0XHRcdGkgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdHJldHVybiBpLmxlbmd0aCA9PSAxID8gXCIwXCIgKyBpIDogaTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXI6IGFueSwgbW9udGg6IGFueSwgZGF5OiBhbnkpIHtcclxuXHRcdFx0dmFyIGVwYmFzZSwgZXB5ZWFyO1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhcik7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkpO1xyXG5cclxuXHRcdFx0ZXBiYXNlID0geWVhciAtICh5ZWFyID49IDAgPyA0NzQgOiA0NzMpO1xyXG5cdFx0XHRlcHllYXIgPSA0NzQgKyBfLm1hdGgubW9kKGVwYmFzZSwgMjgyMCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGRheSArXHJcblx0XHRcdFx0KG1vbnRoIDw9IDcgPyAobW9udGggLSAxKSAqIDMxIDogKG1vbnRoIC0gMSkgKiAzMCArIDYpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKChlcHllYXIgKiA2ODIgLSAxMTApIC8gMjgxNikgK1xyXG5cdFx0XHRcdChlcHllYXIgLSAxKSAqIDM2NSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcihlcGJhc2UgLyAyODIwKSAqIDEwMjk5ODMgK1xyXG5cdFx0XHRcdChQRVJTSUFOX0VQT0NIIC0gMSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55LCBqb2luQ2hhcmFjdGVyOiBhbnkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLmdlb3JnaWFuKFxyXG5cdFx0XHRcdGRhdGUucGVyc2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSArIDEsIHBhcnNlSW50KGRheSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBqb2luQ2hhcmFjdGVyID8gZGF0ZUFycmF5LmpvaW4oam9pbkNoYXJhY3RlcikgOiBkYXRlQXJyYXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8uanVsaWFuID0gZnVuY3Rpb24oeWVhcjogYW55LCBtb250aDogYW55LCBkYXk6IGFueSkge1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhcik7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgpO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRHUkVHT1JJQU5fRVBPQ0ggLVxyXG5cdFx0XHRcdDEgK1xyXG5cdFx0XHRcdDM2NSAqICh5ZWFyIC0gMSkgK1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpICtcclxuXHRcdFx0XHQtTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoMzY3ICogbW9udGggLSAzNjIpIC8gMTIgKyAobW9udGggPD0gMiA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAtMSA6IC0yKSArIGRheSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLnBlcnNpYW4gPSBmdW5jdGlvbih5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRheTogYW55LCBqb2luQ2hhcmFjdGVyOiBhbnkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLnBlcnNpYW4oXHJcblx0XHRcdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSwgcGFyc2VJbnQoZGF5KSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIGpvaW5DaGFyYWN0ZXIgPyBkYXRlQXJyYXkuam9pbihqb2luQ2hhcmFjdGVyKSA6IGRhdGVBcnJheTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbihqZDogYW55KSB7XHJcblx0XHRcdHZhciB3amQsXHJcblx0XHRcdFx0ZGVwb2NoLFxyXG5cdFx0XHRcdHF1YWRyaWNlbnQsXHJcblx0XHRcdFx0ZHFjLFxyXG5cdFx0XHRcdGNlbnQsXHJcblx0XHRcdFx0ZGNlbnQsXHJcblx0XHRcdFx0cXVhZCxcclxuXHRcdFx0XHRkcXVhZCxcclxuXHRcdFx0XHR5aW5kZXgsXHJcblx0XHRcdFx0ZHlpbmRleCxcclxuXHRcdFx0XHR5ZWFyLFxyXG5cdFx0XHRcdG1vbnRoLFxyXG5cdFx0XHRcdGRheSxcclxuXHRcdFx0XHR5ZWFyZGF5LFxyXG5cdFx0XHRcdGxlYXBhZGo7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZCk7XHJcblxyXG5cdFx0XHR3amQgPSBNYXRoLmZsb29yKGpkIC0gMC41KSArIDAuNTtcclxuXHRcdFx0ZGVwb2NoID0gd2pkIC0gR1JFR09SSUFOX0VQT0NIO1xyXG5cdFx0XHRxdWFkcmljZW50ID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxNDYwOTcpO1xyXG5cdFx0XHRkcWMgPSBfLm1hdGgubW9kKGRlcG9jaCwgMTQ2MDk3KTtcclxuXHRcdFx0Y2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xyXG5cdFx0XHRkY2VudCA9IF8ubWF0aC5tb2QoZHFjLCAzNjUyNCk7XHJcblx0XHRcdHF1YWQgPSBNYXRoLmZsb29yKGRjZW50IC8gMTQ2MSk7XHJcblx0XHRcdGRxdWFkID0gXy5tYXRoLm1vZChkY2VudCwgMTQ2MSk7XHJcblx0XHRcdHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xyXG5cdFx0XHR5ZWFyID0gcXVhZHJpY2VudCAqIDQwMCArIGNlbnQgKiAxMDAgKyBxdWFkICogNCArIHlpbmRleDtcclxuXHRcdFx0aWYgKCEoY2VudCA9PSA0IHx8IHlpbmRleCA9PSA0KSkge1xyXG5cdFx0XHRcdHllYXIrKztcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyZGF5ID0gd2pkIC0gXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCAxLCAxKTtcclxuXHRcdFx0bGVhcGFkaiA9IHdqZCA8IF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgMywgMSkgPyAwIDogXy5pcy5nZW9yZ2lhbkxlYXBZZWFyKHllYXIpID8gMSA6IDI7XHJcblx0XHRcdG1vbnRoID0gTWF0aC5mbG9vcigoKHllYXJkYXkgKyBsZWFwYWRqKSAqIDEyICsgMzczKSAvIDM2Nyk7XHJcblx0XHRcdGRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgbW9udGgsIDEpICsgMTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5qdWxpYW4udG8ucGVyc2lhbiA9IGZ1bmN0aW9uKGpkOiBhbnkpIHtcclxuXHRcdFx0dmFyIHllYXIsIG1vbnRoLCBkYXksIGRlcG9jaCwgY3ljbGUsIGN5ZWFyLCB5Y3ljbGUsIGF1eDEsIGF1eDIsIHlkYXk7XHJcblx0XHRcdGpkID0gcGFyc2VGbG9hdChqZCk7XHJcblxyXG5cdFx0XHRqZCA9IE1hdGguZmxvb3IoamQpICsgMC41O1xyXG5cclxuXHRcdFx0ZGVwb2NoID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oNDc1LCAxLCAxKTtcclxuXHRcdFx0Y3ljbGUgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDEwMjk5ODMpO1xyXG5cdFx0XHRjeWVhciA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxMDI5OTgzKTtcclxuXHRcdFx0aWYgKGN5ZWFyID09IDEwMjk5ODIpIHtcclxuXHRcdFx0XHR5Y3ljbGUgPSAyODIwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuXHRcdFx0XHRhdXgyID0gXy5tYXRoLm1vZChjeWVhciwgMzY2KTtcclxuXHRcdFx0XHR5Y3ljbGUgPSBNYXRoLmZsb29yKCgyMTM0ICogYXV4MSArIDI4MTYgKiBhdXgyICsgMjgxNSkgLyAxMDI4NTIyKSArIGF1eDEgKyAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHllYXIgPSB5Y3ljbGUgKyAyODIwICogY3ljbGUgKyA0NzQ7XHJcblx0XHRcdGlmICh5ZWFyIDw9IDApIHtcclxuXHRcdFx0XHR5ZWFyLS07XHJcblx0XHRcdH1cclxuXHRcdFx0eWRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIDEsIDEpICsgMTtcclxuXHRcdFx0bW9udGggPSB5ZGF5IDw9IDE4NiA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcblx0XHRcdGRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoLCAxKSArIDE7XHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBkYXRlO1xyXG5cdH0pKClcclxufTtcclxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeVVuaXQnIH0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSE9MCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDApIHJldHVybiAnw5jCscOYwqfDm8KMw5rCr8OYwqfDmcKGJztcclxuXHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9ICfDmMKxw5vCjMOYwqfDmcKEJztcclxuICAgICAgICByZXR1cm4gW3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdmYS1JUicpLCBzdWZmaXhdLmpvaW4oJyAnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncGVyc2lhbk51bWJlcicgfSlcclxuZXhwb3J0IGNsYXNzIFBlcnNpYW5OdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHZhciByZXMgPSAnJztcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICByZXMgKz0gKCt2YWx1ZVtpbmRleF0pLnRvTG9jYWxlU3RyaW5nKCdmYS1JUicsIHtcclxuICAgICAgICAgICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICByZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndGltZUNvdW50ZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lQ291bnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIb3Vycyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjAgKiA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcgw5jCs8OYwqfDmMK5w5jCqicsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRNaW51dHModmFsdWU6IG51bWJlcik6IFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKvw5nCgsObwozDmcKCw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcigodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDDmMKrw5jCp8OZwobDm8KMw5nChycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdG9yID0gJyA6ICc7XHJcblxyXG4gICAgICAgIC8vIGxldCBkYXlzRGF0YSA9IHRoaXMuZ2V0RGF5cyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGhvdXJzRGF0YSA9IHRoaXMuZ2V0SG91cnModmFsdWUpO1xyXG4gICAgICAgIGxldCBtaW51dHNEYXRhID0gdGhpcy5nZXRNaW51dHMoaG91cnNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IHNlY29uZHNzRGF0YSA9IHRoaXMuZ2V0U2Vjb25kcyhtaW51dHNEYXRhLnJlbWFpbmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbc2Vjb25kc3NEYXRhLCBtaW51dHNEYXRhLGhvdXJzRGF0YV1cclxuICAgICAgICAgICAgLm1hcChpID0+IGkuY291bnQpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL2RhdGEtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFBlcnNpYW5EYXRlUGlwZSB9IGZyb20gXCIuL3BpcGVzL3BlcnNpYW4tZGF0ZS5waXBlXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5VW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy9jdXJyZW5jeS11bml0LnBpcGVcIjtcclxuaW1wb3J0IHsgUGVyc2lhbk51bWJlclBpcGUgfSBmcm9tIFwiLi9waXBlcy9wZXJzaWFuLW51bWJlci5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVDb3VudGVyUGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtY291bnRlci5waXBlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF0sXHJcblx0ZXhwb3J0czogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxUPiB7XHJcbiAgICBSZXN1bHQ6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBhYnN0cmFjdCBleHRyYWN0RGF0YT8oKTogYW55O1xyXG59IiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cFJlcXVlc3RCYXNlTW9kZWw8VD4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0YWJzdHJhY3QgZ2V0UmVxdWVzdEJvZHk/PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXlzOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG5cdGFic3RyYWN0IGdldFJlcXVlc3RRdWVyeVBhcmFtcz88SyBleHRlbmRzIGtleW9mIFQ+KGtleXM6IGFueSk6IEh0dHBQYXJhbXM7XHJcblxyXG5cdC8vIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB8IG51bGwge1xyXG5cdC8vIFx0cmV0dXJuO1xyXG5cdC8vIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBFUlNJQU5fTU9OVEhfREFZU19DT1VOVCA9IFsgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMSwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCBdO1xyXG5leHBvcnQgY29uc3QgUEVSU0lBTl9NT05USF9OQU1FUyA9IFtcclxuXHRcIsOZwoHDmMKxw5nCiMOYwrHDmMKvw5vCjMOZwoZcIixcclxuXHRcIsOYwqfDmMKxw5jCr8ObwozDmMKow5nCh8OYwrTDmMKqXCIsXHJcblx0XCLDmMKuw5jCscOYwq/DmMKnw5jCr1wiLFxyXG5cdFwiw5jCqsObwozDmMKxXCIsXHJcblx0XCLDmcKFw5jCscOYwq/DmMKnw5jCr1wiLFxyXG5cdFwiw5jCtMOZwofDmMKxw5vCjMOZwojDmMKxXCIsXHJcblx0XCLDmcKFw5nCh8OYwrFcIixcclxuXHRcIsOYwqLDmMKow5jCp8OZwoZcIixcclxuXHRcIsOYwqLDmMKww5jCsVwiLFxyXG5cdFwiw5jCr8ObwoxcIixcclxuXHRcIsOYwqjDmcKHw5nChcOZwoZcIixcclxuXHRcIsOYwqfDmMKzw5nCgcOZwobDmMKvXCJcclxuXTtcclxuZXhwb3J0IGNsYXNzIERhdGVDbGFzcyB7XHJcblx0eWVhcjogc3RyaW5nO1xyXG5cdG1vbnRoOiBzdHJpbmc7XHJcblx0ZGF0ZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih5ZWFyLCBtb250aCwgZGF0ZSkge1xyXG5cdFx0dGhpcy55ZWFyID0geWVhcjtcclxuXHRcdHRoaXMubW9udGggPSBtb250aDtcclxuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XHJcblx0fVxyXG5cclxuXHRmdWxsRGF0ZShzZXByYXRvcjogc3RyaW5nID0gXCIvXCIpIHtcclxuXHRcdHJldHVybiBbIHRoaXMueWVhciwgdGhpcy5tb250aCwgdGhpcy5kYXRlIF0uam9pbihzZXByYXRvcik7XHJcblx0fVxyXG5cdG5hdGl2ZURhdGUoKSB7XHJcblx0XHRyZXR1cm4gbmV3IERhdGUocGFyc2VJbnQodGhpcy55ZWFyKSwgcGFyc2VJbnQodGhpcy5tb250aCkgLSAxLCBwYXJzZUludCh0aGlzLmRhdGUpKTtcclxuXHR9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xyXG5cdGlzID0gKGZ1bmN0aW9uKF8sIHVuZGVmaW5lZCkge1xyXG5cdFx0dmFyIGlzOiBhbnkgPSBmdW5jdGlvbihub2RlLCBzZWxlY3Rvcikge1xyXG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzKSByZXR1cm4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKTtcclxuXHRcdFx0dmFyIG5vZGVzID0gdGhpcy5hcmdUb0FycmF5KG5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcblx0XHRcdHJldHVybiBub2Rlcy5pbmRleE9mKG5vZGUpID4gLTEgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlzLm9iamVjdCA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5ub2RlTGlzdCA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRpZiAoXy5pcy5ub3QuaWUoKSkgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgTm9kZUxpc3RdXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0b2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHRvYmoucHVzaCA9PT0gdW5kZWZpbmVkICYmXHJcblx0XHRcdFx0XHQob2JqLmxlbmd0aCA+IDAgPyBvYmpbMF0udGFnTmFtZSAhPT0gdW5kZWZpbmVkIDogdHJ1ZSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnNlYXJjaChcIkVsZW1lbnRcIikgPiAtMTtcclxuXHRcdFx0Ly9yZXR1cm4gISFPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikudG9Mb3dlckNhc2UoKS5zZWFyY2goJ2VsZW1lbnQnKTs7XHJcblx0XHR9O1xyXG5cdFx0aXMuSFRNTENvbGxlY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuYXJyYXkgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcclxuXHRcdH07XHJcblx0XHRpcy5udW1iZXIgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBOdW1iZXJdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXNbXCJmdW5jdGlvblwiXSA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLnN0cmluZyA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjsgLy8mJiAoKGlzRW1wdHkpKTtcclxuXHRcdH07XHJcblx0XHRpcy51bmRlZmluZWQgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikgPT09IFwiW29iamVjdCBVbmRlZmluZWRdXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXZlbnQgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoX3ZhcikudG9Mb3dlckNhc2UoKS5zZWFyY2goXCJldmVudFwiKSA+IC0xO1xyXG5cdFx0fTtcclxuXHRcdGlzLmRlZmluZWQgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdC8vcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfdmFyKSAhPT0gJ1tvYmplY3QgVW5kZWZpbmVkXScgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF92YXIpICE9PSAnW29iamVjdCBOdWxsXScgJiYgT2JqZWN0ICE9PSAnJztcclxuXHRcdFx0cmV0dXJuIF92YXIgIT09IHVuZGVmaW5lZCAmJiBfdmFyICE9PSBudWxsICYmIF92YXIgIT09IFwiXCI7XHJcblx0XHR9O1xyXG5cdFx0aXMuanNvbiA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRpcy5lcnJvciA9IGZ1bmN0aW9uKCkge307XHJcblxyXG5cdFx0aXMuc3RhcnRXaXRoID0gZnVuY3Rpb24oc3RyLCBwcmVmaXgpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5pbmRleE9mKHByZWZpeCkgPT09IDA7XHJcblx0XHR9O1xyXG5cdFx0aXMuZW5kV2l0aCA9IGZ1bmN0aW9uKHN0cikge307XHJcblxyXG5cdFx0aXMudmFsdWUgPSBmdW5jdGlvbihfdmFyKSB7XHJcblx0XHRcdHJldHVybiBfdmFyID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlzLmVtcHR5ID0gZnVuY3Rpb24obykge1xyXG5cdFx0XHRpZiAoXy5pcy5vYmplY3QoMCkpIGZvciAodmFyIGkgaW4gbykgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkobykpIHJldHVybiBvLmxlbmd0aCA9PT0gMDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0aXMudHJ1dGh5ID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdGlzLnNjYWxhciA9IGZ1bmN0aW9uKF92YXIpIHtcclxuXHRcdFx0Ly9UT0RPIDogaW1wcm92ZVxyXG5cdFx0XHRyZXR1cm4gaXMuZGVmaW5lZChfdmFyKSAmJiBpcy5ub3QuYXJyYXkoX3ZhcikgJiYgaXMubm90Lm9iamVjdChfdmFyKSAmJiBpcy5ub3RbXCJmdW5jdGlvblwiXShfdmFyKTtcclxuXHRcdH07XHJcblx0XHRpcy5wcm90b3R5cGVQcm9wID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7XHJcblx0XHRcdHJldHVybiBvYmpbcHJvcF0gJiYgIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKTtcclxuXHRcdH07XHJcblx0XHRpcy5lcXVhbCA9IGZ1bmN0aW9uKGZ2LCBzdikge1xyXG5cdFx0XHQvL2lmICghZnYpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBmdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cdFx0XHQvL2lmICghc3YpIHRoYXQud2FybignZXF1YWwgZnVuY3Rpb24gOicgKyBzdiArICcgaXMgTm90IE9iamVjdCcpO1xyXG5cclxuXHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KGZ2KSA9PSBKU09OLnN0cmluZ2lmeShzdikgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aXMuZXF1YWxUZXh0ID0gZnVuY3Rpb24oZnYsIHN2KSB7XHJcblx0XHRcdHJldHVybiBmdi50b0xvd2VyQ2FzZShmdikgPT09IHN2LnRvTG93ZXJDYXNlKHN2KSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpcy5jb250YWluID0gZnVuY3Rpb24oc3RyLCBzZWFyY2hTdHIpIHtcclxuXHRcdFx0dmFyIHJlZyA9IF8uaXMucmVnZXgoc2VhcmNoU3RyKSA/IHNlYXJjaFN0ciA6IG5ldyBSZWdFeHAoc2VhcmNoU3RyLCBcImdcIik7XHJcblx0XHRcdHJldHVybiBzdHIubWF0Y2gocmVnKSAmJiBzdHIubWF0Y2gocmVnKS5sZW5ndGggPiAwO1xyXG5cdFx0fTtcclxuXHRcdGlzLnJlZ2V4ID0gZnVuY3Rpb24ocikge1xyXG5cdFx0XHRyZXR1cm4gci5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIlJlZ0V4cFwiO1xyXG5cdFx0fTtcclxuXHRcdGlzLnNhbWUgPSBmdW5jdGlvbihmdiwgc3YpIHtcclxuXHRcdFx0Ly9pZiAoIWZ2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgZnYgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHRcdFx0Ly9pZiAoIXN2KSB0aGF0Lndhcm4oJ2VxdWFsIGZ1bmN0aW9uIDonICsgc3YgKyAnIGlzIE5vdCBPYmplY3QnKTtcclxuXHJcblx0XHRcdHJldHVybiBmdi5pc0VxdWFsTm9kZSA/IGZ2LmlzRXF1YWxOb2RlKHN2KSA6IGZ2ID09PSBzdjtcclxuXHRcdH07XHJcblx0XHRpcy5wZXJzaWFuTGVhcFllYXIgPSBmdW5jdGlvbih5ZWFyKSB7XHJcblx0XHRcdHJldHVybiAoKCh5ZWFyIC0gKHllYXIgPiAwID8gNDc0IDogNDczKSkgJSAyODIwICsgNDc0ICsgMzgpICogNjgyKSAlIDI4MTYgPCA2ODI7XHJcblx0XHR9O1xyXG5cdFx0aXMuZ2VvcmdpYW5MZWFwWWVhciA9IGZ1bmN0aW9uKHllYXIpIHtcclxuXHRcdFx0cmV0dXJuIHllYXIgJSA0ID09IDAgJiYgISh5ZWFyICUgMTAwID09IDAgJiYgeWVhciAlIDQwMCAhPSAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIG5vdCA9IHt9O1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0aWYgKGlzLmhhc093blByb3BlcnR5KGkpKVxyXG5cdFx0XHRcdFx0bm90W2ldID0gZnVuY3Rpb24oYSwgYiwgYykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gIWlzW2ldKGEsIGIsIGMpO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0fSkoaSk7XHJcblx0XHRpcy5ub3QgPSBub3Q7XHJcblxyXG5cdFx0Ly9UT0RPIDogaW1wZWxlbWVudFxyXG5cdFx0dmFyIGFsbCA9IHt9O1xyXG5cdFx0Zm9yIChpIGluIGlzKVxyXG5cdFx0XHQoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGlmIChpcy5oYXNPd25Qcm9wZXJ0eShpKSkgYWxsW2ldID0gZnVuY3Rpb24obykge307XHJcblx0XHRcdH0pKGkpO1xyXG5cdFx0aXMuYWxsID0gYWxsO1xyXG5cclxuXHRcdHZhciBhbnkgPSB7fTtcclxuXHRcdGZvciAodmFyIGogaW4gaXMpXHJcblx0XHRcdChmdW5jdGlvbihqKSB7XHJcblx0XHRcdFx0aWYgKGlzLmhhc093blByb3BlcnR5KGopKSBhbnlbal0gPSBmdW5jdGlvbihvKSB7fTtcclxuXHRcdFx0fSkoaik7XHJcblx0XHRpcy5hbnkgPSBhbnk7XHJcblxyXG5cdFx0cmV0dXJuIGlzO1xyXG5cdH0pKHRoaXMpO1xyXG5cdG1hdGggPSAoZnVuY3Rpb24oXykge1xyXG5cdFx0dmFyIG1hdGg6IGFueSA9IHt9O1xyXG5cclxuXHRcdG1hdGgubW9kID0gZnVuY3Rpb24oYSwgYikge1xyXG5cdFx0XHRyZXR1cm4gYSAtIGIgKiBNYXRoLmZsb29yKGEgLyBiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIG1hdGg7XHJcblx0fSkodGhpcyk7XHJcblxyXG5cdGRhdGUgPSAoZnVuY3Rpb24oXykge1xyXG5cdFx0dmFyIFBFUlNJQU5fRVBPQ0ggPSAxOTQ4MzIwLjUsXHJcblx0XHRcdEdSRUdPUklBTl9FUE9DSCA9IDE3MjE0MjUuNTtcclxuXHJcblx0XHR2YXIgZGF0ZToge1xyXG5cdFx0XHRwZXJzaWFuOiB7XHJcblx0XHRcdFx0UEVSU0lBTl9NT05USF9EQVlTX0NPVU5UOiBudW1iZXJbXTtcclxuXHRcdFx0XHRub3coKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdGZvcmV0aW1lTW9udGhPZlllYXIoKTogc3RyaW5nW107XHJcblx0XHRcdFx0Z2V0RGF5c09mb01vbnRoKGlkeDogbnVtYmVyKTogc3RyaW5nW107XHJcblx0XHRcdFx0Y3JlYXRlKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0Z2V0RGF5T2ZXZWVrKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpOiBudW1iZXI7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZykgPT4gRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdFx0anVsaWFuOiAoeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZykgPT4gbnVtYmVyO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHRcdGdlb3JnaWFuOiB7XHJcblx0XHRcdFx0Ly8gZ2V0RnV0dXJlRGF0ZShuOiBudW1iZXIpOiBEYXRlLFxyXG5cdFx0XHRcdG5vdygpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0Z2V0UmVsYXRpdmVEYXkobjogbnVtYmVyKTogRGF0ZUNsYXNzO1xyXG5cdFx0XHRcdHBhcnNlKGRhdGU6IERhdGUpOiBEYXRlQ2xhc3M7XHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdHBlcnNpYW4oeWVhcjogbnVtYmVyIHwgc3RyaW5nLCBtb250aDogbnVtYmVyIHwgc3RyaW5nLCBkYXk6IG51bWJlciB8IHN0cmluZyk6IERhdGVDbGFzcztcclxuXHRcdFx0XHRcdGp1bGlhbih5ZWFyOiBudW1iZXIgfCBzdHJpbmcsIG1vbnRoOiBudW1iZXIgfCBzdHJpbmcsIGRheTogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHRcdGp1bGlhbjoge1xyXG5cdFx0XHRcdHRvOiB7XHJcblx0XHRcdFx0XHRwZXJzaWFuOiAoamQ6IG51bWJlciB8IHN0cmluZykgPT4gc3RyaW5nW107XHJcblx0XHRcdFx0XHRnZW9yZ2lhbjogKGpkOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZ1tdO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHRcdGFzOiB7XHJcblx0XHRcdFx0RGF0ZTogKFsgeSwgbSwgZCBdOiBzdHJpbmdbXSkgPT4gRGF0ZTtcclxuXHRcdFx0fTtcclxuXHRcdH0gPSB7XHJcblx0XHRcdHBlcnNpYW46IHtcclxuXHRcdFx0XHRQRVJTSUFOX01PTlRIX0RBWVNfQ09VTlQ6IFtdLFxyXG5cdFx0XHRcdG5vdzogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRjcmVhdGU6ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiBudWxsLFxyXG5cdFx0XHRcdGdldERheXNPZm9Nb250aDogKGlkeDogbnVtYmVyKSA9PiBudWxsLFxyXG5cdFx0XHRcdGdldERheU9mV2VlazogKHk6IHN0cmluZywgbTogc3RyaW5nLCBkOiBzdHJpbmcpID0+IG51bGwsXHJcblx0XHRcdFx0Zm9yZXRpbWVNb250aE9mWWVhcjogKCkgPT4gW10sXHJcblx0XHRcdFx0dG86IHtcclxuXHRcdFx0XHRcdGdlb3JnaWFuOiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdFx0anVsaWFuOiAoKSA9PiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRqdWxpYW46IHtcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0Z2VvcmdpYW46ICgpID0+IG51bGwsXHJcblx0XHRcdFx0XHRwZXJzaWFuOiAoKSA9PiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZW9yZ2lhbjoge1xyXG5cdFx0XHRcdC8vIGdldEZ1dHVyZURhdGU6IChuOiBudW1iZXIpID0+IG51bGwsXHJcblx0XHRcdFx0bm93OiAoKSA9PiBudWxsLFxyXG5cdFx0XHRcdGdldFJlbGF0aXZlRGF5OiAobjogbnVtYmVyKSA9PiBudWxsLFxyXG5cdFx0XHRcdHBhcnNlOiAoZGF0ZTogRGF0ZSkgPT4gbnVsbCxcclxuXHRcdFx0XHR0bzoge1xyXG5cdFx0XHRcdFx0cGVyc2lhbjogKCkgPT4gbnVsbCxcclxuXHRcdFx0XHRcdGp1bGlhbjogKCkgPT4gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXM6IHtcclxuXHRcdFx0XHREYXRlOiAoKSA9PiBudWxsXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQvLyBkYXRlLnBlcnNpYW4gPSB7fTtcclxuXHRcdC8vIGRhdGUucGVyc2lhbi50byA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5nZW9yZ2lhbiA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5nZW9yZ2lhbi50byA9IHt9O1xyXG5cdFx0Ly8gZGF0ZS5qdWxpYW4gPSB7fTtcclxuXHRcdC8vIGRhdGUuanVsaWFuLnRvID0ge307XHJcblx0XHQvLyBkYXRlLmFzID0ge307XHJcblx0XHRkYXRlLmFzLkRhdGUgPSAoWyB5LCBtLCBkIF06IHN0cmluZ1tdKTogRGF0ZSA9PiBuZXcgRGF0ZShwYXJzZUludCh5KSwgcGFyc2VJbnQobSkgLSAxLCBwYXJzZUludChkKSk7XHJcblxyXG5cdFx0dmFyIGluc2VydFplcm8gPSBmdW5jdGlvbihpKSB7XHJcblx0XHRcdGkgPSBpLnRvU3RyaW5nKCk7XHJcblx0XHRcdHJldHVybiBpLmxlbmd0aCA9PSAxID8gXCIwXCIgKyBpIDogaTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4uUEVSU0lBTl9NT05USF9EQVlTX0NPVU5UID0gWyAzMSwgMzEsIDMxLCAzMSwgMzEsIDMxLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCBdO1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLm5vdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0cmV0dXJuIGRhdGUuZ2VvcmdpYW4udG8ucGVyc2lhbihub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5jcmVhdGUgPSAoeTogc3RyaW5nLCBtOiBzdHJpbmcsIGQ6IHN0cmluZykgPT4gbmV3IERhdGVDbGFzcyh5LCBtLCBkKTtcclxuXHRcdGRhdGUucGVyc2lhbi5nZXREYXlzT2ZvTW9udGggPSAoaWR4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0dmFyIGNvdW50ID0gUEVSU0lBTl9NT05USF9EQVlTX0NPVU5UW2lkeF07XHJcblx0XHRcdGxldCByZXMgPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjb3VudCArIDE7IGkrKykge1xyXG5cdFx0XHRcdGxldCBkYXlOYW1lID0gaSA8IDEwID8gXCIwXCIgKyBpIDogaS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHJlcy5wdXNoKGRheU5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXM7XHJcblx0XHR9O1xyXG5cdFx0ZGF0ZS5wZXJzaWFuLmdldERheU9mV2VlayA9ICh5OiBzdHJpbmcsIG06IHN0cmluZywgZDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGxldCBwZXJzaWFuSG9saWRheSA9IGRhdGUucGVyc2lhbi5jcmVhdGUoXCIxMzk2XCIsIFwiMVwiLCBcIjFcIik7XHJcblx0XHRcdGxldCBwZXJzaWFuSG9saWRheUluR2VvcmdpYW4gPSBkYXRlLnBlcnNpYW4udG8uZ2VvcmdpYW4oXCIxMzk2XCIsIFwiMVwiLCBcIjFcIikubmF0aXZlRGF0ZSgpO1xyXG5cclxuXHRcdFx0dmFyIG1vbnRoID0gK20gLSAxO1xyXG5cdFx0XHR2YXIgZGF5ID0gK2Q7XHJcblx0XHRcdHZhciBkYXlzT2ZZZWFyID0gUEVSU0lBTl9NT05USF9EQVlTX0NPVU5ULnJlZHVjZSgoYSwgYiwgaWR4KSA9PiB7XHJcblx0XHRcdFx0aWYgKGlkeCA9PSBtb250aCkgcmV0dXJuIGEgKyBkYXk7XHJcblx0XHRcdFx0aWYgKGlkeCA+IG1vbnRoKSByZXR1cm4gYTtcclxuXHRcdFx0XHRyZXR1cm4gYSArIGI7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIChkYXlzT2ZZZWFyICsgcGVyc2lhbkhvbGlkYXlJbkdlb3JnaWFuLmdldERheSgpIC0gMSkgJSA3O1xyXG5cdFx0fTtcclxuXHRcdGRhdGUucGVyc2lhbi5mb3JldGltZU1vbnRoT2ZZZWFyID0gKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gUEVSU0lBTl9NT05USF9OQU1FUy5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4gaWR4IDw9ICtkYXRlLnBlcnNpYW4ubm93KCkubW9udGggLSAxKTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5wZXJzaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0dmFyIGVwYmFzZSwgZXB5ZWFyO1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhci50b1N0cmluZygpKTtcclxuXHRcdFx0bW9udGggPSBwYXJzZUludChtb250aC50b1N0cmluZygpKTtcclxuXHRcdFx0ZGF5ID0gcGFyc2VJbnQoZGF5LnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdFx0ZXBiYXNlID0geWVhciAtICh5ZWFyID49IDAgPyA0NzQgOiA0NzMpO1xyXG5cdFx0XHRlcHllYXIgPSA0NzQgKyBfLm1hdGgubW9kKGVwYmFzZSwgMjgyMCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGRheSArXHJcblx0XHRcdFx0KG1vbnRoIDw9IDcgPyAobW9udGggLSAxKSAqIDMxIDogKG1vbnRoIC0gMSkgKiAzMCArIDYpICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKChlcHllYXIgKiA2ODIgLSAxMTApIC8gMjgxNikgK1xyXG5cdFx0XHRcdChlcHllYXIgLSAxKSAqIDM2NSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcihlcGJhc2UgLyAyODIwKSAqIDEwMjk5ODMgK1xyXG5cdFx0XHRcdChQRVJTSUFOX0VQT0NIIC0gMSlcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblx0XHRkYXRlLnBlcnNpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XHJcblx0XHRcdHZhciBkYXRlQXJyYXkgPSBkYXRlLmp1bGlhbi50by5nZW9yZ2lhbihcclxuXHRcdFx0XHRkYXRlLnBlcnNpYW4udG8uanVsaWFuKHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSksIHBhcnNlSW50KG1vbnRoLnRvU3RyaW5nKCkpLCBwYXJzZUludChkYXkudG9TdHJpbmcoKSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZUNsYXNzKGRhdGVBcnJheVswXSwgcGFyc2VJbnQoZGF0ZUFycmF5WzFdKSwgZGF0ZUFycmF5WzJdKTtcclxuXHRcdH07XHJcblxyXG5cdFx0ZGF0ZS5nZW9yZ2lhbi5wYXJzZSA9IChkYXRlOiBEYXRlKTogRGF0ZUNsYXNzID0+XHJcblx0XHRcdG5ldyBEYXRlQ2xhc3MoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXRlLmdldERhdGUoKSk7XHJcblx0XHRkYXRlLmdlb3JnaWFuLnRvLmp1bGlhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIudG9TdHJpbmcoKSk7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSkgKyAxO1xyXG5cdFx0XHRkYXkgPSBwYXJzZUludChkYXkudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdEdSRUdPUklBTl9FUE9DSCAtXHJcblx0XHRcdFx0MSArXHJcblx0XHRcdFx0MzY1ICogKHllYXIgLSAxKSArXHJcblx0XHRcdFx0TWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNCkgK1xyXG5cdFx0XHRcdC1NYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0MDApICtcclxuXHRcdFx0XHRNYXRoLmZsb29yKCgzNjcgKiBtb250aCAtIDM2MikgLyAxMiArIChtb250aCA8PSAyID8gMCA6IF8uaXMuZ2VvcmdpYW5MZWFwWWVhcih5ZWFyKSA/IC0xIDogLTIpICsgZGF5KVxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdGRhdGUuZ2VvcmdpYW4udG8ucGVyc2lhbiA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuXHRcdFx0dmFyIGRhdGVBcnJheSA9IGRhdGUuanVsaWFuLnRvLnBlcnNpYW4oXHJcblx0XHRcdFx0ZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4ocGFyc2VJbnQoeWVhci50b1N0cmluZygpKSwgcGFyc2VJbnQobW9udGgudG9TdHJpbmcoKSksIHBhcnNlSW50KGRheS50b1N0cmluZygpKSlcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3MoZGF0ZUFycmF5WzBdLCBkYXRlQXJyYXlbMV0sIGRhdGVBcnJheVsyXSk7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZGF0ZS5nZW9yZ2lhbi5nZXRGdXR1cmVEYXRlID0gZnVuY3Rpb24gKG4pIHtcclxuXHRcdC8vICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdC8vICAgICByZXR1cm4gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpICsgbik7XHJcblx0XHQvLyB9XHJcblx0XHRkYXRlLmdlb3JnaWFuLm5vdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlQ2xhc3Mobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpICsgMSwgbm93LmdldERhdGUoKSk7XHJcblx0XHR9O1xyXG5cdFx0KGRhdGUuZ2VvcmdpYW4uZ2V0UmVsYXRpdmVEYXkgPSAobjogbnVtYmVyKSA9PiB7XHJcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIC0xICogbiAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGVDbGFzcyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKTtcclxuXHRcdH0pLFxyXG5cdFx0XHQoZGF0ZS5qdWxpYW4udG8uZ2VvcmdpYW4gPSBmdW5jdGlvbihqZCkge1xyXG5cdFx0XHRcdHZhciB3amQsXHJcblx0XHRcdFx0XHRkZXBvY2gsXHJcblx0XHRcdFx0XHRxdWFkcmljZW50LFxyXG5cdFx0XHRcdFx0ZHFjLFxyXG5cdFx0XHRcdFx0Y2VudCxcclxuXHRcdFx0XHRcdGRjZW50LFxyXG5cdFx0XHRcdFx0cXVhZCxcclxuXHRcdFx0XHRcdGRxdWFkLFxyXG5cdFx0XHRcdFx0eWluZGV4LFxyXG5cdFx0XHRcdFx0ZHlpbmRleCxcclxuXHRcdFx0XHRcdHllYXIsXHJcblx0XHRcdFx0XHRtb250aCxcclxuXHRcdFx0XHRcdGRheSxcclxuXHRcdFx0XHRcdHllYXJkYXksXHJcblx0XHRcdFx0XHRsZWFwYWRqO1xyXG5cdFx0XHRcdGpkID0gcGFyc2VGbG9hdChqZC50b1N0cmluZygpKTtcclxuXHJcblx0XHRcdFx0d2pkID0gTWF0aC5mbG9vcihqZCAtIDAuNSkgKyAwLjU7XHJcblx0XHRcdFx0ZGVwb2NoID0gd2pkIC0gR1JFR09SSUFOX0VQT0NIO1xyXG5cdFx0XHRcdHF1YWRyaWNlbnQgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDE0NjA5Nyk7XHJcblx0XHRcdFx0ZHFjID0gXy5tYXRoLm1vZChkZXBvY2gsIDE0NjA5Nyk7XHJcblx0XHRcdFx0Y2VudCA9IE1hdGguZmxvb3IoZHFjIC8gMzY1MjQpO1xyXG5cdFx0XHRcdGRjZW50ID0gXy5tYXRoLm1vZChkcWMsIDM2NTI0KTtcclxuXHRcdFx0XHRxdWFkID0gTWF0aC5mbG9vcihkY2VudCAvIDE0NjEpO1xyXG5cdFx0XHRcdGRxdWFkID0gXy5tYXRoLm1vZChkY2VudCwgMTQ2MSk7XHJcblx0XHRcdFx0eWluZGV4ID0gTWF0aC5mbG9vcihkcXVhZCAvIDM2NSk7XHJcblx0XHRcdFx0eWVhciA9IHF1YWRyaWNlbnQgKiA0MDAgKyBjZW50ICogMTAwICsgcXVhZCAqIDQgKyB5aW5kZXg7XHJcblx0XHRcdFx0aWYgKCEoY2VudCA9PSA0IHx8IHlpbmRleCA9PSA0KSkge1xyXG5cdFx0XHRcdFx0eWVhcisrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR5ZWFyZGF5ID0gd2pkIC0gXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCAwLCAxKTtcclxuXHRcdFx0XHRsZWFwYWRqID0gd2pkIDwgXy5kYXRlLmdlb3JnaWFuLnRvLmp1bGlhbih5ZWFyLCAzLCAxKSA/IDAgOiBfLmlzLmdlb3JnaWFuTGVhcFllYXIoeWVhcikgPyAxIDogMjtcclxuXHRcdFx0XHRtb250aCA9IE1hdGguZmxvb3IoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMiArIDM3MykgLyAzNjcpO1xyXG5cdFx0XHRcdGRheSA9IHdqZCAtIF8uZGF0ZS5nZW9yZ2lhbi50by5qdWxpYW4oeWVhciwgbW9udGggLSAxLCAxKSArIDE7XHJcblxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0ZGF0ZS5qdWxpYW4udG8ucGVyc2lhbiA9IGZ1bmN0aW9uKGpkKSB7XHJcblx0XHRcdHZhciB5ZWFyLCBtb250aCwgZGF5LCBkZXBvY2gsIGN5Y2xlLCBjeWVhciwgeWN5Y2xlLCBhdXgxLCBhdXgyLCB5ZGF5O1xyXG5cdFx0XHRqZCA9IHBhcnNlRmxvYXQoamQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHRqZCA9IE1hdGguZmxvb3IoamQpICsgMC41O1xyXG5cclxuXHRcdFx0ZGVwb2NoID0gamQgLSBfLmRhdGUucGVyc2lhbi50by5qdWxpYW4oNDc1LCAxLCAxKTtcclxuXHRcdFx0Y3ljbGUgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDEwMjk5ODMpO1xyXG5cdFx0XHRjeWVhciA9IF8ubWF0aC5tb2QoZGVwb2NoLCAxMDI5OTgzKTtcclxuXHRcdFx0aWYgKGN5ZWFyID09IDEwMjk5ODIpIHtcclxuXHRcdFx0XHR5Y3ljbGUgPSAyODIwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF1eDEgPSBNYXRoLmZsb29yKGN5ZWFyIC8gMzY2KTtcclxuXHRcdFx0XHRhdXgyID0gXy5tYXRoLm1vZChjeWVhciwgMzY2KTtcclxuXHRcdFx0XHR5Y3ljbGUgPSBNYXRoLmZsb29yKCgyMTM0ICogYXV4MSArIDI4MTYgKiBhdXgyICsgMjgxNSkgLyAxMDI4NTIyKSArIGF1eDEgKyAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHllYXIgPSB5Y3ljbGUgKyAyODIwICogY3ljbGUgKyA0NzQ7XHJcblx0XHRcdGlmICh5ZWFyIDw9IDApIHtcclxuXHRcdFx0XHR5ZWFyLS07XHJcblx0XHRcdH1cclxuXHRcdFx0eWRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIDEsIDEpICsgMTtcclxuXHRcdFx0bW9udGggPSB5ZGF5IDw9IDE4NiA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XHJcblx0XHRcdGRheSA9IGpkIC0gXy5kYXRlLnBlcnNpYW4udG8uanVsaWFuKHllYXIsIG1vbnRoLCAxKSArIDE7XHJcblx0XHRcdHJldHVybiBuZXcgQXJyYXkoaW5zZXJ0WmVybyh5ZWFyKSwgaW5zZXJ0WmVybyhtb250aCksIGluc2VydFplcm8oZGF5KSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBkYXRlO1xyXG5cdH0pKHRoaXMpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzdHJpbmdUZW1wbGF0ZSA9ICh0ZW1wbGF0ZTogYW55LCBtb2RlbDogYW55KSA9PiB7XHJcblx0cmV0dXJuIGV2YWwoJ2AnICsgdGVtcGxhdGUgKyAnYCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0Y2hWYWxpZGF0b3IoZGVzdGluYXRpb246IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLnJvb3QudmFsdWUpIHJldHVybjtcclxuICAgICAgICBsZXQgZGVzdGluYXRpb25WYWx1ZSA9IGNvbnRyb2wucm9vdC52YWx1ZVtkZXN0aW5hdGlvbl07XHJcblxyXG4gICAgICAgIHJldHVybiAoZGVzdGluYXRpb25WYWx1ZSA9PSBjb250cm9sLnZhbHVlKVxyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiB7IGtleTogXCJkb24ndCBtYXRjaGVkXCIgfTtcclxuICAgIH07XHJcbn0iLCJleHBvcnQgY2xhc3MgSVJlc3BvbnNlPFQ+IHtcclxuXHRSZXN1bHQ6IFQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBpcGUiLCJ0aGlzIiwiTmdNb2R1bGUiLCJJbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O1FBSUMsZ0NBQVM7Ozs7O1lBQVQsVUFBVSxLQUFhLEVBQUUsUUFBZ0I7Z0JBQ3hDLElBQUksS0FBSyxJQUFJLENBQUM7b0JBQUUsT0FBTyxRQUFRLENBQUM7Z0JBQ2hDLElBQUksS0FBSyxJQUFJLElBQUk7b0JBQUUsT0FBTyxTQUFTLENBQUM7Z0JBRXBDLHFCQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1YscUJBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLHFCQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixxQkFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFFbkIscUJBQUksY0FBYyxDQUFDO2dCQUNuQixxQkFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUVwQixJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sR0FBRyxXQUFXLENBQUM7b0JBQ3JCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztxQkFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7b0JBQ3ZCLE1BQU0sR0FBRyxVQUFVLENBQUM7b0JBQ3BCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztxQkFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7b0JBQ3ZCLE1BQU0sR0FBRyxXQUFXLENBQUM7b0JBQ3JCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztxQkFB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