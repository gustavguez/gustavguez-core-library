import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { ArrayUtility } from '../../utilities/array.utility';
var NgxGustavguezMainSidebarComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainSidebarComponent(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Outputs
        this.onMenuItem = new EventEmitter();
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
            this.menuItemsStates[menuItem.id] = !this.menuItemsStates[menuItem.id];
        }
        else {
            //Emit click for now
            this.onMenuItem.emit(menuItem);
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
    return NgxGustavguezMainSidebarComponent;
}());
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU83RDtJQWVJLGlCQUFpQjtJQUNqQiwyQ0FDWSwrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVI1RSxTQUFTO1FBQ0MsZUFBVSxHQUF3QyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTNFLENBQUM7SUFFTCxtQkFBbUI7SUFDbkIsb0RBQVEsR0FBUjtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtJQUNmLDJEQUFlLEdBQWYsVUFBZ0IsS0FBaUIsRUFBRSxRQUErQjtRQUM5RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsT0FBTztRQUNQLElBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkMsY0FBYztZQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNILG9CQUFvQjtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUvQixlQUFlO1lBQ2YsSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCx1REFBVyxHQUFYLFVBQVksS0FBaUI7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLGVBQWU7UUFDZixJQUFJLENBQUMsK0JBQStCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwwREFBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFqQzRDLCtCQUErQjs7SUFmbkU7UUFBUixLQUFLLEVBQUU7eUVBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3VFQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTsyRUFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7eUVBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3VFQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTt3RUFBb0M7SUFHbEM7UUFBVCxNQUFNLEVBQUU7eUVBQXNFO0lBVnRFLGlDQUFpQztRQUw3QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLGdzR0FBMkQ7O1NBRTlELENBQUM7T0FDVyxpQ0FBaUMsQ0FvRDdDO0lBQUQsd0NBQUM7Q0FBQSxBQXBERCxJQW9EQztTQXBEWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNZW51SXRlbSB9IGZyb20gJy4vbmd4LWd1c3Rhdmd1ZXotbWVudS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9JbnB1dHNcbiAgICBASW5wdXQoKSBicmFuZFRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnJhbmRJbWc6IHN0cmluZztcbiAgICBASW5wdXQoKSB1c2VySXNMb2dnZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdXNlckF2YXRhcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWVudUl0ZW1zOiBOZ3hHdXN0YXZndWV6TWVudUl0ZW1bXTtcblxuICAgIC8vT3V0cHV0c1xuICAgIEBPdXRwdXQoKSBvbk1lbnVJdGVtOiBFdmVudEVtaXR0ZXI8Tmd4R3VzdGF2Z3Vlek1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICAvL01vZGVsc1xuICAgIG1lbnVJdGVtc1N0YXRlczogYW55O1xuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBuZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlOiBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy9Jbml0IHZhcnNcbiAgICAgICAgdGhpcy5tZW51SXRlbXNTdGF0ZXMgPSB7fTtcbiAgICB9XG5cbiAgICAvL0N1c3RvbSBldmVudHNcbiAgICBvbk1lbnVJdGVtQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIG1lbnVJdGVtOiBOZ3hHdXN0YXZndWV6TWVudUl0ZW0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9DaGVja1xuICAgICAgICBpZihBcnJheVV0aWxpdHkuaGFzVmFsdWUobWVudUl0ZW0uY2hpbGRzKSkge1xuICAgICAgICAgICAgLy9Ub2dnbGUgc3RhdGVcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW1zU3RhdGVzW21lbnVJdGVtLmlkXSA9ICF0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL0VtaXQgY2xpY2sgZm9yIG5vd1xuICAgICAgICAgICAgdGhpcy5vbk1lbnVJdGVtLmVtaXQobWVudUl0ZW0pO1xuXG4gICAgICAgICAgICAvL0Nsb3NlIHNpZGViYXJcbiAgICAgICAgICAgIHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJyYW5kTGluayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL0Nsb3NlIHNpZGViYXJcbiAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlU2lkZWJhcigpe1xuICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgIH1cblxufVxuIl19