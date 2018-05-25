(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@angular/forms'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/shared', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/common/http', '@angular/forms', '@angular/platform-browser/animations', '@angular/material', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.shared = {}),global.ng.core,global.ng.common,global.ng.router,global.ng.common.http,global.ng.forms,global.ng.platformBrowser.animations,global.ng.material,global.ng['flex-layout']));
}(this, (function (exports,core,common,router,http,forms,animations,material,flexLayout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var HttpResponseBaseModel = (function () {
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
    var HttpRequestBaseModel = (function () {
        function HttpRequestBaseModel() {
        }
        return HttpRequestBaseModel;
    }());
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
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
        DataUnitPipe.prototype.transform = function (value, exponent) {
            if (value == 0)
                return '0 بایت';
            if (value == null)
                return 'نامحدود';
            var /** @type {?} */ B = 1;
            var /** @type {?} */ KB = B * 1024;
            var /** @type {?} */ MB = KB * 1024;
            var /** @type {?} */ GB = MB * 1024;
            var /** @type {?} */ convertedValue;
            var /** @type {?} */ suffix = 'بایت';
            if (value >= GB) {
                suffix = 'گیگا بایت';
                convertedValue = (value / GB).toFixed(2);
            }
            else if (value >= MB) {
                suffix = 'مگا بایت';
                convertedValue = (value / MB).toFixed(2);
            }
            else if (value >= KB) {
                suffix = 'کیلو بایت';
                convertedValue = (value / KB).toFixed(2);
            }
            else {
                suffix = 'بایت';
                convertedValue = (value).toFixed(2);
            }
            return convertedValue + ' ' + suffix;
        };
        return DataUnitPipe;
    }());
    DataUnitPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'dataUnit' },] },
    ];
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
        TimeUnitPipe.prototype.getDays = function (value) {
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
        TimeUnitPipe.prototype.getHours = function (value) {
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
        TimeUnitPipe.prototype.getMinuts = function (value) {
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
        TimeUnitPipe.prototype.getSeconds = function (value) {
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
        TimeUnitPipe.prototype.transform = function (value, exponent) {
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
        return TimeUnitPipe;
    }());
    TimeUnitPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'timeUnit' },] },
    ];
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
        PersianDatePipe.prototype.transform = function (value, exponent) {
            if (!value)
                return '';
            var /** @type {?} */ date = new Date(/** @type {?} */ (value));
            var /** @type {?} */ persianDate = _.date.georgian.to.persian(date.getFullYear(), date.getMonth() + 1, date.getDate());
            return [
                parseInt(persianDate[0]).toLocaleString('fa-IR', { useGrouping: false }),
                parseInt(persianDate[1]).toLocaleString('fa-IR', { useGrouping: false }),
                parseInt(persianDate[2]).toLocaleString('fa-IR', { useGrouping: false })
            ].join('/');
        };
        return PersianDatePipe;
    }());
    PersianDatePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'persianDate' },] },
    ];
    var ɵ0 = function (_) {
        var /** @type {?} */ is = function (node, selector) {
            if (node.matches)
                return node.matches(selector);
            var /** @type {?} */ nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
            return nodes.indexOf(node) > -1 ? true : false;
        };
        is.object = function (_var) {
            return Object.prototype.toString.call(_var) === '[object Object]';
        };
        is.nodeList = function (obj) {
            if (_.is.not.ie())
                return Object.prototype.toString.call(obj) === '[object NodeList]';
            else
                return (obj.length !== undefined &&
                    obj.push === undefined &&
                    (obj.length > 0 ? obj[0].tagName !== undefined : true));
        };
        is.element = function (obj) {
            return Object.prototype.toString.call(obj).search('Element') > -1;
            //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
        };
        is.HTMLCollection = function (obj) {
            return Object.prototype.toString.call(obj) === '[object HTMLCollection]';
        };
        is.array = function (_var) {
            return Object.prototype.toString.call(_var) === '[object Array]';
        };
        is.number = function (_var) {
            return Object.prototype.toString.call(_var) === '[object Number]';
        };
        is['function'] = function (_var) {
            return Object.prototype.toString.call(_var) === '[object Function]';
        };
        is.string = function (_var) {
            return Object.prototype.toString.call(_var) === '[object String]'; //&& ((isEmpty));
        };
        is.undefined = function (_var) {
            return Object.prototype.toString.call(_var) === '[object Undefined]';
        };
        is.event = function (_var) {
            return Object.prototype.toString.call(_var).toLowerCase().search('event') > -1;
        };
        is.defined = function (_var) {
            //return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
            return _var !== undefined && _var !== null && _var !== '';
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
            return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not['function'](_var);
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
            var /** @type {?} */ reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, 'g');
            return str.match(reg) && str.match(reg).length > 0;
        };
        is.regex = function (r) {
            return r.constructor.name === 'RegExp';
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
            return i.length == 1 ? '0' + i : i;
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
        CurrencyUnitPipe.prototype.transform = function (value, exponent) {
            if (!value && value != 0)
                return '';
            else if (value == 0)
                return 'رایگان';
            var /** @type {?} */ suffix = 'ریال';
            return [value.toLocaleString('fa-IR'), suffix].join(' ');
        };
        return CurrencyUnitPipe;
    }());
    CurrencyUnitPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'currencyUnit' },] },
    ];
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
        PersianNumberPipe.prototype.transform = function (value, exponent) {
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
        return PersianNumberPipe;
    }());
    PersianNumberPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'persianNumber' },] },
    ];
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
        TimeCounterPipe.prototype.getHours = function (value) {
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
        TimeCounterPipe.prototype.getMinuts = function (value) {
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
        TimeCounterPipe.prototype.getSeconds = function (value) {
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
        TimeCounterPipe.prototype.transform = function (value, exponent) {
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
        return TimeCounterPipe;
    }());
    TimeCounterPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'timeCounter' },] },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DataUnitService = (function () {
        function DataUnitService() {
        }
        /**
         * @param {?} value
         * @param {?=} exponent
         * @return {?}
         */
        DataUnitService.prototype.transform = function (value, exponent) {
            debugger;
            if (value == 0)
                return '0 B';
            if (value == null)
                return 'نامحدود';
            var /** @type {?} */ B = 1;
            var /** @type {?} */ KB = B * 1024;
            var /** @type {?} */ MB = KB * 1024;
            var /** @type {?} */ GB = MB * 1024;
            var /** @type {?} */ convertedValue;
            var /** @type {?} */ suffix = 'B';
            if (value >= GB) {
                suffix = 'GB';
                convertedValue = (value / GB).toPrecision(3);
            }
            else if (value >= MB) {
                suffix = 'MG';
                convertedValue = (value / MB).toPrecision(3);
            }
            else if (value >= KB) {
                suffix = 'KB';
                convertedValue = (value / KB).toPrecision(3);
            }
            else {
                suffix = 'B';
                convertedValue = (value).toPrecision(3);
            }
            return convertedValue + ' ' + suffix;
        };
        return DataUnitService;
    }());
    DataUnitService.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PipesModule = (function () {
        function PipesModule() {
        }
        return PipesModule;
    }());
    PipesModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    providers: [
                        DataUnitService
                    ],
                    declarations: [
                        DataUnitPipe,
                        TimeUnitPipe,
                        PersianDatePipe,
                        CurrencyUnitPipe,
                        PersianNumberPipe,
                        TimeCounterPipe
                    ],
                    exports: [
                        DataUnitPipe,
                        TimeUnitPipe,
                        PersianDatePipe,
                        CurrencyUnitPipe,
                        PersianNumberPipe,
                        TimeCounterPipe
                    ]
                },] },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SharedModule = (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule,
                        forms.FormsModule,
                        http.HttpClientModule,
                        flexLayout.FlexLayoutModule,
                        material.MatIconModule,
                        material.MatButtonModule,
                        material.MatCardModule,
                        material.MatSnackBarModule,
                        material.MatSidenavModule,
                        material.MatExpansionModule,
                        material.MatSelectModule,
                        material.MatFormFieldModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatRadioModule,
                        material.MatInputModule,
                        material.MatToolbarModule,
                        material.MatDatepickerModule,
                        material.MatProgressBarModule,
                        animations.BrowserAnimationsModule,
                        PipesModule
                    ],
                    declarations: [],
                    exports: [
                        common.CommonModule,
                        router.RouterModule,
                        forms.FormsModule,
                        http.HttpClientModule,
                        flexLayout.FlexLayoutModule,
                        material.MatIconModule,
                        material.MatButtonModule,
                        material.MatCardModule,
                        material.MatSnackBarModule,
                        material.MatSidenavModule,
                        material.MatExpansionModule,
                        material.MatSelectModule,
                        material.MatFormFieldModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatRadioModule,
                        material.MatInputModule,
                        material.MatToolbarModule,
                        material.MatDatepickerModule,
                        material.MatProgressBarModule,
                        PipesModule
                    ]
                },] },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // export * from './animations';
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

    exports.HttpResponseBaseModel = HttpResponseBaseModel;
    exports.HttpRequestBaseModel = HttpRequestBaseModel;
    exports.SharedModule = SharedModule;
    exports.stringTemplate = stringTemplate;
    exports.MatchValidator = MatchValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-shared.umd.js.map
