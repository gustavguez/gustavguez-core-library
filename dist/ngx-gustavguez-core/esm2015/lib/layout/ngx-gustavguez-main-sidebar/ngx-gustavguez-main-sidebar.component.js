import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { ArrayUtility } from '../../utilities/array.utility';
let NgxGustavguezMainSidebarComponent = class NgxGustavguezMainSidebarComponent {
    // Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Outputs
        this.onBrandLink = new EventEmitter();
    }
    // On component init
    ngOnInit() {
        // Init vars
        this.menuItemsStates = {};
    }
    // Custom events
    onMenuItemClick(menuItem) {
        // Check
        if (ArrayUtility.hasValue(menuItem.childs)) {
            // Toggle state
            this.menuItemsStates[menuItem.id] = menuItem.id in this.menuItemsStates ? !this.menuItemsStates[menuItem.id] : false;
        }
        else {
            // Close sidebar
            this.ngxGustavguezMainSidebarService.changeState(false);
        }
    }
    onBrandLinkClick(event) {
        event.preventDefault();
        // Close sidebar
        this.ngxGustavguezMainSidebarService.changeState(false);
        // Event emitter
        this.onBrandLink.emit();
    }
    onCloseSidebar() {
        this.ngxGustavguezMainSidebarService.changeState(false);
    }
};
NgxGustavguezMainSidebarComponent.ctorParameters = () => [
    { type: NgxGustavguezMainSidebarService }
];
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "brandTitle", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "brandImg", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "userIsLogged", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "userAvatar", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "userName", void 0);
__decorate([
    Input()
], NgxGustavguezMainSidebarComponent.prototype, "menuItems", void 0);
__decorate([
    Output()
], NgxGustavguezMainSidebarComponent.prototype, "onBrandLink", void 0);
NgxGustavguezMainSidebarComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-main-sidebar',
        template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLinkClick($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    class=\"nav-item has-treeview\"\n                    ngxGustavguezNavItem\n                    [navItem]=\"menuItem\" \n                    [isParent]=\"true\"\n                    [state]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    (onNavItem)=\"onMenuItemClick($event)\"\n                    *ngFor=\"let menuItem of menuItems\"></li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
        styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
    })
], NgxGustavguezMainSidebarComponent);
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVE3RCxJQUFhLGlDQUFpQyxHQUE5QyxNQUFhLGlDQUFpQztJQWU3QyxrQkFBa0I7SUFDbEIsWUFDUywrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVJ6RSxVQUFVO1FBQ0EsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVEzRCxDQUFDO0lBRUwsb0JBQW9CO0lBQ3BCLFFBQVE7UUFDUCxZQUFZO1FBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixlQUFlLENBQUMsUUFBbUM7UUFDbEQsUUFBUTtRQUNSLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsZUFBZTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3JIO2FBQU07WUFDTixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RDtJQUNGLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEQsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGNBQWM7UUFDYixJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FFRCxDQUFBOztZQW5DMEMsK0JBQStCOztBQWZoRTtJQUFSLEtBQUssRUFBRTtxRUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3VFQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtxRUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO29FQUF3QztBQUd0QztJQUFULE1BQU0sRUFBRTtzRUFBc0Q7QUFWbkQsaUNBQWlDO0lBTDdDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsOGhFQUEyRDs7S0FFM0QsQ0FBQztHQUNXLGlDQUFpQyxDQW9EN0M7U0FwRFksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgYnJhbmRJbWc6IHN0cmluZztcblx0QElucHV0KCkgdXNlcklzTG9nZ2VkOiBib29sZWFuO1xuXHRASW5wdXQoKSB1c2VyQXZhdGFyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHVzZXJOYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG1lbnVJdGVtczogTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbFtdO1xuXG5cdC8vIE91dHB1dHNcblx0QE91dHB1dCgpIG9uQnJhbmRMaW5rOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Ly8gTW9kZWxzXG5cdG1lbnVJdGVtc1N0YXRlczogYW55O1xuXG5cdC8vIEluamVjdCBzZXJ2aWNlc1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2Vcblx0KSB7IH1cblxuXHQvLyBPbiBjb21wb25lbnQgaW5pdFxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBJbml0IHZhcnNcblx0XHR0aGlzLm1lbnVJdGVtc1N0YXRlcyA9IHt9O1xuXHR9XG5cblx0Ly8gQ3VzdG9tIGV2ZW50c1xuXHRvbk1lbnVJdGVtQ2xpY2sobWVudUl0ZW06IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWwpOiB2b2lkIHtcblx0XHQvLyBDaGVja1xuXHRcdGlmIChBcnJheVV0aWxpdHkuaGFzVmFsdWUobWVudUl0ZW0uY2hpbGRzKSkge1xuXHRcdFx0Ly8gVG9nZ2xlIHN0YXRlXG5cdFx0XHR0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gPSBtZW51SXRlbS5pZCBpbiB0aGlzLm1lbnVJdGVtc1N0YXRlcyA/ICF0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gOiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2xvc2Ugc2lkZWJhclxuXHRcdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRvbkJyYW5kTGlua0NsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdC8vIENsb3NlIHNpZGViYXJcblx0XHR0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuXG5cdFx0Ly8gRXZlbnQgZW1pdHRlclxuXHRcdHRoaXMub25CcmFuZExpbmsuZW1pdCgpO1xuXHR9XG5cblx0b25DbG9zZVNpZGViYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcblx0fVxuXG59XG4iXX0=