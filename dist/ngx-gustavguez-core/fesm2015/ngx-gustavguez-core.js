import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, ɵɵdefineInjectable, Injectable, Pipe, HostBinding, Directive, ɵɵinject, NgModule } from '@angular/core';
import * as momentImported from 'moment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

let NgxGustavguezLoaderComponent = class NgxGustavguezLoaderComponent {
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
        template: "<ng-container *ngIf=\"loading\">\n\t<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n\t<span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n</ng-container>",
        styles: [""]
    })
], NgxGustavguezLoaderComponent);

let NgxGustavguezPopupComponent = class NgxGustavguezPopupComponent {
    constructor() {
        this.onClose = new EventEmitter();
    }
    // Custome events
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
        template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n\t*ngIf=\"state\"\n\t(click)=\"onClosePopup()\"\n    class=\"modal-backdrop fade show\"></div>",
        styles: [""]
    })
], NgxGustavguezPopupComponent);

let NgxGustavguezPageHeaderComponent = class NgxGustavguezPageHeaderComponent {
};
__decorate([
    Input()
], NgxGustavguezPageHeaderComponent.prototype, "text", void 0);
NgxGustavguezPageHeaderComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-page-header',
        template: "<section class=\"content-header\">\n    <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n            <div class=\"col-sm-6\">\n                <h1>{{ text }}</h1>\n            </div>\n        </div>\n    </div><!-- /.container-fluid -->\n</section>",
        styles: [""]
    })
], NgxGustavguezPageHeaderComponent);

let NgxGustavguezCardComponent = class NgxGustavguezCardComponent {
};
__decorate([
    Input()
], NgxGustavguezCardComponent.prototype, "title", void 0);
NgxGustavguezCardComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-card',
        template: "<div class=\"card\">\n    <div class=\"card-header\" *ngIf=\"title\">\n        <h5 class=\"card-title\">{{ title }}</h5>\n    </div>\n\n    <div class=\"card-body\">\n        <ng-content></ng-content>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezCardComponent);

let NgxGustavguezInfoBoxComponent = class NgxGustavguezInfoBoxComponent {
};
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "text", void 0);
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "number", void 0);
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "status", void 0);
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "icon", void 0);
NgxGustavguezInfoBoxComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-info-box',
        template: "<div class=\"info-box\">\n    <span class=\"info-box-icon bg-{{ status }}\">\n        <i class=\"{{ icon }}\"></i>\n    </span>\n\n    <div class=\"info-box-content\">\n        <span class=\"info-box-text\">{{ text }}</span>\n        <span class=\"info-box-number\">{{ number }}</span>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezInfoBoxComponent);

class StringUtility {
    static randomString() {
        return Math.random().toString(36).substring(2, 12);
    }
    static padLeft(val, digits) {
        return val.toString().padStart(digits, '0');
    }
}

class NgxGustavguezToastModel {
    constructor(message, status) {
        this.message = message;
        this.status = status;
        // Generate random id
        this.id = StringUtility.randomString();
    }
}

var NgxGustavguezStatusEnum;
(function (NgxGustavguezStatusEnum) {
    NgxGustavguezStatusEnum["PRIMARY"] = "primary";
    NgxGustavguezStatusEnum["SECONDARY"] = "secondary";
    NgxGustavguezStatusEnum["SUCCESS"] = "success";
    NgxGustavguezStatusEnum["DANGER"] = "danger";
    NgxGustavguezStatusEnum["WARNING"] = "warning";
    NgxGustavguezStatusEnum["INFO"] = "info";
    NgxGustavguezStatusEnum["LIGHT"] = "light";
    NgxGustavguezStatusEnum["DARK"] = "dark";
})(NgxGustavguezStatusEnum || (NgxGustavguezStatusEnum = {}));

let NgxGustavguezToastsService = class NgxGustavguezToastsService {
    constructor() {
        // Event emmiters
        this.onToastAdded = new EventEmitter();
    }
    // Methods
    addError(message) {
        // Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.DANGER));
    }
    addSuccess(message) {
        // Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.SUCCESS));
    }
};
NgxGustavguezToastsService.ɵprov = ɵɵdefineInjectable({ factory: function NgxGustavguezToastsService_Factory() { return new NgxGustavguezToastsService(); }, token: NgxGustavguezToastsService, providedIn: "root" });
NgxGustavguezToastsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NgxGustavguezToastsService);

