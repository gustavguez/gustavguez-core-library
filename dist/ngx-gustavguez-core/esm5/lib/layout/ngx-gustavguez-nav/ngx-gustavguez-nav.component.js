import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
var NgxGustavguezNavComponent = /** @class */ (function () {
    // Inject services
    function NgxGustavguezNavComponent(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Outputs
        this.onLogout = new EventEmitter();
        this.onBrand = new EventEmitter();
    }
    // Custom events
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
        // Emit logout
        this.onLogout.emit();
        // Close user menu
        this.userMenuState = false;
    };
    NgxGustavguezNavComponent.prototype.onBrandLink = function (event) {
        event.preventDefault();
        this.onBrand.emit();
    };
    NgxGustavguezNavComponent.ctorParameters = function () { return [
        { type: NgxGustavguezMainSidebarService }
    ]; };
    __decorate([
        Input()
    ], NgxGustavguezNavComponent.prototype, "brandTitle", void 0);
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
    __decorate([
        Output()
    ], NgxGustavguezNavComponent.prototype, "onBrand", void 0);
    NgxGustavguezNavComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-nav',
            template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a  \n                href=\"#\"\n                (click)=\"onToggleMenu($event)\"\n                class=\"nav-link\" \n                data-widget=\"pushmenu\">\n                <i class=\"fas fa-bars\"></i>\n            </a>\n        </li>\n        <li class=\"nav-item d-lg-none\" *ngIf=\"brandTitle\">\n            <a \n                href=\"#\" \n                class=\"nav-link\"\n                (click)=\"onBrandLink($event)\">\n                {{ brandTitle }}\n            </a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"userIsLogged\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n\n            <a \n                href=\"#\"\n                (click)=\"onToggleUserMenu($event)\"\n                class=\"nav-link\" \n                data-toggle=\"dropdown\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div \n                [class.show]=\"userMenuState\"\n                class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">{{ userMenuText ? userMenuText : \"Men\u00FA de usuario\" }}</span>\n                <div class=\"dropdown-divider\"></div>\n                <a \n                    href=\"#\"\n                    class=\"dropdown-item\" \n                    (click)=\"onLogoutClick($event)\">\n                    <i class=\"fas fa-sign-out-alt\"></i> {{ userMenuLogoutText ? userMenuLogoutText : \"Cerrar sesi\u00F3n\" }}\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
            styles: [""]
        })
    ], NgxGustavguezNavComponent);
    return NgxGustavguezNavComponent;
}());
export { NgxGustavguezNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW5hdi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBT3JIO0lBY0Msa0JBQWtCO0lBQ2xCLG1DQUNTLCtCQUFnRTtRQUFoRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO1FBVHpFLFVBQVU7UUFDQSxhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT2tCLENBQUM7SUFFOUUsZ0JBQWdCO0lBQ2hCLGdEQUFZLEdBQVosVUFBYSxLQUFpQjtRQUM3QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxvREFBZ0IsR0FBaEIsVUFBaUIsS0FBaUI7UUFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzFDLENBQUM7SUFFRCxpREFBYSxHQUFiLFVBQWMsS0FBaUI7UUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLGNBQWM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLEtBQWlCO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQXpCeUMsK0JBQStCOztJQWRoRTtRQUFSLEtBQUssRUFBRTtpRUFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7bUVBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO21FQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTt5RUFBNEI7SUFHMUI7UUFBVCxNQUFNLEVBQUU7K0RBQW1EO0lBQ2xEO1FBQVQsTUFBTSxFQUFFOzhEQUFrRDtJQVQvQyx5QkFBeUI7UUFMckMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixtMkRBQWtEOztTQUVsRCxDQUFDO09BQ1cseUJBQXlCLENBMENyQztJQUFELGdDQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSB9IGZyb20gJy4uL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LW5hdicsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgdXNlcklzTG9nZ2VkOiBib29sZWFuO1xuXHRASW5wdXQoKSB1c2VyTWVudVRleHQ6IHN0cmluZztcblx0QElucHV0KCkgdXNlck1lbnVMb2dvdXRUZXh0OiBzdHJpbmc7XG5cblx0Ly8gT3V0cHV0c1xuXHRAT3V0cHV0KCkgb25Mb2dvdXQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIG9uQnJhbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBNb2RlbHNcblx0dXNlck1lbnVTdGF0ZTogYm9vbGVhbjtcblxuXHQvLyBJbmplY3Qgc2VydmljZXNcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlOiBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlKSB7IH1cblxuXHQvLyBDdXN0b20gZXZlbnRzXG5cdG9uVG9nZ2xlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLnRvZ2dsZVN0YXRlKCk7XG5cdH1cblxuXHRvblRvZ2dsZVVzZXJNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnVzZXJNZW51U3RhdGUgPSAhdGhpcy51c2VyTWVudVN0YXRlO1xuXHR9XG5cblx0b25Mb2dvdXRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gRW1pdCBsb2dvdXRcblx0XHR0aGlzLm9uTG9nb3V0LmVtaXQoKTtcblxuXHRcdC8vIENsb3NlIHVzZXIgbWVudVxuXHRcdHRoaXMudXNlck1lbnVTdGF0ZSA9IGZhbHNlO1xuXHR9XG5cblx0b25CcmFuZExpbmsoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMub25CcmFuZC5lbWl0KCk7XG5cdH1cbn1cbiJdfQ==