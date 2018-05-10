(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/shoping/fesm5/shoping.js":
/*!***************************************!*\
  !*** ./dist/shoping/fesm5/shoping.js ***!
  \***************************************/
/*! exports provided: ShopingService, ShopingComponent, ShopingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingService", function() { return ShopingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingComponent", function() { return ShopingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingModule", function() { return ShopingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopingService = /** @class */ (function () {
    function ShopingService() {
    }
    return ShopingService;
}());
ShopingService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ShopingService.ctorParameters = function () { return []; };
/** @nocollapse */ ShopingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ShopingService_Factory() { return new ShopingService(); }, token: ShopingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopingComponent = /** @class */ (function () {
    function ShopingComponent() {
    }
    /**
     * @return {?}
     */
    ShopingComponent.prototype.ngOnInit = function () { };
    return ShopingComponent;
}());
ShopingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "lib-shoping",
                template: "\n    <p>\n      shoping workssdf!\n    </p>\n  ",
                styles: []
            },] },
];
/** @nocollapse */
ShopingComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopingModule = /** @class */ (function () {
    function ShopingModule() {
    }
    return ShopingModule;
}());
ShopingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [],
                declarations: [ShopingComponent],
                exports: [ShopingComponent]
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


//# sourceMappingURL=shoping.js.map


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: "",
        redirectTo: "/",
        pathMatch: "full"
    }
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
});


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mainSideNav>\r\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\r\n  <mat-toolbar>\r\n    <app-logo-container fxFlex=\"none\" fxLayoutAlign=\"end center\"></app-logo-container>\r\n\r\n    <button type=\"button\" *ngIf='showSidebarMenu' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span id='app-name'>\r\n      {{(app_config | async)?.Config.AppTitle}}\r\n    </span>\r\n\r\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\r\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\r\n    <app-toolbar-menu *ngIf='showSidebarMenu' fxFlex=\"none\" fxLayoutAlign=\"end center\"></app-toolbar-menu>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container [class]=\"userType\">\r\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\r\n      <mat-nav-list>\r\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\r\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\r\n      <mat-nav-list fxLayout='column'>\r\n      </mat-nav-list>\r\n    </mat-sidenav> -->\r\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\r\n      <div fxFlex='0 0 100'>\r\n        <router-outlet></router-outlet>\r\n        <footer>\r\n          <app-footer></app-footer>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#purchase-fab-button {\n  position: fixed;\n  bottom: 23px;\n  left: 31px; }\n\nmd-progress-bar {\n  position: absolute !important; }\n\n.with-margin #app-main-container {\n  margin-top: 25px;\n  padding-right: 25px;\n  padding-left: 25px; }\n\n.second_sidebar {\n  width: 380px; }\n\n.more-detail {\n  margin: 8px;\n  box-sizing: border-box;\n  padding: 10px;\n  text-align: center;\n  width: 96%;\n  border: 1px solid #dedede;\n  outline: 0;\n  cursor: pointer;\n  transition: all .3s ease; }\n\n.more-detail:hover {\n    background: #eee; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _soushians_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @soushians/user */ "./node_modules/@soushians/user/lib/index.js");
/* harmony import */ var _soushians_user__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_soushians_user__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _soushians_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @soushians/layout */ "./node_modules/@soushians/layout/lib/index.js");
/* harmony import */ var _soushians_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_soushians_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @soushians/config */ "./node_modules/@soushians/config/lib/index.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_soushians_config__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { BehaviorSubject } from "rxjs/BehaviorSubject";






var AppComponent = /** @class */ (function () {
    function AppComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.showSidebarMenu = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.width = 100;
        this.app_config = this.store.select(_soushians_config__WEBPACK_IMPORTED_MODULE_6__["getAppConfig"]);
        this.store.dispatch(new _soushians_layout__WEBPACK_IMPORTED_MODULE_5__["ChangeSideNavMode"]("push"));
        this.showMainSidenav = this.store.select(_soushians_layout__WEBPACK_IMPORTED_MODULE_5__["getShowMainSidenav"]);
        this.mainSidenavMode = this.store.select(_soushians_layout__WEBPACK_IMPORTED_MODULE_5__["getMainSideNavMode"]);
        //#region manage second sidebar
        this.store.dispatch(new _soushians_layout__WEBPACK_IMPORTED_MODULE_5__["ChangeSecondSidenavMode"]("push"));
        this.showSecondSidenav = this.store.select(_soushians_layout__WEBPACK_IMPORTED_MODULE_5__["getShowSecondSidebarStatus"]);
        this.secondSidenavMode = this.store.select(_soushians_layout__WEBPACK_IMPORTED_MODULE_5__["getSecondSidebarMode"]);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(_soushians_layout__WEBPACK_IMPORTED_MODULE_5__["getLayoutMode"]);
        this.user$ = this.store.select(_soushians_user__WEBPACK_IMPORTED_MODULE_4__["getUserInfo"]);
        this.user$
            .filter(function (user) { return user.Roles != undefined; })
            .subscribe(function (user) { return (_this.userType = user.Roles.pop() + "-user"); });
        this.router.events.filter(function (data) { return data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            var hideSituations = [
                event.urlAfterRedirects == "/auth/signin",
                event.urlAfterRedirects == "/auth/signup/register",
                event.urlAfterRedirects == "/auth/signup/verification",
                event.urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some(function (i) { return i; }))
                _this.showSidebarMenu.next(false);
            else
                _this.showSidebarMenu.next(true);
        });
        this.layoutMode.subscribe(function (mode) {
            if (!_this.mainSideNav)
                return;
            _this.mainSideNav.nativeElement.className = "";
            _this.mainSideNav.nativeElement.classList.add(mode);
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.store.dispatch(new _soushians_layout__WEBPACK_IMPORTED_MODULE_5__["ChangeLayout"]("with-margin"));
    };
    AppComponent.prototype.onSecondSidebarClosedStart = function () {
        this.store.dispatch(new _soushians_layout__WEBPACK_IMPORTED_MODULE_5__["CloseSecondSidenavAction"]());
    };
    AppComponent.prototype.onSidebarClosedStart = function () {
        this.store.dispatch(new _soushians_layout__WEBPACK_IMPORTED_MODULE_5__["CloseSidenavAction"]());
    };
    AppComponent.prototype.toggleMainSidebar = function () {
        var action;
        this.showMainSidenav.subscribe(function (state) {
            action = state ? new _soushians_layout__WEBPACK_IMPORTED_MODULE_5__["CloseSidenavAction"]() : new _soushians_layout__WEBPACK_IMPORTED_MODULE_5__["OpenSidenavAction"]();
        });
        this.store.dispatch(action);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("mainSideNav"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "mainSideNav", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @soushians/shared */ "./node_modules/@soushians/shared/lib/index.js");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_soushians_shared__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _soushians_authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @soushians/authentication */ "./node_modules/@soushians/authentication/lib/index.js");
/* harmony import */ var _soushians_authentication__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_soushians_authentication__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _soushians_infra__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @soushians/infra */ "./node_modules/@soushians/infra/lib/index.js");
/* harmony import */ var _soushians_infra__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_soushians_infra__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _soushians_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @soushians/layout */ "./node_modules/@soushians/layout/lib/index.js");
/* harmony import */ var _soushians_layout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_soushians_layout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _soushians_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @soushians/user */ "./node_modules/@soushians/user/lib/index.js");
/* harmony import */ var _soushians_user__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_soushians_user__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @soushians/config */ "./node_modules/@soushians/config/lib/index.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_soushians_config__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _soushians_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @soushians/source */ "./node_modules/@soushians/source/lib/index.js");
/* harmony import */ var _soushians_source__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_soushians_source__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _soushians_diagram__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @soushians/diagram */ "./node_modules/@soushians/diagram/lib/index.js");
/* harmony import */ var _soushians_diagram__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_soushians_diagram__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _soushians_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @soushians/form */ "./node_modules/@soushians/form/lib/index.js");
/* harmony import */ var _soushians_form__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_soushians_form__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./static-page */ "./src/app/static-page/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/index.ts");
/* harmony import */ var _oi_oi_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./oi/oi.module */ "./src/app/oi/oi.module.ts");
/* harmony import */ var shoping__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! shoping */ "./dist/shoping/fesm5/shoping.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



















