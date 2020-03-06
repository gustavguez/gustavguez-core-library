import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, Pipe, ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
import * as momentImported from 'moment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

let NgxGustavguezLoaderComponent = class NgxGustavguezLoaderComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
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

let NgxGustavguezPopupComponent = class NgxGustavguezPopupComponent {
    //Inject services
    constructor() {
        this.onClose = new EventEmitter();
    }
    //On component init
    ngOnInit() {
    }
    //Custome events
    onClosePopup() {
        this.onClose.emit();
    }
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

class ArrayUtility {
    //Suggest current timezone hours
    static find(items, id, callback, compareKey) {
        //Check id key
        const key = compareKey ? compareKey : 'id';
        //Check items
        if (items instanceof Array) {
            let found = false;
            //Found it
            items.every((item, index) => {
                found = item[key] == id;
                if (found) {
                    callback(item, index);
                }
                return !found;
            });
        }
    }
    static each(items, callback) {
        //Array
        if (items instanceof Array) {
            items.forEach((item, index) => {
                callback(item, index);
            });
        }
        else if (items && (typeof items === 'object')) {
            //Object
            for (let index in items) {
                callback(items[index], index);
            }
        }
    }
    static every(items, callback) {
        if (items instanceof Array) {
            items.every((item, index) => {
                return callback(item, index);
            });
        }
    }
    static getDisplayKeys(items, idKey, displayKey) {
        let displayKeys = {};
        //Default keys
        idKey = idKey ? idKey : 'id';
        displayKey = displayKey ? displayKey : 'name';
        //Each
        ArrayUtility.each(items, (obj) => {
            displayKeys[obj[idKey]] = obj[displayKey];
        });
        return displayKeys;
    }
    static getSelectedKeys(items) {
        let selected = [];
        //Iterate
        ArrayUtility.each(items, (val, key) => {
            if (val)
                selected.push(key);
        });
        return selected;
    }
    static filter(items, callback) {
        if (items instanceof Array) {
            let result = items.filter((item, index) => {
                return callback(item, index);
            });
            return result;
        }
    }
    static map(items, callback) {
        let result = [];
        if (items instanceof Array) {
            result = items.map((item, index) => {
                return callback(item, index);
            });
        }
        return result;
    }
    static sort(items, compareKey) {
        let result = items.sort((a, b) => {
            if (a[compareKey] < b[compareKey])
                return -1;
            if (a[compareKey] > b[compareKey])
                return 1;
            return 0;
        });
        return result;
    }
    static hasValue(items) {
        return (items instanceof Array && items.length > 0);
    }
}

const moment = momentImported;
class DateUtility {
    static todayLocaleString() {
        const today = moment();
        return DateUtility.localeString(today);
    }
    static todayDateString() {
        const today = moment();
        return today.format("YYYY-MM-DD");
    }
    static localeString(date) {
        return date.format("YYYY-MM-DD") + "T" + date.format("HH:mm");
    }
    static todayAsPrettyString() {
        const today = moment();
        return today.format("DD/MM/YYYY");
    }
    static prettyDate(date, displayHour) {
        const d = moment(date);
        let str = d.format("DD/MM/YYYY");
        if (displayHour) {
            str += " " + DateUtility.prettyHour(date);
        }
        return str;
    }
    static prettyHour(date) {
        const d = moment(date);
        return d.format("HH:mm");
    }
}

class FormUtility {
    /**
     * Returns a form data object
     * @param json
     */
    static jsonToFormData(json) {
        let fd = new FormData();
        for (let key in json) {
            if (json[key] instanceof Array) {
                json[key].forEach((j, index) => {
                    fd.append(key + '[' + index + ']', j);
                });
            }
            else {
                fd.append(key, json[key]);
            }
        }
        return fd;
    }
    /**
     * Find an Blob or File object in json
     * @param json
     */
    static needFormData(json) {
        let need = false;
        for (let key in json) {
            if (json[key] instanceof File || json[key] instanceof Blob) {
                need = true;
                break;
            }
        }
        return need;
    }
    /**
     * Trigger form validations
     * @param formGroup
     */
    static validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}

class NumberUtility {
    static format(val) {
        const valStr = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return valStr.substring(0, valStr.length - 3);
    }
}

class StringUtility {
    static randomString() {
        return Math.random().toString(36).substring(2, 12);
    }
    static padLeft(val, digits) {
        return val.toString().padStart(digits, "0");
    }
}

let PrettyDatePipe = class PrettyDatePipe {
    transform(value, ...args) {
        return DateUtility.prettyDate(value, args.length ? args[0] : true);
    }
};
PrettyDatePipe = __decorate([
    Pipe({
        name: 'prettyDate'
    })
], PrettyDatePipe);

let PrettyHourPipe = class PrettyHourPipe {
    transform(value, ...args) {
        return DateUtility.prettyHour(value);
    }
};
PrettyHourPipe = __decorate([
    Pipe({
        name: 'prettyHour'
    })
], PrettyHourPipe);

let PrettyNumberPipe = class PrettyNumberPipe {
    transform(value, ...args) {
        return value ? NumberUtility.format(value) : '';
    }
};
PrettyNumberPipe = __decorate([
    Pipe({
        name: 'prettyNumber'
    })
], PrettyNumberPipe);

let NgxGustavguezMainContainerComponent = class NgxGustavguezMainContainerComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
};
NgxGustavguezMainContainerComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-main-container',
        template: "<div class=\"sidebar-mini layout-fixed layout-navbar-fixed\">\n    \n</div>",
        styles: [""]
    })
], NgxGustavguezMainContainerComponent);

