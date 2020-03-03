import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, NgModule } from '@angular/core';
import * as momentImported from 'moment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

let NgxGustavguezCoreModule = class NgxGustavguezCoreModule {
};
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

//Structure components

/**
 * Generated bundle index. Do not edit.
 */

export { NgxGustavguezCoreModule, NgxGustavguezLoaderComponent, NgxGustavguezPopupComponent };
//# sourceMappingURL=ngx-gustavguez-core.js.map
