import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
var NgxGustavguezMainSidebarService = /** @class */ (function () {
    function NgxGustavguezMainSidebarService() {
        // Properties
        this.onChangeState = new EventEmitter();
        this.onToggleState = new EventEmitter();
    }
    // Public methods
    NgxGustavguezMainSidebarService.prototype.changeState = function (state) {
        this.onChangeState.emit(state);
    };
    NgxGustavguezMainSidebarService.prototype.toggleState = function () {
        this.onToggleState.emit();
    };
    NgxGustavguezMainSidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxGustavguezMainSidebarService_Factory() { return new NgxGustavguezMainSidebarService(); }, token: NgxGustavguezMainSidebarService, providedIn: "root" });
    NgxGustavguezMainSidebarService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxGustavguezMainSidebarService);
    return NgxGustavguezMainSidebarService;
}());
export { NgxGustavguezMainSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt6RDtJQUFBO1FBRUMsYUFBYTtRQUNOLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVc5RDtJQVRBLGlCQUFpQjtJQUNWLHFEQUFXLEdBQWxCLFVBQW1CLEtBQWM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHFEQUFXLEdBQWxCO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztJQWJXLCtCQUErQjtRQUgzQyxVQUFVLENBQUM7WUFDWCxVQUFVLEVBQUUsTUFBTTtTQUNsQixDQUFDO09BQ1csK0JBQStCLENBZTNDOzBDQXBCRDtDQW9CQyxBQWZELElBZUM7U0FmWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSB7XG5cblx0Ly8gUHJvcGVydGllc1xuXHRwdWJsaWMgb25DaGFuZ2VTdGF0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgb25Ub2dnbGVTdGF0ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIFB1YmxpYyBtZXRob2RzXG5cdHB1YmxpYyBjaGFuZ2VTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2VTdGF0ZS5lbWl0KHN0YXRlKTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGVTdGF0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG9nZ2xlU3RhdGUuZW1pdCgpO1xuXHR9XG5cbn1cbiJdfQ==