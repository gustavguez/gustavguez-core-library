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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt6RDtJQUFBO1FBRUksWUFBWTtRQUNMLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVlqRTtJQVRHLGdCQUFnQjtJQUNULHFEQUFXLEdBQWxCLFVBQW1CLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLHFEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDOztJQWRRLCtCQUErQjtRQUgzQyxVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO09BQ1csK0JBQStCLENBZ0IzQzswQ0FyQkQ7Q0FxQkMsQUFoQkQsSUFnQkM7U0FoQlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIHtcblxuICAgIC8vUHJvcGVydGllc1xuICAgIHB1YmxpYyBvbkNoYW5nZVN0YXRlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgcHVibGljIG9uVG9nZ2xlU3RhdGU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgLy9QdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBjaGFuZ2VTdGF0ZShzdGF0ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlU3RhdGUuZW1pdChzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVN0YXRlKCkge1xuICAgICAgICB0aGlzLm9uVG9nZ2xlU3RhdGUuZW1pdCgpO1xuICAgIH1cblxufSJdfQ==