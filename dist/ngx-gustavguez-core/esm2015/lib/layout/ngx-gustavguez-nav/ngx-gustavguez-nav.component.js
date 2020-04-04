import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
let NgxGustavguezNavComponent = class NgxGustavguezNavComponent {
    // Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Outputs
        this.onLogout = new EventEmitter();
        this.onBrand = new EventEmitter();
    }
    // Custom events
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
        // Emit logout
        this.onLogout.emit();
        // Close user menu
        this.userMenuState = false;
    }
    onBrandLink(event) {
        event.preventDefault();
        this.onBrand.emit();
    }
};
NgxGustavguezNavComponent.ctorParameters = () => [
    { type: NgxGustavguezMainSidebarService }
];
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
export { NgxGustavguezNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW5hdi9uZ3gtZ3VzdGF2Z3Vlei1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBT3JILElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBY3JDLGtCQUFrQjtJQUNsQixZQUNTLCtCQUFnRTtRQUFoRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO1FBVHpFLFVBQVU7UUFDQSxhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT2tCLENBQUM7SUFFOUUsZ0JBQWdCO0lBQ2hCLFlBQVksQ0FBQyxLQUFpQjtRQUM3QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFpQjtRQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsY0FBYztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNELENBQUE7O1lBMUIwQywrQkFBK0I7O0FBZGhFO0lBQVIsS0FBSyxFQUFFOzZEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTsrREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7K0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO3FFQUE0QjtBQUcxQjtJQUFULE1BQU0sRUFBRTsyREFBbUQ7QUFDbEQ7SUFBVCxNQUFNLEVBQUU7MERBQWtEO0FBVC9DLHlCQUF5QjtJQUxyQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLG0yREFBa0Q7O0tBRWxELENBQUM7R0FDVyx5QkFBeUIsQ0EwQ3JDO1NBMUNZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei1uYXYnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek5hdkNvbXBvbmVudCB7XG5cdC8vIElucHV0c1xuXHRASW5wdXQoKSBicmFuZFRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHVzZXJJc0xvZ2dlZDogYm9vbGVhbjtcblx0QElucHV0KCkgdXNlck1lbnVUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHVzZXJNZW51TG9nb3V0VGV4dDogc3RyaW5nO1xuXG5cdC8vIE91dHB1dHNcblx0QE91dHB1dCgpIG9uTG9nb3V0OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBvbkJyYW5kOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Ly8gTW9kZWxzXG5cdHVzZXJNZW51U3RhdGU6IGJvb2xlYW47XG5cblx0Ly8gSW5qZWN0IHNlcnZpY2VzXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZTogTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSkgeyB9XG5cblx0Ly8gQ3VzdG9tIGV2ZW50c1xuXHRvblRvZ2dsZU1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS50b2dnbGVTdGF0ZSgpO1xuXHR9XG5cblx0b25Ub2dnbGVVc2VyTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy51c2VyTWVudVN0YXRlID0gIXRoaXMudXNlck1lbnVTdGF0ZTtcblx0fVxuXG5cdG9uTG9nb3V0Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIEVtaXQgbG9nb3V0XG5cdFx0dGhpcy5vbkxvZ291dC5lbWl0KCk7XG5cblx0XHQvLyBDbG9zZSB1c2VyIG1lbnVcblx0XHR0aGlzLnVzZXJNZW51U3RhdGUgPSBmYWxzZTtcblx0fVxuXG5cdG9uQnJhbmRMaW5rKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLm9uQnJhbmQuZW1pdCgpO1xuXHR9XG59XG4iXX0=