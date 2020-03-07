import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgxGustavguezMainSidebarComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainSidebarComponent() {
        //Outputs
        this.onMenuItem = new EventEmitter();
    }
    //On component init
    NgxGustavguezMainSidebarComponent.prototype.ngOnInit = function () {
    };
    //Custom events
    NgxGustavguezMainSidebarComponent.prototype.onMenuItemClick = function (event, mouseItem) {
        event.preventDefault();
        //Emit click for now
        this.onMenuItem.emit(mouseItem);
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
            template: "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n    <!-- Brand Logo -->\n    <a class=\"brand-link\">\n        <img \n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">Men\u00FA</li>\n\n                <li class=\"nav-item has-treeview menu-open\" *ngFor=\"let menuItem of menuItems\">\n                    <a \n                        (click)=\"onMenuItemClick($event, menuItem)\"\n                        href=\"#\" \n                        class=\"nav-link\">\n                        <i class=\"nav-icon {{ menuItem.icon }}\"></i>\n                        <p>\n                            {{ menuItem.display }}\n                            <i class=\"right fas fa-angle-left\"></i>\n                        </p>\n                    </a>\n\n                    <ul class=\"nav nav-treeview\" style=\"display: block;\" *ngIf=\"false\">\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item has-treeview menu-open\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>\n                                    Level 2\n                                    <i class=\"right fas fa-angle-left\"></i>\n                                </p>\n                            </a>\n                            \n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link\">\n                                <i class=\"far fa-circle nav-icon\"></i>\n                                <p>Level 2</p>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>",
            styles: [""]
        })
    ], NgxGustavguezMainSidebarComponent);
    return NgxGustavguezMainSidebarComponent;
}());
export { NgxGustavguezMainSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRTtJQWFJLGlCQUFpQjtJQUNqQjtRQUxBLFNBQVM7UUFDQyxlQUFVLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7SUFJL0QsQ0FBQztJQUVqQixtQkFBbUI7SUFDbkIsb0RBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxlQUFlO0lBQ2YsMkRBQWUsR0FBZixVQUFnQixLQUFpQixFQUFFLFNBQWdDO1FBQy9ELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQXZCUTtRQUFSLEtBQUssRUFBRTt5RUFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7dUVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOzJFQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTt5RUFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7dUVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3dFQUFvQztJQUdsQztRQUFULE1BQU0sRUFBRTt5RUFBc0U7SUFWdEUsaUNBQWlDO1FBTDdDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsd2pHQUEyRDs7U0FFOUQsQ0FBQztPQUNXLGlDQUFpQyxDQTJCN0M7SUFBRCx3Q0FBQztDQUFBLEFBM0JELElBMkJDO1NBM0JZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNZW51SXRlbSB9IGZyb20gJy4vbmd4LWd1dGF2Z3Vlei1tZW51LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBicmFuZEltZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVzZXJJc0xvZ2dlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB1c2VyQXZhdGFyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdXNlck5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtZW51SXRlbXM6IE5neEd1c3Rhdmd1ZXpNZW51SXRlbVtdO1xuXG4gICAgLy9PdXRwdXRzXG4gICAgQE91dHB1dCgpIG9uTWVudUl0ZW06IEV2ZW50RW1pdHRlcjxOZ3hHdXN0YXZndWV6TWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8vQ3VzdG9tIGV2ZW50c1xuICAgIG9uTWVudUl0ZW1DbGljayhldmVudDogTW91c2VFdmVudCwgbW91c2VJdGVtOiBOZ3hHdXN0YXZndWV6TWVudUl0ZW0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9FbWl0IGNsaWNrIGZvciBub3dcbiAgICAgICAgdGhpcy5vbk1lbnVJdGVtLmVtaXQobW91c2VJdGVtKTtcbiAgICB9XG5cbn1cbiJdfQ==