//module configs



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core__WEBPACK_IMPORTED_MODULE_17__["CoreModule"],
                // ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
                // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: true}),
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_20__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                    maxAge: 25
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]),
                _soushians_layout__WEBPACK_IMPORTED_MODULE_10__["NgsLayoutModule"].forRoot(),
                _soushians_authentication__WEBPACK_IMPORTED_MODULE_8__["NgsAuthenticationModule"].forRoot({
                    env: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"]
                }),
                _soushians_config__WEBPACK_IMPORTED_MODULE_12__["NgsConfigModule"].forRoot({
                    env: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"],
                    dev_api_host: "http://localhost:3000",
                    prod_api_host: "http://localhost:3000"
                }),
                _soushians_diagram__WEBPACK_IMPORTED_MODULE_14__["NgsDiagramModule"].forRoot(),
                _soushians_user__WEBPACK_IMPORTED_MODULE_11__["NgsUserModule"].forRoot(),
                _soushians_user__WEBPACK_IMPORTED_MODULE_11__["NgsUserRoutingModule"],
                // NgsBpmnModule.forRoot(),
                _soushians_infra__WEBPACK_IMPORTED_MODULE_9__["InfraModule"],
                _soushians_shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _soushians_source__WEBPACK_IMPORTED_MODULE_13__["SourceModule"],
                _static_page__WEBPACK_IMPORTED_MODULE_16__["StaticPageModule"],
                _soushians_form__WEBPACK_IMPORTED_MODULE_15__["NgsFormModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _dashboard__WEBPACK_IMPORTED_MODULE_21__["DashboardModule"],
                _oi_oi_module__WEBPACK_IMPORTED_MODULE_22__["OiModule"],
                shoping__WEBPACK_IMPORTED_MODULE_23__["ShopingModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
var reducers = {};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_8__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [],
            providers: [],
            exports: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });




/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-components/dashboard/dashboard.component */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts");


var routes = [
    {
        path: 'dashboard',
        component: _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        children: []
    }
];
//{ path: '**', component: PageNotFoundComponent }
var DashboardRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @soushians/shared */ "./node_modules/@soushians/shared/lib/index.js");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_soushians_shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _smart_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart-components */ "./src/app/dashboard/smart-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _soushians_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]],
            declarations: [_smart_components__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
            providers: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/index.ts":
/*!************************************!*\
  !*** ./src/app/dashboard/index.ts ***!
  \************************************/
/*! exports provided: DashboardComponent, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-components/dashboard/dashboard.component */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return _dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"]; });

//import { DashboardComponent } from './smart-components';




/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#box-left {\r\n    background: #2B0033;\r\n    background: #fff;\r\n    /*height:1200px;*/\r\n}\r\n\r\n#box-bottom {\r\n    background: #2B0033;\r\n    /*height:1200px;*/\r\n}\r\n\r\n#box-right {\r\n    background: #000833;\r\n    /*height:1200px;*/\r\n    padding-top: 10px !important;\r\n    padding-bottom: 10px !important;\r\n}\r\n\r\n#box-right div {\r\n    background: #fff;\r\n    opacity: 0.5;\r\n}\r\n\r\n#banner:not(.active) {\r\n    height: 100%;\r\n    -webkit-filter:grayscale(100%) brightness(1.5) opacity(0.2) blur(2px);\r\n            filter:grayscale(100%) brightness(1.5) opacity(0.2) blur(2px);\r\n}\r\n\r\n#s1 {\r\n    background: #aaa;\r\n}\r\n\r\n#s2 {\r\n    background: #bbb;\r\n}\r\n\r\n#s3 {\r\n    background: #ccc;\r\n}\r\n\r\n.personal-info {\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    position: relative;\r\n    right: 10%;\r\n    width: 90%;\r\n    height: 469px;\r\n}\r\n\r\n.personal-info h2 {\r\n    color: #00bcd4;\r\n    font-weight: normal;\r\n    font-size: 24px;\r\n    font-family: 'iran-sans-light' !important;\r\n}\r\n\r\n.personal-info h6 {\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    float: right;\r\n    width: 50%;\r\n    margin: 0;\r\n    color: #555;\r\n    border-bottom: 2px solid #ececec;\r\n}\r\n\r\n.personal-info p {\r\n    float: right;\r\n    width: 30%;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    padding-right: 30px;\r\n    border-bottom: 2px solid #ececec;\r\n}\r\n\r\n.personal-info div {\r\n    width: 100%;\r\n    height: 50px;\r\n    position: relative;\r\n    line-height: 52px;\r\n    right: 17px;\r\n}\r\n\r\n.personal-info-inner {}\r\n\r\n.quick-box {\r\n    width: 100%;\r\n    height: 50px;\r\n    position: relative;\r\n    line-height: 52px;\r\n    padding-top: 79px;\r\n}\r\n\r\n.quick-btn {\r\n    background-color: #00bcd4;\r\n    margin: 12px 10px;\r\n    height: 100px;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    font-size: 17px;\r\n    color: #fff;\r\n}\r\n\r\n.banner-section {\r\n    text-align: center;\r\n    /*background-color: #f6882f;*/\r\n    /*filter:grayscale(100%);*/\r\n}\r\n\r\n.info-section {\r\n    padding: 10px 25px;\r\n    padding-top: 60px;\r\n    background-color: #f7f7f7;\r\n    background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/grey.png') !important;\r\n    height: 1040px;\r\n    padding-bottom: 120px !important;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _soushians_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @soushians/infra */ "./node_modules/@soushians/infra/lib/index.js");
/* harmony import */ var _soushians_infra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_soushians_infra__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(socketService) {
        this.socketService = socketService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_soushians_infra__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/index.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/app/dashboard/smart-components/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/smart-components/index.ts ***!
  \*****************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/smart-components/dashboard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/app/oi/oi.module.ts":
/*!*********************************!*\
  !*** ./src/app/oi/oi.module.ts ***!
  \*********************************/
/*! exports provided: OiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OiModule", function() { return OiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ "./src/app/oi/order/index.ts");
/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ "./src/app/oi/policy/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OiModule = /** @class */ (function () {
    function OiModule() {
    }
    OiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order__WEBPACK_IMPORTED_MODULE_2__["OrderModule"], _policy__WEBPACK_IMPORTED_MODULE_3__["PolicyModule"]],
            declarations: []
        })
    ], OiModule);
    return OiModule;
}());



/***/ }),

/***/ "./src/app/oi/order/index.ts":
/*!***********************************!*\
  !*** ./src/app/oi/order/index.ts ***!
  \***********************************/
/*! exports provided: OrderModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.module */ "./src/app/oi/order/order.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return _order_module__WEBPACK_IMPORTED_MODULE_0__["OrderModule"]; });

/* harmony import */ var _order_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.config */ "./src/app/oi/order/order.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return _order_config__WEBPACK_IMPORTED_MODULE_1__["MODULE_DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return _order_config__WEBPACK_IMPORTED_MODULE_1__["MODULE_CONFIG_TOKEN"]; });