class ArrayUtility {
    // Suggest current timezone hours
    static find(items, id, callback, compareKey) {
        // Check id key
        const key = compareKey ? compareKey : 'id';
        // Check items
        if (items instanceof Array) {
            let found = false;
            // Found it
            items.every((item, index) => {
                found = item[key] === id;
                if (found) {
                    callback(item, index);
                }
                return !found;
            });
        }
    }
    static each(items, callback) {
        // Array
        if (items instanceof Array) {
            items.forEach((item, index) => {
                callback(item, index);
            });
        }
        else if (items && typeof items === 'object') {
            // Object
            for (const index in items) {
                callback(items[index], index);
            }
        }
    }
    static every(items, callback) {
        if (items instanceof Array) {
            items.every((item, index) => callback(item, index));
        }
    }
    static getDisplayKeys(items, idKey, displayKey) {
        const displayKeys = {};
        // Default keys
        idKey = idKey ? idKey : 'id';
        displayKey = displayKey ? displayKey : 'name';
        // Each
        ArrayUtility.each(items, (obj) => {
            displayKeys[obj[idKey]] = obj[displayKey];
        });
        return displayKeys;
    }
    static getSelectedKeys(items) {
        const selected = [];
        // Iterate
        ArrayUtility.each(items, (val, key) => {
            if (val) {
                selected.push(key);
            }
        });
        return selected;
    }
    static filter(items, callback) {
        let result = [];
        if (items instanceof Array) {
            result = items.filter((item, index) => callback(item, index));
        }
        return result;
    }
    static map(items, callback) {
        let result = [];
        if (items instanceof Array) {
            result = items.map((item, index) => callback(item, index));
        }
        return result;
    }
    static sort(items, compareKey) {
        const result = items.sort((itemA, itemB) => {
            if (itemA[compareKey] < itemB[compareKey]) {
                return -1;
            }
            if (itemA[compareKey] > itemB[compareKey]) {
                return 1;
            }
            return 0;
        });
        return result;
    }
    static hasValue(items) {
        return items instanceof Array && items.length > 0;
    }
}

let NgxGustavguezToastsComponent = class NgxGustavguezToastsComponent {
    // Inject services
    constructor(ngxGustavguezToastsService) {
        this.ngxGustavguezToastsService = ngxGustavguezToastsService;
        // Models
        this.toasts = [];
    }
    // On component init
    ngOnInit() {
        // Watch toast added
        this.ngxGustavguezToastsService.onToastAdded.subscribe((toast) => {
            this.openToast(toast);
        });
    }
    // Custom events
    onCloseToast(toast) {
        this.closeToast(toast);
    }
    // Private methods
    openToast(toast) {
        // Before push create timeout
        toast.timerInstance = setTimeout(() => {
            this.closeToast(toast);
        }, 3000);
        // push
        this.toasts.unshift(toast);
    }
    closeToast(toast) {
        // Check
        if (toast instanceof NgxGustavguezToastModel) {
            ArrayUtility.find(this.toasts, toast.id, (toastFound, index) => {
                // Clear timer instance
                clearTimeout(toastFound.timerInstance);
                // Remove from array
                this.toasts.splice(index, 1);
            });
        }
    }
};
NgxGustavguezToastsComponent.ctorParameters = () => [
    { type: NgxGustavguezToastsService }
];
__decorate([
    Input()
], NgxGustavguezToastsComponent.prototype, "brandTitle", void 0);
NgxGustavguezToastsComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-toasts',
        template: "<div \n    class=\"toasts-top-right fixed mr-2 mt-2\" \n    [style.display]=\" toasts.length ? 'block' : 'none' \">\n    <!-- Then put toasts within -->\n    <div \n        class=\"toast show fade bg-{{ toast.status }}\" \n        *ngFor=\"let toast of toasts; let i = index\">\n        <div class=\"toast-header text-light\">\n\n            <strong class=\"mr-auto\">\n                {{ brandTitle }}\n            </strong>\n\n            <button \n                (click)=\"onCloseToast(toast)\"\n                type=\"button\" \n                class=\"btn btn-link text-light\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"toast-body\">{{ toast.message }}</div>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezToastsComponent);

class NgxGustavguezTableActionArgument {
    // Constructor
    constructor(action, model) {
        this.action = action;
        this.model = model;
    }
}

