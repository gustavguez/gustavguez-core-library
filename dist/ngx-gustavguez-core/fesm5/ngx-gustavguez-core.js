import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, NgModule } from '@angular/core';
import * as momentImported from 'moment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

var NgxGustavguezCoreModule = /** @class */ (function () {
    function NgxGustavguezCoreModule() {
    }
    NgxGustavguezCoreModule = __decorate([
        NgModule({
            declarations: [
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule
            ],
            exports: [
                NgxGustavguezLoaderComponent,
                NgxGustavguezPopupComponent
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());

//Structure components

/**
 * Generated bundle index. Do not edit.
 */

export { NgxGustavguezCoreModule, NgxGustavguezLoaderComponent, NgxGustavguezPopupComponent };
//# sourceMappingURL=ngx-gustavguez-core.js.map
