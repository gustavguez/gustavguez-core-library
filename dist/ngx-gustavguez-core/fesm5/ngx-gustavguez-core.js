import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, Pipe, HostBinding, Directive, ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
import * as momentImported from 'moment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

var NgxGustavguezLoaderComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezLoaderComponent() {
    }
    //On component init
    NgxGustavguezLoaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], NgxGustavguezLoaderComponent.prototype, "loading", void 0);
    __decorate([
        Input()
    ], NgxGustavguezLoaderComponent.prototype, "loadingText", void 0);
    NgxGustavguezLoaderComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-loader',
            template: "<ng-container *ngIf=\"loading\">\n    <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n</ng-container>",
            styles: [""]
        })
    ], NgxGustavguezLoaderComponent);
    return NgxGustavguezLoaderComponent;
}());

var NgxGustavguezPopupComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezPopupComponent() {
        this.onClose = new EventEmitter();
    }
    //On component init
    NgxGustavguezPopupComponent.prototype.ngOnInit = function () {
    };
    //Custome events
    NgxGustavguezPopupComponent.prototype.onClosePopup = function () {
        this.onClose.emit();
    };
    __decorate([
        Input()
    ], NgxGustavguezPopupComponent.prototype, "state", void 0);
    __decorate([
        Input()
    ], NgxGustavguezPopupComponent.prototype, "titleText", void 0);
    __decorate([
        Input()
    ], NgxGustavguezPopupComponent.prototype, "closeText", void 0);
    __decorate([
        Output()
    ], NgxGustavguezPopupComponent.prototype, "onClose", void 0);
    NgxGustavguezPopupComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-popup',
            template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n    *ngIf=\"state\"\n    class=\"modal-backdrop fade show\"></div>",
            styles: [""]
        })
    ], NgxGustavguezPopupComponent);
    return NgxGustavguezPopupComponent;
}());

var ArrayUtility = /** @class */ (function () {
    function ArrayUtility() {
    }
    //Suggest current timezone hours
    ArrayUtility.find = function (items, id, callback, compareKey) {
        //Check id key
        var key = compareKey ? compareKey : 'id';
        //Check items
        if (items instanceof Array) {
            var found_1 = false;
            //Found it
            items.every(function (item, index) {
                found_1 = item[key] == id;
                if (found_1) {
                    callback(item, index);
                }
                return !found_1;
            });
        }
    };
    ArrayUtility.each = function (items, callback) {
        //Array
        if (items instanceof Array) {
            items.forEach(function (item, index) {
                callback(item, index);
            });
        }
        else if (items && (typeof items === 'object')) {
            //Object
            for (var index in items) {
                callback(items[index], index);
            }
        }
    };
    ArrayUtility.every = function (items, callback) {
        if (items instanceof Array) {
            items.every(function (item, index) {
                return callback(item, index);
            });
        }
    };
    ArrayUtility.getDisplayKeys = function (items, idKey, displayKey) {
        var displayKeys = {};
        //Default keys
        idKey = idKey ? idKey : 'id';
        displayKey = displayKey ? displayKey : 'name';
        //Each
        ArrayUtility.each(items, function (obj) {
            displayKeys[obj[idKey]] = obj[displayKey];
        });
        return displayKeys;
    };
    ArrayUtility.getSelectedKeys = function (items) {
        var selected = [];
        //Iterate
        ArrayUtility.each(items, function (val, key) {
            if (val)
                selected.push(key);
        });
        return selected;
    };
    ArrayUtility.filter = function (items, callback) {
        if (items instanceof Array) {
            var result = items.filter(function (item, index) {
                return callback(item, index);
            });
            return result;
        }
    };
    ArrayUtility.map = function (items, callback) {
        var result = [];
        if (items instanceof Array) {
            result = items.map(function (item, index) {
                return callback(item, index);
            });
        }
        return result;
    };
    ArrayUtility.sort = function (items, compareKey) {
        var result = items.sort(function (a, b) {
            if (a[compareKey] < b[compareKey])
                return -1;
            if (a[compareKey] > b[compareKey])
                return 1;
            return 0;
        });
        return result;
    };
    ArrayUtility.hasValue = function (items) {
        return (items instanceof Array && items.length > 0);
    };
    return ArrayUtility;
}());

