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
    NgxGustavguezMainSidebarComponent.prototype.onMenuItemClick = function (event, menuItem) {
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
            template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLink($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    class=\"nav-item has-treeview\" \n                    *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ng-container *ngIf=\"menuItem.childs\">\n                        <ul \n                            [style.display]=\"(menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined) ? 'block' : 'none'\"\n                            class=\"nav nav-treeview\">\n                            <li \n                                class=\"nav-item\" menuItemStates\n                                [class.active]=\"child.isActive\"\n                                *ngFor=\"let child of menuItem.childs\">\n                                <a \n                                    (click)=\"onMenuItemClick($event, child)\"\n                                    [routerLink]=\"child.action\"\n                                    routerLinkActive=\"active\"\n                                    href=\"#\" \n                                    class=\"nav-link\">\n                                    <i class=\"nav-icon {{ child.icon }}\"></i>\n                                    <p>{{ child.display }}</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </ng-container>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
            styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
        })
    ], NgxGustavguezMainSidebarComponent);
    return NgxGustavguezMainSidebarComponent;
}());
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTzdEO0lBWUksaUJBQWlCO0lBQ2pCLDJDQUNZLCtCQUFnRTtRQUFoRSxvQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO0lBQ3hFLENBQUM7SUFFTCxtQkFBbUI7SUFDbkIsb0RBQVEsR0FBUjtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtJQUNmLDJEQUFlLEdBQWYsVUFBZ0IsS0FBaUIsRUFBRSxRQUErQjtRQUM5RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsT0FBTztRQUNQLElBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkMsY0FBYztZQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMxSDthQUFNO1lBQ0gsZUFBZTtZQUNmLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQsdURBQVcsR0FBWCxVQUFZLEtBQWlCO1FBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixlQUFlO1FBQ2YsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMERBQWMsR0FBZDtRQUNJLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBL0I0QywrQkFBK0I7O0lBWm5FO1FBQVIsS0FBSyxFQUFFO3lFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTt1RUFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7MkVBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO3lFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTt1RUFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7d0VBQW9DO0lBUG5DLGlDQUFpQztRQUw3QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLHcyR0FBMkQ7O1NBRTlELENBQUM7T0FDVyxpQ0FBaUMsQ0ErQzdDO0lBQUQsd0NBQUM7Q0FBQSxBQS9DRCxJQStDQztTQS9DWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNZW51SXRlbSB9IGZyb20gJy4vbmd4LWd1c3Rhdmd1ZXotbWVudS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9JbnB1dHNcbiAgICBASW5wdXQoKSBicmFuZFRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnJhbmRJbWc6IHN0cmluZztcbiAgICBASW5wdXQoKSB1c2VySXNMb2dnZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdXNlckF2YXRhcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWVudUl0ZW1zOiBOZ3hHdXN0YXZndWV6TWVudUl0ZW1bXTtcblxuICAgIC8vTW9kZWxzXG4gICAgbWVudUl0ZW1zU3RhdGVzOiBhbnk7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvL0luaXQgdmFyc1xuICAgICAgICB0aGlzLm1lbnVJdGVtc1N0YXRlcyA9IHt9O1xuICAgIH1cblxuICAgIC8vQ3VzdG9tIGV2ZW50c1xuICAgIG9uTWVudUl0ZW1DbGljayhldmVudDogTW91c2VFdmVudCwgbWVudUl0ZW06IE5neEd1c3Rhdmd1ZXpNZW51SXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vQ2hlY2tcbiAgICAgICAgaWYoQXJyYXlVdGlsaXR5Lmhhc1ZhbHVlKG1lbnVJdGVtLmNoaWxkcykpIHtcbiAgICAgICAgICAgIC8vVG9nZ2xlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gPSAobWVudUl0ZW0uaWQgaW4gdGhpcy5tZW51SXRlbXNTdGF0ZXMpID8gIXRoaXMubWVudUl0ZW1zU3RhdGVzW21lbnVJdGVtLmlkXSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9DbG9zZSBzaWRlYmFyXG4gICAgICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CcmFuZExpbmsoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9DbG9zZSBzaWRlYmFyXG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgb25DbG9zZVNpZGViYXIoKXtcbiAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbn1cbiJdfQ==