let NgxGustavguezTableComponent = class NgxGustavguezTableComponent {
    constructor() {
        // Output
        this.onAction = new EventEmitter();
    }
    // Custom events
    onActionClick(action, model) {
        this.onAction.emit(new NgxGustavguezTableActionArgument(action, model));
    }
};
__decorate([
    Input()
], NgxGustavguezTableComponent.prototype, "options", void 0);
__decorate([
    Input()
], NgxGustavguezTableComponent.prototype, "items", void 0);
__decorate([
    Output()
], NgxGustavguezTableComponent.prototype, "onAction", void 0);
NgxGustavguezTableComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-table',
        template: "<table \n\t*ngIf=\"options\" \n\tclass=\"table table-striped table-bordered table-hover text-center table-sm\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th *ngFor=\"let header of options.headers\">{{ header.display }}</th>\n\t\t\t<th *ngIf=\"options.actions && options.actions.length\"></th>\n\t\t</tr>\n\t</thead>\n\t<tbody *ngIf=\"items && items.length\">\n\t\t<tr *ngFor=\"let item of items\">\n\t\t\t<td \n\t\t\t\tclass=\"align-middle\"\n\t\t\t\t*ngFor=\"let field of options.fields\">\n\t\t\t\t{{ item[field] }}\n\t\t\t</td>\n\t\t\t<td \n\t\t\t\tclass=\"align-middle\"\n\t\t\t\t*ngIf=\"options.actions && options.actions.length\">\n\t\t\t\t<ng-container *ngFor=\"let action of options.actions\">\n\t\t\t\t\t<button \n\t\t\t\t\t\t*ngIf=\"action.mustDisplay(item)\"\n\t\t\t\t\t\t[title]=\"action.text\"\n\t\t\t\t\t\t(click)=\"onActionClick(action, item)\"\n\t\t\t\t\t\tclass=\"btn btn-{{ action.status }} ml-1 {{ action.btnClasses }}\">\n\t\t\t\t\t\t<span *ngIf=\"action.icon\"><i [class]=\"action.icon\"></i></span>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t\t\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
        styles: [""]
    })
], NgxGustavguezTableComponent);

class NgxGustavguezTableHeaderModel {
    // Constructor
    constructor(display) {
        this.display = display;
    }
}

class NgxGustavguezTableActionModel {
    // Constructor
    constructor(icon, text, mustDisplayCallback) {
        this.icon = icon;
        this.text = text;
        this.mustDisplayCallback = mustDisplayCallback;
        // By default is primary
        this.status = NgxGustavguezStatusEnum.PRIMARY;
    }
    // Abstract methods
    mustDisplay(model) {
        return this.mustDisplayCallback instanceof Function ? this.mustDisplayCallback(model) : true;
    }
}

class NgxGustavguezTableShowActionModel extends NgxGustavguezTableActionModel {
    constructor(mustDisplayCallback) {
        // Call parent constructor
        super('fas fa-search', 'Show model', mustDisplayCallback);
    }
}

class NgxGustavguezTableOptionsModel {
    // Contructor
    constructor(headers, fields) {
        this.headers = headers;
        this.fields = fields;
        // Default actions
        this.actions = [new NgxGustavguezTableShowActionModel()];
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
        return today.format('YYYY-MM-DD');
    }
    static localeString(date) {
        return date.format('YYYY-MM-DD') + 'T' + date.format('HH:mm');
    }
    static todayAsPrettyString() {
        const today = moment();
        return today.format('DD/MM/YYYY');
    }
    static prettyDate(date, displayHour) {
        const momentDate = moment(date);
        let str = momentDate.format('DD/MM/YYYY');
        if (displayHour) {
            str += ' ' + DateUtility.prettyHour(date);
        }
        return str;
    }
    static prettyHour(date) {
        const momentDate = moment(date);
        return momentDate.format('HH:mm');
    }
}

