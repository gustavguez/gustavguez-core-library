import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
let NgxGustavguezNavComponent = class NgxGustavguezNavComponent {
    //Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Outputs
        this.onLogout = new EventEmitter();
    }
    //On component init
    ngOnInit() {
    }
    //Custom events
    onToggleMenu(event) {
        event.preventDefault();
        this.ngxGustavguezMainSidebarService.toggleState();
    }
    onToggleUserMenu(event) {
        event.preventDefault();
        this.userMenuState = !this.userMenuState;
    }
    onLogoutClick(event) {
        event.preventDefault();
        //Emit logout
        this.onLogout.emit();
        //Close user menu
        this.userMenuState = false;
    }
};
NgxGustavguezNavComponent.ctorParameters = () => [
    { type: NgxGustavguezMainSidebarService }
];
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
export { NgxGustavguezNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtZ3VzdGF2Z3Vlei1uYXYvbmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQU9ySCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQVlsQyxpQkFBaUI7SUFDakIsWUFDWSwrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVI1RSxTQUFTO1FBQ0MsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3FCLENBQUM7SUFFbEYsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtJQUNmLFlBQVksQ0FBQyxLQUFpQjtRQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFpQjtRQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsYUFBYTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Q0FDSixDQUFBOztZQXpCZ0QsK0JBQStCOztBQVpuRTtJQUFSLEtBQUssRUFBRTsrREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7K0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO3FFQUE0QjtBQUcxQjtJQUFULE1BQU0sRUFBRTsyREFBbUQ7QUFQbkQseUJBQXlCO0lBTHJDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsNGxEQUFrRDs7S0FFckQsQ0FBQztHQUNXLHlCQUF5QixDQXVDckM7U0F2Q1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei1uYXYnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LW5hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgdXNlcklzTG9nZ2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHVzZXJNZW51VGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVzZXJNZW51TG9nb3V0VGV4dDogc3RyaW5nO1xuXG4gICAgLy9PdXRwdXRzXG4gICAgQE91dHB1dCgpIG9uTG9nb3V0OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvL01vZGVsc1xuICAgIHVzZXJNZW51U3RhdGU6IGJvb2xlYW47XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvL0N1c3RvbSBldmVudHNcbiAgICBvblRvZ2dsZU1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UudG9nZ2xlU3RhdGUoKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZVVzZXJNZW51KGV2ZW50OiBNb3VzZUV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51c2VyTWVudVN0YXRlID0gIXRoaXMudXNlck1lbnVTdGF0ZTtcbiAgICB9XG5cbiAgICBvbkxvZ291dENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9FbWl0IGxvZ291dFxuICAgICAgICB0aGlzLm9uTG9nb3V0LmVtaXQoKTtcblxuICAgICAgICAvL0Nsb3NlIHVzZXIgbWVudVxuICAgICAgICB0aGlzLnVzZXJNZW51U3RhdGUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=