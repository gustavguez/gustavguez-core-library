import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    onMenuItemClick(event, mouseItem) {
        event.preventDefault();
        //Emit click for now
        this.onMenuItem.emit(mouseItem);
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
        template: "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLink($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">Men\u00FA</li>\n\n                <li class=\"nav-item has-treeview menu-open\" *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ul class=\"nav nav-treeview\" style=\"display: block;\" *ngIf=\"false\">\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item has-treeview menu-open\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>\n                                    Level 2\n                                    <i class=\"right fas fa-angle-left\"></i>\n                                </p>\n                            </a>\n                            \n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>",
        styles: [""]
    })
], NgxGustavguezMainSidebarComponent);
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRSxJQUFhLGlDQUFpQyxHQUE5QyxNQUFhLGlDQUFpQztJQWExQyxpQkFBaUI7SUFDakI7UUFMQSxTQUFTO1FBQ0MsZUFBVSxHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSS9ELENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtJQUNmLGVBQWUsQ0FBQyxLQUFpQixFQUFFLFNBQWdDO1FBQy9ELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFpQjtRQUN6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsb0JBQW9CO0lBQ3hCLENBQUM7Q0FFSixDQUFBO0FBOUJZO0lBQVIsS0FBSyxFQUFFO3FFQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTttRUFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7dUVBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFO3FFQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTttRUFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7b0VBQW9DO0FBR2xDO0lBQVQsTUFBTSxFQUFFO3FFQUFzRTtBQVZ0RSxpQ0FBaUM7SUFMN0MsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDZCQUE2QjtRQUN2Qyx5c0dBQTJEOztLQUU5RCxDQUFDO0dBQ1csaUNBQWlDLENBZ0M3QztTQWhDWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWVudUl0ZW0gfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW1lbnUtaXRlbS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgYnJhbmRUaXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJyYW5kSW1nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlcklzTG9nZ2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHVzZXJBdmF0YXI6IHN0cmluZztcbiAgICBASW5wdXQoKSB1c2VyTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1lbnVJdGVtczogTmd4R3VzdGF2Z3Vlek1lbnVJdGVtW107XG5cbiAgICAvL091dHB1dHNcbiAgICBAT3V0cHV0KCkgb25NZW51SXRlbTogRXZlbnRFbWl0dGVyPE5neEd1c3Rhdmd1ZXpNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLy9DdXN0b20gZXZlbnRzXG4gICAgb25NZW51SXRlbUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBtb3VzZUl0ZW06IE5neEd1c3Rhdmd1ZXpNZW51SXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL0VtaXQgY2xpY2sgZm9yIG5vd1xuICAgICAgICB0aGlzLm9uTWVudUl0ZW0uZW1pdChtb3VzZUl0ZW0pO1xuICAgIH1cblxuICAgIG9uQnJhbmRMaW5rKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vRG8gbm90aGluZyBmb3Igbm93XG4gICAgfVxuXG59XG4iXX0=