(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('moment'), require('@angular/forms'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-gustavguez-core', ['exports', '@angular/core', 'moment', '@angular/forms', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-gustavguez-core'] = {}, global.ng.core, global.momentImported, global.ng.forms, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, momentImported, forms, http, operators, common) { 'use strict';

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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
                name: 'prettyNumber'
            })
        ], PrettyNumberPipe);
        return PrettyNumberPipe;
    }());

    var NgxGustavguezMainSidebarService = /** @class */ (function () {
        function NgxGustavguezMainSidebarService() {
            //Properties
            this.onChangeState = new core.EventEmitter();
            this.onToggleState = new core.EventEmitter();
        }
        //Public methods
        NgxGustavguezMainSidebarService.prototype.changeState = function (state) {
            this.onChangeState.emit(state);
        };
        NgxGustavguezMainSidebarService.prototype.toggleState = function () {
            this.onToggleState.emit();
        };
        NgxGustavguezMainSidebarService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function NgxGustavguezMainSidebarService_Factory() { return new NgxGustavguezMainSidebarService(); }, token: NgxGustavguezMainSidebarService, providedIn: "root" });
        NgxGustavguezMainSidebarService = __decorate([
            core.Injectable({
                providedIn: "root"
            })
        ], NgxGustavguezMainSidebarService);
        return NgxGustavguezMainSidebarService;
    }());

    var NgxGustavguezMainContainerDirective = /** @class */ (function () {
        //Inject services
        function NgxGustavguezMainContainerDirective(ngxGustavguezMainSidebarService) {
            this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
            this.baseClasses = 'sidebar-mini layout-fixed layout-navbar-fixed';
        }
        //On component init
        NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
            var _this = this;
            //Set base classes to host classes
            this.loadHostClasses();
            //Watch sidebarState change
            this.ngxGustavguezMainSidebarService.onChangeState.subscribe(function (state) {
                _this.loadHostClasses(state);
            });
            this.ngxGustavguezMainSidebarService.onToggleState.subscribe(function () {
                _this.loadHostClasses(!_this.state);
            });
        };
        //Private helper methods
        NgxGustavguezMainContainerDirective.prototype.loadHostClasses = function (state) {
            //Backup state
            this.state = state;
            //Check state
            if (state) {
                this.hostClasses = this.baseClasses + " sidebar-collapse";
            }
            else {
                this.hostClasses = this.baseClasses;
            }
        };
        NgxGustavguezMainContainerDirective.ctorParameters = function () { return [
            { type: NgxGustavguezMainSidebarService }
        ]; };
        __decorate([
            core.HostBinding('class')
        ], NgxGustavguezMainContainerDirective.prototype, "hostClasses", void 0);
        NgxGustavguezMainContainerDirective = __decorate([
            core.Directive({
                selector: '[ngxGustavguezMainContainer]'
            })
        ], NgxGustavguezMainContainerDirective);
        return NgxGustavguezMainContainerDirective;
    }());

    var NgxGustavguezMainSidebarComponent = /** @class */ (function () {
        //Inject services
        function NgxGustavguezMainSidebarComponent() {
            //Outputs
            this.onMenuItem = new core.EventEmitter();
        }
        //On component init
        NgxGustavguezMainSidebarComponent.prototype.ngOnInit = function () {
        };
        //Custom events
        NgxGustavguezMainSidebarComponent.prototype.onMenuItemClick = function (event, mouseItem) {
            event.preventDefault();
            //Emit click for now
            this.onMenuItem.emit(mouseItem);
        };
        __decorate([
            core.Input()
        ], NgxGustavguezMainSidebarComponent.prototype, "brandTitle", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezMainSidebarComponent.prototype, "brandImg", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezMainSidebarComponent.prototype, "userIsLogged", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezMainSidebarComponent.prototype, "userAvatar", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezMainSidebarComponent.prototype, "userName", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezMainSidebarComponent.prototype, "menuItems", void 0);
        __decorate([
            core.Output()
        ], NgxGustavguezMainSidebarComponent.prototype, "onMenuItem", void 0);
        NgxGustavguezMainSidebarComponent = __decorate([
            core.Component({
                selector: 'ngx-gustavguez-main-sidebar',
                template: "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a class=\"brand-link\">\n        <img \n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">Men\u00FA</li>\n\n                <li class=\"nav-item has-treeview menu-open\" *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ul class=\"nav nav-treeview\" style=\"display: block;\" *ngIf=\"false\">\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item has-treeview menu-open\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>\n                                    Level 2\n                                    <i class=\"right fas fa-angle-left\"></i>\n                                </p>\n                            </a>\n                            \n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>",
                styles: [""]
            })
        ], NgxGustavguezMainSidebarComponent);
        return NgxGustavguezMainSidebarComponent;
    }());

    var NgxGustavguezNavComponent = /** @class */ (function () {
        //Inject services
        function NgxGustavguezNavComponent(ngxGustavguezMainSidebarService) {
            this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
            //Outputs
            this.onLogout = new core.EventEmitter();
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
        NgxGustavguezNavComponent.ctorParameters = function () { return [
            { type: NgxGustavguezMainSidebarService }
        ]; };
        __decorate([
            core.Input()
        ], NgxGustavguezNavComponent.prototype, "userIsLogged", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezNavComponent.prototype, "userMenuText", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezNavComponent.prototype, "userMenuLogoutText", void 0);
        __decorate([
            core.Output()
        ], NgxGustavguezNavComponent.prototype, "onLogout", void 0);
        NgxGustavguezNavComponent = __decorate([
            core.Component({
                selector: 'ngx-gustavguez-nav',
                template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a  \n                href=\"#\"\n                (click)=\"onToggleMenu($event)\"\n                class=\"nav-link\" \n                data-widget=\"pushmenu\">\n                <i class=\"fas fa-bars\"></i>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"userIsLogged\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n\n            <a \n                href=\"#\"\n                (click)=\"onToggleUserMenu($event)\"\n                class=\"nav-link\" \n                data-toggle=\"dropdown\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div \n                [class.show]=\"userMenuState\"\n                class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">{{ userMenuText ? userMenuText : \"Men\u00FA de usuario\" }}</span>\n                <div class=\"dropdown-divider\"></div>\n                <a \n                    href=\"#\"\n                    class=\"dropdown-item\" \n                    (click)=\"onLogoutClick($event)\">\n                    <i class=\"fas fa-sign-out-alt\"></i> {{ userMenuLogoutText ? userMenuLogoutText : \"Cerrar sesi\u00F3n\" }}\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
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
                headers: new http.HttpHeaders({
                    'Authorization': 'Bearer ' + this.accessToken
                }),
                params: params
            };
            //Do request
            return this.httpClient
                .get(this.apiURL + uri, httpOptions)
                .pipe(
            //Map response
            operators.map(function (response) {
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
                headers: new http.HttpHeaders({
                    'Authorization': 'Bearer ' + this.accessToken
                })
            };
            //Do request
            return this.httpClient
                .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
                .pipe(
            //Map response
            operators.map(function (response) {
                //Return api response model
                return _this.parseResponse(response);
            }));
        };
        //Update an object using PATCH
        ApiService.prototype.partialUpdateObj = function (uri, id, obj) {
            var _this = this;
            //Post options
            var httpOptions = {
                headers: new http.HttpHeaders({
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
            operators.map(function (response) {
                //Return api response model
                return _this.parseResponse(response);
            }));
        };
        //Delete an object using DELETE
        ApiService.prototype.deleteObj = function (uri, id) {
            //Post options
            var httpOptions = {
                headers: new http.HttpHeaders({
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
            operators.map(function (response) {
                //Return api response model
                return true;
            }));
        };
        //Create an object with POST
        ApiService.prototype.createObj = function (uri, obj) {
            var _this = this;
            //Post options
            var httpOptions = {
                headers: new http.HttpHeaders({
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
            operators.map(function (response) {
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
            { type: http.HttpClient }
        ]; };
        ApiService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ApiService_Factory() { return new ApiService(core["ɵɵinject"](http.HttpClient)); }, token: ApiService, providedIn: "root" });
        ApiService = __decorate([
            core.Injectable({
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
            core.Input()
        ], NgxGustavguezButtonComponent.prototype, "text", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezButtonComponent.prototype, "loadingText", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezButtonComponent.prototype, "loading", void 0);
        NgxGustavguezButtonComponent = __decorate([
            core.Component({
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
            core.Input()
        ], NgxGustavguezInputHolderComponent.prototype, "form", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezInputHolderComponent.prototype, "controlName", void 0);
        __decorate([
            core.Input()
        ], NgxGustavguezInputHolderComponent.prototype, "requiredErrorText", void 0);
        NgxGustavguezInputHolderComponent = __decorate([
            core.Component({
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
            core.NgModule({
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
                    common.CommonModule,
                    forms.ReactiveFormsModule
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

    exports.ApiResponseModel = ApiResponseModel;
    exports.ApiService = ApiService;
    exports.ArrayUtility = ArrayUtility;
    exports.DateUtility = DateUtility;
    exports.FormUtility = FormUtility;
    exports.NgxGustavguezButtonComponent = NgxGustavguezButtonComponent;
    exports.NgxGustavguezCoreModule = NgxGustavguezCoreModule;
    exports.NgxGustavguezInputHolderComponent = NgxGustavguezInputHolderComponent;
    exports.NgxGustavguezLoaderComponent = NgxGustavguezLoaderComponent;
    exports.NgxGustavguezMainContainerDirective = NgxGustavguezMainContainerDirective;
    exports.NgxGustavguezMainSidebarComponent = NgxGustavguezMainSidebarComponent;
    exports.NgxGustavguezMainSidebarService = NgxGustavguezMainSidebarService;
    exports.NgxGustavguezNavComponent = NgxGustavguezNavComponent;
    exports.NgxGustavguezPopupComponent = NgxGustavguezPopupComponent;
    exports.NumberUtility = NumberUtility;
    exports.PrettyDatePipe = PrettyDatePipe;
    exports.PrettyHourPipe = PrettyHourPipe;
    exports.PrettyNumberPipe = PrettyNumberPipe;
    exports.StringUtility = StringUtility;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-gustavguez-core.umd.js.map