class FormUtility {
    /**
     * Returns a form data object
     * @param json
     */
    static jsonToFormData(json) {
        const fd = new FormData();
        for (const key in json) {
            if (json[key] instanceof Array) {
                json[key].forEach((jsonChild, index) => {
                    fd.append(key + '[' + index + ']', jsonChild);
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
        for (const key in json) {
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
        Object.keys(formGroup.controls).forEach((field) => {
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
    static valid(val) {
        return !isNaN(Number(val));
    }
}

class WindowUtility {
    static isSmallScreen() {
        return window.innerWidth < 768;
    }
    static isNotSmallScreen() {
        return window.innerWidth >= 768;
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
    transform(value) {
        return DateUtility.prettyHour(value);
    }
};
PrettyHourPipe = __decorate([
    Pipe({
        name: 'prettyHour'
    })
], PrettyHourPipe);

let PrettyNumberPipe = class PrettyNumberPipe {
    transform(value) {
        return NumberUtility.valid(value) ? NumberUtility.format(value) : '0';
    }
};
PrettyNumberPipe = __decorate([
    Pipe({
        name: 'prettyNumber'
    })
], PrettyNumberPipe);

let NgxGustavguezMainSidebarService = class NgxGustavguezMainSidebarService {
    constructor() {
        // Properties
        this.onChangeState = new EventEmitter();
        this.onToggleState = new EventEmitter();
    }
    // Public methods
    changeState(state) {
        this.onChangeState.emit(state);
    }
    toggleState() {
        this.onToggleState.emit();
    }
};
NgxGustavguezMainSidebarService.ɵprov = ɵɵdefineInjectable({ factory: function NgxGustavguezMainSidebarService_Factory() { return new NgxGustavguezMainSidebarService(); }, token: NgxGustavguezMainSidebarService, providedIn: "root" });
NgxGustavguezMainSidebarService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxGustavguezMainSidebarService);

let NgxGustavguezMainContainerDirective = class NgxGustavguezMainContainerDirective {
    // Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Modes
        this.classes = [
            'sidebar-mini',
            'layout-fixed',
            'layout-navbar-fixed'
        ];
    }
    // On component init
    ngOnInit() {
        // Set base classes to host classes
        this.loadHostClasses(false);
        // Watch sidebarState change
        this.ngxGustavguezMainSidebarService.onChangeState.subscribe((state) => {
            this.loadHostClasses(state);
        });
        this.ngxGustavguezMainSidebarService.onToggleState.subscribe(() => {
            this.loadHostClasses(!this.state);
        });
    }
    // Private helper methods
    loadHostClasses(state) {
        // Control index just for control
        const indexClassCollapse = this.classes.indexOf('sidebar-collapse');
        const indexClassOpen = this.classes.indexOf('sidebar-open');
        // Load state
        this.state = state;
        // Check state
        if (state) {
            this.classes.push('sidebar-open');
            this.classes.push('sidebar-collapse');
        }
        else {
            if (indexClassCollapse > -1) {
                this.classes.splice(indexClassCollapse, 1);
            }
            if (indexClassOpen > -1) {
                this.classes.splice(indexClassOpen, 1);
            }
        }
        // Load classes
        this.hostClasses = this.classes.join(' ');
    }
};
NgxGustavguezMainContainerDirective.ctorParameters = () => [
    { type: NgxGustavguezMainSidebarService }
];
__decorate([
    HostBinding('class')
], NgxGustavguezMainContainerDirective.prototype, "hostClasses", void 0);
NgxGustavguezMainContainerDirective = __decorate([
    Directive({
        selector: '[ngxGustavguezMainContainer]'
    })
], NgxGustavguezMainContainerDirective);

let NgxGustavguezMainSidebarComponent = class NgxGustavguezMainSidebarComponent {
    // Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Outputs
        this.onBrandLink = new EventEmitter();
    }
    // On component init
    ngOnInit() {
        // Init vars
        this.menuItemsStates = {};
    }
    // Custom events
    onMenuItemClick(menuItem) {
        // Check
        if (ArrayUtility.hasValue(menuItem.childs)) {
            // Toggle state
            this.menuItemsStates[menuItem.id] = menuItem.id in this.menuItemsStates ? !this.menuItemsStates[menuItem.id] : false;
        }
        else {
            // Close sidebar
            this.ngxGustavguezMainSidebarService.changeState(false);
        }
    }
    onBrandLinkClick(event) {
        event.preventDefault();
        // Close sidebar
        this.ngxGustavguezMainSidebarService.changeState(false);
        // Event emitter
        this.onBrandLink.emit();
    }
    onCloseSidebar() {
        this.ngxGustavguezMainSidebarService.changeState(false);
    }
};
NgxGustavguezMainSidebarComponent.ctorParameters = () => [
    { type: NgxGustavguezMainSidebarService }
];
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "brandTitle", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "brandImg", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "userIsLogged", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "userAvatar", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "userName", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "menuItems", void 0);
__decorate([
    Output()
], NgxGustavguezMainSidebarComponent.prototype, "onBrandLink", void 0);
NgxGustavguezMainSidebarComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-main-sidebar',
        template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLinkClick($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    class=\"nav-item has-treeview\"\n                    ngxGustavguezNavItem\n                    [navItem]=\"menuItem\" \n                    [isParent]=\"true\"\n                    [state]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    (onNavItem)=\"onMenuItemClick($event)\"\n                    *ngFor=\"let menuItem of menuItems\"></li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
        styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
    })
], NgxGustavguezMainSidebarComponent);

let NgxGustavguezNavComponent = class NgxGustavguezNavComponent {
    // Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Outputs
        this.onLogout = new EventEmitter();
        this.onBrand = new EventEmitter();
    }
    // Custom events
    onToggleMenu(event) {
        event.preventDefault();
        this.ngxGustavguezMainSidebarService.toggleState();
    }
    onToggleUserMenu(event) {
        event.preventDefault();
        this.userMenuState = !this.userMenuState;
    }
    onLogoutClick(event) {
        event.preventDefault();
        // Emit logout
        this.onLogout.emit();
        // Close user menu
        this.userMenuState = false;
    }
    onBrandLink(event) {
        event.preventDefault();
        this.onBrand.emit();
    }
};
NgxGustavguezNavComponent.ctorParameters = () => [
    { type: NgxGustavguezMainSidebarService }
];
__decorate([
    Input()
], NgxGustavguezNavComponent.prototype, "brandTitle", void 0);
__decorate([
    Input()
], NgxGustavguezNavComponent.prototype, "userIsLogged", void 0);
__decorate([
    Input()
], NgxGustavguezNavComponent.prototype, "userMenuText", void 0);
__decorate([
    Input()
], NgxGustavguezNavComponent.prototype, "userMenuLogoutText", void 0);
__decorate([
    Output()
], NgxGustavguezNavComponent.prototype, "onLogout", void 0);
__decorate([
    Output()
], NgxGustavguezNavComponent.prototype, "onBrand", void 0);
NgxGustavguezNavComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-nav',
        template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a  \n                href=\"#\"\n                (click)=\"onToggleMenu($event)\"\n                class=\"nav-link\" \n                data-widget=\"pushmenu\">\n                <i class=\"fas fa-bars\"></i>\n            </a>\n        </li>\n        <li class=\"nav-item d-lg-none\" *ngIf=\"brandTitle\">\n            <a \n                href=\"#\" \n                class=\"nav-link\"\n                (click)=\"onBrandLink($event)\">\n                {{ brandTitle }}\n            </a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"userIsLogged\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n\n            <a \n                href=\"#\"\n                (click)=\"onToggleUserMenu($event)\"\n                class=\"nav-link\" \n                data-toggle=\"dropdown\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div \n                [class.show]=\"userMenuState\"\n                class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">{{ userMenuText ? userMenuText : \"Men\u00FA de usuario\" }}</span>\n                <div class=\"dropdown-divider\"></div>\n                <a \n                    href=\"#\"\n                    class=\"dropdown-item\" \n                    (click)=\"onLogoutClick($event)\">\n                    <i class=\"fas fa-sign-out-alt\"></i> {{ userMenuLogoutText ? userMenuLogoutText : \"Cerrar sesi\u00F3n\" }}\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
        styles: [""]
    })
], NgxGustavguezNavComponent);