/***/ }),

/***/ "./src/app/oi/order/new-order/new-order.component.css":
/*!************************************************************!*\
  !*** ./src/app/oi/order/new-order/new-order.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oi/order/new-order/new-order.component.html":
/*!*************************************************************!*\
  !*** ./src/app/oi/order/new-order/new-order.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-tab-group>\n    <mat-tab label=\"بیمه شخص ثالث خودرو\">\n      \n      <div [formGroup]=\"formGroup\">\n\n        <mat-form-field>\n            <mat-select [placeholder]=\"(CarBrand$ | async)?.Label\" formControlName=\"CarBrand\">\n              <mat-option *ngFor=\"let item of (CarBrand$ | async)?.Options\" [value]=\"item.Value\">\n                {{ item.DisplayValue }}\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n            <mat-select [placeholder]=\"(CarModel$ | async)?.Label\"  formControlName=\"CarModel\">\n              <mat-option *ngFor=\"let item of (CarModel$ | async)?.Options\" [value]=\"item.Value\">\n                {{ item.DisplayValue }}\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n        \n        <mat-form-field>\n            <mat-select [placeholder]=\"(CarProductionYear$ | async)?.Label\"  formControlName=\"CarProductionYear\">\n              <mat-option *ngFor=\"let item of (CarProductionYear$ | async)?.Options\" [value]=\"item.Value\">\n                {{ item.DisplayValue }}\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n        \n        <mat-form-field>\n            <mat-select [placeholder]=\"(CarYearsWithoutIncident$ | async)?.Label\"  formControlName=\"CarYearsWithoutIncident\">\n              <mat-option *ngFor=\"let item of (CarYearsWithoutIncident$ | async)?.Options\" [value]=\"item.Value\">\n                {{ item.DisplayValue }}\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n        \n        <mat-form-field>\n            <input matInput [matDatepicker]=\"LastPolicyExpirationDate\" [placeholder]=\"(LastPolicyExpirationDate$ | async)?.Label\" formControlName=\"LastPolicyExpirationDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"LastPolicyExpirationDate\"></mat-datepicker-toggle>\n            <mat-datepicker #LastPolicyExpirationDate></mat-datepicker>\n          </mat-form-field>\n      </div>\n      \n    </mat-tab>\n    <mat-tab disabled=\"true\" label=\"بیمه بدنه خودرو\"></mat-tab>\n    <mat-tab disabled=\"true\" label=\"بیمه آتش سوزی\"></mat-tab>\n    <mat-tab disabled=\"true\" label=\"بیمه عمر\"></mat-tab>\n  </mat-tab-group>\n  <mat-card-actions>\n      <button mat-raised-button (click)=\"compare()\" color=\"primary\">مقایسه</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/oi/order/new-order/new-order.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/oi/order/new-order/new-order.component.ts ***!
  \***********************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./src/app/oi/order/services/api/index.ts");
/* harmony import */ var _policy_services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../policy/services/api */ "./src/app/oi/policy/services/api/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewOrderComponent = /** @class */ (function () {
    function NewOrderComponent(store) {
        var _this = this;
        this.store = store;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            CarBrand: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            CarModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            CarModelOptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            CarProductionYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            CarYearsWithoutIncident: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            LastPolicyExpirationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
        this.orderForm$ = this.store.select(function (state) { return state.order.newOrder.data; });
        this.CarBrand$ = this.orderForm$.filter(function (orderForm) { return orderForm != null; }).map(function (orderForm) { return orderForm.CarBrand; });
        this.formGroup.get("CarBrand").valueChanges.subscribe(function (CarBrand) {
            return _this.store.dispatch(new _policy_services_api__WEBPACK_IMPORTED_MODULE_3__["GetCarModelsOfBrandStartAction"]({
                carBrand: CarBrand.Value
            }));
        });
        this.CarModelOptions$ = this.store.select(function (state) { return state.order.newOrder.carModels; });
        this.CarProductionYear$ = this.orderForm$
            .filter(function (orderForm) { return orderForm != null; })
            .map(function (orderForm) { return orderForm.CarProductionYear; });
        this.CarYearsWithoutIncident$ = this.orderForm$
            .filter(function (orderForm) { return orderForm != null; })
            .map(function (orderForm) { return orderForm.CarYearsWithoutIncident; });
        this.LastPolicyExpirationDate$ = this.orderForm$
            .filter(function (orderForm) { return orderForm != null; })
            .map(function (orderForm) { return orderForm.LastPolicyExpirationDate; });
    }
    NewOrderComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _services_api__WEBPACK_IMPORTED_MODULE_2__["GetNewOrderFormStartAction"]({ type: 1 }));
    };
    NewOrderComponent.prototype.compare = function () {
        debugger;
    };
    NewOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-new-order",
            template: __webpack_require__(/*! ./new-order.component.html */ "./src/app/oi/order/new-order/new-order.component.html"),
            styles: [__webpack_require__(/*! ./new-order.component.css */ "./src/app/oi/order/new-order/new-order.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], NewOrderComponent);
    return NewOrderComponent;
}());



/***/ }),

/***/ "./src/app/oi/order/new-order/new-order.reducers.ts":
/*!**********************************************************!*\
  !*** ./src/app/oi/order/new-order/new-order.reducers.ts ***!
  \**********************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var initialState = {
    data: null,
    carModels: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "[GET_NEW_ORDER_FORM][API][GetNewOrderForm] succeed" /* SUCCEED */: {
            return __assign({}, state, { data: action.payload });
        }
        case "[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] succeed" /* SUCCEED */: {
            return __assign({}, state, { carModels: action.payload });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/oi/order/order-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/oi/order/order-routing.module.ts ***!
  \**************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/test.component */ "./src/app/oi/order/test/test.component.ts");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/oi/order/new-order/new-order.component.ts");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/oi/order/order.component.ts");




var routes = [
    {
        path: "order",
        component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"],
        children: [
            {
                path: "test",
                component: _test_test_component__WEBPACK_IMPORTED_MODULE_1__["TestComponent"]
            },
            {
                path: "neworder",
                component: _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_2__["NewOrderComponent"]
            }
        ]
    }
];
var OrderRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/oi/order/order.component.html":
/*!***********************************************!*\
  !*** ./src/app/oi/order/order.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/oi/order/order.component.ts":
/*!*********************************************!*\
  !*** ./src/app/oi/order/order.component.ts ***!
  \*********************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () { };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-order",
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/oi/order/order.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/oi/order/order.config.ts":
/*!******************************************!*\
  !*** ./src/app/oi/order/order.config.ts ***!
  \******************************************/
/*! exports provided: MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return MODULE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return MODULE_CONFIG_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MODULE_DEFAULT_CONFIG = {
    endpoints: {
        upsert: "http://localhost:3000/api/bpmn",
        get: "http://localhost:3000/api/bpmn/${model._id}",
        getList: "http://localhost:3000/api/bpmn",
        delete: "http://localhost:3000/api/bpmn"
    }
};
var MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("OrderModuleConfig");


/***/ }),

