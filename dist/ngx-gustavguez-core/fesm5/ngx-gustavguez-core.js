import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, ɵɵdefineInjectable, Injectable, Pipe, HostBinding, Directive, ɵɵinject, NgModule } from '@angular/core';
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

var NgxGustavguezPageHeaderComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezPageHeaderComponent() {
    }
    //On component init
    NgxGustavguezPageHeaderComponent.prototype.ngOnInit = function () {
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
    return NgxGustavguezPageHeaderComponent;
}());

var NgxGustavguezCardComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezCardComponent() {
    }
    //On component init
    NgxGustavguezCardComponent.prototype.ngOnInit = function () {
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
    return NgxGustavguezCardComponent;
}());

var NgxGustavguezInfoBoxComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezInfoBoxComponent() {
    }
    //On component init
    NgxGustavguezInfoBoxComponent.prototype.ngOnInit = function () {
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
    return NgxGustavguezInfoBoxComponent;
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

var NgxGustavguezToastModel = /** @class */ (function () {
    function NgxGustavguezToastModel(message, status) {
        this.message = message;
        this.status = status;
        //Generate random id
        this.id = StringUtility.randomString();
    }
    return NgxGustavguezToastModel;
}());

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

var NgxGustavguezToastsService = /** @class */ (function () {
    //Inject service
    function NgxGustavguezToastsService() {
        //Event emmiters
        this.onToastAdded = new EventEmitter();
    }
    //Methods
    NgxGustavguezToastsService.prototype.addError = function (message) {
        //Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.DANGER));
    };
    NgxGustavguezToastsService.prototype.addSuccess = function (message) {
        //Open toast
        this.onToastAdded.emit(new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.SUCCESS));
    };
    NgxGustavguezToastsService.ɵprov = ɵɵdefineInjectable({ factory: function NgxGustavguezToastsService_Factory() { return new NgxGustavguezToastsService(); }, token: NgxGustavguezToastsService, providedIn: "root" });
    NgxGustavguezToastsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NgxGustavguezToastsService);
    return NgxGustavguezToastsService;
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

var NgxGustavguezToastsComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezToastsComponent(ngxGustavguezToastsService) {
        this.ngxGustavguezToastsService = ngxGustavguezToastsService;
        //Models
        this.toasts = [];
    }
    //On component init
    NgxGustavguezToastsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Watch toast added
        this.ngxGustavguezToastsService.onToastAdded.subscribe(function (toast) {
            _this.openToast(toast);
        });
    };
    //Custom events
    NgxGustavguezToastsComponent.prototype.onCloseToast = function (toast) {
        this.closeToast(toast);
    };
    //Private methods
    NgxGustavguezToastsComponent.prototype.openToast = function (toast) {
        var _this = this;
        //Before push create timeout
        toast.timerInstance = setTimeout(function () {
            _this.closeToast(toast);
        }, 3000);
        //push
        this.toasts.unshift(toast);
    };
    NgxGustavguezToastsComponent.prototype.closeToast = function (toast) {
        var _this = this;
        //Check
        if (toast instanceof NgxGustavguezToastModel) {
            ArrayUtility.find(this.toasts, toast.id, function (t, index) {
                //Clear timer instance
                clearTimeout(t.timerInstance);
                //Remove from array
                _this.toasts.splice(index, 1);
            });
        }
    };
    NgxGustavguezToastsComponent.ctorParameters = function () { return [
        { type: NgxGustavguezToastsService }
    ]; };
    NgxGustavguezToastsComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-toasts',
            template: "<div \n    class=\"toasts-top-right fixed mr-2 mt-2\" \n    [style.display]=\" toasts.length ? 'block' : 'none' \">\n    <!-- Then put toasts within -->\n    <div \n        class=\"toast show fade bg-{{ toast.status }}\" \n        *ngFor=\"let toast of toasts; let i = index\">\n        <div class=\"toast-header text-light\">\n\n            <strong class=\"mr-auto\">\n                Alerta\n            </strong>\n\n            <button \n                (click)=\"onCloseToast(toast)\"\n                type=\"button\" \n                class=\"btn btn-link text-light\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"toast-body\">{{ toast.message }}</div>\n    </div>\n</div>",
            styles: [""]
        })
    ], NgxGustavguezToastsComponent);
    return NgxGustavguezToastsComponent;
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

