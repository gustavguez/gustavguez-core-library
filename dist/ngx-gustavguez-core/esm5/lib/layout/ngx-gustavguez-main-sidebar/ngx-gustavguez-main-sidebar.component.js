import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { ArrayUtility } from '../../utilities/array.utility';
var NgxGustavguezMainSidebarComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainSidebarComponent(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
    }
    //On component init
    NgxGustavguezMainSidebarComponent.prototype.ngOnInit = function () {
        //Init vars
        this.menuItemsStates = {};
    };
    //Custom events
    NgxGustavguezMainSidebarComponent.prototype.onMenuItemClick = function (menuItem) {
        //Check
        if (ArrayUtility.hasValue(menuItem.childs)) {
            //Toggle state
            this.menuItemsStates[menuItem.id] = (menuItem.id in this.menuItemsStates) ? !this.menuItemsStates[menuItem.id] : false;
        }
        else {
            //Close sidebar
            this.ngxGustavguezMainSidebarService.changeState(false);
        }
    };
    NgxGustavguezMainSidebarComponent.prototype.onBrandLink = function (event) {
        event.preventDefault();
        //Close sidebar
        this.ngxGustavguezMainSidebarService.changeState(false);
    };
    NgxGustavguezMainSidebarComponent.prototype.onCloseSidebar = function () {
        this.ngxGustavguezMainSidebarService.changeState(false);
    };
    NgxGustavguezMainSidebarComponent.ctorParameters = function () { return [
        { type: NgxGustavguezMainSidebarService }
    ]; };
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
    return NgxGustavguezMainSidebarComponent;
}());
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUTdEO0lBWUksaUJBQWlCO0lBQ2pCLDJDQUNZLCtCQUFnRTtRQUFoRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQ3hFLENBQUM7SUFFTCxtQkFBbUI7SUFDbkIsb0RBQVEsR0FBUjtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtJQUNmLDJEQUFlLEdBQWYsVUFBZ0IsUUFBbUM7UUFDL0MsT0FBTztRQUNQLElBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkMsY0FBYztZQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMxSDthQUFNO1lBQ0gsZUFBZTtZQUNmLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQsdURBQVcsR0FBWCxVQUFZLEtBQWlCO1FBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixlQUFlO1FBQ2YsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMERBQWMsR0FBZDtRQUNJLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBN0I0QywrQkFBK0I7O0lBWm5FO1FBQVIsS0FBSyxFQUFFO3lFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTt1RUFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7MkVBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO3lFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTt1RUFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7d0VBQXdDO0lBUHZDLGlDQUFpQztRQUw3QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLHloRUFBMkQ7O1NBRTlELENBQUM7T0FDVyxpQ0FBaUMsQ0E2QzdDO0lBQUQsd0NBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWwgfSBmcm9tICcuLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgYnJhbmRUaXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJyYW5kSW1nOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlcklzTG9nZ2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHVzZXJBdmF0YXI6IHN0cmluZztcbiAgICBASW5wdXQoKSB1c2VyTmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1lbnVJdGVtczogTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbFtdO1xuXG4gICAgLy9Nb2RlbHNcbiAgICBtZW51SXRlbXNTdGF0ZXM6IGFueTtcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZTogTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZVxuICAgICkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vSW5pdCB2YXJzXG4gICAgICAgIHRoaXMubWVudUl0ZW1zU3RhdGVzID0ge307XG4gICAgfVxuXG4gICAgLy9DdXN0b20gZXZlbnRzXG4gICAgb25NZW51SXRlbUNsaWNrKG1lbnVJdGVtOiBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsKSB7XG4gICAgICAgIC8vQ2hlY2tcbiAgICAgICAgaWYoQXJyYXlVdGlsaXR5Lmhhc1ZhbHVlKG1lbnVJdGVtLmNoaWxkcykpIHtcbiAgICAgICAgICAgIC8vVG9nZ2xlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gPSAobWVudUl0ZW0uaWQgaW4gdGhpcy5tZW51SXRlbXNTdGF0ZXMpID8gIXRoaXMubWVudUl0ZW1zU3RhdGVzW21lbnVJdGVtLmlkXSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9DbG9zZSBzaWRlYmFyXG4gICAgICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CcmFuZExpbmsoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9DbG9zZSBzaWRlYmFyXG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgb25DbG9zZVNpZGViYXIoKXtcbiAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbn1cbiJdfQ==