/***/ "./src/app/oi/order/order.module.ts":
/*!******************************************!*\
  !*** ./src/app/oi/order/order.module.ts ***!
  \******************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test.component */ "./src/app/oi/order/test/test.component.ts");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/oi/order/order-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _order_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.reducers */ "./src/app/oi/order/order.reducers.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api */ "./src/app/oi/order/services/api/index.ts");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order.component */ "./src/app/oi/order/order.component.ts");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/oi/order/new-order/new-order.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("order", _order_reducers__WEBPACK_IMPORTED_MODULE_5__["FeatureReducers"]),
                _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_services_api__WEBPACK_IMPORTED_MODULE_7__["GetOrderTypesApiEffects"], _services_api__WEBPACK_IMPORTED_MODULE_7__["SaveOrderFormApiEffects"], _services_api__WEBPACK_IMPORTED_MODULE_7__["GetNewOrderFormApiEffects"]])
            ],
            declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"], _order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"], _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_9__["NewOrderComponent"]]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./src/app/oi/order/order.reducers.ts":
/*!********************************************!*\
  !*** ./src/app/oi/order/order.reducers.ts ***!
  \********************************************/
/*! exports provided: FeatureReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureReducers", function() { return FeatureReducers; });
/* harmony import */ var _new_order_new_order_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-order/new-order.reducers */ "./src/app/oi/order/new-order/new-order.reducers.ts");

var FeatureReducers = {
    newOrder: _new_order_new_order_reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};


/***/ }),

/***/ "./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.actions.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.actions.ts ***!
  \****************************************************************************************/
/*! exports provided: GetNewOrderFormStartAction, GetNewOrderFormSucceedAction, GetNewOrderFormFailedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormStartAction", function() { return GetNewOrderFormStartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormSucceedAction", function() { return GetNewOrderFormSucceedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormFailedAction", function() { return GetNewOrderFormFailedAction; });
var GetNewOrderFormStartAction = /** @class */ (function () {
    function GetNewOrderFormStartAction(payload) {
        this.payload = payload;
        this.type = "[GET_NEW_ORDER_FORM][API][GetNewOrderForm] start" /* START */;
    }
    return GetNewOrderFormStartAction;
}());

var GetNewOrderFormSucceedAction = /** @class */ (function () {
    function GetNewOrderFormSucceedAction(payload) {
        this.payload = payload;
        this.type = "[GET_NEW_ORDER_FORM][API][GetNewOrderForm] succeed" /* SUCCEED */;
    }
    return GetNewOrderFormSucceedAction;
}());

var GetNewOrderFormFailedAction = /** @class */ (function () {
    function GetNewOrderFormFailedAction(payload) {
        this.payload = payload;
        this.type = "[GET_NEW_ORDER_FORM][API][GetNewOrderForm] failed" /* FAILED */;
    }
    return GetNewOrderFormFailedAction;
}());



/***/ }),

/***/ "./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.effects.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.effects.ts ***!
  \****************************************************************************************/
/*! exports provided: GetNewOrderFormApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormApiEffects", function() { return GetNewOrderFormApiEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _order_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../order-form.service */ "./src/app/oi/order/services/order-form.service.ts");
/* harmony import */ var _get_new_order_form_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-new-order-form.actions */ "./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetNewOrderFormApiEffects = /** @class */ (function () {
    function GetNewOrderFormApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_NEW_ORDER_FORM][API][GetNewOrderForm] start" /* START */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.service.GetNewOrderForm(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _get_new_order_form_actions__WEBPACK_IMPORTED_MODULE_5__["GetNewOrderFormSucceedAction"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(new _get_new_order_form_actions__WEBPACK_IMPORTED_MODULE_5__["GetNewOrderFormFailedAction"](err)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], GetNewOrderFormApiEffects.prototype, "start$", void 0);
    GetNewOrderFormApiEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _order_form_service__WEBPACK_IMPORTED_MODULE_4__["OrderFormService"]])
    ], GetNewOrderFormApiEffects);
    return GetNewOrderFormApiEffects;
}());



/***/ }),

/***/ "./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.model.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.model.ts ***!
  \**************************************************************************************/
/*! exports provided: GetNewOrderFormApiModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormApiModel", function() { return GetNewOrderFormApiModel; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var GetNewOrderFormApiModel;
(function (GetNewOrderFormApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {};
        };
        Request.prototype.getRequestQueryParams = function () {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append("type", this.type.toString());
            return params;
        };
        return Request;
    }());
    GetNewOrderFormApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetNewOrderFormApiModel.Response = Response;
})(GetNewOrderFormApiModel || (GetNewOrderFormApiModel = {}));


/***/ }),

/***/ "./src/app/oi/order/services/api/get-new-order-form/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-new-order-form/index.ts ***!
  \*******************************************************************/
/*! exports provided: GetNewOrderFormApiModel, GetNewOrderFormStartAction, GetNewOrderFormSucceedAction, GetNewOrderFormFailedAction, GetNewOrderFormApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_new_order_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-new-order-form.model */ "./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormApiModel", function() { return _get_new_order_form_model__WEBPACK_IMPORTED_MODULE_0__["GetNewOrderFormApiModel"]; });

/* harmony import */ var _get_new_order_form_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-new-order-form.actions */ "./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormStartAction", function() { return _get_new_order_form_actions__WEBPACK_IMPORTED_MODULE_1__["GetNewOrderFormStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormSucceedAction", function() { return _get_new_order_form_actions__WEBPACK_IMPORTED_MODULE_1__["GetNewOrderFormSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormFailedAction", function() { return _get_new_order_form_actions__WEBPACK_IMPORTED_MODULE_1__["GetNewOrderFormFailedAction"]; });

/* harmony import */ var _get_new_order_form_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-new-order-form.effects */ "./src/app/oi/order/services/api/get-new-order-form/get-new-order-form.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormApiEffects", function() { return _get_new_order_form_effects__WEBPACK_IMPORTED_MODULE_2__["GetNewOrderFormApiEffects"]; });






/***/ }),

/***/ "./src/app/oi/order/services/api/get-order-types/get-order-types.actions.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-order-types/get-order-types.actions.ts ***!
  \**********************************************************************************/
/*! exports provided: GetOrderTypesStartAction, GetOrderTypesSucceedAction, GetOrderTypesFailedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesStartAction", function() { return GetOrderTypesStartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesSucceedAction", function() { return GetOrderTypesSucceedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesFailedAction", function() { return GetOrderTypesFailedAction; });
var GetOrderTypesStartAction = /** @class */ (function () {
    function GetOrderTypesStartAction(payload) {
        this.payload = payload;
        this.type = "[ORDER][API][GetOrderTypes] start" /* START */;
    }
    return GetOrderTypesStartAction;
}());

var GetOrderTypesSucceedAction = /** @class */ (function () {
    function GetOrderTypesSucceedAction(payload) {
        this.payload = payload;
        this.type = "[ORDER][API][GetOrderTypes] succeed" /* SUCCEED */;
    }
    return GetOrderTypesSucceedAction;
}());

var GetOrderTypesFailedAction = /** @class */ (function () {
    function GetOrderTypesFailedAction(payload) {
        this.payload = payload;
        this.type = "[ORDER][API][GetOrderTypes] failed" /* FAILED */;
    }
    return GetOrderTypesFailedAction;
}());



/***/ }),

/***/ "./src/app/oi/order/services/api/get-order-types/get-order-types.effects.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-order-types/get-order-types.effects.ts ***!
  \**********************************************************************************/
/*! exports provided: GetOrderTypesApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesApiEffects", function() { return GetOrderTypesApiEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../order.service */ "./src/app/oi/order/services/order.service.ts");
/* harmony import */ var _get_order_types_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-order-types.actions */ "./src/app/oi/order/services/api/get-order-types/get-order-types.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetOrderTypesApiEffects = /** @class */ (function () {
    function GetOrderTypesApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[ORDER][API][GetOrderTypes] start" /* START */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.service.GetOrderTypes(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _get_order_types_actions__WEBPACK_IMPORTED_MODULE_5__["GetOrderTypesSucceedAction"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(new _get_order_types_actions__WEBPACK_IMPORTED_MODULE_5__["GetOrderTypesFailedAction"](err)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], GetOrderTypesApiEffects.prototype, "start$", void 0);
    GetOrderTypesApiEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]])
    ], GetOrderTypesApiEffects);
    return GetOrderTypesApiEffects;
}());