class NgxGustavguezNavItemModel {
    constructor(display, icon, action, childs) {
        this.display = display;
        this.icon = icon;
        this.action = action;
        this.childs = childs;
        this.id = StringUtility.randomString();
        this.isLink = !ArrayUtility.hasValue(childs);
    }
}

let NgxGustavguezNavItemComponent = class NgxGustavguezNavItemComponent {
    constructor() {
        this.onNavItem = new EventEmitter();
    }
    // Custome events
    onNavItemClick(event) {
        event.preventDefault();
        this.onNavItem.emit(this.navItem);
    }
    onNavItemChild(child) {
        this.onNavItem.emit(child);
    }
};
__decorate([
    Input()
], NgxGustavguezNavItemComponent.prototype, "navItem", void 0);
__decorate([
    Input()
], NgxGustavguezNavItemComponent.prototype, "isParent", void 0);
__decorate([
    Input()
], NgxGustavguezNavItemComponent.prototype, "state", void 0);
__decorate([
    Output()
], NgxGustavguezNavItemComponent.prototype, "onNavItem", void 0);
NgxGustavguezNavItemComponent = __decorate([
    Component({
        selector: '[ngxGustavguezNavItem]',
        template: "<a \n    *ngIf=\"navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    [routerLink]=\"navItem.action\"\n    routerLinkActive=\"active\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<a \n    *ngIf=\"!navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<ng-container *ngIf=\"navItem.childs\">\n    <ul \n        [style.display]=\"state ? 'block' : 'none'\"\n        class=\"nav nav-treeview\">\n        <li \n            class=\"nav-item\"\n            ngxGustavguezNavItem\n            (onNavItem)=\"onNavItemChild($event)\"\n            [navItem]=\"child\"\n            *ngFor=\"let child of navItem.childs\"></li>\n    </ul>\n</ng-container>",
        styles: [""]
    })
], NgxGustavguezNavItemComponent);

