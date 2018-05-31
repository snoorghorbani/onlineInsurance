import { FormGroup, FormControl, Validators, FormBuilder, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Injectable, Inject, Component, Output, EventEmitter, Input, Injector, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, NgModule, defineInjectable, inject } from '@angular/core';
import { __decorate, __metadata, __assign } from 'tslib';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ConfigModel = /** @class */ (function () {
    function ConfigModel() {
    }
    return ConfigModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (/** @type {?} */ (_this))[key] = (/** @type {?} */ (initValue))[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {};
        };
        return Request;
    }());
    GetConfigsApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetConfigsApiModel.Response = Response;
})(GetConfigsApiModel || (GetConfigsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditConfigApiModel;
(function (EditConfigApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return ((/** @type {?} */ (_this))[key] = (/** @type {?} */ (initValue))[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                Name: this.Name,
                Config: this.Config
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    Name: new FormControl("", [Validators.required]),
                    Config: new FormGroup({})
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditConfigApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditConfigApiModel.Response = Response;
})(EditConfigApiModel || (EditConfigApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    dev_api_host: 'http://localhost:3000',
    prod_api_host: 'http://5.196.149.107:3000',
    env: {
        production: false
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken('UserModuleConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ConfigActionTypes = {
    GET_CONFIGS: "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
    UPDATE_CONFIG: "[CONFIG] update config",
    CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
};
var GetConfigAction = /** @class */ (function () {
    function GetConfigAction() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
    return GetConfigAction;
}());
var ConfigLoadedSucceedAction = /** @class */ (function () {
    function ConfigLoadedSucceedAction(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
    return ConfigLoadedSucceedAction;
}());
var ConfigLoadedFailedAction = /** @class */ (function () {
    function ConfigLoadedFailedAction() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
    return ConfigLoadedFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = [];
var /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return __assign({}, state, { data: action.payload });
        case ConfigActionTypes.UPDATE_CONFIG:
            return __assign({}, state, { data: state.data.map(function (config) {
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
var /** @type {?} */ getConfigs = function (state) { return state.data; };
var /** @type {?} */ getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
var /** @type {?} */ getAuthenticationModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "authentication_module_config"; });
};
var /** @type {?} */ getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
var /** @type {?} */ getlayoutModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "layout_config"; })); };
var /** @type {?} */ getConfigModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "config_module_config"; })); };
var /** @type {?} */ getFormModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "form_module_config"; })); };
var /** @type {?} */ getSocketModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "socket_module_config"; })); };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ConfigReducers = {
    list: Reducer
};
//#region selectors
var /** @type {?} */ selectConfigState = createFeatureSelector("config");
//#endregion
var /** @type {?} */ getConfigListState = createSelector(selectConfigState, function (state) { return state.list; });
var /** @type {?} */ getConfigs$1 = createSelector(getConfigListState, getConfigs);
var /** @type {?} */ getAppConfig$1 = createSelector(getConfigListState, getAppConfig);
var /** @type {?} */ getAuthenticationModuleConfig$1 = createSelector(getConfigListState, getAuthenticationModuleConfig);
var /** @type {?} */ getUserModuleConfig$1 = createSelector(getConfigListState, getUserModuleConfig);
var /** @type {?} */ getlayoutModuleConfig$1 = createSelector(getConfigListState, getlayoutModuleConfig);
var /** @type {?} */ getConfigModuleConfig$1 = createSelector(getConfigListState, getConfigModuleConfig);
var /** @type {?} */ getFormModuleConfig$1 = createSelector(getConfigListState, getFormModuleConfig);
var /** @type {?} */ getSocketModuleConfig$1 = createSelector(getConfigListState, getSocketModuleConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig$1).subscribe(function (configConfig) {
            if (!configConfig)
                return;
            _this._config = Object.assign({}, _this._config, configConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(ConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigService = /** @class */ (function () {
    function ConfigService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configsEndpoint = this.configurationService.config.env.production
            ? this.configurationService.config.prod_api_host
            : this.configurationService.config.dev_api_host;
        setTimeout(function () {
            _this.store.dispatch(new GetConfigAction());
        }, 999);
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.getConfigs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (this.http
            .get(this.configsEndpoint + "/api/config")
            .take(1)
            .map(function (response) {
            if (_this.configurationService.config.env.production) {
                var /** @type {?} */ dev_api_host = _this.configurationService.config.dev_api_host;
                var /** @type {?} */ prod_api_host = _this.configurationService.config.prod_api_host;
                return JSON.parse(JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)).Result;
            }
            else {
                return response.Result;
            }
        })
            .catch(function (err) {
            return Observable.throw(err);
        }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ConfigService.prototype.getConfigByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.http.get(this.configsEndpoint + "/api/config/" + name).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ConfigService.prototype.editConfig = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        var /** @type {?} */ model = new EditConfigApiModel.Request(body);
        return this.http
            .put(this.configsEndpoint + "/api/config/" + model.Name, model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getLayoutConfigs = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.configsEndpoint + "/api/layout-config")
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: ConfigurationService }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(inject(HttpClient), inject(Store), inject(ConfigurationService)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs$1);
    }
    ConfigsComponent.decorators = [
        { type: Component, args: [{
                    selector: "configs",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n  <mat-card class=\"config-box\" *ngFor=\"let config of (configs | async)\" [fxFlex]=\"50\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  config.Name]\">\n          <mat-icon aria-label=\"edit config\">edit</mat-icon>\n        </a>\n        {{config.Name}}\n      </h3>\n  </mat-card>\n</div>",
                    styles: [":host{width:100%}.config-box{margin:15px}"]
                },] },
    ];
    /** @nocollapse */
    ConfigsComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ConfigsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigEditComponent = /** @class */ (function () {
    function ConfigEditComponent(configService, formBuilder, route) {
        var _this = this;
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ configName = params["name"];
            _this.configService.getConfigByName(configName).subscribe(function (data) {
                _this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: /** @type {?} */ (_this.formGroup.controls["Config"])
                    }
                };
                _this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach(function (key) {
                    _this.addControl(/** @type {?} */ (_this.formGroup.controls["Config"]), key, data.Result.Config[key]);
                });
            });
        });
    }
    /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ConfigEditComponent.prototype.addControl = /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new FormControl(value));
        }
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigEditComponent.prototype.configChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formGroup.controls["Config"].patchValue(event);
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(function (config) { });
    };
    ConfigEditComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-config-edit",
                    template: "<div >\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <dynamic-config-component-selector (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ConfigEditComponent.ctorParameters = function () { return [
        { type: ConfigService },
        { type: FormBuilder },
        { type: ActivatedRoute }
    ]; };
    return ConfigEditComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigAppConfigComponent = /** @class */ (function () {
    function ConfigAppConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({ AppTitle: new FormControl("", [Validators.required]) });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    ConfigAppConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-app-config",
                    template: "<div [formGroup]=\"formGroup\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\" formControlName=\"AppTitle\">\n    </mat-form-field>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ConfigAppConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ConfigAppConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return ConfigAppConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserModuleConfigComponent = /** @class */ (function () {
    function UserModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                changePassword: new FormControl("", [Validators.required]),
                editProfile: new FormControl("", [Validators.required]),
                getUserInfo: new FormControl("", [Validators.required]),
                profileInformation: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                profile_edit: new FormControl("", [Validators.required])
            }),
            dashboardLinks: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            (/** @type {?} */ (configFormGroup.controls["dashboardLinks"])).controls.forEach(function (control) {
                (/** @type {?} */ (_this.formGroup.controls["dashboardLinks"])).push(new FormGroup({
                    route: new FormControl("", [Validators.required]),
                    icon: new FormControl("", [Validators.required]),
                    title: new FormControl("", [Validators.required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UserModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("dashboardLinks"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("dashboardLinks"))).push(menuItem);
    };
    UserModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-user-module-config",
                    template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\" formControlName=\"changePassword\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\" formControlName=\"editProfile\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\" formControlName=\"getUserInfo\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Profile Information Endpoint\" formControlName=\"profileInformation\">\n        </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\" formControlName=\"profile_edit\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>\n\n\n<h2 fxFlex=\"100\">\n    Dashobard Links\n    <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n        <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n    </button>\n</h2>\n<div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\n    <div [formGroup]=\"item\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n        </mat-form-field>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    UserModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    UserModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return UserModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutModuleConfigComponent = /** @class */ (function () {
    function LayoutModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            layoutMode: new FormControl("", [Validators.required]),
            showLeftNavBar: new FormControl("", [Validators.required]),
            mainSideNavMode: new FormControl("", [Validators.required]),
            showMainSidenav: new FormControl("", [Validators.required]),
            stickyLeftNavBar: new FormControl("", [Validators.required]),
            showSecondSideNav: new FormControl("", [Validators.required]),
            secondSideNavMode: new FormControl("", [Validators.required]),
            menuItems: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.roleItems = ["Admin", "User"];
        this.sideNavModes = ["over", "push", "side"];
        this.layoutModes = ["with-margin", "without-margin", "default"];
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            (/** @type {?} */ (configFormGroup.controls["menuItems"])).controls.forEach(function (control) {
                (/** @type {?} */ (_this.formGroup.controls.menuItems)).push(new FormGroup({
                    route: new FormControl("", [Validators.required]),
                    icon: new FormControl("", [Validators.required]),
                    // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                    roles: new FormControl(),
                    title: new FormControl("", [Validators.required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) { return _this.formGroup.patchValue(data); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LayoutModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            roles: new FormControl(),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("menuItems"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("menuItems"))).push(menuItem);
    };
    LayoutModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n    <div fxFlex=\"100\" fxFlexLayout=\"row\">\n        <div [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"layout mode\" formControlName=\"layoutMode\" >\n                    <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n        </div>\n    </div>\n\n    <h2 fxFlex=\"100\">\n        Menu Items\n        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n        </button>\n    </h2>\n    <div fxFlex=\"100\" *ngFor=\"let item of formGroup.controls.menuItems.controls\">\n        <div [formGroup]=\"item\">\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n            </mat-form-field>\n            <mat-form-field> \n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"roles\" formControlName=\"roles\" multiple>\n                    <mat-option *ngFor=\"let role of roleItems\" [value]=\"role\">{{role}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n        </div>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    LayoutModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    LayoutModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return LayoutModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigModuleContainerComponent = /** @class */ (function () {
    function ConfigModuleContainerComponent() {
    }
    /**
     * @return {?}
     */
    ConfigModuleContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ConfigModuleContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-module-container",
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    ConfigModuleContainerComponent.ctorParameters = function () { return []; };
    return ConfigModuleContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AuthenticationModuleConfigComponent = /** @class */ (function () {
    function AuthenticationModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                signIn: new FormControl("", [Validators.required]),
                signOut: new FormControl("", [Validators.required]),
                userInformation: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                signIn: new FormControl("", [Validators.required])
            })
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(AuthenticationModuleConfigComponent.prototype, "configFormGroup", {
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    AuthenticationModuleConfigComponent.prototype.setFormId = /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    function (formId, formName) {
        this.formGroup.patchValue((_a = {}, _a[formName] = formId, _a));
        var _a;
    };
    AuthenticationModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-authentication-module-config",
                    template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\" formControlName=\"signIn\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\" formControlName=\"signOut\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"user information\" formControlName=\"userInformation\">\n    </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\" formControlName=\"signIn\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>"
                },] },
    ];
    /** @nocollapse */
    AuthenticationModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    AuthenticationModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return AuthenticationModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    function DynamicConfigComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            authentication_module_config: AuthenticationModuleConfigComponent,
            app_config: ConfigAppConfigComponent,
            user_module_config: UserModuleConfigComponent,
            layout_config: LayoutModuleConfigComponent
        };
        this.configChanged = new EventEmitter();
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            var /** @type {?} */ _component = this.typeMapToDiagram[data.type];
            var /** @type {?} */ inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: (/** @type {?} */ (data.inputs))[inputName] };
            });
            var /** @type {?} */ resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            var /** @type {?} */ injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
            var /** @type {?} */ component = factory.create(injector);
            (/** @type {?} */ (component.instance)).configChanged.subscribe(function (data) {
                _this.configChanged.emit(data);
            });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    DynamicConfigComponentSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-config-component-selector",
                    template: "<div #dynamicComponentContainer></div>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"],
                    entryComponents: [
                        AuthenticationModuleConfigComponent,
                        ConfigAppConfigComponent,
                        UserModuleConfigComponent,
                        LayoutModuleConfigComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    DynamicConfigComponentSelectorComponent.propDecorators = {
        dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
        configChanged: [{ type: Output }],
        data: [{ type: Input }]
    };
    return DynamicConfigComponentSelectorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LoadConfigEffects = /** @class */ (function () {
    function LoadConfigEffects(actions$, configService) {
        var _this = this;
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(ConfigActionTypes.GET_CONFIGS)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.configService.getConfigs(); }), map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), catchError(function () { return Observable$1.of(new ConfigLoadedFailedAction()); }));
    }
    LoadConfigEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoadConfigEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ConfigService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], LoadConfigEffects.prototype, "getConfigs$", void 0);
    return LoadConfigEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: 'configs',
        component: ConfigModuleContainerComponent,
        children: [
            {
                path: '',
                component: ConfigsComponent
            },
            {
                path: 'edit/:name',
                component: ConfigEditComponent
            }
        ]
    }
];
var /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsConfigModule = /** @class */ (function () {
    function NgsConfigModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgsConfigModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsConfigModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    NgsConfigModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        FlexLayoutModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSnackBarModule,
                        MatSidenavModule,
                        MatExpansionModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatListModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatInputModule,
                        MatSlideToggleModule,
                        MatToolbarModule,
                        MatDatepickerModule,
                        MatProgressBarModule,
                        BrowserAnimationsModule,
                        RoutingModule
                    ],
                    declarations: [
                        ConfigsComponent,
                        ConfigEditComponent,
                        ConfigAppConfigComponent,
                        UserModuleConfigComponent,
                        LayoutModuleConfigComponent,
                        ConfigModuleContainerComponent,
                        AuthenticationModuleConfigComponent,
                        DynamicConfigComponentSelectorComponent
                    ],
                    providers: []
                },] },
    ];
    return NgsConfigModule;
}());
var RootNgsConfigModule = /** @class */ (function () {
    function RootNgsConfigModule() {
    }
    RootNgsConfigModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsConfigModule,
                        StoreModule.forFeature("config", ConfigReducers),
                        EffectsModule.forFeature([LoadConfigEffects])
                    ],
                    exports: [NgsConfigModule]
                },] },
    ];
    return RootNgsConfigModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ConfigService, ConfigModel, GetConfigsApiModel, EditConfigApiModel, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, ConfigReducers, selectConfigState, getConfigListState, getConfigs$1 as getConfigs, getAppConfig$1 as getAppConfig, getAuthenticationModuleConfig$1 as getAuthenticationModuleConfig, getUserModuleConfig$1 as getUserModuleConfig, getlayoutModuleConfig$1 as getlayoutModuleConfig, getConfigModuleConfig$1 as getConfigModuleConfig, getFormModuleConfig$1 as getFormModuleConfig, getSocketModuleConfig$1 as getSocketModuleConfig, NgsConfigModule, RootNgsConfigModule, RoutingModule as ɵc, ConfigAppConfigComponent as ɵj, AuthenticationModuleConfigComponent as ɵn, LayoutModuleConfigComponent as ɵl, UserModuleConfigComponent as ɵk, LoadConfigEffects as ɵq, ConfigReducers as ɵp, ConfigurationService as ɵb, ConfigEditComponent as ɵf, ConfigModuleContainerComponent as ɵd, ConfigsComponent as ɵe, ConfigEditComponent as ɵi, ConfigModuleContainerComponent as ɵm, ConfigsComponent as ɵg, DynamicConfigComponentSelectorComponent as ɵo };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvZ2V0LWNvbmZpZ3MtYXBpLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgICAgIFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PltdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdENvbmZpZ0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdENvbmZpZzoge307XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICgodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRDb25maWc6IHRoaXMuQ29uZmlnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29uZmlnOiBuZXcgRm9ybUdyb3VwKHt9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IENvbmZpZ01vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ01vZHVsZUNvbmZpZyB7XHJcblx0ZGV2X2FwaV9ob3N0Pzogc3RyaW5nO1xyXG5cdHByb2RfYXBpX2hvc3Q/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBDb25maWdNb2R1bGVDb25maWcgPSB7XHJcblx0ZGV2X2FwaV9ob3N0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuXHRwcm9kX2FwaV9ob3N0OiAnaHR0cDovLzUuMTk2LjE0OS4xMDc6MzAwMCcsXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPENvbmZpZ01vZHVsZUNvbmZpZz4oJ1VzZXJNb2R1bGVDb25maWcnKTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBDb25maWdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX0NPTkZJR1MgPSBcIltDT05GSUddIGdldCBjb25maWdcIixcclxuXHRDT05GSUdfTE9BREVEX1NVQ0NFRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIHN1Y2NlZWRcIixcclxuXHRVUERBVEVfQ09ORklHID0gXCJbQ09ORklHXSB1cGRhdGUgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9GQUlMRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ01vZGVsPGFueT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gR2V0Q29uZmlnQWN0aW9uIHwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB8IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiB8IFVwZGF0ZUNvbmZpZ0FjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25cIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogYW55W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGNvbmZpZy5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfU1VDQ0VFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuVVBEQVRFX0NPTkZJRzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBzdGF0ZS5kYXRhLm1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKSBjb25maWcuQ29uZmlnID0gYWN0aW9uLnBheWxvYWQuQ29uZmlnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImFwcF9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInVzZXJfbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldGxheW91dE1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJsYXlvdXRfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImNvbmZpZ19tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJmb3JtX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwic29ja2V0X21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb25maWdMaXN0IGZyb20gXCIuL2NvbmZpZy1saXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdGF0ZSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5TdGF0ZTtcclxufVxyXG5Db25maWdMb2FkZWRGYWlsZWRBY3Rpb247XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0bGF5b3V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldGxheW91dE1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Rm9ybU1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0U29ja2V0TW9kdWxlQ29uZmlnKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2NvbmZpZy5jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBDb25maWdNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogQ29uZmlnTW9kdWxlQ29uZmlnLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldENvbmZpZ01vZHVsZUNvbmZpZykuc3Vic2NyaWJlKGNvbmZpZ0NvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghY29uZmlnQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIEdldENvbmZpZ3NBcGlNb2RlbCwgQ29uZmlnTW9kZWwsIExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogYW55O1xyXG5cdGNvbmZpZ3NFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPENvbmZpZ1N0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3NFbmRwb2ludCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5wcm9kdWN0aW9uXHJcblx0XHRcdD8gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcucHJvZF9hcGlfaG9zdFxyXG5cdFx0XHQ6IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmRldl9hcGlfaG9zdDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Q29uZmlnQWN0aW9uKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldENvbmZpZ3MoKTogT2JzZXJ2YWJsZTxDb25maWdNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWdgKVxyXG5cdFx0XHRcdC8vIC5maWx0ZXIoKCkgPT4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZGV2X2FwaV9ob3N0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHQudGFrZSgxKVxyXG5cdFx0XHRcdC5tYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkZXZfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5kZXZfYXBpX2hvc3Q7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHByb2RfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5wcm9kX2FwaV9ob3N0O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShcclxuXHRcdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShyZXNwb25zZSkucmVwbGFjZShuZXcgUmVnRXhwKGRldl9hcGlfaG9zdCwgXCJnXCIpLCBwcm9kX2FwaV9ob3N0KVxyXG5cdFx0XHRcdFx0XHQpLlJlc3VsdDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5SZXN1bHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHtuYW1lfWApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRlZGl0Q29uZmlnKGJvZHk6IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHttb2RlbC5OYW1lfWAsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPExheW91dENvbmZpZ01vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9sYXlvdXQtY29uZmlnYClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IExheW91dENvbmZpZ01vZGVsKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdzLCBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZ3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgPG1hdC1jYXJkIGNsYXNzPVwiY29uZmlnLWJveFwiICpuZ0Zvcj1cImxldCBjb25maWcgb2YgKGNvbmZpZ3MgfCBhc3luYylcIiBbZnhGbGV4XT1cIjUwXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGNvbmZpZy5OYW1lXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGNvbmZpZ1wiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2NvbmZpZy5OYW1lfX1cclxuICAgICAgPC9oMz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5jb25maWctYm94e21hcmdpbjoxNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdzQ29tcG9uZW50IHtcclxuXHRjb25maWdzOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdzID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlncyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ID5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IgKGNvbmZpZ0NoYW5nZWQpPVwiY29uZmlnQ2hhbmdlZCgkZXZlbnQpXCIgW2RhdGFdPVwicGFydGlhbENvbmZpZ01vZGVsXCI+PC9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZWRpdFwiPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvY29uZmlnc1wiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uZmlnSW5mb3JhbWF0aW9uOiBhbnk7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0cGFydGlhbENvbmZpZ01vZGVsOiBQYXJ0aWFsQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbmZpZ05hbWU6IHN0cmluZyA9IHBhcmFtc1tcIm5hbWVcIl07XHJcblx0XHRcdHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdCeU5hbWUoY29uZmlnTmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGFydGlhbENvbmZpZ01vZGVsID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogZGF0YS5SZXN1bHQuTmFtZSxcclxuXHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRjb25maWdGb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0X2lkOiBkYXRhLlJlc3VsdC5faWQsXHJcblx0XHRcdFx0XHROYW1lOiBkYXRhLlJlc3VsdC5OYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5SZXN1bHQuQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENvbnRyb2wodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cCwga2V5LCBkYXRhLlJlc3VsdC5Db25maWdba2V5XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KHZhbHVlKSk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5ncm91cCh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodmFsdWUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZy5wYXRjaFZhbHVlKGV2ZW50KTtcclxuXHR9XHJcblx0ZWRpdCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5lZGl0Q29uZmlnKHRoaXMuZm9ybUdyb3VwLnZhbHVlKS5zdWJzY3JpYmUoY29uZmlnID0+IHt9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWFwcC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCvsOYwrHDmcKIw5rCmMOZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJBcHBUaXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoeyBBcHBUaXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSB9KTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctdXNlci1tb2R1bGUtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8aDI+RW5kcG9pbnRzPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2VuZHBvaW50cycpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImNoYW5nZSBwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cImNoYW5nZVBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImVkaXQgcHJvZmlsZVwiIGZvcm1Db250cm9sTmFtZT1cImVkaXRQcm9maWxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImdldCB1c2VyIGluZm9cIiBmb3JtQ29udHJvbE5hbWU9XCJnZXRVc2VySW5mb1wiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJQcm9maWxlIEluZm9ybWF0aW9uIEVuZHBvaW50XCIgZm9ybUNvbnRyb2xOYW1lPVwicHJvZmlsZUluZm9ybWF0aW9uXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+XHJcbjxoMj5Gb3JtczwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuZ2V0KCdmb3JtcycpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJwcm9maWxlIGVkaXRcIiBmb3JtQ29udHJvbE5hbWU9XCJwcm9maWxlX2VkaXRcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwhLS0gPG5ncy1mb3JtLXNlbGVjdG9yIChzZWxlY3QpPVwic2V0Rm9ybUlkKCRldmVudCwnc2lnbkluJylcIj48L25ncy1mb3JtLXNlbGVjdG9yPiAtLT5cclxuPC9kaXY+XHJcblxyXG5cclxuPGgyIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgRGFzaG9iYXJkIExpbmtzXHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkTWVudSgpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG48L2gyPlxyXG48ZGl2IGZ4RmxleD1cIjEwMFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mICRhbnkoZm9ybUdyb3VwLmdldCgnZGFzaGJvYXJkTGlua3MnKSkuY29udHJvbHNcIj5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJpdGVtXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImljb25cIiBmb3JtQ29udHJvbE5hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInRpdGxlXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRlbmRwb2ludHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRjaGFuZ2VQYXNzd29yZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0ZWRpdFByb2ZpbGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGdldFVzZXJJbmZvOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRwcm9maWxlSW5mb3JtYXRpb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pLFxyXG5cdFx0Zm9ybXM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRwcm9maWxlX2VkaXQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pLFxyXG5cdFx0ZGFzaGJvYXJkTGlua3M6IG5ldyBGb3JtQXJyYXkoW10pXHJcblx0fSk7XHJcblx0X2NvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5fY29uZmlnRm9ybUdyb3VwID0gY29uZmlnRm9ybUdyb3VwO1xyXG5cdFx0KGNvbmZpZ0Zvcm1Hcm91cC5jb250cm9scy5kYXNoYm9hcmRMaW5rcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goY29udHJvbCA9PiB7XHJcblx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5kYXNoYm9hcmRMaW5rcyBhcyBGb3JtQXJyYXkpLnB1c2goXHJcblx0XHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnRm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cDtcclxuXHR9XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0fVxyXG5cdGFkZE1lbnUoKSB7XHJcblx0XHR2YXIgbWVudUl0ZW0gPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KTtcclxuXHJcblx0XHQodGhpcy5mb3JtR3JvdXAuZ2V0KFwiZGFzaGJvYXJkTGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJkYXNoYm9hcmRMaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhGbGV4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgcGxhY2Vob2xkZXI9XCJsYXlvdXQgbW9kZVwiIGZvcm1Db250cm9sTmFtZT1cImxheW91dE1vZGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGF5b3V0TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiAgZm9ybUNvbnRyb2xOYW1lPVwic2hvd0xlZnROYXZCYXJcIj5zaG93IGxlZnQgbmF2YmFyPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgcGxhY2Vob2xkZXI9XCJtYWluIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJtYWluU2lkZU5hdk1vZGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2lkZU5hdk1vZGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gXHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInNob3dNYWluU2lkZW5hdlwiPnNob3cgbWFpbiBzaWRlIG5hdjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiAgZm9ybUNvbnRyb2xOYW1lPVwic3RpY2t5TGVmdE5hdkJhclwiPnN0aWNreSBsZWZ0IG5hdmJhcjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiAgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1NlY29uZFNpZGVOYXZcIj5zaG93IHNlY29uZCBzaWRlIG5hdjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwic2Vjb25kIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRTaWRlTmF2TW9kZVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaWRlTmF2TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxoMiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgICBNZW51IEl0ZW1zXHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE1lbnUoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImljb24tYnV0dG9uIGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9oMj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcy5jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInJvdXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwicm91dGVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwidGl0bGVcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+IFxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwicm9sZXNcIiBmb3JtQ29udHJvbE5hbWU9XCJyb2xlc1wiIG11bHRpcGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCByb2xlIG9mIHJvbGVJdGVtc1wiIFt2YWx1ZV09XCJyb2xlXCI+e3tyb2xlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0c2lkZU5hdk1vZGVzOiBzdHJpbmdbXTtcclxuXHRsYXlvdXRNb2Rlczogc3RyaW5nW107XHJcblx0Zm9ybUdyb3VwOiBhbnkgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGxheW91dE1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93TGVmdE5hdkJhcjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdG1haW5TaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHNob3dNYWluU2lkZW5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHN0aWNreUxlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93U2Vjb25kU2lkZU5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHNlY29uZFNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0bWVudUl0ZW1zOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdF9jb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cCA9IGNvbmZpZ0Zvcm1Hcm91cDtcclxuXHRcdChjb25maWdGb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdC8vIHJvbGVzOiBuZXcgRm9ybUFycmF5KGNvbnRyb2wudmFsdWUucm9sZXMubWFwKChpKSA9PiBuZXcgRm9ybUNvbnRyb2woXCJBZG1pblwiKSkpLFxyXG5cdFx0XHRcdFx0cm9sZXM6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSkpO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnRm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cDtcclxuXHR9XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHJvbGVJdGVtczogc3RyaW5nW10gPSBbIFwiQWRtaW5cIiwgXCJVc2VyXCIgXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuc2lkZU5hdk1vZGVzID0gWyBcIm92ZXJcIiwgXCJwdXNoXCIsIFwic2lkZVwiIF07XHJcblx0XHR0aGlzLmxheW91dE1vZGVzID0gWyBcIndpdGgtbWFyZ2luXCIsIFwid2l0aG91dC1tYXJnaW5cIiwgXCJkZWZhdWx0XCIgXTtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0fVxyXG5cdGFkZE1lbnUoKSB7XHJcblx0XHR2YXIgbWVudUl0ZW0gPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLW1vZHVsZS1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXRBbGlnbj1cIlwiIGZ4ZmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8aDI+RW5kcG9pbnRzPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5lbmRwb2ludHNcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInNpZ24gaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJzaWduSW5cIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwic2lnbiBvdXRcIiBmb3JtQ29udHJvbE5hbWU9XCJzaWduT3V0XCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInVzZXIgaW5mb3JtYXRpb25cIiBmb3JtQ29udHJvbE5hbWU9XCJ1c2VySW5mb3JtYXRpb25cIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PlxyXG48aDI+Rm9ybXM8L2gyPlxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLmZvcm1zXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaWduSW4gRm9ybXNcIiBmb3JtQ29udHJvbE5hbWU9XCJzaWduSW5cIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwhLS0gPG5ncy1mb3JtLXNlbGVjdG9yIChzZWxlY3QpPVwic2V0Rm9ybUlkKCRldmVudCwnc2lnbkluJylcIj48L25ncy1mb3JtLXNlbGVjdG9yPiAtLT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRlbmRwb2ludHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRzaWduSW46IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHNpZ25PdXQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHVzZXJJbmZvcm1hdGlvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRmb3JtczogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHNpZ25JbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSlcclxuXHR9KTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRzZXRGb3JtSWQoZm9ybUlkOiBzdHJpbmcsIGZvcm1OYW1lOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBbZm9ybU5hbWVdOiBmb3JtSWQgfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9hcHAtY29uZmlnL2FwcC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3VzZXItbW9kdWxlLWNvbmZpZy91c2VyLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAjZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcj48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9YF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiBhbnkgPSB7XHJcblx0XHRhdXRoZW50aWNhdGlvbl9tb2R1bGVfY29uZmlnOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGFwcF9jb25maWc6IENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHVzZXJfbW9kdWxlX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGxheW91dF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogUGFydGlhbENvbmZpZykge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHRpZiAoIShkYXRhLnR5cGUgaW4gdGhpcy50eXBlTWFwVG9EaWFncmFtKSkge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgX2NvbXBvbmVudDogYW55ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IChkYXRhLmlucHV0cyBhcyBhbnkpW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblxyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHRcdCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuY29uZmlnQ2hhbmdlZC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdChkYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdBY3Rpb25UeXBlcywgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiwgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkQ29uZmlnRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldENvbmZpZ3MkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUylcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ3MoKSksXHJcblx0XHRcdG1hcChjb25maWdzID0+IG5ldyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uKGNvbmZpZ3MpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnc0NvbXBvbmVudCwgQ29uZmlnRWRpdENvbXBvbmVudCwgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25maWdzJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnc0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2VkaXQvOm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnRWRpdENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDb25maWdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWdzL2NvbmZpZ3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1lZGl0L2NvbmZpZy1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYXBwLWNvbmZpZy9hcHAtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3VzZXItbW9kdWxlLWNvbmZpZy91c2VyLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9hZENvbmZpZ0VmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2xvYWQtY29uZmlnLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY29uZmlnLnJvdXRpbmctbW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Q29uZmlnc0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHRVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0NvbmZpZ01vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImNvbmZpZ1wiLCBDb25maWdSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMb2FkQ29uZmlnRWZmZWN0cyBdKVxyXG5cdFx0Ly8gUm91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NDb25maWdNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0NvbmZpZ01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzIiwiY29uZmlnTGlzdC5SZWR1Y2VyIiwiZ2V0Q29uZmlncyIsImNvbmZpZ0xpc3QuZ2V0Q29uZmlncyIsImdldEFwcENvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0QXBwQ29uZmlnIiwiZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIiwiZ2V0VXNlck1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0VXNlck1vZHVsZUNvbmZpZyIsImdldGxheW91dE1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0bGF5b3V0TW9kdWxlQ29uZmlnIiwiZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRDb25maWdNb2R1bGVDb25maWciLCJnZXRGb3JtTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRGb3JtTW9kdWxlQ29uZmlnIiwiZ2V0U29ja2V0TW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRTb2NrZXRNb2R1bGVDb25maWciLCJPYnNlcnZhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBQTs7O3NCQUFBO0lBSUM7Ozs7OztBQ0NELElBQWMsa0JBQWtCO0FBQWhDLFdBQWMsa0JBQWtCO0lBRTVCLElBQUE7UUFFSSxpQkFBWSxTQUF3RTtZQUF4RSwwQkFBQSxFQUFBLDhCQUF3QyxFQUFnQyxDQUFBO1lBQXBGLGlCQUVDO1lBREcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxtQkFBQyxLQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUcsbUJBQUMsU0FBZ0IsR0FBRSxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDdkY7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDSSxPQUFPLEVBQ04sQ0FBQTtTQUNKO3NCQWhCVDtRQWlCSyxDQUFBO0lBVlksMEJBQU87SUFZcEIsSUFBQTtRQUVJO1NBRUM7dUJBdkJUO1FBd0JLLENBQUE7SUFMWSwyQkFBUTtHQWRYLGtCQUFrQixLQUFsQixrQkFBa0IsUUFvQi9COzs7Ozs7QUN2QkQsSUFHaUIsa0JBQWtCO0FBQW5DLFdBQWlCLGtCQUFrQjtJQUNsQyxJQUFBO1FBR0MsaUJBQVksU0FBNEM7WUFBNUMsMEJBQUEsRUFBQSw4QkFBWSxFQUFnQyxDQUFBO1lBQXhELGlCQUVDO1lBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxtQkFBQyxLQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUcsbUJBQUMsU0FBZ0IsR0FBRSxHQUFHLENBQUMsSUFBQyxDQUFDLENBQUM7U0FDdEY7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDQyxPQUFPO2dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbkIsQ0FBQztTQUNGO1FBQ0Qsc0JBQVcsb0JBQVM7Ozs7WUFBcEI7Z0JBQ0MsT0FBTyxJQUFJLFNBQVMsQ0FBQztvQkFDcEIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztvQkFDbEQsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztpQkFDekIsQ0FBQyxDQUFDO2FBQ0g7OztXQUFBO3NCQXhCSDtRQXlCRSxDQUFBO0lBbkJZLDBCQUFPO0lBcUJwQixJQUFBO1FBRUM7U0FBZ0I7dUJBN0JsQjtRQThCRSxDQUFBO0lBSFksMkJBQVE7R0F0Qkwsa0JBQWtCLEtBQWxCLGtCQUFrQixRQTBCbEM7Ozs7Ozs7Ozs7O0FDL0JELHFCQVVhLHFCQUFxQixHQUF1QjtJQUN4RCxZQUFZLEVBQUUsdUJBQXVCO0lBQ3JDLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUMsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7S0FDakI7Q0FDRCxDQUFDO0FBRUYscUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXFCLGtCQUFrQixDQUFDOzs7Ozs7OztpQkNkOUUscUJBQXFCOzJCQUNYLDhCQUE4QjttQkFDdEMsd0JBQXdCOzBCQUNqQiw2QkFBNkI7O0FBR3JELElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxXQUFXOzswQkFYOUM7SUFZQyxDQUFBO0FBRkQsQUFJQSxJQUFBO0lBR0MsbUNBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO29CQUY5QixpQkFBaUIsQ0FBQyxxQkFBcUI7S0FFTDtvQ0FqQm5EO0lBa0JDLENBQUE7QUFKRCxBQVVBLElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxvQkFBb0I7O21DQXpCdkQ7SUEwQkMsQ0FBQTs7Ozs7O1NDbEJNLEVBQUU7QUFEVCxxQkFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsaUJBQXdCLEtBQW9CLEVBQUUsTUFBc0I7SUFBNUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSTtRQUNsQixLQUFLQSxpQkFBd0IsQ0FBQyxxQkFBcUI7WUFDbEQsb0JBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNuQjtRQUNILEtBQUtBLGlCQUF3QixDQUFDLGFBQWE7WUFDMUMsb0JBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU07b0JBQzFCLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7d0JBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDNUUsT0FBTyxNQUFNLENBQUM7aUJBQ2QsQ0FBQyxJQUNEO1FBQ0g7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0NBQ0Q7QUFFRCxBQUFPLHFCQUFNLFVBQVUsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEdBQUEsQ0FBQztBQUN2RCxBQUFPLHFCQUFNLFlBQVksR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZLEdBQUEsQ0FBQyxHQUFBLENBQUM7QUFDckcsQUFBTyxxQkFBTSw2QkFBNkIsR0FBRyxVQUFDLEtBQVk7SUFDekQsT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUksOEJBQThCLEdBQUEsQ0FBQztDQUFBLENBQUM7QUFDMUUsQUFBTyxxQkFBTSxtQkFBbUIsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxvQkFBb0IsR0FBQSxDQUFDLEdBQUEsQ0FBQztBQUNwSCxBQUFPLHFCQUFNLHFCQUFxQixHQUFHLFVBQUMsS0FBWSxZQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxlQUFlLEdBQUEsQ0FBUSxJQUFBLENBQUM7QUFDeEgsQUFBTyxxQkFBTSxxQkFBcUIsR0FBRyxVQUFDLEtBQVksWUFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLHNCQUFzQixHQUFBLENBQVEsSUFBQSxDQUFDO0FBQ3pFLEFBQU8scUJBQU0sbUJBQW1CLEdBQUcsVUFBQyxLQUFZLFlBQy9DLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxvQkFBb0IsR0FBQSxDQUFRLElBQUEsQ0FBQztBQUN2RSxBQUFPLHFCQUFNLHFCQUFxQixHQUFHLFVBQUMsS0FBWSxZQUNqRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUksc0JBQXNCLEdBQUEsQ0FBUSxJQUFBLENBQUM7Ozs7Ozs7Ozs7O0FDMUN6RSxxQkFRYSxjQUFjLEdBQUc7SUFDN0IsSUFBSSxFQUFFQyxPQUFrQjtDQUN4QixDQUFDOztBQVFGLHFCQUFhLGlCQUFpQixHQUFHLHFCQUFxQixDQUFjLFFBQVEsQ0FBQyxDQUFDOztBQUk5RSxxQkFBYSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksR0FBQSxDQUFDLENBQUM7QUFDeEcscUJBQWFDLFlBQVUsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUVDLFVBQXFCLENBQUMsQ0FBQztBQUNwRixxQkFBYUMsY0FBWSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRUMsWUFBdUIsQ0FBQyxDQUFDO0FBQ3hGLHFCQUFhQywrQkFBNkIsR0FBRyxjQUFjLENBQzFELGtCQUFrQixFQUNsQkMsNkJBQXdDLENBQ3hDLENBQUM7QUFDRixxQkFBYUMscUJBQW1CLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFQyxtQkFBOEIsQ0FBQyxDQUFDO0FBQ3RHLHFCQUFhQyx1QkFBcUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUVDLHFCQUFnQyxDQUFDLENBQUM7QUFDMUcscUJBQWFDLHVCQUFxQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRUMscUJBQWdDLENBQUMsQ0FBQztBQUMxRyxxQkFBYUMscUJBQW1CLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFQyxtQkFBOEIsQ0FBQyxDQUFDO0FBQ3RHLHFCQUFhQyx1QkFBcUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUVDLHFCQUFnQyxDQUFDOzs7Ozs7QUNqQ3pHO0lBa0JDLDhCQUF5QyxVQUE4QixFQUFVLEtBQWlCO1FBQWxHLGlCQVFDO1FBUmdGLFVBQUssR0FBTCxLQUFLLENBQVk7dUJBRnhGLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFHMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUNMLHVCQUFxQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsWUFBWTtZQUM5RCxJQUFJLENBQUMsWUFBWTtnQkFBRSxPQUFPO1lBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNIO0lBYkQsc0JBQUksd0NBQU07Ozs7UUFBVjtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNwQjs7O09BQUE7O2dCQVBELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0RBUWEsTUFBTSxTQUFDLG1CQUFtQjtnQkFqQi9CLEtBQUs7OzsrQkFEZDs7Ozs7OztBQ0FBO0lBa0JDLHVCQUNTLE1BQ0EsT0FDQTtRQUhULGlCQVlDO1FBWFEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHlCQUFvQixHQUFwQixvQkFBb0I7UUFFNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVO2NBQ25FLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsYUFBYTtjQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUVqRCxVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDM0MsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNSOzs7O0lBRUQsa0NBQVU7OztJQUFWO1FBQUEsaUJBcUJDO1FBcEJBLFFBQ0MsSUFBSSxDQUFDLElBQUk7YUFDUCxHQUFHLENBQUksSUFBSSxDQUFDLGVBQWUsZ0JBQWEsQ0FBQzthQUV6QyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsR0FBRyxDQUFDLFVBQUMsUUFBcUM7WUFDMUMsSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BELHFCQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDbkUscUJBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUNyRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FDOUUsQ0FBQyxNQUFNLENBQUM7YUFDVDtpQkFBTTtnQkFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDdkI7U0FDRCxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNULE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLEVBQ0Y7S0FDRjs7Ozs7SUFDRCx1Q0FBZTs7OztJQUFmLFVBQWdCLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsZUFBZSxvQkFBZSxJQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEdBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDckcsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELGtDQUFVOzs7O0lBQVYsVUFBVyxJQUFnQztRQUMxQyxxQkFBSSxLQUFLLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBSSxJQUFJLENBQUMsZUFBZSxvQkFBZSxLQUFLLENBQUMsSUFBTSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMvRSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEdBQUEsQ0FBQzthQUN6QixLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsd0NBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUFJLElBQUksQ0FBQyxlQUFlLHVCQUFvQixDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFDLFFBQTJCLElBQUssT0FBQSxRQUFRLEdBQUEsQ0FBQzthQUM5QyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNKOztnQkFsRUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFaUSxVQUFVO2dCQUdWLEtBQUs7Z0JBS0wsb0JBQW9COzs7d0JBVDdCOzs7Ozs7O0FDQUE7SUF1QkMsMEJBQW9CLEtBQTBCO1FBQTFCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUNWLFlBQVUsQ0FBQyxDQUFDO0tBQzdDOztnQkFsQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsb1hBU0o7b0JBQ04sTUFBTSxFQUFFLENBQUMsMkNBQTJDLENBQUM7aUJBQ3JEOzs7O2dCQWxCUSxLQUFLOzsyQkFGZDs7Ozs7OztBQ0FBO0lBNkJDLDZCQUFvQixhQUE0QixFQUFVLFdBQXdCLEVBQVUsS0FBcUI7UUFBakgsaUJBbUJDO1FBbkJtQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7eUJBSDFGLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTO1FBSTFELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDakMscUJBQU0sVUFBVSxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUM1RCxLQUFJLENBQUMsa0JBQWtCLEdBQUc7b0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3RCLE1BQU0sRUFBRTt3QkFDUCxlQUFlLG9CQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxVQUFvQixDQUFBO3FCQUM1RDtpQkFDRCxDQUFDO2dCQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO29CQUN6QixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO29CQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQzFDLEtBQUksQ0FBQyxVQUFVLG1CQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxVQUFvQixHQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMzRixDQUFDLENBQUM7YUFDSCxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSDs7Ozs7OztJQUVELHdDQUFVOzs7Ozs7SUFBVixVQUFXLFNBQW9CLEVBQUUsR0FBVyxFQUFFLEtBQVU7UUFDdkQsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQzNCLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekQ7YUFBTSxJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDbkMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ04sU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNsRDtLQUNEOzs7O0lBRUQsc0NBQVE7OztJQUFSLGVBQWE7Ozs7O0lBQ2IsMkNBQWE7Ozs7SUFBYixVQUFjLEtBQVU7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFdBQVEsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBQ0Qsa0NBQUk7OztJQUFKO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEtBQU0sQ0FBQyxDQUFDO0tBQzVFOztnQkEzREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxndEJBWUo7aUJBQ047Ozs7Z0JBakJRLGFBQWE7Z0JBSEYsV0FBVztnQkFEdEIsY0FBYzs7OEJBRnZCOzs7Ozs7O0FDQUE7SUFzQkMsa0NBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7eUJBVGYsSUFBSSxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQzs2QkFRdEUsSUFBSSxZQUFZLEVBQUU7UUFFM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQzVEO0lBVkQsc0JBQ0kscURBQWU7Ozs7O1FBRG5CLFVBQ29CLGVBQTBCO1lBRDlDLGlCQU1DO1lBSkEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEMsQ0FBQyxDQUFDO1NBQ0g7OztPQUFBOztnQkFoQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSw4UUFJSjtpQkFDTjs7OztnQkFYa0UsUUFBUTs7O2tDQWN6RSxLQUFLO2dDQU9MLE1BQU07O21DQXJCUjs7Ozs7OztBQ0FBO0lBc0ZDLG1DQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO3lCQW5DZixJQUFJLFNBQVMsQ0FBQztZQUNwQyxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUM7Z0JBQ3hCLGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQzVELFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3pELFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3pELGtCQUFrQixFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUNoRSxDQUFDO1lBQ0YsS0FBSyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUNwQixZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2FBQzFELENBQUM7WUFDRixjQUFjLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ2pDLENBQUM7NkJBdUJ3QixJQUFJLFlBQVksRUFBRTtRQUUzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDNUQ7SUF4QkQsc0JBQ0ksc0RBQWU7Ozs7UUFpQm5CO1lBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDN0I7Ozs7O1FBcEJELFVBQ29CLGVBQTBCO1lBRDlDLGlCQWlCQztZQWZBLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7WUFDeEMsbUJBQUMsZUFBZSxDQUFDLFFBQVEsa0JBQTRCLEdBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQzlFLG1CQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxrQkFBNEIsR0FBRSxJQUFJLENBQ3pELElBQUksU0FBUyxDQUFDO29CQUNiLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7b0JBQ25ELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7b0JBQ2xELEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7aUJBQ25ELENBQUMsQ0FDRixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEMsQ0FBQyxDQUFDO1NBQ0g7OztPQUFBOzs7O0lBUUQsMkNBQU87OztJQUFQO1FBQ0MscUJBQUksUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzVCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7WUFDbkQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztZQUNsRCxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1NBQ25ELENBQUMsQ0FBQztRQUVILG1CQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFjLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLG1CQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFjLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pFOztnQkE5RkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxndUVBMENKO2lCQUNOOzs7O2dCQWpEa0UsUUFBUTs7O2tDQWdFekUsS0FBSztnQ0FxQkwsTUFBTTs7b0NBckZSOzs7Ozs7O0FDQUE7SUE4RkMscUNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7eUJBcENyQixJQUFJLFNBQVMsQ0FBQztZQUM5QixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1lBQ3hELGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7WUFDNUQsZUFBZSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztZQUM3RCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1lBQzdELGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztZQUM5RCxpQkFBaUIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7WUFDL0QsaUJBQWlCLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1lBQy9ELFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQzs2QkF1QndCLElBQUksWUFBWSxFQUFFO3lCQUV0QixDQUFFLE9BQU8sRUFBRSxNQUFNLENBQUU7UUFHeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDNUQ7SUE3QkQsc0JBQ0ksd0RBQWU7Ozs7UUFpQm5CO1lBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDN0I7Ozs7O1FBcEJELFVBQ29CLGVBQTBCO1lBRDlDLGlCQWlCQztZQWZBLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7WUFDeEMsbUJBQUMsZUFBZSxDQUFDLFFBQVEsYUFBdUIsR0FBRSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDMUUsbUJBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBc0IsR0FBRSxJQUFJLENBQ3BELElBQUksU0FBUyxDQUFDO29CQUNiLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7b0JBQ25ELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7O29CQUVsRCxLQUFLLEVBQUUsSUFBSSxXQUFXLEVBQUU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7aUJBQ25ELENBQUMsQ0FDRixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQ2xGOzs7T0FBQTs7OztJQWFELDZDQUFPOzs7SUFBUDtRQUNDLHFCQUFJLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUM1QixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1lBQ25ELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7WUFDbEQsS0FBSyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7U0FDbkQsQ0FBQyxDQUFDO1FBRUgsbUJBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFjLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELG1CQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBYyxHQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNwRTs7Z0JBMUdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseW5HQWlESjtpQkFDTjs7OztnQkF0RGdELFFBQVE7OztrQ0FxRXZELEtBQUs7Z0NBcUJMLE1BQU07O3NDQTFGUjs7Ozs7OztBQ0FBO0lBWUM7S0FBZ0I7Ozs7SUFFaEIsaURBQVE7OztJQUFSLGVBQWE7O2dCQVZiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsNEdBR1Y7aUJBQ0E7Ozs7eUNBVkQ7Ozs7Ozs7QUNBQTtJQTZDQyw2Q0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTt5QkFsQmYsSUFBSSxTQUFTLENBQUM7WUFDcEMsU0FBUyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUNyRCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2FBQzdELENBQUM7WUFDRixLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7YUFDcEQsQ0FBQztTQUNGLENBQUM7NkJBUXdCLElBQUksWUFBWSxFQUFFO1FBRTNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUM1RDtJQVZELHNCQUNJLGdFQUFlOzs7OztRQURuQixVQUNvQixlQUEwQjtZQUQ5QyxpQkFNQztZQUpBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQzFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNIOzs7T0FBQTs7Ozs7O0lBS0QsdURBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsUUFBZ0I7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLFdBQUcsR0FBQyxRQUFRLElBQUcsTUFBTSxNQUFHLENBQUM7O0tBQ2xEOztnQkE5Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFFBQVEsRUFBRSxtaUNBa0JKO2lCQUNOOzs7O2dCQXpCa0UsUUFBUTs7O2tDQXFDekUsS0FBSztnQ0FPTCxNQUFNOzs4Q0E1Q1I7Ozs7Ozs7QUNBQTtJQTBFQyxpREFBb0IsUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7Z0NBekM5QjtZQUN2Qiw0QkFBNEIsRUFBRSxtQ0FBbUM7WUFDakUsVUFBVSxFQUFFLHdCQUF3QjtZQUNwQyxrQkFBa0IsRUFBRSx5QkFBeUI7WUFDN0MsYUFBYSxFQUFFLDJCQUEyQjtTQUMxQzs2QkFHeUIsSUFBSSxZQUFZLEVBQUU7Z0NBQ3BCLElBQUk7S0FnQzhCO0lBL0IxRCxzQkFDSSx5REFBSTs7Ozs7UUFEUixVQUNTLElBQW1CO1lBRDVCLGlCQThCQztZQTVCQSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNuRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO29CQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDM0QsT0FBTzthQUNQO1lBQ0QscUJBQUksVUFBVSxHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQscUJBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFNBQVM7Z0JBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxtQkFBQyxJQUFJLENBQUMsTUFBYSxHQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7YUFDekUsQ0FBQyxDQUFDO1lBQ0gscUJBQUksY0FBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVoRSxxQkFBSSxRQUFRLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQ3RELGNBQWMsRUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUM3QyxDQUFDO1lBQ0YscUJBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFaEUscUJBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsbUJBQU0sU0FBUyxDQUFDLFFBQVEsR0FBRSxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztnQkFDM0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFMUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQztZQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7U0FDbEM7OztPQUFBOzs7O0lBRUQsaUVBQWU7OztJQUFmLGVBQW9COztnQkF0RHBCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCxNQUFNLEVBQUUsQ0FBQywyRUFBMkUsQ0FBQztvQkFDckYsZUFBZSxFQUFFO3dCQUNoQixtQ0FBbUM7d0JBQ25DLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6QiwyQkFBMkI7cUJBQzNCO2lCQUNEOzs7O2dCQTFCQSx3QkFBd0I7Ozs0Q0FrQ3ZCLFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtnQ0FFakUsTUFBTTt1QkFFTixLQUFLOztrREEzQ1A7Ozs7Ozs7O0lDYUMsMkJBQW9CLFFBQXNCLEVBQVUsYUFBNEI7UUFBaEYsaUJBQW9GO1FBQWhFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTsyQkFHbEUsSUFBSSxDQUFDLFFBQVE7YUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQzthQUNyQyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQWdDLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxHQUFBLENBQUMsRUFDaEYsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsSUFBSSx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsR0FBQSxDQUFDLEVBQ3RELFVBQVUsQ0FBQyxjQUFNLE9BQUFnQixZQUFVLENBQUMsRUFBRSxDQUFDLElBQUksd0JBQXdCLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDL0Q7S0FWa0Y7O2dCQUZwRixVQUFVOzs7O2dCQVJGLE9BQU87Z0JBSVAsYUFBYTs7O1FBUXBCLE1BQU0sRUFBRTs7OzRCQWZWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBLEFBSUEscUJBQU0sTUFBTSxHQUFXO0lBQ2Y7UUFDUSxJQUFJLEVBQUUsU0FBUztRQUNmLFNBQVMsRUFBRSw4QkFBOEI7UUFDekMsUUFBUSxFQUFFO1lBQ0Y7Z0JBQ1EsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLGdCQUFnQjthQUNsQztZQUNEO2dCQUNRLElBQUksRUFBRSxZQUFZO2dCQUNsQixTQUFTLEVBQUUsbUJBQW1CO2FBQ3JDO1NBQ1I7S0FDUjtDQUNSLENBQUM7QUFFRixxQkFBYSxhQUFhLEdBQXdCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUN0Qi9FOzs7Ozs7O0lBbUZRLHVCQUFPOzs7O0lBQWQsVUFBZSxNQUEwQjtRQUN4QyxPQUFPO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUU7U0FDakUsQ0FBQztLQUNGOztnQkE3Q0QsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsYUFBYTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6QiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsbUNBQW1DO3dCQUNuQyx1Q0FBdUM7cUJBQ3ZDO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNiOzswQkFqRkQ7Ozs7OztnQkEyRkMsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixlQUFlO3dCQUNmLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQzt3QkFDaEQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFFLGlCQUFpQixDQUFFLENBQUM7cUJBRS9DO29CQUNELE9BQU8sRUFBRSxDQUFFLGVBQWUsQ0FBRTtpQkFDNUI7OzhCQW5HRDs7Ozs7Ozs7Ozs7Ozs7OyJ9