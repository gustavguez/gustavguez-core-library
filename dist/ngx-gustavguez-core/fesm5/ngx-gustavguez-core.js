import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var LoaderComponent = /** @class */ (function () {
    //Inject services
    function LoaderComponent() {
    }
    //On component init
    LoaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], LoaderComponent.prototype, "loading", void 0);
    __decorate([
        Input()
    ], LoaderComponent.prototype, "loadingText", void 0);
    LoaderComponent = __decorate([
        Component({
            selector: 'lib-loader',
            template: "<ng-container *ngIf=\"loading\">\n    <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n</ng-container>",
            styles: [""]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());

var PopupComponent = /** @class */ (function () {
    //Inject services
    function PopupComponent() {
        this.onClose = new EventEmitter();
    }
    //On component init
    PopupComponent.prototype.ngOnInit = function () {
    };
    //Custome events
    PopupComponent.prototype.onClosePopup = function () {
        this.onClose.emit();
    };
    __decorate([
        Input()
    ], PopupComponent.prototype, "state", void 0);
    __decorate([
        Input()
    ], PopupComponent.prototype, "titleText", void 0);
    __decorate([
        Input()
    ], PopupComponent.prototype, "closeText", void 0);
    __decorate([
        Output()
    ], PopupComponent.prototype, "onClose", void 0);
    PopupComponent = __decorate([
        Component({
            selector: 'lib-popup',
            template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n    *ngIf=\"state\"\n    class=\"modal-backdrop fade show\"></div>",
            styles: [""]
        })
    ], PopupComponent);
    return PopupComponent;
}());

var NgxGustavguezCoreModule = /** @class */ (function () {
    function NgxGustavguezCoreModule() {
    }
    NgxGustavguezCoreModule = __decorate([
        NgModule({
            declarations: [
                LoaderComponent,
                PopupComponent
            ],
            imports: [
                CommonModule
            ],
            exports: [
                LoaderComponent,
                PopupComponent
            ]
        })
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());

/*
 * Public API Surface of ngx-gustavguez-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoaderComponent, NgxGustavguezCoreModule, PopupComponent };
//# sourceMappingURL=ngx-gustavguez-core.js.map