let NgxGustavguezMainSidebarComponent = class NgxGustavguezMainSidebarComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
};
NgxGustavguezMainSidebarComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-main-sidebar',
        template: "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a href=\"#\" class=\"brand-link\">\n        <img src=\"../assets/images/logo.png\" alt=\"AdminLTE Logo\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">Mis Finanzas</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img src=\"http://api.gustavorodriguez.com.uy/uploads/images/avatar_gus.jpeg\"\n                    class=\"img-circle elevation-2\" alt=\"User Image\">\n            </div>\n            <div class=\"info\">\n                <a href=\"#\" class=\"d-block\">Gustavo Rodriguez</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\"\n                data-accordion=\"false\">\n\n                <li class=\"nav-header\">MULTI LEVEL EXAMPLE</li>\n                <li class=\"nav-item\">\n                    <a href=\"#\" class=\"nav-link\">\n                        <i class=\"fas fa-circle nav-icon\"></i>\n                        <p>Level 1</p>\n                    </a>\n                </li>\n                <li class=\"nav-item has-treeview menu-open\">\n                    <a href=\"#\" class=\"nav-link\">\n                        <i class=\"nav-icon fas fa-circle\"></i>\n                        <p>\n                            Level 1\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n                    <ul class=\"nav nav-treeview\" style=\"display: block;\">\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item has-treeview menu-open\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>\n                                    Level 2\n                                    <i class=\"right fas fa-angle-left\"></i>\n                                </p>\n                            </a>\n                            <ul class=\"nav nav-treeview\" style=\"display: block;\">\n                                <li class=\"nav-item\">\n                                    <a href=\"#\" class=\"nav-link\">\n                                        <i class=\"far fa-dot-circle nav-icon\"></i>\n                                        <p>Level 3</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a href=\"#\" class=\"nav-link\">\n                                        <i class=\"far fa-dot-circle nav-icon\"></i>\n                                        <p>Level 3</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a href=\"#\" class=\"nav-link\">\n                                        <i class=\"far fa-dot-circle nav-icon\"></i>\n                                        <p>Level 3</p>\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"#\" class=\"nav-link\">\n                        <i class=\"fas fa-circle nav-icon\"></i>\n                        <p>Level 1</p>\n                    </a>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>",
        styles: [""]
    })
], NgxGustavguezMainSidebarComponent);

let NgxGustavguezNavComponent = class NgxGustavguezNavComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
};
NgxGustavguezNavComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-nav',
        template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fas fa-bars\"></i></a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">Men\u00FA de usuario</span>\n                <div class=\"dropdown-divider\"></div>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fas fa-sign-out-alt\"></i> Cerrar sesi\u00F3n\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
        styles: [""]
    })
], NgxGustavguezNavComponent);

class ApiResponseModel {
    constructor(data) {
        this.data = data;
    }
    hasData() {
        return (this.data && Object.keys(this.data).length > 0);
    }
}

let ApiService = class ApiService {
    //Service constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Setters
    setApiURL(apiURL) {
        this.apiURL = apiURL;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    //Fetch
    fetchData(uri, params) {
        //Check cache of observables
        //Get options
        const httpOptions = {
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
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Fetch
    getObj(uri, id) {
        //Check cache of observables
        //Get options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Update an object using PATCH
    partialUpdateObj(uri, id, obj) {
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        const url = this.apiURL + uri + '/' + id;
        //Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Delete an object using DELETE
    deleteObj(uri, id) {
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        const url = this.apiURL + uri + (id ? '/' + id : '');
        //Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return true;
        }));
    }
    //Create an object with POST
    createObj(uri, obj) {
        //Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        //Url
        const url = this.apiURL + uri;
        //check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        //Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        //Map response
        map((response) => {
            //Return api response model
            return this.parseResponse(response);
        }));
    }
    //Parse response
    parseResponse(response) {
        //Current response
        let resp = new ApiResponseModel();
        //CHECK RESPONSE
        if (response
            && response.data) {
            //Load data
            resp.data = response.data;
        }
        //Return api response model
        return resp;
    }
};
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
ApiService.ɵprov = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(HttpClient)); }, token: ApiService, providedIn: "root" });
ApiService = __decorate([
    Injectable({
        providedIn: "root"
    })
], ApiService);

let NgxGustavguezButtonComponent = class NgxGustavguezButtonComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
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

let NgxGustavguezInputHolderComponent = class NgxGustavguezInputHolderComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
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

let NgxGustavguezCoreModule = class NgxGustavguezCoreModule {
};
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
            NgxGustavguezMainContainerComponent,
            NgxGustavguezNavComponent,
            NgxGustavguezMainSidebarComponent,
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
            NgxGustavguezMainContainerComponent,
            NgxGustavguezNavComponent,
            NgxGustavguezMainSidebarComponent,
        ]
    })
], NgxGustavguezCoreModule);

//Structure components

/**
 * Generated bundle index. Do not edit.
 */

export { ApiResponseModel, ApiService, ArrayUtility, DateUtility, FormUtility, NgxGustavguezButtonComponent, NgxGustavguezCoreModule, NgxGustavguezInputHolderComponent, NgxGustavguezLoaderComponent, NgxGustavguezMainContainerComponent, NgxGustavguezMainSidebarComponent, NgxGustavguezNavComponent, NgxGustavguezPopupComponent, NumberUtility, PrettyDatePipe, PrettyHourPipe, PrettyNumberPipe, StringUtility };
//# sourceMappingURL=ngx-gustavguez-core.js.map