/***/ }),

/***/ "./src/app/oi/order/services/api/get-order-types/get-order-types.model.ts":
/*!********************************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-order-types/get-order-types.model.ts ***!
  \********************************************************************************/
/*! exports provided: GetOrderTypesApiModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesApiModel", function() { return GetOrderTypesApiModel; });
var GetOrderTypesApiModel;
(function (GetOrderTypesApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {
                Name: this.Name
            };
        };
        return Request;
    }());
    GetOrderTypesApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetOrderTypesApiModel.Response = Response;
})(GetOrderTypesApiModel || (GetOrderTypesApiModel = {}));


/***/ }),

/***/ "./src/app/oi/order/services/api/get-order-types/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/oi/order/services/api/get-order-types/index.ts ***!
  \****************************************************************/
/*! exports provided: GetOrderTypesApiModel, GetOrderTypesStartAction, GetOrderTypesSucceedAction, GetOrderTypesFailedAction, GetOrderTypesApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_order_types_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-order-types.model */ "./src/app/oi/order/services/api/get-order-types/get-order-types.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesApiModel", function() { return _get_order_types_model__WEBPACK_IMPORTED_MODULE_0__["GetOrderTypesApiModel"]; });

/* harmony import */ var _get_order_types_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-order-types.actions */ "./src/app/oi/order/services/api/get-order-types/get-order-types.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesStartAction", function() { return _get_order_types_actions__WEBPACK_IMPORTED_MODULE_1__["GetOrderTypesStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesSucceedAction", function() { return _get_order_types_actions__WEBPACK_IMPORTED_MODULE_1__["GetOrderTypesSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesFailedAction", function() { return _get_order_types_actions__WEBPACK_IMPORTED_MODULE_1__["GetOrderTypesFailedAction"]; });

/* harmony import */ var _get_order_types_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-order-types.effects */ "./src/app/oi/order/services/api/get-order-types/get-order-types.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesApiEffects", function() { return _get_order_types_effects__WEBPACK_IMPORTED_MODULE_2__["GetOrderTypesApiEffects"]; });






/***/ }),

/***/ "./src/app/oi/order/services/api/index.ts":
/*!************************************************!*\
  !*** ./src/app/oi/order/services/api/index.ts ***!
  \************************************************/
/*! exports provided: GetOrderTypesApiModel, GetOrderTypesStartAction, GetOrderTypesSucceedAction, GetOrderTypesFailedAction, GetOrderTypesApiEffects, SaveOrderFormApiModel, SaveOrderFormStartAction, SaveOrderFormSucceedAction, SaveOrderFormFailedAction, SaveOrderFormApiEffects, GetNewOrderFormApiModel, GetNewOrderFormStartAction, GetNewOrderFormSucceedAction, GetNewOrderFormFailedAction, GetNewOrderFormApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_order_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-order-types */ "./src/app/oi/order/services/api/get-order-types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesApiModel", function() { return _get_order_types__WEBPACK_IMPORTED_MODULE_0__["GetOrderTypesApiModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesStartAction", function() { return _get_order_types__WEBPACK_IMPORTED_MODULE_0__["GetOrderTypesStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesSucceedAction", function() { return _get_order_types__WEBPACK_IMPORTED_MODULE_0__["GetOrderTypesSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesFailedAction", function() { return _get_order_types__WEBPACK_IMPORTED_MODULE_0__["GetOrderTypesFailedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetOrderTypesApiEffects", function() { return _get_order_types__WEBPACK_IMPORTED_MODULE_0__["GetOrderTypesApiEffects"]; });

/* harmony import */ var _save_order_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-order-form */ "./src/app/oi/order/services/api/save-order-form/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormApiModel", function() { return _save_order_form__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormApiModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormStartAction", function() { return _save_order_form__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormSucceedAction", function() { return _save_order_form__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormFailedAction", function() { return _save_order_form__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormFailedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormApiEffects", function() { return _save_order_form__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormApiEffects"]; });

/* harmony import */ var _get_new_order_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-new-order-form */ "./src/app/oi/order/services/api/get-new-order-form/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormApiModel", function() { return _get_new_order_form__WEBPACK_IMPORTED_MODULE_2__["GetNewOrderFormApiModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormStartAction", function() { return _get_new_order_form__WEBPACK_IMPORTED_MODULE_2__["GetNewOrderFormStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormSucceedAction", function() { return _get_new_order_form__WEBPACK_IMPORTED_MODULE_2__["GetNewOrderFormSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormFailedAction", function() { return _get_new_order_form__WEBPACK_IMPORTED_MODULE_2__["GetNewOrderFormFailedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewOrderFormApiEffects", function() { return _get_new_order_form__WEBPACK_IMPORTED_MODULE_2__["GetNewOrderFormApiEffects"]; });






/***/ }),

/***/ "./src/app/oi/order/services/api/save-order-form/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/oi/order/services/api/save-order-form/index.ts ***!
  \****************************************************************/
/*! exports provided: SaveOrderFormApiModel, SaveOrderFormStartAction, SaveOrderFormSucceedAction, SaveOrderFormFailedAction, SaveOrderFormApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_order_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-order-form.model */ "./src/app/oi/order/services/api/save-order-form/save-order-form.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormApiModel", function() { return _save_order_form_model__WEBPACK_IMPORTED_MODULE_0__["SaveOrderFormApiModel"]; });

/* harmony import */ var _save_order_form_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-order-form.actions */ "./src/app/oi/order/services/api/save-order-form/save-order-form.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormStartAction", function() { return _save_order_form_actions__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormSucceedAction", function() { return _save_order_form_actions__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormFailedAction", function() { return _save_order_form_actions__WEBPACK_IMPORTED_MODULE_1__["SaveOrderFormFailedAction"]; });

/* harmony import */ var _save_order_form_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-order-form.effects */ "./src/app/oi/order/services/api/save-order-form/save-order-form.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormApiEffects", function() { return _save_order_form_effects__WEBPACK_IMPORTED_MODULE_2__["SaveOrderFormApiEffects"]; });






/***/ }),

/***/ "./src/app/oi/order/services/api/save-order-form/save-order-form.actions.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/oi/order/services/api/save-order-form/save-order-form.actions.ts ***!
  \**********************************************************************************/
/*! exports provided: SaveOrderFormStartAction, SaveOrderFormSucceedAction, SaveOrderFormFailedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormStartAction", function() { return SaveOrderFormStartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormSucceedAction", function() { return SaveOrderFormSucceedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormFailedAction", function() { return SaveOrderFormFailedAction; });
var SaveOrderFormStartAction = /** @class */ (function () {
    function SaveOrderFormStartAction(payload) {
        this.payload = payload;
        this.type = "[SAVE_ORDER_FORM][API][SaveOrderForm] start" /* START */;
    }
    return SaveOrderFormStartAction;
}());

var SaveOrderFormSucceedAction = /** @class */ (function () {
    function SaveOrderFormSucceedAction(payload) {
        this.payload = payload;
        this.type = "[SAVE_ORDER_FORM][API][SaveOrderForm] succeed" /* SUCCEED */;
    }
    return SaveOrderFormSucceedAction;
}());

var SaveOrderFormFailedAction = /** @class */ (function () {
    function SaveOrderFormFailedAction(payload) {
        this.payload = payload;
        this.type = "[SAVE_ORDER_FORM][API][SaveOrderForm] failed" /* FAILED */;
    }
    return SaveOrderFormFailedAction;
}());



/***/ }),

/***/ "./src/app/oi/order/services/api/save-order-form/save-order-form.effects.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/oi/order/services/api/save-order-form/save-order-form.effects.ts ***!
  \**********************************************************************************/
/*! exports provided: SaveOrderFormApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormApiEffects", function() { return SaveOrderFormApiEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _order_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../order-form.service */ "./src/app/oi/order/services/order-form.service.ts");
/* harmony import */ var _save_order_form_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save-order-form.actions */ "./src/app/oi/order/services/api/save-order-form/save-order-form.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SaveOrderFormApiEffects = /** @class */ (function () {
    function SaveOrderFormApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[SAVE_ORDER_FORM][API][SaveOrderForm] start" /* START */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.service.SaveOrderForm(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _save_order_form_actions__WEBPACK_IMPORTED_MODULE_5__["SaveOrderFormSucceedAction"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(new _save_order_form_actions__WEBPACK_IMPORTED_MODULE_5__["SaveOrderFormFailedAction"](err)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], SaveOrderFormApiEffects.prototype, "start$", void 0);
    SaveOrderFormApiEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _order_form_service__WEBPACK_IMPORTED_MODULE_4__["OrderFormService"]])
    ], SaveOrderFormApiEffects);
    return SaveOrderFormApiEffects;
}());



/***/ }),

