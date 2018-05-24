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
                        material.MatIconModule, material.MatButtonModule,
                        material.MatCardModule, material.MatSnackBarModule,
                        material.MatSidenavModule, material.MatExpansionModule, material.MatSelectModule, material.MatFormFieldModule, material.MatListModule, material.MatMenuModule,
                        material.MatRadioModule, material.MatInputModule,
                        material.MatToolbarModule, material.MatDatepickerModule, material.MatProgressBarModule,
                        animations.BrowserAnimationsModule
                    ],
                    declarations: [],
                    exports: [
                        common.CommonModule,
                        router.RouterModule,
                        forms.FormsModule,
                        http.HttpClientModule,
                        flexLayout.FlexLayoutModule,
                        material.MatIconModule, material.MatButtonModule,
                        material.MatCardModule, material.MatSnackBarModule,
                        material.MatSidenavModule, material.MatExpansionModule, material.MatSelectModule, material.MatFormFieldModule, material.MatListModule, material.MatMenuModule,
                        material.MatRadioModule, material.MatInputModule,
                        material.MatToolbarModule, material.MatDatepickerModule, material.MatProgressBarModule
                    ]
                },] },
    ];

    exports.HttpResponseBaseModel = HttpResponseBaseModel;
    exports.HttpRequestBaseModel = HttpRequestBaseModel;
    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-shared.umd.js.map
