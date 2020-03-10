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
    onMenuItemClick(menuItem) {
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
        template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLink($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    class=\"nav-item has-treeview\"\n                    ngxGustavguezNavItem\n                    [navItem]=\"menuItem\" \n                    [isParent]=\"true\"\n                    [state]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    (onNavItem)=\"onMenuItemClick($event)\"\n                    *ngFor=\"let menuItem of menuItems\"></li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
        styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
    })
], NgxGustavguezMainSidebarComponent);
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUTdELElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0lBWTFDLGlCQUFpQjtJQUNqQixZQUNZLCtCQUFnRTtRQUFoRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQ3hFLENBQUM7SUFFTCxtQkFBbUI7SUFDbkIsUUFBUTtRQUNKLFdBQVc7UUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtJQUNmLGVBQWUsQ0FBQyxRQUFtQztRQUMvQyxPQUFPO1FBQ1AsSUFBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QyxjQUFjO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzFIO2FBQU07WUFDSCxlQUFlO1lBQ2YsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLGVBQWU7UUFDZixJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBRUosQ0FBQTs7WUEvQmdELCtCQUErQjs7QUFabkU7SUFBUixLQUFLLEVBQUU7cUVBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO21FQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTt1RUFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7cUVBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO21FQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtvRUFBd0M7QUFQdkMsaUNBQWlDO0lBTDdDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMseWhFQUEyRDs7S0FFOUQsQ0FBQztHQUNXLGlDQUFpQyxDQTZDN0M7U0E3Q1ksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBicmFuZEltZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVzZXJJc0xvZ2dlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB1c2VyQXZhdGFyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlck5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtZW51SXRlbXM6IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWxbXTtcblxuICAgIC8vTW9kZWxzXG4gICAgbWVudUl0ZW1zU3RhdGVzOiBhbnk7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvL0luaXQgdmFyc1xuICAgICAgICB0aGlzLm1lbnVJdGVtc1N0YXRlcyA9IHt9O1xuICAgIH1cblxuICAgIC8vQ3VzdG9tIGV2ZW50c1xuICAgIG9uTWVudUl0ZW1DbGljayhtZW51SXRlbTogTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbCkge1xuICAgICAgICAvL0NoZWNrXG4gICAgICAgIGlmKEFycmF5VXRpbGl0eS5oYXNWYWx1ZShtZW51SXRlbS5jaGlsZHMpKSB7XG4gICAgICAgICAgICAvL1RvZ2dsZSBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5tZW51SXRlbXNTdGF0ZXNbbWVudUl0ZW0uaWRdID0gKG1lbnVJdGVtLmlkIGluIHRoaXMubWVudUl0ZW1zU3RhdGVzKSA/ICF0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vQ2xvc2Ugc2lkZWJhclxuICAgICAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnJhbmRMaW5rKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vQ2xvc2Ugc2lkZWJhclxuICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQ2xvc2VTaWRlYmFyKCl7XG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgfVxuXG59XG4iXX0=