/***/ "./src/app/oi/order/services/api/save-order-form/save-order-form.model.ts":
/*!********************************************************************************!*\
  !*** ./src/app/oi/order/services/api/save-order-form/save-order-form.model.ts ***!
  \********************************************************************************/
/*! exports provided: SaveOrderFormApiModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFormApiModel", function() { return SaveOrderFormApiModel; });
var SaveOrderFormApiModel;
(function (SaveOrderFormApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    SaveOrderFormApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    SaveOrderFormApiModel.Response = Response;
})(SaveOrderFormApiModel || (SaveOrderFormApiModel = {}));


/***/ }),

/***/ "./src/app/oi/order/services/order-form.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/oi/order/services/order-form.service.ts ***!
  \*********************************************************/
/*! exports provided: OrderFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormService", function() { return OrderFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderFormService = /** @class */ (function () {
    function OrderFormService(http) {
        this.http = http;
    }
    OrderFormService.prototype.GetNewOrderForm = function () {
        // return of(GetNewOrderForm as OrderFormModel);
        return this.http
            .get("http://185.208.174.92:2000/order/GetNewOrderForm/?type=1")
            .map(function (response) { return response.Result; });
    };
    OrderFormService.prototype.SaveOrderForm = function () {
        // return of(SaveOrderForm as OrderFormModel);
        return this.http
            .get("http://185.208.174.92:2000/order/SaveOrderForm")
            .map(function (response) { return response.Result; });
    };
    OrderFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderFormService);
    return OrderFormService;
}());



/***/ }),

/***/ "./src/app/oi/order/services/order.service.ts":
/*!****************************************************!*\
  !*** ./src/app/oi/order/services/order.service.ts ***!
  \****************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.GetOrderTypes = function () {
        // return of(GetOrderTypes);
        return this.http
            .get("http://185.208.174.92:2000/order/GetOrderTypes")
            .map(function (response) { return response.Result; });
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/oi/order/test/test.component.css":
/*!**************************************************!*\
  !*** ./src/app/oi/order/test/test.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oi/order/test/test.component.html":
/*!***************************************************!*\
  !*** ./src/app/oi/order/test/test.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/oi/order/test/test.component.ts":
/*!*************************************************!*\
  !*** ./src/app/oi/order/test/test.component.ts ***!
  \*************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/order.service */ "./src/app/oi/order/services/order.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ "./src/app/oi/order/services/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestComponent = /** @class */ (function () {
    function TestComponent(service, store) {
        this.service = service;
        this.store = store;
    }
    TestComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _services_api__WEBPACK_IMPORTED_MODULE_3__["GetOrderTypesStartAction"](new _services_api__WEBPACK_IMPORTED_MODULE_3__["GetOrderTypesApiModel"].Request({ Name: "asdf" })));
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "order-test",
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/oi/order/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/oi/order/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/oi/policy/index.ts":
/*!************************************!*\
  !*** ./src/app/oi/policy/index.ts ***!
  \************************************/
/*! exports provided: PolicyModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _policy_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policy.module */ "./src/app/oi/policy/policy.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolicyModule", function() { return _policy_module__WEBPACK_IMPORTED_MODULE_0__["PolicyModule"]; });

/* harmony import */ var _policy_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy.config */ "./src/app/oi/policy/policy.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return _policy_config__WEBPACK_IMPORTED_MODULE_1__["MODULE_DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return _policy_config__WEBPACK_IMPORTED_MODULE_1__["MODULE_CONFIG_TOKEN"]; });





/***/ }),

/***/ "./src/app/oi/policy/policy-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/oi/policy/policy-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PolicyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyRoutingModule", function() { return PolicyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/test.component */ "./src/app/oi/policy/test/test.component.ts");


var routes = [
    {
        path: "policy",
        children: [
            {
                path: "test",
                component: _test_test_component__WEBPACK_IMPORTED_MODULE_1__["TestComponent"]
            }
        ]
    }
];
var PolicyRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/oi/policy/policy.config.ts":
/*!********************************************!*\
  !*** ./src/app/oi/policy/policy.config.ts ***!
  \********************************************/
/*! exports provided: MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return MODULE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return MODULE_CONFIG_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MODULE_DEFAULT_CONFIG = {
    endpoints: {
        upsert: "http://localhost:3000/api/bpmn",
        get: "http://localhost:3000/api/bpmn/${model._id}",
        getList: "http://localhost:3000/api/bpmn",
        delete: "http://localhost:3000/api/bpmn"
    }
};
var MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("PolicyModuleConfig");


/***/ }),

/***/ "./src/app/oi/policy/policy.module.ts":
/*!********************************************!*\
  !*** ./src/app/oi/policy/policy.module.ts ***!
  \********************************************/
/*! exports provided: PolicyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModule", function() { return PolicyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/test.component */ "./src/app/oi/policy/test/test.component.ts");
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy-routing.module */ "./src/app/oi/policy/policy-routing.module.ts");
/* harmony import */ var _policy_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy.reducers */ "./src/app/oi/policy/policy.reducers.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api */ "./src/app/oi/policy/services/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PolicyModule = /** @class */ (function () {
    function PolicyModule() {
    }
    PolicyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature("policy", _policy_reducers__WEBPACK_IMPORTED_MODULE_6__["FeatureReducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_services_api__WEBPACK_IMPORTED_MODULE_7__["GetCarModelsOfBrandApiEffects"]])
            ],
            declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"]]
        })
    ], PolicyModule);
    return PolicyModule;
}());



/***/ }),

/***/ "./src/app/oi/policy/policy.reducers.ts":
/*!**********************************************!*\
  !*** ./src/app/oi/policy/policy.reducers.ts ***!
  \**********************************************/
/*! exports provided: FeatureReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureReducers", function() { return FeatureReducers; });
var FeatureReducers = {};


/***/ }),

/***/ "./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.actions.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.actions.ts ***!
  \***************************************************************************************************/
