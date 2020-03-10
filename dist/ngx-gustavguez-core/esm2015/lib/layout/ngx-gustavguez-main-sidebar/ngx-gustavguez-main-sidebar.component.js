import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { ArrayUtility } from '../../utilities/array.utility';
let NgxGustavguezMainSidebarComponent = class NgxGustavguezMainSidebarComponent {
    //Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
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
            this.menuItemsStates[menuItem.id] = (menuItem.id in this.menuItemsStates) ? !this.menuItemsStates[menuItem.id] : false;
        }
        else {
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
NgxGustavguezMainSidebarComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-main-sidebar',
        template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLink($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    class=\"nav-item has-treeview\" \n                    *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ng-container *ngIf=\"menuItem.childs\">\n                        <ul \n                            [style.display]=\"(menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined) ? 'block' : 'none'\"\n                            class=\"nav nav-treeview\">\n                            <li \n                                class=\"nav-item\" menuItemStates\n                                [class.active]=\"child.isActive\"\n                                *ngFor=\"let child of menuItem.childs\">\n                                <a \n                                    (click)=\"onMenuItemClick($event, child)\"\n                                    [routerLink]=\"child.action\"\n                                    routerLinkActive=\"active\"\n                                    href=\"#\" \n                                    class=\"nav-link\">\n                                    <i class=\"nav-icon {{ child.icon }}\"></i>\n                                    <p>{{ child.display }}</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </ng-container>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
        styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
    })
], NgxGustavguezMainSidebarComponent);
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTzdELElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0lBWTFDLGlCQUFpQjtJQUNqQixZQUNZLCtCQUFnRTtRQUFoRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQ3hFLENBQUM7SUFFTCxtQkFBbUI7SUFDbkIsUUFBUTtRQUNKLFdBQVc7UUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtJQUNmLGVBQWUsQ0FBQyxLQUFpQixFQUFFLFFBQStCO1FBQzlELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixPQUFPO1FBQ1AsSUFBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QyxjQUFjO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzFIO2FBQU07WUFDSCxlQUFlO1lBQ2YsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLGVBQWU7UUFDZixJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBRUosQ0FBQTs7WUFqQ2dELCtCQUErQjs7QUFabkU7SUFBUixLQUFLLEVBQUU7cUVBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO21FQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTt1RUFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7cUVBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO21FQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtvRUFBb0M7QUFQbkMsaUNBQWlDO0lBTDdDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsdzJHQUEyRDs7S0FFOUQsQ0FBQztHQUNXLGlDQUFpQyxDQStDN0M7U0EvQ1ksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWVudUl0ZW0gfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW1lbnUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgYnJhbmRUaXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJyYW5kSW1nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlcklzTG9nZ2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHVzZXJBdmF0YXI6IHN0cmluZztcbiAgICBASW5wdXQoKSB1c2VyTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1lbnVJdGVtczogTmd4R3VzdGF2Z3Vlek1lbnVJdGVtW107XG5cbiAgICAvL01vZGVsc1xuICAgIG1lbnVJdGVtc1N0YXRlczogYW55O1xuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBuZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlOiBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy9Jbml0IHZhcnNcbiAgICAgICAgdGhpcy5tZW51SXRlbXNTdGF0ZXMgPSB7fTtcbiAgICB9XG5cbiAgICAvL0N1c3RvbSBldmVudHNcbiAgICBvbk1lbnVJdGVtQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIG1lbnVJdGVtOiBOZ3hHdXN0YXZndWV6TWVudUl0ZW0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvL0NoZWNrXG4gICAgICAgIGlmKEFycmF5VXRpbGl0eS5oYXNWYWx1ZShtZW51SXRlbS5jaGlsZHMpKSB7XG4gICAgICAgICAgICAvL1RvZ2dsZSBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5tZW51SXRlbXNTdGF0ZXNbbWVudUl0ZW0uaWRdID0gKG1lbnVJdGVtLmlkIGluIHRoaXMubWVudUl0ZW1zU3RhdGVzKSA/ICF0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vQ2xvc2Ugc2lkZWJhclxuICAgICAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnJhbmRMaW5rKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vQ2xvc2Ugc2lkZWJhclxuICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQ2xvc2VTaWRlYmFyKCl7XG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgfVxuXG59XG4iXX0=