var WindowUtility = /** @class */ (function () {
    function WindowUtility() {
    }
    WindowUtility.isSmallScreen = function () {
        return window.innerWidth < 768;
    };
    return WindowUtility;
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
        return value != undefined ? NumberUtility.format(value) : '';
    };
    PrettyNumberPipe = __decorate([
        Pipe({
            name: 'prettyNumber'
        })
    ], PrettyNumberPipe);
    return PrettyNumberPipe;
}());

var NgxGustavguezMainSidebarService = /** @class */ (function () {
    function NgxGustavguezMainSidebarService() {
        //Properties
        this.onChangeState = new EventEmitter();
        this.onToggleState = new EventEmitter();
    }
    //Public methods
    NgxGustavguezMainSidebarService.prototype.changeState = function (state) {
        this.onChangeState.emit(state);
    };
    NgxGustavguezMainSidebarService.prototype.toggleState = function () {
        this.onToggleState.emit();
    };
    NgxGustavguezMainSidebarService.ɵprov = ɵɵdefineInjectable({ factory: function NgxGustavguezMainSidebarService_Factory() { return new NgxGustavguezMainSidebarService(); }, token: NgxGustavguezMainSidebarService, providedIn: "root" });
    NgxGustavguezMainSidebarService = __decorate([
        Injectable({
            providedIn: "root"
        })
    ], NgxGustavguezMainSidebarService);
    return NgxGustavguezMainSidebarService;
}());

var NgxGustavguezMainContainerDirective = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainContainerDirective(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Modes
        this.classes = [
            'sidebar-mini',
            'layout-fixed',
            'layout-navbar-fixed'
        ];
    }
    //On component init
    NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
        var _this = this;
        //Set base classes to host classes
        this.loadHostClasses(false);
        //Watch sidebarState change
        this.ngxGustavguezMainSidebarService.onChangeState.subscribe(function (state) {
            _this.loadHostClasses(state);
        });
        this.ngxGustavguezMainSidebarService.onToggleState.subscribe(function () {
            _this.loadHostClasses();
        });
    };
    //Private helper methods
    NgxGustavguezMainContainerDirective.prototype.loadHostClasses = function (state) {
        var indexClassCollapse = this.classes.indexOf('sidebar-collapse');
        var indexClassOpen = this.classes.indexOf('sidebar-open');
        var openState = (state === undefined && indexClassOpen === -1) || state;
        var collapseState = (state === undefined && indexClassCollapse === -1) || state;
        //Remove from array
        if (indexClassCollapse > -1) {
            this.classes.splice(indexClassCollapse, 1);
        }
        if (indexClassOpen > -1) {
            this.classes.splice(indexClassOpen, 1);
        }
        //Check state to add sidebaropen class
        if (WindowUtility.isSmallScreen() && openState) {
            this.classes.push('sidebar-open');
        }
        //Check to add collapse class
        if (!WindowUtility.isSmallScreen() && collapseState) {
            this.classes.push('sidebar-collapse');
        }
        //Load classes
        this.hostClasses = this.classes.join(' ');
    };
    NgxGustavguezMainContainerDirective.ctorParameters = function () { return [
        { type: NgxGustavguezMainSidebarService }
    ]; };
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
    function NgxGustavguezMainSidebarComponent(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Outputs
        this.onMenuItem = new EventEmitter();
    }
    //On component init
    NgxGustavguezMainSidebarComponent.prototype.ngOnInit = function () {
        //Init vars
        this.menuItemsStates = {};
    };
    //Custom events
    NgxGustavguezMainSidebarComponent.prototype.onMenuItemClick = function (event, menuItem) {
        event.preventDefault();
        //Check
        if (ArrayUtility.hasValue(menuItem.childs)) {
            //Toggle state
            this.menuItemsStates[menuItem.id] = (menuItem.id in this.menuItemsStates) ? !this.menuItemsStates[menuItem.id] : false;
        }
        else {
            //Emit click for now
            this.onMenuItem.emit(menuItem);
            //Close sidebar
            this.ngxGustavguezMainSidebarService.changeState(false);
        }
    };
    NgxGustavguezMainSidebarComponent.prototype.onBrandLink = function (event) {
        event.preventDefault();
        //Close sidebar
        this.ngxGustavguezMainSidebarService.changeState(false);
    };
    NgxGustavguezMainSidebarComponent.prototype.onCloseSidebar = function () {
        this.ngxGustavguezMainSidebarService.changeState(false);
    };
    NgxGustavguezMainSidebarComponent.ctorParameters = function () { return [
        { type: NgxGustavguezMainSidebarService }
    ]; };
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
    ], NgxGustavguezMainSidebarComponent.prototype, "onMenuItem", void 0);
    NgxGustavguezMainSidebarComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-main-sidebar',
            template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLink($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    [class.active]=\"menuItem.isActive\"\n                    class=\"nav-item has-treeview\" \n                    *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ng-container *ngIf=\"menuItem.childs\">\n                        <ul \n                            [style.display]=\"(menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined) ? 'block' : 'none'\"\n                            class=\"nav nav-treeview\">\n                            <li \n                                class=\"nav-item\" menuItemStates\n                                [class.active]=\"child.isActive\"\n                                *ngFor=\"let child of menuItem.childs\">\n                                <a \n                                    (click)=\"onMenuItemClick($event, child)\"\n                                    href=\"#\" \n                                    class=\"nav-link\">\n                                    <i class=\"nav-icon {{ child.icon }}\"></i>\n                                    <p>{{ child.display }}</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </ng-container>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
            styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
        })
    ], NgxGustavguezMainSidebarComponent);
    return NgxGustavguezMainSidebarComponent;
}());