/*! exports provided: GetCarModelsOfBrandStartAction, GetCarModelsOfBrandSucceedAction, GetCarModelsOfBrandFailedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandStartAction", function() { return GetCarModelsOfBrandStartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandSucceedAction", function() { return GetCarModelsOfBrandSucceedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandFailedAction", function() { return GetCarModelsOfBrandFailedAction; });
var GetCarModelsOfBrandStartAction = /** @class */ (function () {
    function GetCarModelsOfBrandStartAction(payload) {
        this.payload = payload;
        this.type = "[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] start" /* START */;
    }
    return GetCarModelsOfBrandStartAction;
}());

var GetCarModelsOfBrandSucceedAction = /** @class */ (function () {
    function GetCarModelsOfBrandSucceedAction(payload) {
        this.payload = payload;
        this.type = "[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] succeed" /* SUCCEED */;
    }
    return GetCarModelsOfBrandSucceedAction;
}());

var GetCarModelsOfBrandFailedAction = /** @class */ (function () {
    function GetCarModelsOfBrandFailedAction(payload) {
        this.payload = payload;
        this.type = "[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] failed" /* FAILED */;
    }
    return GetCarModelsOfBrandFailedAction;
}());



/***/ }),

/***/ "./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.effects.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.effects.ts ***!
  \***************************************************************************************************/
/*! exports provided: GetCarModelsOfBrandApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandApiEffects", function() { return GetCarModelsOfBrandApiEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../policy.service */ "./src/app/oi/policy/services/policy.service.ts");
/* harmony import */ var _get_car_models_of_brand_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-car-models-of-brand.actions */ "./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetCarModelsOfBrandApiEffects = /** @class */ (function () {
    function GetCarModelsOfBrandApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_CAR_MODELS_OF_BRAND][API][GetCarModelsOfBrand] start" /* START */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.service.GetCarModelsOfBrand(payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _get_car_models_of_brand_actions__WEBPACK_IMPORTED_MODULE_5__["GetCarModelsOfBrandSucceedAction"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(new _get_car_models_of_brand_actions__WEBPACK_IMPORTED_MODULE_5__["GetCarModelsOfBrandFailedAction"](err)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], GetCarModelsOfBrandApiEffects.prototype, "start$", void 0);
    GetCarModelsOfBrandApiEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _policy_service__WEBPACK_IMPORTED_MODULE_4__["PolicyService"]])
    ], GetCarModelsOfBrandApiEffects);
    return GetCarModelsOfBrandApiEffects;
}());



/***/ }),

/***/ "./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.model.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.model.ts ***!
  \*************************************************************************************************/
/*! exports provided: GetCarModelsOfBrandApiModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandApiModel", function() { return GetCarModelsOfBrandApiModel; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var GetCarModelsOfBrandApiModel;
(function (GetCarModelsOfBrandApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {};
        };
        Request.prototype.getRequestQueryParams = function () {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append("carBrand", this.carBrand.toString());
            return params;
        };
        return Request;
    }());
    GetCarModelsOfBrandApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetCarModelsOfBrandApiModel.Response = Response;
})(GetCarModelsOfBrandApiModel || (GetCarModelsOfBrandApiModel = {}));


/***/ }),

/***/ "./src/app/oi/policy/services/api/get-car-models-of-brand/index.ts":
/*!*************************************************************************!*\
  !*** ./src/app/oi/policy/services/api/get-car-models-of-brand/index.ts ***!
  \*************************************************************************/
/*! exports provided: GetCarModelsOfBrandApiModel, GetCarModelsOfBrandStartAction, GetCarModelsOfBrandSucceedAction, GetCarModelsOfBrandFailedAction, GetCarModelsOfBrandApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_car_models_of_brand_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-car-models-of-brand.model */ "./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandApiModel", function() { return _get_car_models_of_brand_model__WEBPACK_IMPORTED_MODULE_0__["GetCarModelsOfBrandApiModel"]; });

/* harmony import */ var _get_car_models_of_brand_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-car-models-of-brand.actions */ "./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandStartAction", function() { return _get_car_models_of_brand_actions__WEBPACK_IMPORTED_MODULE_1__["GetCarModelsOfBrandStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandSucceedAction", function() { return _get_car_models_of_brand_actions__WEBPACK_IMPORTED_MODULE_1__["GetCarModelsOfBrandSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandFailedAction", function() { return _get_car_models_of_brand_actions__WEBPACK_IMPORTED_MODULE_1__["GetCarModelsOfBrandFailedAction"]; });

/* harmony import */ var _get_car_models_of_brand_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-car-models-of-brand.effects */ "./src/app/oi/policy/services/api/get-car-models-of-brand/get-car-models-of-brand.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandApiEffects", function() { return _get_car_models_of_brand_effects__WEBPACK_IMPORTED_MODULE_2__["GetCarModelsOfBrandApiEffects"]; });






/***/ }),

/***/ "./src/app/oi/policy/services/api/index.ts":
/*!*************************************************!*\
  !*** ./src/app/oi/policy/services/api/index.ts ***!
  \*************************************************/
