import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var NgxGustavguezCoreService = /** @class */ (function () {
    function NgxGustavguezCoreService() {
    }
    NgxGustavguezCoreService.ɵprov = ɵɵdefineInjectable({ factory: function NgxGustavguezCoreService_Factory() { return new NgxGustavguezCoreService(); }, token: NgxGustavguezCoreService, providedIn: "root" });
    NgxGustavguezCoreService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxGustavguezCoreService);
    return NgxGustavguezCoreService;
}());

var NgxGustavguezCoreComponent = /** @class */ (function () {
    function NgxGustavguezCoreComponent() {
    }
    NgxGustavguezCoreComponent.prototype.ngOnInit = function () {
    };
    NgxGustavguezCoreComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-core',
            template: "\n    <p>\n      ngx-gustavguez-core works!\n    </p>\n  "
        })
    ], NgxGustavguezCoreComponent);
    return NgxGustavguezCoreComponent;
}());

var NgxGustavguezCoreModule = /** @class */ (function () {
    function NgxGustavguezCoreModule() {
    }
    NgxGustavguezCoreModule = __decorate([
        NgModule({
            declarations: [NgxGustavguezCoreComponent],
            imports: [],
            exports: [NgxGustavguezCoreComponent]
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

export { NgxGustavguezCoreComponent, NgxGustavguezCoreModule, NgxGustavguezCoreService };
//# sourceMappingURL=ngx-gustavguez-core.js.map