class ApiRootResponseStrategyModel {
    getName() {
        return 'root';
    }
    parseJSON(json) {
        // Init data
        let data = null;
        // Check key data in json
        if (json) {
            data = json;
        }
        return data;
    }
}

class ApiDataResponseStrategyModel {
    getName() {
        return 'data';
    }
    parseJSON(json) {
        // Init data
        let data = null;
        // Check key data in json
        if (json && json.data) {
            data = json.data;
        }
        return data;
    }
}

class ApiResponseModel {
    constructor(data) {
        this.data = data;
    }
    hasSingreResult() {
        return this.data && this.data.id;
    }
    hasCollectionResult() {
        return ArrayUtility.hasValue(this.data);
    }
}

let ApiService = class ApiService {
    // Service constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
        // Load data strategy by default
        this.apiResponseStrategies = [
            new ApiDataResponseStrategyModel(),
            new ApiRootResponseStrategyModel()
        ];
        // Set as active
        this.activeApiResponseStrategy = this.apiResponseStrategies[0];
    }
    // Setters
    setApiURL(apiURL) {
        this.apiURL = apiURL;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    // Add strategy method
    addApiResponseStrategy(strategy) {
        if (strategy.getName()) {
            this.apiResponseStrategies.push(strategy);
        }
    }
    // Change active strategy
    changeApiResponseStrategy(strategyName) {
        let hasChanged = false;
        // Check current are equal
        if (this.activeApiResponseStrategy.getName() === strategyName) {
            return hasChanged;
        }
        // Find strategy
        ArrayUtility.every(this.apiResponseStrategies, (strategy) => {
            // Check name
            if (strategy.getName() === strategyName) {
                // Save previous
                this.previousApiResponseStrategy = this.activeApiResponseStrategy;
                // Load new stategy
                this.activeApiResponseStrategy = strategy;
                // Mark has changed
                hasChanged = true;
            }
            return !hasChanged;
        });
        return hasChanged;
    }
    // Restore prev active stategy
    restoreApiResponseStrategy() {
        // Check prev are not empty and is different
        if (this.previousApiResponseStrategy !== undefined
            && this.previousApiResponseStrategy.getName() !== this.activeApiResponseStrategy.getName()) {
            this.activeApiResponseStrategy = this.previousApiResponseStrategy;
        }
    }
    // Fetch
    fetchData(uri, params) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            }),
            params: params
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Fetch
    getObj(uri, id) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Update an object using PATCH
    partialUpdateObj(uri, id, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + '/' + id;
        // Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Delete an object using DELETE
    deleteObj(uri, id) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + (id ? '/' + id : '');
        // Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        // Map response
        map(() => true));
    }
    // Create an object with POST
    createObj(uri, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri;
        // Check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        // Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Parse response
    parseResponse(response) {
        // Current response
        const resp = new ApiResponseModel();
        // CHECK RESPONSE
        resp.data = this.activeApiResponseStrategy.parseJSON(response);
        // Return api response model
        return resp;
    }
};
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
ApiService.ɵprov = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(HttpClient)); }, token: ApiService, providedIn: "root" });
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);

let NgxGustavguezButtonComponent = class NgxGustavguezButtonComponent {
    constructor() {
        // Output
        this.onClick = new EventEmitter();
    }
    // Custom events
    onDoClick() {
        this.onClick.emit();
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
__decorate([
    Input()
], NgxGustavguezButtonComponent.prototype, "status", void 0);
__decorate([
    Output()
], NgxGustavguezButtonComponent.prototype, "onClick", void 0);
NgxGustavguezButtonComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-button',
        template: "<button \n    type=\"button\" \n\tclass=\"btn btn-{{ status ? status : 'primary' }} btn-block\"\n\t(click)=\"onDoClick()\">\n    <span *ngIf=\"!loading\">{{ text }}</span>\n\n    <ngx-gustavguez-loader \n        [loadingText]=\"loadingText\"\n        [loading]=\"loading\"></ngx-gustavguez-loader>\n</button>",
        styles: [""]
    })
], NgxGustavguezButtonComponent);