var NgxGustavguezMenuItem = /** @class */ (function () {
    function NgxGustavguezMenuItem(display, icon, action, childs) {
        this.display = display;
        this.icon = icon;
        this.action = action;
        this.childs = childs;
        this.id = StringUtility.randomString();
    }
    return NgxGustavguezMenuItem;
}());

var NgxGustavguezNavComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezNavComponent(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Outputs
        this.onLogout = new EventEmitter();
        this.onBrand = new EventEmitter();
    }
    //On component init
    NgxGustavguezNavComponent.prototype.ngOnInit = function () {
    };
    //Custom events
    NgxGustavguezNavComponent.prototype.onToggleMenu = function (event) {
        event.preventDefault();
        this.ngxGustavguezMainSidebarService.toggleState();
    };
    NgxGustavguezNavComponent.prototype.onToggleUserMenu = function (event) {
        event.preventDefault();
        this.userMenuState = !this.userMenuState;
    };
    NgxGustavguezNavComponent.prototype.onLogoutClick = function (event) {
        event.preventDefault();
        //Emit logout
        this.onLogout.emit();
        //Close user menu
        this.userMenuState = false;
    };
    NgxGustavguezNavComponent.prototype.onBrandLink = function (event) {
        event.preventDefault();
        this.onBrand.emit();
    };
    NgxGustavguezNavComponent.ctorParameters = function () { return [
        { type: NgxGustavguezMainSidebarService }
    ]; };
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
                NgxGustavguezPageHeaderComponent,
                NgxGustavguezInfoBoxComponent,
                NgxGustavguezCardComponent,
                NgxGustavguezToastsComponent,
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
                NgxGustavguezPageHeaderComponent,
                NgxGustavguezInfoBoxComponent,
                NgxGustavguezCardComponent,
                NgxGustavguezToastsComponent
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());

//Structure components

/**
 * Generated bundle index. Do not edit.
 */

export { ApiResponseModel, ApiService, ArrayUtility, DateUtility, FormUtility, NgxGustavguezButtonComponent, NgxGustavguezCardComponent, NgxGustavguezCoreModule, NgxGustavguezInfoBoxComponent, NgxGustavguezInputHolderComponent, NgxGustavguezLoaderComponent, NgxGustavguezMainContainerDirective, NgxGustavguezMainSidebarComponent, NgxGustavguezMainSidebarService, NgxGustavguezMenuItem, NgxGustavguezNavComponent, NgxGustavguezPageHeaderComponent, NgxGustavguezPopupComponent, NgxGustavguezStatusEnum, NgxGustavguezToastModel, NgxGustavguezToastsComponent, NgxGustavguezToastsService, NumberUtility, PrettyDatePipe, PrettyHourPipe, PrettyNumberPipe, StringUtility, WindowUtility };
//# sourceMappingURL=ngx-gustavguez-core.js.map
