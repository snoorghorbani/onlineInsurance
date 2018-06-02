(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/animations'), require('@soushians/authentication'), require('@angular/common'), require('@angular/platform-browser'), require('rxjs/observable/fromEvent'), require('@angular/router'), require('rxjs'), require('@soushians/user'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/do'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/empty'), require('@ngrx/effects'), require('rxjs/operators'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/layout', ['exports', '@ngrx/store', '@angular/core', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/animations', '@soushians/authentication', '@angular/common', '@angular/platform-browser', 'rxjs/observable/fromEvent', '@angular/router', 'rxjs', '@soushians/user', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', 'rxjs/add/observable/empty', '@ngrx/effects', 'rxjs/operators', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.layout = {}),null,global.ng.core,global.rxjs.BehaviorSubject,null,global.ng.animations,null,global.ng.common,global.ng.platformBrowser,global.rxjs['observable/fromEvent'],global.ng.router,global.rxjs,null,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.rxjs['add/operator/do'],global.rxjs['add/operator/catch'],global.rxjs['add/observable/empty'],null,global.rxjs.operators,global.ng.forms,global.ng.common.http,global.ng['flex-layout'],global.ng.material));
}(this, (function (exports,i2,i0,BehaviorSubject,config,animations,authentication,common,platformBrowser,fromEvent,router,rxjs,user,map,mergeMap,_do,_catch,empty,effects,operators,forms,http,flexLayout,material) { 'use strict';

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
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ OPEN_SIDENAV = "[Layout] Open Sidenav";
    var /** @type {?} */ CLOSE_SIDENAV = "[Layout] Close Sidenav";
    /** @enum {string} */
    var LayoutActionTypes = {
        UPDATE_LAYOUT_CONFIG: "[Layout] UPDATE_LAYOUT_CONFIG",
        DO_SIGNOUT: "[Layout] do signout",
        TITLE_CHANGED: "[LAYOUT] TITLE_CHANGED",
        CHANGE_LAYOUT: "[Layout] Change Layout",
        CHANGE_MAIN_SIDENAVE_MODE: "[Layout] Change main sidenav mode",
        OPEN_SECOND_SIDEBAR: "[Layout] Open Second Sidebar",
        CLOSE_SECOND_SIDEBAR: "[Layout] Close Second Sidebar",
        CHANGE_SECOND_SIDENAV_MODE: "[Layout] Change second sidenav mode",
    };
    var UpdateLayoutConfigAction = (function () {
        function UpdateLayoutConfigAction(payload) {
            this.payload = payload;
            this.type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
        }
        return UpdateLayoutConfigAction;
    }());
    var OpenSidenavAction = (function () {
        function OpenSidenavAction() {
            this.type = OPEN_SIDENAV;
        }
        return OpenSidenavAction;
    }());
    var CloseSidenavAction = (function () {
        function CloseSidenavAction() {
            this.type = CLOSE_SIDENAV;
        }
        return CloseSidenavAction;
    }());
    var ChangeLayout = (function () {
        function ChangeLayout(name) {
            this.name = name;
            this.type = LayoutActionTypes.CHANGE_LAYOUT;
        }
        return ChangeLayout;
    }());
    var ChangeSideNavMode = (function () {
        function ChangeSideNavMode(mode) {
            this.mode = mode;
            this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
        }
        return ChangeSideNavMode;
    }());
    var ChangeSecondSidenavMode = (function () {
        function ChangeSecondSidenavMode(mode) {
            this.mode = mode;
            this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
        }
        return ChangeSecondSidenavMode;
    }());
    var DoSignoutAction = (function () {
        function DoSignoutAction() {
            this.type = LayoutActionTypes.DO_SIGNOUT;
        }
        return DoSignoutAction;
    }());
    var TitleChangedAction = (function () {
        function TitleChangedAction(title) {
            this.title = title;
            this.type = LayoutActionTypes.TITLE_CHANGED;
        }
        return TitleChangedAction;
    }());
    var OpenSecondSidenavAction = (function () {
        function OpenSecondSidenavAction() {
            this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
        }
        return OpenSecondSidenavAction;
    }());
    var CloseSecondSidenavAction = (function () {
        function CloseSecondSidenavAction() {
            this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
        }
        return CloseSecondSidenavAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ initialState = {
        showMainSidenav: false,
        showSecondSideNav: false,
        secondSideNavMode: "over",
        mainSideNavMode: "over",
        showLeftNavBar: false,
        stickyLeftNavBar: false,
        layoutMode: "default",
        title: "",
        menuItems: [],
        signoutAction: /** @type {?} */ ({})
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function Reducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
                return __assign({}, state, action.payload);
            case CLOSE_SIDENAV:
                return __assign({}, state, { showMainSidenav: false });
            case OPEN_SIDENAV:
                return __assign({}, state, { showMainSidenav: true });
            case LayoutActionTypes.TITLE_CHANGED:
                return __assign({}, state, { title: action.title });
            case LayoutActionTypes.CHANGE_LAYOUT:
                return __assign({}, state, { layoutMode: action.name });
            case LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
                return __assign({}, state, { mainSideNavMode: action.mode });
            case LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
                return __assign({}, state, { showSecondSideNav: false });
            case LayoutActionTypes.OPEN_SECOND_SIDEBAR:
                return __assign({}, state, { showSecondSideNav: true });
            case LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
                return __assign({}, state, { secondSideNavMode: action.mode });
            default:
                return state;
        }
    }
    var /** @type {?} */ getTitle = function (state) { return state.title; };
    var /** @type {?} */ getShowMainSidenav = function (state) { return state.showMainSidenav; };
    var /** @type {?} */ getMainSideNavMode = function (state) { return state.mainSideNavMode; };
    var /** @type {?} */ getLayoutMode = function (state) { return state.layoutMode; };
    var /** @type {?} */ getShowSecondSidebarStatus = function (state) { return state.showSecondSideNav; };
    var /** @type {?} */ getSecondSidebarMode = function (state) { return state.secondSideNavMode; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var ToolbarActionTypes = {
        COMPORTABLE: "[Layout][TOOLBAR] COMPORTABLE",
        COMPACT: "[Layout][TOOLBAR] COMPACT",
        SUMMARY: "[Layout][TOOLBAR] SUMMARY",
        ENABLE_COMFORTABLE_MODE: "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE",
        DISBALE_COMFORTABLE_MODE: "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE",
    };
    var ChangeToolbatToComfortableModeAction = (function () {
        function ChangeToolbatToComfortableModeAction() {
            this.type = ToolbarActionTypes.COMPORTABLE;
        }
        return ChangeToolbatToComfortableModeAction;
    }());
    var ChangeToolbatToCompactModeAction = (function () {
        function ChangeToolbatToCompactModeAction() {
            this.type = ToolbarActionTypes.COMPACT;
        }
        return ChangeToolbatToCompactModeAction;
    }());
    var ChangeToolbatToSummaryModeAction = (function () {
        function ChangeToolbatToSummaryModeAction() {
            this.type = ToolbarActionTypes.SUMMARY;
        }
        return ChangeToolbatToSummaryModeAction;
    }());
    var EnableComfortableModeAction = (function () {
        function EnableComfortableModeAction() {
            this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
        }
        return EnableComfortableModeAction;
    }());
    var DisableComfortableModeAction = (function () {
        function DisableComfortableModeAction() {
            this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
        }
        return DisableComfortableModeAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ initialState$1 = {
        mode: "compact",
        enableComfortableMode: false,
        comfortableModeHaveBeenDone: false
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function Reducer$1(state, action) {
        if (state === void 0) {
            state = initialState$1;
        }
        switch (action.type) {
            case ToolbarActionTypes.COMPACT:
                return __assign({}, state, { mode: "compact" });
            case ToolbarActionTypes.COMPORTABLE:
                return __assign({}, state, { mode: state.enableComfortableMode ? "comfortable" : "compact" });
            case ToolbarActionTypes.SUMMARY:
                return __assign({}, state, { mode: "summary" });
            case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
                return __assign({}, state, { enableComfortableMode: true });
            case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
                return __assign({}, state, { mode: "compact", enableComfortableMode: false });
            default:
                return state;
        }
    }
    var /** @type {?} */ getToolbarMode = function (state) { return state.mode; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ LayoutReducers = {
        layout: Reducer,
        toolbar: Reducer$1
    };
    //#region selectors
    var /** @type {?} */ selectLayoutState = i2.createFeatureSelector("layout");
    //#endregion
    var /** @type {?} */ getLayout = i2.createSelector(selectLayoutState, function (state) { return state.layout; });
    var /** @type {?} */ getTitle$1 = i2.createSelector(getLayout, getTitle);
    var /** @type {?} */ getShowMainSidenav$1 = i2.createSelector(getLayout, getShowMainSidenav);
    var /** @type {?} */ getMainSideNavMode$1 = i2.createSelector(getLayout, getMainSideNavMode);
    var /** @type {?} */ getLayoutMode$1 = i2.createSelector(getLayout, getLayoutMode);
    var /** @type {?} */ getShowSecondSidebarStatus$1 = i2.createSelector(getLayout, getShowSecondSidebarStatus);
    var /** @type {?} */ getSecondSidebarMode$1 = i2.createSelector(getLayout, getSecondSidebarMode);
    //#region toolbar
    var /** @type {?} */ getLayoutToolbar = i2.createSelector(selectLayoutState, function (state) { return state.toolbar; });
    var /** @type {?} */ getLayoutToolbarMode = i2.createSelector(getLayoutToolbar, getToolbarMode);
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        showMainSidenav: false,
        showSecondSideNav: true,
        secondSideNavMode: "over",
        //| "push" | "side",
        mainSideNavMode: "over",
        //| "push" | "side",
        showLeftNavBar: false,
        stickyLeftNavBar: false,
        layoutMode: "with-margin",
        // | "without-margin" | "default",
        title: "",
        menuItems: [
            {
                route: "/",
                icon: "multiline_chart",
                roles: ["Admin", "User"],
                title: "صفحه اصلی"
            },
            {
                route: "/configs",
                icon: "settings",
                roles: ["Admin"],
                title: "تنظیمات"
            },
            {
                route: "/source",
                icon: "device_hub",
                roles: ["Admin"],
                title: "آدرس سرویس ها"
            }
        ],
        signoutAction: /** @type {?} */ ({})
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("LayoutModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LayoutConfigurationService = (function () {
        function LayoutConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new BehaviorSubject.BehaviorSubject(this._config);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getlayoutModuleConfig).subscribe(function (config$$1) {
                if (!config$$1)
                    return;
                _this.store.dispatch(new UpdateLayoutConfigAction(config$$1.Config));
                _this._config = Object.assign({}, _this._config, config$$1.Config);
                _this.config$.next(_this._config);
            });
        }
        Object.defineProperty(LayoutConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        LayoutConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        LayoutConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ LayoutConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: LayoutConfigurationService, providedIn: "root" });
        return LayoutConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MainMenuComponent = (function () {
        function MainMenuComponent(store, signinService, configurationService) {
            this.store = store;
            this.signinService = signinService;
            this.configurationService = configurationService;
            this.closeSidebar = new i0.EventEmitter();
            this.routes = this.configurationService.config$.map(function (config$$1) { return config$$1.menuItems; });
        }
        MainMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-layout-main-menu",
                        template: "<mat-list class=\"main-menu-container\">\n  <div *ngIf=\"authenticated | async\">\n    <a *ngFor=\"let item of routes | async\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">\n      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>\n      <span mdLine>{{item.title}}</span>\n    </a>\n  </div>\n</mat-list>",
                        styles: [".active{background:rgba(0,0,0,.15)}.mat-list-item.active mat-icon{color:#0072ae}a.mat-list-item.child{margin-right:20px}#clearUserMenuItem{position:absolute;left:13px;top:13px}"],
                        animations: [
                            animations.trigger("childMenu", [
                                animations.state("inactive", animations.style({
                                    // transform: 'scale(1)',
                                    height: "0px",
                                    opacity: "0"
                                })),
                                animations.state("active", animations.style({
                                    // transform: 'scale(1.1)',
                                    height: "48px",
                                    opacity: "1"
                                })),
                                animations.transition("inactive => active", animations.animate("100ms ease-in")),
                                animations.transition("active => inactive", animations.animate("100ms ease-out"))
                            ]),
                            animations.trigger("menuItem", [
                                animations.state("inactive", animations.style({
                                    height: "48px"
                                })),
                                animations.state("active", animations.style({
                                    height: "100px"
                                })),
                                animations.transition("inactive => active", animations.animate("100ms ease-in")),
                                animations.transition("active => inactive", animations.animate("100ms ease-out"))
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        MainMenuComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: authentication.SigninService },
                { type: LayoutConfigurationService }
            ];
        };
        MainMenuComponent.propDecorators = {
            closeSidebar: [{ type: i0.Output }],
            authenticated: [{ type: i0.Input }],
            customerMobileInput: [{ type: i0.ViewChild, args: ["customerMobileInput",] }]
        };
        return MainMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SearchBoxComponent = (function () {
        function SearchBoxComponent() {
        }
        /**
         * @return {?}
         */
        SearchBoxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SearchBoxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-search-box',
                        template: "<div class=\"search-box\">\n  <!--<td-search-box class=\"search-box-container\" backIcon=\"arrow_back\" placeholder=\"\u062C\u0633\u062A\u062C\u0648\" [showUnderline]=\"false\" [debounce]=\"500\" [alwaysVisible]=\"false\"\n                 (searchDebounce)=\"searchInputTerm = $event\" (search)=\"searchInputTerm = $event\" (clear)=\"searchInputTerm = ''\">\n  </td-search-box>-->\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        SearchBoxComponent.ctorParameters = function () { return []; };
        return SearchBoxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LogoContainerComponent = (function () {
        function LogoContainerComponent(sdf) {
            this.sdf = sdf;
        }
        LogoContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-logo-container",
                        template: "<div id=\"background\"></div>\n  <img class=\"shatelLogoAnimation\" routerLink='/' src='../../../assets/images/shatel-logo.png' />\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                        styles: [".shatelLogoAnimation{height:35px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
                    },] },
        ];
        /** @nocollapse */
        LogoContainerComponent.ctorParameters = function () {
            return [
                { type: LayoutConfigurationService }
            ];
        };
        return LogoContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToolbarMenuComponent = (function () {
        function ToolbarMenuComponent(document, _location, store, configurationService) {
            var _this = this;
            this.document = document;
            this._location = _location;
            this.store = store;
            this.configurationService = configurationService;
            this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            this.config$ = this.store.select(getLayoutToolbar);
            this.config$.subscribe(function (config$$1) { return (_this.config = config$$1); });
            this.lastScroll = this.document.body.scrollTop;
            this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
            this.showMainSidenav = this.store.select(getShowMainSidenav$1);
            this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
            this.menuItems$ = this.configurationService.config$.map(function (config$$1) { return config$$1.menuItems; });
            fromEvent.fromEvent(this.document.body, "scroll").subscribe(function () {
                var /** @type {?} */ scrolledAmount = _this.document.body.scrollTop;
                var /** @type {?} */ scrollToTop = scrolledAmount - _this.lastScroll < 0 && _this.document.body.scrollHeight - scrolledAmount < 100;
                // let scrollToTop = scrolledAmount - this.lastScroll < 0;
                // let scrollToTop = scrolledAmount - this.lastScroll < 0;
                _this.lastScroll = _this.document.body.scrollTop;
                if (scrolledAmount == 0) {
                    if (_this.config.mode == "comfortable")
                        return;
                    _this.store.dispatch(new ChangeToolbatToComfortableModeAction());
                }
                else if (scrolledAmount < 128 || scrollToTop) {
                    if (_this.config.mode == "compact")
                        return;
                    _this.store.dispatch(new ChangeToolbatToCompactModeAction());
                }
                else {
                    if (_this.config.mode == "summary")
                        return;
                    _this.store.dispatch(new ChangeToolbatToSummaryModeAction());
                }
            });
        }
        /**
         * @return {?}
         */
        ToolbarMenuComponent.prototype.onWindowScroll = /**
         * @return {?}
         */
            function () {
                // of(1)
            };
        /**
         * @return {?}
         */
        ToolbarMenuComponent.prototype.signout = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new DoSignoutAction());
            };
        /**
         * @return {?}
         */
        ToolbarMenuComponent.prototype.goback = /**
         * @return {?}
         */
            function () {
                this._location.back();
            };
        /**
         * @return {?}
         */
        ToolbarMenuComponent.prototype.toggleSecondSidebar = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ action;
                this.showSecondSidenav.subscribe(function (state) {
                    action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
                });
                this.store.dispatch(action);
            };
        /**
         * @return {?}
         */
        ToolbarMenuComponent.prototype.toggleMainSidebar = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ action;
                this.showMainSidenav.subscribe(function (state) {
                    action = state ? new CloseSidenavAction() : new OpenSidenavAction();
                });
                this.store.dispatch(action);
            };
        ToolbarMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "layout-toolbar",
                        template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState | async\">\n  <mat-toolbar-row>\n    <app-logo-container fxFlex=\"none\" fxLayoutAlign=\"end center\"></app-logo-container>\n\n    <button type=\"button\" *ngIf='showSidebarMenu' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n    \n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\n      \u0648\u0631\u0648\u062F\n    </button>\n    <button *ngIf=\"displayName\" mat-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n      <span>\n        {{displayName}}\n      </span>\n    </button>\n    <mat-menu #toolbarMenu1>\n      <button routerLink='/user/panel' mat-menu-item>\n        <mat-icon>fingerprint</mat-icon>\n        <span>\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon>\n        <span>\u062E\u0631\u0648\u062C</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    \n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <button mat-button \n    *ngFor=\"let menu of menuItems$ | async\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"[menu.route]\" \n    >\n    <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n    <span>{{menu.title}}</span>\n  </button>\n</mat-toolbar-row>\n</mat-toolbar>",
                        styles: [""],
                        animations: [
                            animations.trigger("toolbarAnimation", [
                                animations.state("comfortable", animations.style({
                                    backgroundColor: "rgba(119,181,63,1)",
                                    color: "rgba(256,256,256,1)",
                                    height: "33vh",
                                    top: "0",
                                    boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                                })),
                                animations.state("compact", animations.style({
                                    backgroundColor: "rgba(256,256,256,1)",
                                    height: "128px",
                                    top: "0",
                                    boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                                })),
                                animations.state("summary", animations.style({
                                    backgroundColor: "rgba(256,256,256,1)",
                                    height: "128px",
                                    top: "-64px",
                                    boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                                })),
                                animations.transition("comfortable => compact", animations.animate("400ms ease-in")),
                                animations.transition("comfortable => summary", animations.animate("400ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("400ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("400ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-in"))
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        ToolbarMenuComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [platformBrowser.DOCUMENT,] }] },
                { type: common.Location },
                { type: i2.Store },
                { type: LayoutConfigurationService }
            ];
        };
        ToolbarMenuComponent.propDecorators = {
            showSidebarMenu: [{ type: i0.Input }],
            app_config: [{ type: i0.Input, args: ["app-config",] }],
            user: [{ type: i0.Input }],
            displayName: [{ type: i0.Input }],
            onWindowScroll: [{ type: i0.HostListener, args: ["body:scroll", [],] }]
        };
        return ToolbarMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FooterComponent = (function () {
        function FooterComponent() {
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        FooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-footer",
                        template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\n    {{app_config?.Config.FooterCopyright}}\n</div>",
                        styles: [":host{position:absolute;bottom:0;left:0;right:0;border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
                    },] },
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        FooterComponent.propDecorators = {
            app_config: [{ type: i0.Input, args: ["app-config",] }]
        };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TitleComponent = (function () {
        function TitleComponent(store, router$$1) {
            var _this = this;
            this.store = store;
            this.router = router$$1;
            this.mapper = [];
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('profile-edit')) ? 'ویرایش اطلاعات کاربری' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('success-payment-report')) ? 'گزارش پرداخت های موفق' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('failed-login-report')) ? 'گزارش خطاها' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('active-session-info')) ? 'جزئیات بسته فعال' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('session-detail-report')) ? 'جزئیات اتصال' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('daily-session-report')) ? 'گزارش تجمیعی روزانه' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('monthly-session-report')) ? 'گزارش تجمیعی ماهانه' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.startsWith('/packages/user-packages')) ? 'لیست پکیج ها' : null;
            // });
            // this.mapper.push((event: NavigationEnd) => {
            //     return (event.url.endsWith('/change-password')) ? 'تغییر کلمه عبور' : null;
            // });
            this.title$ = this.store.select(getTitle$1);
            this.router.events.subscribe(function (event) {
                if (event instanceof router.NavigationEnd) {
                    var /** @type {?} */ title = "";
                    _this.mapper.forEach(function (mapper) {
                        var /** @type {?} */ res = mapper(event);
                        if (res) {
                            title = res;
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    _this.store.dispatch(new TitleChangedAction("/ " + title || ""));
                }
            });
        }
        TitleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-title",
                        template: "<div id=\"title\">\n    {{title$ | async}}\n</div>",
                        styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
                    },] },
        ];
        /** @nocollapse */
        TitleComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: router.Router }
            ];
        };
        return TitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MainComponent = (function () {
        function MainComponent(store, router$$1, configService, userFacadeService) {
            var _this = this;
            this.store = store;
            this.router = router$$1;
            this.configService = configService;
            this.userFacadeService = userFacadeService;
            this.showSidebarMenu = new rxjs.BehaviorSubject(true);
            this.width = 100;
            this.store.dispatch(new ChangeSideNavMode("push"));
            this.user$ = this.store.select(function (s) { return ((s)).user.user.data; });
            this.displayName$ = this.userFacadeService.getDisplayName();
            this.showMainSidenav = this.store.select(getShowMainSidenav$1);
            this.mainSidenavMode = this.store.select(getMainSideNavMode$1);
            this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
            //#region manage second sidebar
            this.store.dispatch(new ChangeSecondSidenavMode("push"));
            this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
            this.secondSidenavMode = this.store.select(getSecondSidebarMode$1);
            //#endregion manage second sidebar
            this.layoutMode = this.store.select(getLayoutMode$1);
            this.router.events.filter(function (data) { return data instanceof router.NavigationEnd; }).subscribe(function (event) {
                var /** @type {?} */ hideSituations = [
                    ((event)).urlAfterRedirects == "/auth/signin",
                    ((event)).urlAfterRedirects == "/auth/signup/register",
                    ((event)).urlAfterRedirects == "/auth/signup/verification",
                    ((event)).urlAfterRedirects == "/user/password/reset"
                ];
                if (hideSituations.some(function (i) { return i; }))
                    _this.showSidebarMenu.next(false);
                else
                    _this.showSidebarMenu.next(true);
            });
            this.layoutMode.subscribe(function (mode) {
                if (!_this.mainSideNav)
                    return;
                ((_this.mainSideNav.nativeElement)).className = "";
                ((_this.mainSideNav.nativeElement)).classList.add(mode);
            });
        }
        // ngAfterViewInit() {
        // 	this.store.dispatch(new ChangeLayout("with-margin"));
        // }
        /**
         * @return {?}
         */
        MainComponent.prototype.onSecondSidebarClosedStart = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new CloseSecondSidenavAction());
            };
        /**
         * @return {?}
         */
        MainComponent.prototype.onSidebarClosedStart = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new CloseSidenavAction());
            };
        MainComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "layout-main",
                        template: "<div #mainSideNav [className]=\"toolbarAnimationState | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  \n  <mat-sidenav-container id=\"layout-sidnav\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <router-outlet name=\"footer_A\"></router-outlet>\n        <router-outlet name=\"footer_B\"></router-outlet>\n        <footer>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                        styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}"]
                    },] },
        ];
        /** @nocollapse */
        MainComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: router.Router },
                { type: LayoutConfigurationService },
                { type: user.UserFacadeService }
            ];
        };
        MainComponent.propDecorators = {
            app_config: [{ type: i0.Input, args: ["app-config",] }],
            mainSideNav: [{ type: i0.ViewChild, args: ["mainSideNav",] }]
        };
        return MainComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LayoutEffects = (function () {
        function LayoutEffects(actions$, router$$1) {
            this.actions$ = actions$;
            this.router = router$$1;
            this.DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(operators.map(function () { return new authentication.DoSignoutAction(); }));
        }
        LayoutEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        LayoutEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], LayoutEffects.prototype, "DoSignout$", void 0);
        return LayoutEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgsLayoutModule = (function () {
        function NgsLayoutModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsLayoutModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config$$1) {
                return {
                    ngModule: RootNgsLayoutModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }]
                };
            };
        NgsLayoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule,
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
                            router.RouterModule,
                            config.NgsConfigModule
                        ],
                        declarations: [
                            MainMenuComponent,
                            SearchBoxComponent,
                            LogoContainerComponent,
                            ToolbarMenuComponent,
                            FooterComponent,
                            TitleComponent,
                            MainComponent
                        ],
                        exports: [
                            MainMenuComponent,
                            SearchBoxComponent,
                            LogoContainerComponent,
                            ToolbarMenuComponent,
                            FooterComponent,
                            TitleComponent,
                            MainComponent
                        ]
                    },] },
        ];
        return NgsLayoutModule;
    }());
    var RootNgsLayoutModule = (function () {
        function RootNgsLayoutModule() {
        }
        RootNgsLayoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsLayoutModule,
                            i2.StoreModule.forFeature("layout", LayoutReducers),
                            effects.EffectsModule.forFeature([LayoutEffects])
                        ],
                        exports: [NgsLayoutModule]
                    },] },
        ];
        return RootNgsLayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //components

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LayoutActionTypes = LayoutActionTypes;
    exports.TitleChangedAction = TitleChangedAction;
    exports.OpenSidenavAction = OpenSidenavAction;
    exports.CloseSidenavAction = CloseSidenavAction;
    exports.ChangeSideNavMode = ChangeSideNavMode;
    exports.ChangeLayout = ChangeLayout;
    exports.CloseSecondSidenavAction = CloseSecondSidenavAction;
    exports.ChangeSecondSidenavMode = ChangeSecondSidenavMode;
    exports.OpenSecondSidenavAction = OpenSecondSidenavAction;
    exports.ChangeToolbatToComfortableModeAction = ChangeToolbatToComfortableModeAction;
    exports.ChangeToolbatToCompactModeAction = ChangeToolbatToCompactModeAction;
    exports.DisableComfortableModeAction = DisableComfortableModeAction;
    exports.EnableComfortableModeAction = EnableComfortableModeAction;
    exports.NgsLayoutModule = NgsLayoutModule;
    exports.RootNgsLayoutModule = RootNgsLayoutModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵg = FooterComponent;
    exports.ɵe = LogoContainerComponent;
    exports.ɵa = MainMenuComponent;
    exports.ɵi = MainComponent;
    exports.ɵd = SearchBoxComponent;
    exports.ɵh = TitleComponent;
    exports.ɵf = ToolbarMenuComponent;
    exports.ɵk = LayoutEffects;
    exports.ɵj = LayoutReducers;
    exports.ɵc = LayoutConfigurationService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT1BFTl9TSURFTkFWID0gXCJbTGF5b3V0XSBPcGVuIFNpZGVuYXZcIjtcclxuZXhwb3J0IGNvbnN0IENMT1NFX1NJREVOQVYgPSBcIltMYXlvdXRdIENsb3NlIFNpZGVuYXZcIjtcclxuXHJcbmV4cG9ydCBlbnVtIExheW91dEFjdGlvblR5cGVzIHtcclxuXHRVUERBVEVfTEFZT1VUX0NPTkZJRyA9IFwiW0xheW91dF0gVVBEQVRFX0xBWU9VVF9DT05GSUdcIixcclxuXHRET19TSUdOT1VUID0gXCJbTGF5b3V0XSBkbyBzaWdub3V0XCIsXHJcblx0VElUTEVfQ0hBTkdFRCA9IFwiW0xBWU9VVF0gVElUTEVfQ0hBTkdFRFwiLFxyXG5cdENIQU5HRV9MQVlPVVQgPSBcIltMYXlvdXRdIENoYW5nZSBMYXlvdXRcIixcclxuXHRDSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFID0gXCJbTGF5b3V0XSBDaGFuZ2UgbWFpbiBzaWRlbmF2IG1vZGVcIixcclxuXHRPUEVOX1NFQ09ORF9TSURFQkFSID0gXCJbTGF5b3V0XSBPcGVuIFNlY29uZCBTaWRlYmFyXCIsXHJcblx0Q0xPU0VfU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIENsb3NlIFNlY29uZCBTaWRlYmFyXCIsXHJcblx0Q0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBzZWNvbmQgc2lkZW5hdiBtb2RlXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlVQREFURV9MQVlPVVRfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMYXlvdXRDb25maWdNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgT3BlblNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBPUEVOX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDTE9TRV9TSURFTkFWO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlTGF5b3V0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTaWRlTmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG1vZGU6IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIikge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGl0bGVDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5PUEVOX1NFQ09ORF9TSURFQkFSO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XHJcblx0fCBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb25cclxuXHR8IE9wZW5TaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNpZGVuYXZBY3Rpb25cclxuXHR8IENoYW5nZVNpZGVOYXZNb2RlXHJcblx0fCBDaGFuZ2VMYXlvdXRcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgVGl0bGVDaGFuZ2VkQWN0aW9uXHJcblx0fCBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZTtcclxuIiwiaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCIuLi9hY3Rpb25zL2xheW91dFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUgZXh0ZW5kcyBMYXlvdXRDb25maWdNb2RlbCB7fVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZSxcclxuXHRzZWNvbmRTaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb25cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGxheW91dC5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlVQREFURV9MQVlPVVRfQ09ORklHOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLmFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5DTE9TRV9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5PUEVOX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0aXRsZTogYWN0aW9uLnRpdGxlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxheW91dE1vZGU6IGFjdGlvbi5uYW1lXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2Vjb25kU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnRpdGxlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubWFpblNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dTZWNvbmRTaWRlTmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kU2lkZWJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zZWNvbmRTaWRlTmF2TW9kZTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBUb29sYmFyQWN0aW9uVHlwZXMge1xyXG5cdENPTVBPUlRBQkxFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QT1JUQUJMRVwiLFxyXG5cdENPTVBBQ1QgPSBcIltMYXlvdXRdW1RPT0xCQVJdIENPTVBBQ1RcIixcclxuXHRTVU1NQVJZID0gXCJbTGF5b3V0XVtUT09MQkFSXSBTVU1NQVJZXCIsXHJcblx0RU5BQkxFX0NPTUZPUlRBQkxFX01PREUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0RElTQkFMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBESVNCQUxFX0NPTUZPUlRBQkxFX01PREVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkNPTVBPUlRBQkxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QQUNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5TVU1NQVJZO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuRU5BQkxFX0NPTUZPUlRBQkxFX01PREU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCB0eXBlIFRvb2xiYXJBY3Rpb25zID1cclxuXHR8IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb25cclxuXHR8IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcblx0fCBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb247XHJcbiIsImltcG9ydCB7IFRvb2xiYXJBY3Rpb25UeXBlcywgVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bW9kZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIjtcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGJvb2xlYW47XHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2UsXHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVG9vbGJhckFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogc3RhdGUuZW5hYmxlQ29tZm9ydGFibGVNb2RlID8gXCJjb21mb3J0YWJsZVwiIDogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJzdW1tYXJ5XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb29sYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1vZGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi9sYXlvdXQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tVG9vbGJhciBmcm9tIFwiLi90b29sYmFyLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGUge1xyXG5cdGxheW91dDogbGF5b3V0LlN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0UmVkdWNlcnMgPSB7XHJcblx0bGF5b3V0OiBsYXlvdXQuUmVkdWNlcixcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5SZWR1Y2VyXHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRsYXlvdXQ6IExheW91dFN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TGF5b3V0U3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TGF5b3V0U3RhdGU+KFwibGF5b3V0XCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLmxheW91dCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRUaXRsZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRMYXlvdXRNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dE1vZHVsZUNvbmZpZyBleHRlbmRzIExheW91dENvbmZpZ01vZGVsIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBMYXlvdXRNb2R1bGVDb25maWcgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZSxcclxuXHRzZWNvbmRTaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcIndpdGgtbWFyZ2luXCIsIC8vIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9cIixcclxuXHRcdFx0aWNvbjogXCJtdWx0aWxpbmVfY2hhcnRcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiLCBcIlVzZXJcIiBdLFxyXG5cdFx0XHR0aXRsZTogXCLDmMK1w5nCgcOYwq3DmcKHIMOYwqfDmMK1w5nChMObwoxcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL2NvbmZpZ3NcIixcclxuXHRcdFx0aWNvbjogXCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvc291cmNlXCIsXHJcblx0XHRcdGljb246IFwiZGV2aWNlX2h1YlwiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCosOYwq/DmMKxw5jCsyDDmMKzw5jCscOZwojDm8KMw5jCsyDDmcKHw5jCp1wiXHJcblx0XHR9XHJcblx0XSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb25cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPExheW91dE1vZHVsZUNvbmZpZz4oXCJMYXlvdXRNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0bGF5b3V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdC8vIHByaXZhdGUgX2NvbmZpZzogTGF5b3V0Q29uZmlnTW9kZWw7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBhbnk7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheW91dE1vZHVsZUNvbmZpZz4odGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRsYXlvdXRNb2R1bGVDb25maWcpLnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIWNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24oY29uZmlnLkNvbmZpZykpO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2xheW91dC5jb25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1sYXlvdXQtbWFpbi1tZW51XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWxpc3QgY2xhc3M9XCJtYWluLW1lbnUtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAqbmdJZj1cImF1dGhlbnRpY2F0ZWQgfCBhc3luY1wiPlxyXG4gICAgPGEgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm91dGVzIHwgYXN5bmNcIiAoY2xpY2spPVwiY2xvc2VTaWRlYmFyLmVtaXQoKVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBtYXQtbGlzdC1pdGVtIFtyb3V0ZXJMaW5rXT1cIltpdGVtLnJvdXRlXVwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e2l0ZW0uaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4gbWRMaW5lPnt7aXRlbS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L21hdC1saXN0PmAsXHJcblx0c3R5bGVzOiBbYC5hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9Lm1hdC1saXN0LWl0ZW0uYWN0aXZlIG1hdC1pY29ue2NvbG9yOiMwMDcyYWV9YS5tYXQtbGlzdC1pdGVtLmNoaWxke21hcmdpbi1yaWdodDoyMHB4fSNjbGVhclVzZXJNZW51SXRlbXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjEzcHg7dG9wOjEzcHh9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImNoaWxkTWVudVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogXCIxXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW5hY3RpdmUgPT4gYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImFjdGl2ZSA9PiBpbmFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJtZW51SXRlbVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoKSBjbG9zZVNpZGViYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGF1dGhlbnRpY2F0ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG5cdGN1c3RvbWVyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRyb3V0ZXM6IGFueSA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpO1xyXG5cclxuXHRAVmlld0NoaWxkKFwiY3VzdG9tZXJNb2JpbGVJbnB1dFwiKSBjdXN0b21lck1vYmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoLWJveCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gIDwhLS08dGQtc2VhcmNoLWJveCBjbGFzcz1cInNlYXJjaC1ib3gtY29udGFpbmVyXCIgYmFja0ljb249XCJhcnJvd19iYWNrXCIgcGxhY2Vob2xkZXI9XCLDmMKsw5jCs8OYwqrDmMKsw5nCiFwiIFtzaG93VW5kZXJsaW5lXT1cImZhbHNlXCIgW2RlYm91bmNlXT1cIjUwMFwiIFthbHdheXNWaXNpYmxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAoc2VhcmNoRGVib3VuY2UpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKHNlYXJjaCk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoY2xlYXIpPVwic2VhcmNoSW5wdXRUZXJtID0gJydcIj5cclxuICA8L3RkLXNlYXJjaC1ib3g+LS0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWxvZ28tY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxyXG4gIDxpbWcgY2xhc3M9XCJzaGF0ZWxMb2dvQW5pbWF0aW9uXCIgcm91dGVyTGluaz0nLycgc3JjPScuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NoYXRlbC1sb2dvLnBuZycgLz5cclxuPCEtLTxpbWcgY2xhc3M9XCJsb2dvVHlwZUFuaW1hdGlvblwiIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLXR5cGUucG5nJyAvPi0tPmAsXHJcblx0c3R5bGVzOiBbYC5zaGF0ZWxMb2dvQW5pbWF0aW9ue2hlaWdodDozNXB4O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn0jYmFja2dyb3VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3dpZHRoOjMwMHB4O2hlaWdodDo3MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZGY6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmcm9tTGF5b3V0IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG5cdERvU2lnbm91dEFjdGlvbixcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uLFxyXG5cdE9wZW5TaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsIGdldExheW91dFRvb2xiYXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhdGUgYXMgdG9vbGJhclN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LXRvb2xiYXJcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBbQHRvb2xiYXJBbmltYXRpb25dPVwidG9vbGJhckFuaW1hdGlvblN0YXRlIHwgYXN5bmNcIj5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgPGFwcC1sb2dvLWNvbnRhaW5lciBmeEZsZXg9XCJub25lXCIgZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1sb2dvLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj0nc2hvd1NpZGViYXJNZW51JyAoY2xpY2spPVwidG9nZ2xlTWFpblNpZGViYXIoKVwiIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIGlkPSdhcHAtbmFtZSc+XHJcbiAgICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkFwcFRpdGxlfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhcHAtdGl0bGUgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj48L2FwcC10aXRsZT5cclxuICAgIDxhcHAtc2VhcmNoLWJveCBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1zZWFyY2gtYm94PlxyXG4gICAgXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgw5nCiMOYwrHDmcKIw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJ0b29sYmFyTWVudTFcIj5cclxuICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3tkaXNwbGF5TmFtZX19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG1hdC1tZW51ICN0b29sYmFyTWVudTE+XHJcbiAgICAgIDxidXR0b24gcm91dGVyTGluaz0nL3VzZXIvcGFuZWwnIG1hdC1tZW51LWl0ZW0+XHJcbiAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIMOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9J3NpZ25vdXQoKScgbWF0LW1lbnUtaXRlbT5cclxuICAgICAgICA8bWF0LWljb24+ZXhpdF90b19hcHA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPsOYwq7DmMKxw5nCiMOYwqw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgXHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBcclxuICAgICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiXHJcbiAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcclxuICAgIFtyb3V0ZXJMaW5rXT1cIlttZW51LnJvdXRlXVwiIFxyXG4gICAgPlxyXG4gICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICA8c3Bhbj57e21lbnUudGl0bGV9fTwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuPC9tYXQtdG9vbGJhci1yb3c+XHJcbjwvbWF0LXRvb2xiYXI+YCxcclxuXHRzdHlsZXM6IFtgYF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcInRvb2xiYXJBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTE5LDE4MSw2MywxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNjRweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhck1lbnVDb21wb25lbnQge1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpIHNob3dTaWRlYmFyTWVudTtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblx0QElucHV0KCkgdXNlcjogVXNlck1vZGVsO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogT2JzZXJ2YWJsZTxcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiPjtcclxuXHRtZW51SXRlbXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRsYXN0U2Nyb2xsOiBudW1iZXI7XHJcblx0Y29uZmlnOiB0b29sYmFyU3RhdGU7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTx0b29sYmFyU3RhdGU+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG5cdFx0cHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXIpO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHRcdHRoaXMubWVudUl0ZW1zJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpO1xyXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgXCJzY3JvbGxcIikuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0bGV0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0bGV0IHNjcm9sbFRvVG9wID1cclxuXHRcdFx0XHRzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDAgJiYgdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIHNjcm9sbGVkQW1vdW50IDwgMTAwO1xyXG5cdFx0XHQvLyBsZXQgc2Nyb2xsVG9Ub3AgPSBzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDA7XHJcblx0XHRcdHRoaXMubGFzdFNjcm9sbCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMTI4IHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvb3RlclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwiZm9vdGVyLXRleHRcIj5cclxuICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkZvb3RlckNvcHlyaWdodH19XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7cGFkZGluZzo4cHg7b3ZlcmZsb3c6aGlkZGVufS5mb290ZXItdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MTJweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFRpdGxlQ2hhbmdlZEFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0VGl0bGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC10aXRsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBpZD1cInRpdGxlXCI+XHJcbiAgICB7e3RpdGxlJCB8IGFzeW5jfX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3RpdGxle21hcmdpbi1yaWdodDotMzBweDtmb250LXdlaWdodDpib2xkZXI7Zm9udC1zaXplOjEzcHg7cGFkZGluZzoxOHB4IDQwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IHtcclxuXHR0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRtYXBwZXI6IHsgKHZhbDogTmF2aWdhdGlvbkVuZCk6IHN0cmluZyB9W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHRoaXMubWFwcGVyID0gW107XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdwcm9maWxlLWVkaXQnKSkgPyAnw5nCiMObwozDmMKxw5jCp8ObwozDmMK0IMOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3N1Y2Nlc3MtcGF5bWVudC1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5nCvsOYwrHDmMKvw5jCp8OYwq7DmMKqIMOZwofDmMKnw5vCjCDDmcKFw5nCiMOZwoHDmcKCJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ2ZhaWxlZC1sb2dpbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCrsOYwrfDmMKnw5nCh8OYwqcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnYWN0aXZlLXNlc3Npb24taW5mbycpKSA/ICfDmMKsw5jCssOYwqbDm8KMw5jCp8OYwqogw5jCqMOYwrPDmMKqw5nChyDDmcKBw5jCucOYwqfDmcKEJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Nlc3Npb24tZGV0YWlsLXJlcG9ydCcpKSA/ICfDmMKsw5jCssOYwqbDm8KMw5jCp8OYwqogw5jCp8OYwqrDmMK1w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZGFpbHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOYwrHDmcKIw5jCssOYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdtb250aGx5LXNlc3Npb24tcmVwb3J0JykpID8gJ8Oawq/DmMKyw5jCp8OYwrHDmMK0IMOYwqrDmMKsw5nChcObwozDmMK5w5vCjCDDmcKFw5jCp8OZwofDmMKnw5nChsOZwocnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5zdGFydHNXaXRoKCcvcGFja2FnZXMvdXNlci1wYWNrYWdlcycpKSA/ICfDmcKEw5vCjMOYwrPDmMKqIMOZwr7DmsKpw5vCjMOYwqwgw5nCh8OYwqcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnL2NoYW5nZS1wYXNzd29yZCcpKSA/ICfDmMKqw5jCusObwozDm8KMw5jCsSDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdHRoaXMudGl0bGUkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0VGl0bGUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcblx0XHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcclxuXHRcdFx0XHR0aGlzLm1hcHBlci5mb3JFYWNoKG1hcHBlciA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzID0gbWFwcGVyKGV2ZW50KTtcclxuXHRcdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGl0bGUgPSByZXM7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUaXRsZUNoYW5nZWRBY3Rpb24oXCIvIFwiICsgdGl0bGUgfHwgXCJcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIGdldFVzZXJJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRGZWF0dXJlU3RhdGUsXHJcblx0Z2V0U2hvd01haW5TaWRlbmF2LFxyXG5cdGdldE1haW5TaWRlTmF2TW9kZSxcclxuXHRnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyxcclxuXHRnZXRTZWNvbmRTaWRlYmFyTW9kZSxcclxuXHRnZXRMYXlvdXRNb2RlLFxyXG5cdGdldExheW91dFRvb2xiYXJNb2RlXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTaWRlTmF2TW9kZSxcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlTGF5b3V0LFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlckZhY2FkZVNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtbWFpblwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAjbWFpblNpZGVOYXYgW2NsYXNzTmFtZV09XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGUgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9J3Byb2dyZXNzU3RhdHVzJCB8IGFzeW5jJyBjb2xvcj1cInByaW1hcnlcIiBtb2RlPVwicXVlcnlcIj48L21hdC1wcm9ncmVzcy1iYXI+IC0tPlxyXG4gIDxsYXlvdXQtdG9vbGJhciBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhcj5cclxuICBcclxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGlkPVwibGF5b3V0LXNpZG5hdlwiPlxyXG4gICAgPG1hdC1zaWRlbmF2IFttb2RlXT1cIm1haW5TaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dNYWluU2lkZW5hdiB8IGFzeW5jJyAjc2lkZWJhciAoY2xvc2VkU3RhcnQpPVwib25TaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0PlxyXG4gICAgICAgIDxuZ3MtbGF5b3V0LW1haW4tbWVudSBbYXV0aGVudGljYXRlZF09J3Nob3dTaWRlYmFyTWVudScgKGNsb3NlU2lkZWJhcik9XCJzaWRlYmFyLmNsb3NlKClcIiAoY2xpY2spPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPjwvbmdzLWxheW91dC1tYWluLW1lbnU+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj5cclxuICAgIDwhLS0gPG1hdC1zaWRlbmF2IFttb2RlXT1cInNlY29uZFNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd1NlY29uZFNpZGVuYXYgfCBhc3luYycgKGNsb3NlZFN0YXJ0KT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIlxyXG4gICAgICBwb3NpdGlvbj1cImVuZFwiICNzZWNvbmRfc2lkZWJhciBjbGFzcz1cInNlY29uZF9zaWRlYmFyXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3QgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj4gLS0+XHJcbiAgICA8ZGl2IGZ4RmxleExheW91dD0nY29sdW1uJyBpZD1cImFwcC1tYWluLWNvbnRhaW5lclwiIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICA8ZGl2IGZ4RmxleD0nMCAwIDEwMCc+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJmb290ZXJfQVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0JcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxhcHAtZm9vdGVyIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2FwcC1mb290ZXI+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNwdXJjaGFzZS1mYWItYnV0dG9ue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyM3B4O2xlZnQ6MzFweH1tZC1wcm9ncmVzcy1iYXJ7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50fS53aXRoLW1hcmdpbiAjYXBwLW1haW4tY29udGFpbmVye21hcmdpbi10b3A6MjVweDtwYWRkaW5nLXJpZ2h0OjI1cHg7cGFkZGluZy1sZWZ0OjI1cHh9LnNlY29uZF9zaWRlYmFye3dpZHRoOjM4MHB4fS5tb3JlLWRldGFpbHttYXJnaW46OHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjEwcHg7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTYlO2JvcmRlcjoxcHggc29saWQgI2RlZGVkZTtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2V9Lm1vcmUtZGV0YWlsOmhvdmVye2JhY2tncm91bmQ6I2VlZX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkaXNwbGF5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRwcm9ncmVzc1N0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2hvd1NpZGViYXJNZW51ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuXHQvL3VzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG1haW5TaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdGxheW91dE1vZGU6IE9ic2VydmFibGU8XCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI+O1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZzogQ29uZmlnTW9kZWw8YW55PjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHRzaG93U2Vjb25kU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzZWNvbmRTaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBWaWV3Q2hpbGQoXCJtYWluU2lkZU5hdlwiKSBtYWluU2lkZU5hdjogRWxlbWVudFJlZjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2lkZU5hdk1vZGUoXCJwdXNoXCIpKTtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IChzIGFzIGFueSkudXNlci51c2VyLmRhdGEpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TmFtZSQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLm1haW5TaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldE1haW5TaWRlTmF2TW9kZSk7XHJcblx0XHR0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihkYXRhID0+IGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHR2YXIgaGlkZVNpdHVhdGlvbnMgPSBbXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbmluXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3JlZ2lzdGVyXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3ZlcmlmaWNhdGlvblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0aWYgKGhpZGVTaXR1YXRpb25zLnNvbWUoaSA9PiBpKSkgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dChmYWxzZSk7XHJcblx0XHRcdGVsc2UgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dCh0cnVlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMubGF5b3V0TW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcblx0XHRcdGlmICghdGhpcy5tYWluU2lkZU5hdikgcmV0dXJuO1xyXG5cdFx0XHQodGhpcy5tYWluU2lkZU5hdi5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0XHQodGhpcy5tYWluU2lkZU5hdi5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKG1vZGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEb1NpZ25vdXRBY3Rpb24gfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0QWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9hY3Rpb25zL2xheW91dFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcblx0QEVmZmVjdCgpIERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKG1hcCgoKSA9PiBuZXcgRG9TaWdub3V0QWN0aW9uKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NDb25maWdNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IExheW91dFJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIExheW91dE1vZHVsZUNvbmZpZyB9IGZyb20gXCIuL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sb2dvLWNvbnRhaW5lci9sb2dvLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51L3Rvb2xiYXItbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0RWZmZWN0cyB9IGZyb20gXCIuL2xheW91dC5lZmZlY3RzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TmdzQ29uZmlnTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHRNYWluQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdEZvb3RlckNvbXBvbmVudCxcclxuXHRcdFRpdGxlQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0xheW91dE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogTGF5b3V0TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJsYXlvdXRcIiwgTGF5b3V0UmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgTGF5b3V0RWZmZWN0cyBdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NMYXlvdXRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0xheW91dE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsibGF5b3V0LkxheW91dEFjdGlvblR5cGVzIiwibGF5b3V0LkNMT1NFX1NJREVOQVYiLCJsYXlvdXQuT1BFTl9TSURFTkFWIiwiaW5pdGlhbFN0YXRlIiwibGF5b3V0LlJlZHVjZXIiLCJmcm9tVG9vbGJhci5SZWR1Y2VyIiwiY3JlYXRlRmVhdHVyZVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJnZXRUaXRsZSIsImxheW91dC5nZXRUaXRsZSIsImdldFNob3dNYWluU2lkZW5hdiIsImxheW91dC5nZXRTaG93TWFpblNpZGVuYXYiLCJnZXRNYWluU2lkZU5hdk1vZGUiLCJsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlIiwiZ2V0TGF5b3V0TW9kZSIsImxheW91dC5nZXRMYXlvdXRNb2RlIiwiZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJsYXlvdXQuZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJnZXRTZWNvbmRTaWRlYmFyTW9kZSIsImxheW91dC5nZXRTZWNvbmRTaWRlYmFyTW9kZSIsImZyb21Ub29sYmFyLmdldFRvb2xiYXJNb2RlIiwiSW5qZWN0aW9uVG9rZW4iLCJCZWhhdmlvclN1YmplY3QiLCJnZXRsYXlvdXRNb2R1bGVDb25maWciLCJjb25maWciLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiU2lnbmluU2VydmljZSIsIk91dHB1dCIsIklucHV0IiwiVmlld0NoaWxkIiwiZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYiLCJmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlIiwiZnJvbUV2ZW50IiwiRE9DVU1FTlQiLCJMb2NhdGlvbiIsIkhvc3RMaXN0ZW5lciIsInJvdXRlciIsIk5hdmlnYXRpb25FbmQiLCJSb3V0ZXIiLCJVc2VyRmFjYWRlU2VydmljZSIsIm1hcCIsIkRvU2lnbm91dEFjdGlvbiIsIkFjdGlvbnMiLCJFZmZlY3QiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkJyb3dzZXJNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0RGF0ZXBpY2tlck1vZHVsZSIsIk1hdFByb2dyZXNzQmFyTW9kdWxlIiwiTmdzQ29uZmlnTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJFZmZlY3RzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQVlPLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7UUFDdEQsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMs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