let NgxGustavguezSubmitComponent = class NgxGustavguezSubmitComponent {
    constructor() {
        // Output
        this.onClick = new EventEmitter();
    }
    // Custom events
    onDoClick() {
        this.onClick.emit();
    }
};
__decorate([
    Input()
], NgxGustavguezSubmitComponent.prototype, "text", void 0);
__decorate([
    Input()
], NgxGustavguezSubmitComponent.prototype, "loadingText", void 0);
__decorate([
    Input()
], NgxGustavguezSubmitComponent.prototype, "loading", void 0);
__decorate([
    Input()
], NgxGustavguezSubmitComponent.prototype, "status", void 0);
__decorate([
    Output()
], NgxGustavguezSubmitComponent.prototype, "onClick", void 0);
NgxGustavguezSubmitComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-submit',
        template: "<div class=\"input-group\">\n\t<button \n\t\ttype=\"submit\" \n\t\tclass=\"btn btn-{{ status ? status : 'primary' }} btn-block\"\n\t\t(click)=\"onDoClick()\">\n\t\t<span *ngIf=\"!loading\">{{ text }}</span>\n\n\t\t<ngx-gustavguez-loader \n\t\t\t[loadingText]=\"loadingText\"\n\t\t\t[loading]=\"loading\"></ngx-gustavguez-loader>\n\t</button>\n</div>",
        styles: [""]
    })
], NgxGustavguezSubmitComponent);

let NgxGustavguezInputHolderComponent = class NgxGustavguezInputHolderComponent {
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
        host: { class: 'w-100' },
        styles: [""]
    })
], NgxGustavguezInputHolderComponent);

let NgxGustavguezInputComponent = class NgxGustavguezInputComponent {
    constructor() {
        // Outputs
        this.onChange = new EventEmitter();
    }
    // Custom events
    onEmitChange() {
        this.onChange.emit(this.form.get(this.controlName).value);
    }
};
__decorate([
    Input()
], NgxGustavguezInputComponent.prototype, "form", void 0);
__decorate([
    Input()
], NgxGustavguezInputComponent.prototype, "label", void 0);
__decorate([
    Input()
], NgxGustavguezInputComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], NgxGustavguezInputComponent.prototype, "controlId", void 0);
__decorate([
    Input()
], NgxGustavguezInputComponent.prototype, "controlName", void 0);
__decorate([
    Input()
], NgxGustavguezInputComponent.prototype, "type", void 0);
__decorate([
    Input()
], NgxGustavguezInputComponent.prototype, "requiredErrorText", void 0);
__decorate([
    Output()
], NgxGustavguezInputComponent.prototype, "onChange", void 0);
NgxGustavguezInputComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-input',
        template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<input \n\t\t\tclass=\"form-control\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[type]=\"type\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[formControlName]=\"controlName\">\n\t</ngx-gustavguez-input-holder>\n</div>",
        styles: [""]
    })
], NgxGustavguezInputComponent);

let NgxGustavguezTextareaComponent = class NgxGustavguezTextareaComponent {
    constructor() {
        // Outputs
        this.onChange = new EventEmitter();
    }
    // Custom events
    onEmitChange() {
        this.onChange.emit(this.form.get(this.controlName).value);
    }
};
__decorate([
    Input()
], NgxGustavguezTextareaComponent.prototype, "form", void 0);
__decorate([
    Input()
], NgxGustavguezTextareaComponent.prototype, "label", void 0);
__decorate([
    Input()
], NgxGustavguezTextareaComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], NgxGustavguezTextareaComponent.prototype, "controlId", void 0);
__decorate([
    Input()
], NgxGustavguezTextareaComponent.prototype, "controlName", void 0);
__decorate([
    Input()
], NgxGustavguezTextareaComponent.prototype, "requiredErrorText", void 0);
__decorate([
    Output()
], NgxGustavguezTextareaComponent.prototype, "onChange", void 0);
NgxGustavguezTextareaComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-textarea',
        template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<textarea \n\t\t\tclass=\"form-control\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[formControlName]=\"controlName\"></textarea>\n\t</ngx-gustavguez-input-holder>\n</div>",
        styles: [""]
    })
], NgxGustavguezTextareaComponent);

