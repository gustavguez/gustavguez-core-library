import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { ArrayUtility } from '../../utilities/array.utility';
let NgxGustavguezMainSidebarComponent = class NgxGustavguezMainSidebarComponent {
    //Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Outputs
        this.onMenuItem = new EventEmitter();
    }
    //On component init
    ngOnInit() {
        //Init vars
        this.menuItemsStates = {};
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
            //Close sidebar
            this.ngxGustavguezMainSidebarService.changeState(false);
        }
    }
    onBrandLink(event) {
        event.preventDefault();
        //Close sidebar
        this.ngxGustavguezMainSidebarService.changeState(false);
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
], NgxGustavguezMainSidebarComponent.prototype, "onMenuItem", void 0);
NgxGustavguezMainSidebarComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-main-sidebar',
        template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLink($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">Men\u00FA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id]\"\n                    [class.active]=\"menuItem.isActive\"\n                    class=\"nav-item has-treeview\" \n                    *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ng-container *ngIf=\"menuItem.childs\">\n                        <ul \n                            [style.display]=\"menuItemsStates[menuItem.id] ? 'block' : 'none'\"\n                            class=\"nav nav-treeview\">\n                            <li \n                                class=\"nav-item\" menuItemStates\n                                [class.active]=\"child.isActive\"\n                                *ngFor=\"let child of menuItem.childs\">\n                                <a \n                                    (click)=\"onMenuItemClick($event, child)\"\n                                    href=\"#\" \n                                    class=\"nav-link\">\n                                    <i class=\"nav-icon {{ child.icon }}\"></i>\n                                    <p>{{ child.display }}</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </ng-container>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
        styles: [""]
    })
], NgxGustavguezMainSidebarComponent);
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU83RCxJQUFhLGlDQUFpQyxHQUE5QyxNQUFhLGlDQUFpQztJQWUxQyxpQkFBaUI7SUFDakIsWUFDWSwrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVI1RSxTQUFTO1FBQ0MsZUFBVSxHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTNFLENBQUM7SUFFTCxtQkFBbUI7SUFDbkIsUUFBUTtRQUNKLFdBQVc7UUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtJQUNmLGVBQWUsQ0FBQyxLQUFpQixFQUFFLFFBQStCO1FBQzlELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixPQUFPO1FBQ1AsSUFBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QyxjQUFjO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0gsb0JBQW9CO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRS9CLGVBQWU7WUFDZixJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFpQjtRQUN6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsZUFBZTtRQUNmLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FFSixDQUFBOztZQW5DZ0QsK0JBQStCOztBQWZuRTtJQUFSLEtBQUssRUFBRTtxRUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3VFQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtxRUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUVBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO29FQUFvQztBQUdsQztJQUFULE1BQU0sRUFBRTtxRUFBc0U7QUFWdEUsaUNBQWlDO0lBTDdDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsZ3NHQUEyRDs7S0FFOUQsQ0FBQztHQUNXLGlDQUFpQyxDQW9EN0M7U0FwRFksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWVudUl0ZW0gfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW1lbnUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgYnJhbmRUaXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJyYW5kSW1nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlcklzTG9nZ2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHVzZXJBdmF0YXI6IHN0cmluZztcbiAgICBASW5wdXQoKSB1c2VyTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1lbnVJdGVtczogTmd4R3VzdGF2Z3Vlek1lbnVJdGVtW107XG5cbiAgICAvL091dHB1dHNcbiAgICBAT3V0cHV0KCkgb25NZW51SXRlbTogRXZlbnRFbWl0dGVyPE5neEd1c3Rhdmd1ZXpNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgLy9Nb2RlbHNcbiAgICBtZW51SXRlbXNTdGF0ZXM6IGFueTtcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZTogTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZVxuICAgICkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vSW5pdCB2YXJzXG4gICAgICAgIHRoaXMubWVudUl0ZW1zU3RhdGVzID0ge307XG4gICAgfVxuXG4gICAgLy9DdXN0b20gZXZlbnRzXG4gICAgb25NZW51SXRlbUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBtZW51SXRlbTogTmd4R3VzdGF2Z3Vlek1lbnVJdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vQ2hlY2tcbiAgICAgICAgaWYoQXJyYXlVdGlsaXR5Lmhhc1ZhbHVlKG1lbnVJdGVtLmNoaWxkcykpIHtcbiAgICAgICAgICAgIC8vVG9nZ2xlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gPSAhdGhpcy5tZW51SXRlbXNTdGF0ZXNbbWVudUl0ZW0uaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9FbWl0IGNsaWNrIGZvciBub3dcbiAgICAgICAgICAgIHRoaXMub25NZW51SXRlbS5lbWl0KG1lbnVJdGVtKTtcblxuICAgICAgICAgICAgLy9DbG9zZSBzaWRlYmFyXG4gICAgICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CcmFuZExpbmsoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9DbG9zZSBzaWRlYmFyXG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgb25DbG9zZVNpZGViYXIoKXtcbiAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbn1cbiJdfQ==