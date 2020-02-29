import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let NgxGustavguezCoreService = class NgxGustavguezCoreService {
    constructor() {
    }
};
NgxGustavguezCoreService.ɵprov = ɵɵdefineInjectable({ factory: function NgxGustavguezCoreService_Factory() { return new NgxGustavguezCoreService(); }, token: NgxGustavguezCoreService, providedIn: "root" });
NgxGustavguezCoreService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxGustavguezCoreService);

let NgxGustavguezCoreComponent = class NgxGustavguezCoreComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxGustavguezCoreComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-core',
        template: `
    <p>
      ngx-gustavguez-core works!
    </p>
  `
    })
], NgxGustavguezCoreComponent);

let NgxGustavguezCoreModule = class NgxGustavguezCoreModule {
};
NgxGustavguezCoreModule = __decorate([
    NgModule({
        declarations: [NgxGustavguezCoreComponent],
        imports: [],
        exports: [NgxGustavguezCoreComponent]
    })
], NgxGustavguezCoreModule);

/*
 * Public API Surface of ngx-gustavguez-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxGustavguezCoreComponent, NgxGustavguezCoreModule, NgxGustavguezCoreService };
//# sourceMappingURL=ngx-gustavguez-core.js.map