let NgxGustavguezSelectComponent = class NgxGustavguezSelectComponent {
    constructor() {
        // Outputs
        this.onChange = new EventEmitter();
    }
    // Custom events
    onEmitChange() {
        this.onChange.emit(this.form.get(this.controlName).value);
    }
};
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "form", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "label", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "controlId", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "controlName", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "requiredErrorText", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "options", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "optionId", void 0);
__decorate([
    Input()
], NgxGustavguezSelectComponent.prototype, "optionLabel", void 0);
__decorate([
    Output()
], NgxGustavguezSelectComponent.prototype, "onChange", void 0);
NgxGustavguezSelectComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-select',
        template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<select \n\t\t\tclass=\"custom-select\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[formControlName]=\"controlName\">\n\t\t\t<option \n\t\t\t\t[value]=\"null\" \n\t\t\t\tdisabled \n\t\t\t\tselected>{{ placeholder }}</option>\n\t\t\t<option \n\t\t\t\t*ngFor=\"let option of options\"\n\t\t\t\t[value]=\"option[optionId]\">{{ option[optionLabel] }}</option>\n\t\t</select>\n\t</ngx-gustavguez-input-holder>\n</div>",
        styles: [""]
    })
], NgxGustavguezSelectComponent);

let NgxGustavguezTagsComponent = class NgxGustavguezTagsComponent {
    constructor() {
        // Outputs
        this.onSelect = new EventEmitter();
    }
    // Custom events
    onEmitSelect(option) {
        this.onSelect.emit(option);
    }
};
__decorate([
    Input()
], NgxGustavguezTagsComponent.prototype, "options", void 0);
__decorate([
    Input()
], NgxGustavguezTagsComponent.prototype, "optionLabel", void 0);
__decorate([
    Output()
], NgxGustavguezTagsComponent.prototype, "onSelect", void 0);
NgxGustavguezTagsComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-tags',
        template: "<div class=\"input-group pb-2\">\n\t<button \n\t\ttype=\"button\" \n\t\tclass=\"btn btn-danger btn-sm ml-1\"\n\t\t(click)=\"onEmitSelect(option)\"\n\t\t*ngFor=\"let option of options\">\n\t\t{{ option[optionLabel] }}\n\t</button>\n</div>",
        styles: [""]
    })
], NgxGustavguezTagsComponent);

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
            NgxGustavguezNavComponent,
            NgxGustavguezMainSidebarComponent,
            NgxGustavguezMainContainerDirective,
            NgxGustavguezPageHeaderComponent,
            NgxGustavguezInfoBoxComponent,
            NgxGustavguezCardComponent,
            NgxGustavguezToastsComponent,
            NgxGustavguezNavItemComponent,
            NgxGustavguezTableComponent,
            NgxGustavguezSubmitComponent,
            NgxGustavguezInputComponent,
            NgxGustavguezTextareaComponent,
            NgxGustavguezSelectComponent,
            NgxGustavguezTagsComponent,
        ],
        imports: [
            CommonModule,
            RouterModule,
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
            NgxGustavguezPageHeaderComponent,
            NgxGustavguezInfoBoxComponent,
            NgxGustavguezCardComponent,
            NgxGustavguezToastsComponent,
            NgxGustavguezNavItemComponent,
            NgxGustavguezTableComponent,
            NgxGustavguezInputComponent,
            NgxGustavguezSubmitComponent,
            NgxGustavguezTextareaComponent,
            NgxGustavguezSelectComponent,
            NgxGustavguezTagsComponent
        ]
    })
], NgxGustavguezCoreModule);

// Structure components

/**
 * Generated bundle index. Do not edit.
 */

export { ApiDataResponseStrategyModel, ApiResponseModel, ApiRootResponseStrategyModel, ApiService, ArrayUtility, DateUtility, FormUtility, NgxGustavguezButtonComponent, NgxGustavguezCardComponent, NgxGustavguezCoreModule, NgxGustavguezInfoBoxComponent, NgxGustavguezInputComponent, NgxGustavguezInputHolderComponent, NgxGustavguezLoaderComponent, NgxGustavguezMainContainerDirective, NgxGustavguezMainSidebarComponent, NgxGustavguezMainSidebarService, NgxGustavguezNavComponent, NgxGustavguezNavItemComponent, NgxGustavguezNavItemModel, NgxGustavguezPageHeaderComponent, NgxGustavguezPopupComponent, NgxGustavguezSelectComponent, NgxGustavguezStatusEnum, NgxGustavguezSubmitComponent, NgxGustavguezTableActionArgument, NgxGustavguezTableActionModel, NgxGustavguezTableComponent, NgxGustavguezTableHeaderModel, NgxGustavguezTableOptionsModel, NgxGustavguezTableShowActionModel, NgxGustavguezTagsComponent, NgxGustavguezTextareaComponent, NgxGustavguezToastModel, NgxGustavguezToastsComponent, NgxGustavguezToastsService, NumberUtility, PrettyDatePipe, PrettyHourPipe, PrettyNumberPipe, StringUtility, WindowUtility };
//# sourceMappingURL=ngx-gustavguez-core.js.map
