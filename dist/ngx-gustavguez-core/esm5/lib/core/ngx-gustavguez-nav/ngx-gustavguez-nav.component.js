import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
var NgxGustavguezNavComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezNavComponent(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Outputs
        this.onLogout = new EventEmitter();
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
        Input()
    ], NgxGustavguezNavComponent.prototype, "userIsLogged", void 0);
    __decorate([
        Input()
    ], NgxGustavguezNavComponent.prototype, "userMenuText", void 0);
    __decorate([
        Input()
    ], NgxGustavguezNavComponent.prototype, "userMenuLogoutText", void 0);
    __decorate([
        Output()
    ], NgxGustavguezNavComponent.prototype, "onLogout", void 0);
    NgxGustavguezNavComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-nav',
            template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a  \n                href=\"#\"\n                (click)=\"onToggleMenu($event)\"\n                class=\"nav-link\" \n                data-widget=\"pushmenu\">\n                <i class=\"fas fa-bars\"></i>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"userIsLogged\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n\n            <a \n                href=\"#\"\n                (click)=\"onToggleUserMenu($event)\"\n                class=\"nav-link\" \n                data-toggle=\"dropdown\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div \n                [class.show]=\"userMenuState\"\n                class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">{{ userMenuText ? userMenuText : \"Men\u00FA de usuario\" }}</span>\n                <div class=\"dropdown-divider\"></div>\n                <a \n                    href=\"#\"\n                    class=\"dropdown-item\" \n                    (click)=\"onLogoutClick($event)\">\n                    <i class=\"fas fa-sign-out-alt\"></i> {{ userMenuLogoutText ? userMenuLogoutText : \"Cerrar sesi\u00F3n\" }}\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
            styles: [""]
        })
    ], NgxGustavguezNavComponent);
    return NgxGustavguezNavComponent;
}());
export { NgxGustavguezNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtZ3VzdGF2Z3Vlei1uYXYvbmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQU9ySDtJQVlJLGlCQUFpQjtJQUNqQixtQ0FDWSwrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVI1RSxTQUFTO1FBQ0MsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3FCLENBQUM7SUFFbEYsbUJBQW1CO0lBQ25CLDRDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZUFBZTtJQUNmLGdEQUFZLEdBQVosVUFBYSxLQUFpQjtRQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvREFBZ0IsR0FBaEIsVUFBaUIsS0FBaUI7UUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFFRCxpREFBYSxHQUFiLFVBQWMsS0FBaUI7UUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLGFBQWE7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOztnQkF4QjRDLCtCQUErQjs7SUFabkU7UUFBUixLQUFLLEVBQUU7bUVBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO21FQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTt5RUFBNEI7SUFHMUI7UUFBVCxNQUFNLEVBQUU7K0RBQW1EO0lBUG5ELHlCQUF5QjtRQUxyQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLDRsREFBa0Q7O1NBRXJELENBQUM7T0FDVyx5QkFBeUIsQ0F1Q3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LW5hdicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW5hdi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9JbnB1dHNcbiAgICBASW5wdXQoKSB1c2VySXNMb2dnZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdXNlck1lbnVUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlck1lbnVMb2dvdXRUZXh0OiBzdHJpbmc7XG5cbiAgICAvL091dHB1dHNcbiAgICBAT3V0cHV0KCkgb25Mb2dvdXQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vTW9kZWxzXG4gICAgdXNlck1lbnVTdGF0ZTogYm9vbGVhbjtcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZTogTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSApIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8vQ3VzdG9tIGV2ZW50c1xuICAgIG9uVG9nZ2xlTWVudShldmVudDogTW91c2VFdmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS50b2dnbGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlVXNlck1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVzZXJNZW51U3RhdGUgPSAhdGhpcy51c2VyTWVudVN0YXRlO1xuICAgIH1cblxuICAgIG9uTG9nb3V0Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL0VtaXQgbG9nb3V0XG4gICAgICAgIHRoaXMub25Mb2dvdXQuZW1pdCgpO1xuXG4gICAgICAgIC8vQ2xvc2UgdXNlciBtZW51XG4gICAgICAgIHRoaXMudXNlck1lbnVTdGF0ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==