/*! exports provided: GetCarModelsOfBrandApiModel, GetCarModelsOfBrandStartAction, GetCarModelsOfBrandSucceedAction, GetCarModelsOfBrandFailedAction, GetCarModelsOfBrandApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_car_models_of_brand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-car-models-of-brand */ "./src/app/oi/policy/services/api/get-car-models-of-brand/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandApiModel", function() { return _get_car_models_of_brand__WEBPACK_IMPORTED_MODULE_0__["GetCarModelsOfBrandApiModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandStartAction", function() { return _get_car_models_of_brand__WEBPACK_IMPORTED_MODULE_0__["GetCarModelsOfBrandStartAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandSucceedAction", function() { return _get_car_models_of_brand__WEBPACK_IMPORTED_MODULE_0__["GetCarModelsOfBrandSucceedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandFailedAction", function() { return _get_car_models_of_brand__WEBPACK_IMPORTED_MODULE_0__["GetCarModelsOfBrandFailedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCarModelsOfBrandApiEffects", function() { return _get_car_models_of_brand__WEBPACK_IMPORTED_MODULE_0__["GetCarModelsOfBrandApiEffects"]; });


// export * from "./compare-policies";


/***/ }),

/***/ "./src/app/oi/policy/services/policy.service.ts":
/*!******************************************************!*\
  !*** ./src/app/oi/policy/services/policy.service.ts ***!
  \******************************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/app/oi/policy/services/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PolicyService = /** @class */ (function () {
    function PolicyService(http) {
        this.http = http;
    }
    PolicyService.prototype.GetCarModelsOfBrand = function (data) {
        // return of(GetCarModelsOfBrand.Result as PolicyModel[]);
        var model = new _api__WEBPACK_IMPORTED_MODULE_2__["GetCarModelsOfBrandApiModel"].Request(data);
        return this.http
            .get("http://185.208.174.92:2000/policy/GetCarModelsOfBrand", { params: model.getRequestQueryParams() })
            .map(function (response) { return response.Result; });
    };
    PolicyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PolicyService);
    return PolicyService;
}());



/***/ }),

/***/ "./src/app/oi/policy/test/test.component.css":
/*!***************************************************!*\
  !*** ./src/app/oi/policy/test/test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oi/policy/test/test.component.html":
/*!****************************************************!*\
  !*** ./src/app/oi/policy/test/test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/oi/policy/test/test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/oi/policy/test/test.component.ts ***!
  \**************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/policy.service */ "./src/app/oi/policy/services/policy.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ "./src/app/oi/policy/services/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestComponent = /** @class */ (function () {
    function TestComponent(service, store) {
        this.service = service;
        this.store = store;
    }
    TestComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _services_api__WEBPACK_IMPORTED_MODULE_3__["GetCarModelsOfBrandStartAction"](new _services_api__WEBPACK_IMPORTED_MODULE_3__["GetCarModelsOfBrandApiModel"].Request({ Name: "asdf" })));
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "policy-test",
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/oi/policy/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/oi/policy/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/about-us/about-us.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/about-us/about-us.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          درباره ما\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n        <h4>ما در یک نگاه</h4>\r\n        <p>\r\n          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.\r\n          طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته\r\n          شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای\r\n          صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه\r\n          طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در\r\n          نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان\r\n          حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند\r\n          تا مرحله طراحی و صفحه‌بندی را به پایان برند.\r\n        </p>\r\n        <p>\r\n          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.\r\n          طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته\r\n          شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای\r\n          صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه\r\n          طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در\r\n          نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان\r\n          حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند\r\n          تا مرحله طراحی و صفحه‌بندی را به پایان برند.\r\n        </p>\r\n\r\n        برخی از مهم‌ترین افتخارات\r\n        <ul>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم ا لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرالورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n        </ul>\r\n\r\n\r\n        <h4>مهم‌ترین فعالیت‌ها</h4>\r\n\r\n        اصلی‌ترین فعالیت‌های گروه شرکت‌های را می‌توان به صورت موارد زیر برشمرد:\r\n        <ul>\r\n          <li>ارایه دهنده سرویس اینترنت پر سرعت ADSL2+ و‌VDSL </li>\r\n          <li>ارایه سرویس وای فای عمومی (Public WiFi)</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم ا لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرالورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n        </ul>\r\n\r\n\r\n\r\n        <h4>زیرساخت‌های قانونی:</h4>\r\n\r\n        فعالیت در مسیری که هم‌اینک در آن گام بر می‌دارد، مستلزم فراهم ساختن زیرساخت‌های قانونی بسیاری‌ است که از جمله مهم‌ترین آن‌ها\r\n        می‌توان به موارد زیر اشاره کرد:\r\n        <ul>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم ا لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرالورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n        </ul>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions>\r\n        <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/about-us/about-us.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/about-us/about-us.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/about-us/about-us.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/about-us/about-us.component.ts ***!
  \****************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/static-page/dumb-components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/static-page/dumb-components/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/contact-us/contact-us.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/contact-us/contact-us.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n    <div fxLayout='row' fxLayoutWrap>\r\n      <mat-card fxFlex>\r\n        <img mat-card-image src=\"../../assets/images/map.jpg\" />\r\n        <mat-card-header>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <h4>\r\n            تماس با ما\r\n          </h4>\r\n          <p>\r\n            آدرس : تهران، خیابان شریعتی، پایین تر از پل صدر، بن بست\r\n            <br /> کدپستی : ۱۹۱۴۷۳۳۴۴۱\r\n          </p>\r\n          <p>\r\n            تلفن : 1223654\r\n          </p>\r\n          <p>\r\n            نمابر : 1122554\r\n          </p>\r\n          <p>\r\n            پست الکترونیک : sales [at] bimeh [dot] ir\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/contact-us/contact-us.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/contact-us/contact-us.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/contact-us/contact-us.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/contact-us/contact-us.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/static-page/dumb-components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/static-page/dumb-components/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/faq/faq.component.html":
/*!********************************************************************!*\
  !*** ./src/app/static-page/dumb-components/faq/faq.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- قوانین و مقررات -->\r\n<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n\r\n    <mat-card-actions>\r\n      <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/faq/faq.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/static-page/dumb-components/faq/faq.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/faq/faq.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/static-page/dumb-components/faq/faq.component.ts ***!
  \******************************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/static-page/dumb-components/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/static-page/dumb-components/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/static-page/dumb-components/index.ts ***!
  \******************************************************/
/*! exports provided: PageNotFoundComponent, PoliciesComponent, AboutUsComponent, ContactUsComponent, FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]; });

/* harmony import */ var _policies_policies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies/policies.component */ "./src/app/static-page/dumb-components/policies/policies.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return _policies_policies_component__WEBPACK_IMPORTED_MODULE_1__["PoliciesComponent"]; });

/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/static-page/dumb-components/about-us/about-us.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]; });

/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/static-page/dumb-components/contact-us/contact-us.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]; });

/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/static-page/dumb-components/faq/faq.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"]; });








/***/ }),

/***/ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/page-not-found/page-not-found.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n      <h1>404</h1>\r\n      <h3> صفحـه مورد نظـر شما یافت نشـد</h3>\r\n      <span>  ممکن است این صفحه حذف یا منتقل شده باشد</span>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/page-not-found/page-not-found.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.upper-menu { float: left; position: absolute; left: 0; top: 30px; }\r\n.upper-menu a { border-left: 1px solid #eee; color: #222; padding: 0 5px 0 8px; font-size: 14px; text-decoration: none; cursor: pointer; }\r\n.upper-menu a:hover { color: #f16321; }\r\n.upper-menu .last { border: none; }\r\n.upper-menu-div { padding: 0 10px; border-left: 1px solid #ddd; }\r\n.upper-menu-div-last { padding: 0 10px; }\r\n\r\n:host{\r\n    width: 100%;\r\n}*/\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/policies/policies.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/policies/policies.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- قوانین و مقررات -->\r\n<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n\r\n    <mat-card-actions>\r\n      <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/policies/policies.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/policies/policies.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/policies/policies.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/policies/policies.component.ts ***!
  \****************************************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoliciesComponent = /** @class */ (function () {
    function PoliciesComponent() {
    }
    PoliciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./policies.component.html */ "./src/app/static-page/dumb-components/policies/policies.component.html"),
            styles: [__webpack_require__(/*! ./policies.component.scss */ "./src/app/static-page/dumb-components/policies/policies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PoliciesComponent);
    return PoliciesComponent;
}());



/***/ }),

/***/ "./src/app/static-page/index.ts":
/*!**************************************!*\
  !*** ./src/app/static-page/index.ts ***!
  \**************************************/
/*! exports provided: StaticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-page.module */ "./src/app/static-page/static-page.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticPageModule", function() { return _static_page_module__WEBPACK_IMPORTED_MODULE_0__["StaticPageModule"]; });




/***/ }),

/***/ "./src/app/static-page/static-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/static-page/static-page.module.ts ***!
  \***************************************************/
/*! exports provided: StaticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPageModule", function() { return StaticPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _static_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static-page.routing-module */ "./src/app/static-page/static-page.routing-module.ts");
/* harmony import */ var _dumb_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dumb-components */ "./src/app/static-page/dumb-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var StaticPageModule = /** @class */ (function () {
    function StaticPageModule() {
    }
    StaticPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                // BrowserAnimationsModule,
                _static_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"]
            ],
            declarations: [
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["PoliciesComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"]
            ],
            exports: []
        })
    ], StaticPageModule);
    return StaticPageModule;
}());



/***/ }),

/***/ "./src/app/static-page/static-page.routing-module.ts":
/*!***********************************************************!*\
  !*** ./src/app/static-page/static-page.routing-module.ts ***!
  \***********************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dumb_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dumb-components */ "./src/app/static-page/dumb-components/index.ts");


var routes = [
    {
        path: 'static',
        // component: SessionContainerComponent,
        children: [
            {
                path: 'about-us',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["AboutUsComponent"]
            },
            {
                path: 'contact-us',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"]
            },
            {
                path: 'policies',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["PoliciesComponent"]
            },
            {
                path: 'faq',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["FaqComponent"]
            },
            {
                path: '**',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"]
            }
        ]
    }
];
var RoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\OnlineInsurance\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map