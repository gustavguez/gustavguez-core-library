import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
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
    NgxGustavguezMainSidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxGustavguezMainSidebarService_Factory() { return new NgxGustavguezMainSidebarService(); }, token: NgxGustavguezMainSidebarService, providedIn: "root" });
    NgxGustavguezMainSidebarService = __decorate([
        Injectable({
            providedIn: "root"
        })
    ], NgxGustavguezMainSidebarService);
    return NgxGustavguezMainSidebarService;
}());
export { NgxGustavguezMainSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLekQ7SUFBQTtRQUVJLFlBQVk7UUFDTCxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7S0FZakU7SUFURyxnQkFBZ0I7SUFDVCxxREFBVyxHQUFsQixVQUFtQixLQUFjO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxxREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7SUFkUSwrQkFBK0I7UUFIM0MsVUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztPQUNXLCtCQUErQixDQWdCM0M7MENBckJEO0NBcUJDLEFBaEJELElBZ0JDO1NBaEJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSB7XG5cbiAgICAvL1Byb3BlcnRpZXNcbiAgICBwdWJsaWMgb25DaGFuZ2VTdGF0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHB1YmxpYyBvblRvZ2dsZVN0YXRlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAgIC8vUHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgY2hhbmdlU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVN0YXRlLmVtaXQoc3RhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5vblRvZ2dsZVN0YXRlLmVtaXQoKTtcbiAgICB9XG5cbn0iXX0=