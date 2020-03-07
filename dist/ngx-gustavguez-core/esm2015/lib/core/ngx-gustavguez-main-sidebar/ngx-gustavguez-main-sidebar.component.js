import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArrayUtility } from '../../utilities/array.utility';
let NgxGustavguezMainSidebarComponent = class NgxGustavguezMainSidebarComponent {
    //Inject services
    constructor() {
        //Outputs
        this.onMenuItem = new EventEmitter();
    }
    //On component init
    ngOnInit() {
    }
    //Custom events
    onMenuItemClick(event, menuItem) {
        event.preventDefault();
        //Check
        if (ArrayUtility.hasValue(menuItem.childs)) {
            //Toggle state
            this.menuItemsStates[menuItem.id] = !this.menuItemsStates[menuItem.id];
        }
        else {
            //Emit click for now
            this.onMenuItem.emit(menuItem);
        }
    }
    onBrandLink(event) {
        event.preventDefault();
        //Do nothing for now
    }
};
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
], NgxGustavguezMainSidebarComponent.prototype, "onMenuItem", void 0);
NgxGustavguezMainSidebarComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-main-sidebar',
        template: "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLink($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">Men\u00FA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id]\"\n                    [class.active]=\"menuItem.isActive\"\n                    class=\"nav-item has-treeview menu-open\" \n                    *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ng-container *ngIf=\"menuItem.childs\">\n                        <ul \n                            [style.display]=\"menuItemsStates[menuItem.id] ? 'block' : 'none'\"\n                            class=\"nav nav-treeview\">\n                            <li \n                                class=\"nav-item\" menuItemStates\n                                [class.active]=\"child.isActive\"\n                                *ngFor=\"let child of menuItem.childs\">\n                                <a \n                                    (click)=\"onMenuItemClick($event, child)\"\n                                    href=\"#\" \n                                    class=\"nav-link\">\n                                    <i class=\"nav-icon {{ child.icon }}\"></i>\n                                    <p>{{ child.display }}</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </ng-container>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>",
        styles: [""]
    })
], NgxGustavguezMainSidebarComponent);
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPN0QsSUFBYSxpQ0FBaUMsR0FBOUMsTUFBYSxpQ0FBaUM7SUFlMUMsaUJBQWlCO0lBQ2pCO1FBUEEsU0FBUztRQUNDLGVBQVUsR0FBd0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU0vRCxDQUFDO0lBRWpCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7SUFDZixlQUFlLENBQUMsS0FBaUIsRUFBRSxRQUErQjtRQUM5RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsT0FBTztRQUNQLElBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkMsY0FBYztZQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNILG9CQUFvQjtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLG9CQUFvQjtJQUN4QixDQUFDO0NBRUosQ0FBQTtBQXRDWTtJQUFSLEtBQUssRUFBRTtxRUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3VFQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtxRUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO29FQUFvQztBQUdsQztJQUFULE1BQU0sRUFBRTtxRUFBc0U7QUFWdEUsaUNBQWlDO0lBTDdDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMscXBHQUEyRDs7S0FFOUQsQ0FBQztHQUNXLGlDQUFpQyxDQXdDN0M7U0F4Q1ksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek1lbnVJdGVtIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei1tZW51LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQXJyYXlVdGlsaXR5IH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2FycmF5LnV0aWxpdHknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBicmFuZEltZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVzZXJJc0xvZ2dlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB1c2VyQXZhdGFyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlck5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtZW51SXRlbXM6IE5neEd1c3Rhdmd1ZXpNZW51SXRlbVtdO1xuXG4gICAgLy9PdXRwdXRzXG4gICAgQE91dHB1dCgpIG9uTWVudUl0ZW06IEV2ZW50RW1pdHRlcjxOZ3hHdXN0YXZndWV6TWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIC8vTW9kZWxzXG4gICAgbWVudUl0ZW1zU3RhdGVzOiBhbnk7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLy9DdXN0b20gZXZlbnRzXG4gICAgb25NZW51SXRlbUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBtZW51SXRlbTogTmd4R3VzdGF2Z3Vlek1lbnVJdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vQ2hlY2tcbiAgICAgICAgaWYoQXJyYXlVdGlsaXR5Lmhhc1ZhbHVlKG1lbnVJdGVtLmNoaWxkcykpIHtcbiAgICAgICAgICAgIC8vVG9nZ2xlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gPSAhdGhpcy5tZW51SXRlbXNTdGF0ZXNbbWVudUl0ZW0uaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9FbWl0IGNsaWNrIGZvciBub3dcbiAgICAgICAgICAgIHRoaXMub25NZW51SXRlbS5lbWl0KG1lbnVJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnJhbmRMaW5rKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vRG8gbm90aGluZyBmb3Igbm93XG4gICAgfVxuXG59XG4iXX0=