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
    NgxGustavguezNavComponent.prototype.onToggleMenu = function () {
        this.ngxGustavguezMainSidebarService.toggleState();
    };
    NgxGustavguezNavComponent.prototype.onToggleUserMenu = function () {
        this.userMenuState = !this.userMenuState;
    };
    NgxGustavguezNavComponent.prototype.onLogoutClick = function () {
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
            template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a \n                (click)=\"onToggleMenu()\"\n                class=\"nav-link\" \n                data-widget=\"pushmenu\" \n                href=\"#\"><i class=\"fas fa-bars\"></i>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"userIsLogged\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n\n            <a \n                (click)=\"onToggleUserMenu()\"\n                class=\"nav-link\" \n                data-toggle=\"dropdown\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">{{ userMenuText ? userMenuText : \"Men\u00FA de usuario\" }}</span>\n                <div class=\"dropdown-divider\"></div>\n                <a \n                    class=\"dropdown-item\" \n                    (click)=\"onLogoutClick()\">\n                    <i class=\"fas fa-sign-out-alt\"></i> {{ userMenuLogoutText ? userMenuLogoutText : \"Cerrar sesi\u00F3n\" }}\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
            styles: [""]
        })
    ], NgxGustavguezNavComponent);
    return NgxGustavguezNavComponent;
}());
export { NgxGustavguezNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtZ3VzdGF2Z3Vlei1uYXYvbmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQU9ySDtJQVlJLGlCQUFpQjtJQUNqQixtQ0FDWSwrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVI1RSxTQUFTO1FBQ0MsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3FCLENBQUM7SUFFbEYsbUJBQW1CO0lBQ25CLDRDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZUFBZTtJQUNmLGdEQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELG9EQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFFRCxpREFBYSxHQUFiO1FBQ0ksYUFBYTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7O2dCQXJCNEMsK0JBQStCOztJQVpuRTtRQUFSLEtBQUssRUFBRTttRUFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7bUVBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO3lFQUE0QjtJQUcxQjtRQUFULE1BQU0sRUFBRTsrREFBbUQ7SUFQbkQseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsMDdDQUFrRDs7U0FFckQsQ0FBQztPQUNXLHlCQUF5QixDQW9DckM7SUFBRCxnQ0FBQztDQUFBLEFBcENELElBb0NDO1NBcENZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSB9IGZyb20gJy4uL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotbmF2JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIHVzZXJJc0xvZ2dlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB1c2VyTWVudVRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSB1c2VyTWVudUxvZ291dFRleHQ6IHN0cmluZztcblxuICAgIC8vT3V0cHV0c1xuICAgIEBPdXRwdXQoKSBvbkxvZ291dDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy9Nb2RlbHNcbiAgICB1c2VyTWVudVN0YXRlOiBib29sZWFuO1xuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBuZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlOiBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlICkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLy9DdXN0b20gZXZlbnRzXG4gICAgb25Ub2dnbGVNZW51KCl7XG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS50b2dnbGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlVXNlck1lbnUoKXtcbiAgICAgICAgdGhpcy51c2VyTWVudVN0YXRlID0gIXRoaXMudXNlck1lbnVTdGF0ZTtcbiAgICB9XG5cbiAgICBvbkxvZ291dENsaWNrKCl7XG4gICAgICAgIC8vRW1pdCBsb2dvdXRcbiAgICAgICAgdGhpcy5vbkxvZ291dC5lbWl0KCk7XG5cbiAgICAgICAgLy9DbG9zZSB1c2VyIG1lbnVcbiAgICAgICAgdGhpcy51c2VyTWVudVN0YXRlID0gZmFsc2U7XG4gICAgfVxufVxuIl19