var moment = momentImported;
var DateUtility = /** @class */ (function () {
    function DateUtility() {
    }
    DateUtility.todayLocaleString = function () {
        var today = moment();
        return DateUtility.localeString(today);
    };
    DateUtility.todayDateString = function () {
        var today = moment();
        return today.format("YYYY-MM-DD");
    };
    DateUtility.localeString = function (date) {
        return date.format("YYYY-MM-DD") + "T" + date.format("HH:mm");
    };
    DateUtility.todayAsPrettyString = function () {
        var today = moment();
        return today.format("DD/MM/YYYY");
    };
    DateUtility.prettyDate = function (date, displayHour) {
        var d = moment(date);
        var str = d.format("DD/MM/YYYY");
        if (displayHour) {
            str += " " + DateUtility.prettyHour(date);
        }
        return str;
    };
    DateUtility.prettyHour = function (date) {
        var d = moment(date);
        return d.format("HH:mm");
    };
    return DateUtility;
}());

var FormUtility = /** @class */ (function () {
    function FormUtility() {
    }
    /**
     * Returns a form data object
     * @param json
     */
    FormUtility.jsonToFormData = function (json) {
        var fd = new FormData();
        var _loop_1 = function (key) {
            if (json[key] instanceof Array) {
                json[key].forEach(function (j, index) {
                    fd.append(key + '[' + index + ']', j);
                });
            }
            else {
                fd.append(key, json[key]);
            }
        };
        for (var key in json) {
            _loop_1(key);
        }
        return fd;
    };
    /**
     * Find an Blob or File object in json
     * @param json
     */
    FormUtility.needFormData = function (json) {
        var need = false;
        for (var key in json) {
            if (json[key] instanceof File || json[key] instanceof Blob) {
                need = true;
                break;
            }
        }
        return need;
    };
    /**
     * Trigger form validations
     * @param formGroup
     */
    FormUtility.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    return FormUtility;
}());

var NumberUtility = /** @class */ (function () {
    function NumberUtility() {
    }
    NumberUtility.format = function (val) {
        var valStr = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return valStr.substring(0, valStr.length - 3);
    };
    return NumberUtility;
}());

var StringUtility = /** @class */ (function () {
    function StringUtility() {
    }
    StringUtility.randomString = function () {
        return Math.random().toString(36).substring(2, 12);
    };
    StringUtility.padLeft = function (val, digits) {
        return val.toString().padStart(digits, "0");
    };
    return StringUtility;
}());

var PrettyDatePipe = /** @class */ (function () {
    function PrettyDatePipe() {
    }
    PrettyDatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return DateUtility.prettyDate(value, args.length ? args[0] : true);
    };
    PrettyDatePipe = __decorate([
        Pipe({
            name: 'prettyDate'
        })
    ], PrettyDatePipe);
    return PrettyDatePipe;
}());

var PrettyHourPipe = /** @class */ (function () {
    function PrettyHourPipe() {
    }
    PrettyHourPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return DateUtility.prettyHour(value);
    };
    PrettyHourPipe = __decorate([
        Pipe({
            name: 'prettyHour'
        })
    ], PrettyHourPipe);
    return PrettyHourPipe;
}());

var PrettyNumberPipe = /** @class */ (function () {
    function PrettyNumberPipe() {
    }
    PrettyNumberPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value ? NumberUtility.format(value) : '';
    };
    PrettyNumberPipe = __decorate([
        Pipe({
            name: 'prettyNumber'
        })
    ], PrettyNumberPipe);
    return PrettyNumberPipe;
}());

var NgxGustavguezMainContainerDirective = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainContainerDirective() {
        //Modes
        this.baseClasses = 'sidebar-mini layout-fixed layout-navbar-fixed';
    }
    //On component init
    NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
        //Set base classes to host classes
        this.hostClasses = this.baseClasses;
    };
    __decorate([
        HostBinding('class')
    ], NgxGustavguezMainContainerDirective.prototype, "hostClasses", void 0);
    NgxGustavguezMainContainerDirective = __decorate([
        Directive({
            selector: '[ngxGustavguezMainContainer]'
        })
    ], NgxGustavguezMainContainerDirective);
    return NgxGustavguezMainContainerDirective;
}());

var NgxGustavguezMainSidebarComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainSidebarComponent() {
    }
    //On component init
    NgxGustavguezMainSidebarComponent.prototype.ngOnInit = function () {
    };
    NgxGustavguezMainSidebarComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-main-sidebar',
            template: "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a href=\"#\" class=\"brand-link\">\n        <img src=\"../assets/images/logo.png\" alt=\"AdminLTE Logo\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">Mis Finanzas</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img src=\"http://api.gustavorodriguez.com.uy/uploads/images/avatar_gus.jpeg\"\n                    class=\"img-circle elevation-2\" alt=\"User Image\">\n            </div>\n            <div class=\"info\">\n                <a href=\"#\" class=\"d-block\">Gustavo Rodriguez</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\"\n                data-accordion=\"false\">\n\n                <li class=\"nav-header\">MULTI LEVEL EXAMPLE</li>\n                <li class=\"nav-item\">\n                    <a href=\"#\" class=\"nav-link\">\n                        <i class=\"fas fa-circle nav-icon\"></i>\n                        <p>Level 1</p>\n                    </a>\n                </li>\n                <li class=\"nav-item has-treeview menu-open\">\n                    <a href=\"#\" class=\"nav-link\">\n                        <i class=\"nav-icon fas fa-circle\"></i>\n                        <p>\n                            Level 1\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n                    <ul class=\"nav nav-treeview\" style=\"display: block;\">\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item has-treeview menu-open\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>\n                                    Level 2\n                                    <i class=\"right fas fa-angle-left\"></i>\n                                </p>\n                            </a>\n                            <ul class=\"nav nav-treeview\" style=\"display: block;\">\n                                <li class=\"nav-item\">\n                                    <a href=\"#\" class=\"nav-link\">\n                                        <i class=\"far fa-dot-circle nav-icon\"></i>\n                                        <p>Level 3</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a href=\"#\" class=\"nav-link\">\n                                        <i class=\"far fa-dot-circle nav-icon\"></i>\n                                        <p>Level 3</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a href=\"#\" class=\"nav-link\">\n                                        <i class=\"far fa-dot-circle nav-icon\"></i>\n                                        <p>Level 3</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#\" class=\"nav-link\">\n                        <i class=\"fas fa-circle nav-icon\"></i>\n                        <p>Level 1</p>\n                    </a>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>",
            styles: [""]
        })
    ], NgxGustavguezMainSidebarComponent);
    return NgxGustavguezMainSidebarComponent;
}());

var NgxGustavguezNavComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezNavComponent() {
    }
    //On component init
    NgxGustavguezNavComponent.prototype.ngOnInit = function () {
    };
    NgxGustavguezNavComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-nav',
            template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fas fa-bars\"></i></a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">Men\u00FA de usuario</span>\n                <div class=\"dropdown-divider\"></div>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fas fa-sign-out-alt\"></i> Cerrar sesi\u00F3n\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
            styles: [""]
        })
    ], NgxGustavguezNavComponent);
    return NgxGustavguezNavComponent;
}());

var ApiResponseModel = /** @class */ (function () {
    function ApiResponseModel(data) {
        this.data = data;
    }
    ApiResponseModel.prototype.hasData = function () {
        return (this.data && Object.keys(this.data).length > 0);
    };
    return ApiResponseModel;
}());

var ApiService = /** @class */ (function () {
    //Service constructor
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    //Setters
    ApiService.prototype.setApiURL = function (apiURL) {
        this.apiURL = apiURL;
    };
    ApiService.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
    };
    //Fetch
    ApiService.prototype.fetchData = function (uri, params) {
        //Check cache of observables
        var _this = this;
        //Get options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            }),
            params: params
        };
        //Do request
        return this.httpClient
            .get(this.apiURL + uri, httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Fetch
    ApiService.prototype.getObj = function (uri, id) {
        //Check cache of observables
        var _this = this;
        //Get options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Update an object using PATCH
    ApiService.prototype.partialUpdateObj = function (uri, id, obj) {
        var _this = this;
        //Post options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        var url = this.apiURL + uri + '/' + id;
        //Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Delete an object using DELETE
    ApiService.prototype.deleteObj = function (uri, id) {
        //Post options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        var url = this.apiURL + uri + (id ? '/' + id : '');
        //Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return true;
        }));
    };
    //Create an object with POST
    ApiService.prototype.createObj = function (uri, obj) {
        var _this = this;
        //Post options
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        var url = this.apiURL + uri;
        //check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        //Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        //Map response
        map(function (response) {
            //Return api response model
            return _this.parseResponse(response);
        }));
    };
    //Parse response
    ApiService.prototype.parseResponse = function (response) {
        //Current response
        var resp = new ApiResponseModel();
        //CHECK RESPONSE
        if (response
            && response.data) {
            //Load data
            resp.data = response.data;
        }
        //Return api response model
        return resp;
    };
    ApiService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    ApiService.ɵprov = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(HttpClient)); }, token: ApiService, providedIn: "root" });
    ApiService = __decorate([
        Injectable({
            providedIn: "root"
        })
    ], ApiService);
    return ApiService;
}());

var NgxGustavguezButtonComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezButtonComponent() {
    }
    //On component init
    NgxGustavguezButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], NgxGustavguezButtonComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], NgxGustavguezButtonComponent.prototype, "loadingText", void 0);
    __decorate([
        Input()
    ], NgxGustavguezButtonComponent.prototype, "loading", void 0);
    NgxGustavguezButtonComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-button',
            template: "<button \n    type=\"submit\" \n    class=\"btn btn-primary btn-block\">\n    <span *ngIf=\"!loading\">{{ text }}</span>\n\n    <ngx-gustavguez-loader \n        [loadingText]=\"loadingText\"\n        [loading]=\"loading\"></ngx-gustavguez-loader>\n</button>",
            styles: [""]
        })
    ], NgxGustavguezButtonComponent);
    return NgxGustavguezButtonComponent;
}());

var NgxGustavguezInputHolderComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezInputHolderComponent() {
    }
    //On component init
    NgxGustavguezInputHolderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], NgxGustavguezInputHolderComponent.prototype, "form", void 0);
    __decorate([
        Input()
    ], NgxGustavguezInputHolderComponent.prototype, "controlName", void 0);
    __decorate([
        Input()
    ], NgxGustavguezInputHolderComponent.prototype, "requiredErrorText", void 0);
    NgxGustavguezInputHolderComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-input-holder',
            template: "<div class=\"form-group\">\n    <!-- CONTAINER -->\n    <ng-content></ng-content>\n\n    <!-- VALIDATIONS -->\n    <div class=\"text-danger\" *ngIf=\"form\">\n        <small *ngIf=\"\n                form.get(controlName).touched \n                && form.get(controlName).errors\n                && form.get(controlName).errors.required\">\n            {{ requiredErrorText ? requiredErrorText : \"Este campo es requerido\"  }}\n        </small>\n    </div>\n</div>",
            styles: [""]
        })
    ], NgxGustavguezInputHolderComponent);
    return NgxGustavguezInputHolderComponent;
}());

var NgxGustavguezCoreModule = /** @class */ (function () {
    function NgxGustavguezCoreModule() {
    }
    NgxGustavguezCoreModule = __decorate([
        NgModule({
            declarations: [
                PrettyDatePipe,
                PrettyHourPipe,
                PrettyNumberPipe,
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent,
                NgxGustavguezButtonComponent,
                NgxGustavguezInputHolderComponent,
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
                NgxGustavguezMainContainerDirective,
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule
            ],
            exports: [
                PrettyDatePipe,
                PrettyHourPipe,
                PrettyNumberPipe,
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent,
                NgxGustavguezButtonComponent,
                NgxGustavguezInputHolderComponent,
                NgxGustavguezNavComponent,
                NgxGustavguezMainSidebarComponent,
                NgxGustavguezMainContainerDirective,
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());

//Structure components

/**
 * Generated bundle index. Do not edit.
 */

export { ApiResponseModel, ApiService, ArrayUtility, DateUtility, FormUtility, NgxGustavguezButtonComponent, NgxGustavguezCoreModule, NgxGustavguezInputHolderComponent, NgxGustavguezLoaderComponent, NgxGustavguezMainContainerDirective, NgxGustavguezMainSidebarComponent, NgxGustavguezNavComponent, NgxGustavguezPopupComponent, NumberUtility, PrettyDatePipe, PrettyHourPipe, PrettyNumberPipe, StringUtility };
//# sourceMappingURL=ngx-gustavguez-core.js.map
