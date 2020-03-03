(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('moment'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-gustavguez-core', ['exports', '@angular/core', 'moment', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-gustavguez-core'] = {}, global.ng.core, global.momentImported, global.ng.forms, global.ng.common));
}(this, (function (exports, core, momentImported, forms, common) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgxGustavguezLoaderComponent = /** @class */ (function () {
        //Inject services
        function NgxGustavguezLoaderComponent() {
        }
        //On component init
        NgxGustavguezLoaderComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], NgxGustavguezLoaderComponent.prototype, "loading", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezLoaderComponent.prototype, "loadingText", void 0);
        NgxGustavguezLoaderComponent = __decorate([
            core.Component({
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
            this.onClose = new core.EventEmitter();
        }
        //On component init
        NgxGustavguezPopupComponent.prototype.ngOnInit = function () {
        };
        //Custome events
        NgxGustavguezPopupComponent.prototype.onClosePopup = function () {
            this.onClose.emit();
        };
        __decorate([
            core.Input()
        ], NgxGustavguezPopupComponent.prototype, "state", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezPopupComponent.prototype, "titleText", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezPopupComponent.prototype, "closeText", void 0);
        __decorate([
            core.Output()
        ], NgxGustavguezPopupComponent.prototype, "onClose", void 0);
        NgxGustavguezPopupComponent = __decorate([
            core.Component({
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
                if (control instanceof forms.FormControl) {
                    control.markAsTouched({ onlySelf: true });
                }
                else if (control instanceof forms.FormGroup) {
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
            core.NgModule({
                declarations: [
                    NgxGustavguezLoaderComponent,
                    NgxGustavguezPopupComponent
                ],
                imports: [
                    common.CommonModule,
                    forms.ReactiveFormsModule
                ],
                exports: [
                    NgxGustavguezLoaderComponent,
                    NgxGustavguezPopupComponent
                ]
            })
        ], NgxGustavguezCoreModule);
        return NgxGustavguezCoreModule;
    }());

    exports.NgxGustavguezCoreModule = NgxGustavguezCoreModule;
    exports.NgxGustavguezLoaderComponent = NgxGustavguezLoaderComponent;
    exports.NgxGustavguezPopupComponent = NgxGustavguezPopupComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-gustavguez-core.umd.js.map
