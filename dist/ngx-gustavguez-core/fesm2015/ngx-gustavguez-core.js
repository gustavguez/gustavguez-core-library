import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, NgModule } from '@angular/core';
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

let NgxGustavguezCoreModule = class NgxGustavguezCoreModule {
};
NgxGustavguezCoreModule = __decorate([
    NgModule({
        declarations: [
            NgxGustavguezLoaderComponent,
            NgxGustavguezPopupComponent
        ],
        imports: [
            CommonModule
        ],
        exports: [
            NgxGustavguezLoaderComponent,
            NgxGustavguezPopupComponent
        ]
    })
], NgxGustavguezCoreModule);

/*
 * Public API Surface of ngx-gustavguez-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxGustavguezCoreModule, NgxGustavguezLoaderComponent, NgxGustavguezPopupComponent };
//# sourceMappingURL=ngx-gustavguez-core.js.map
