import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgxGustavguezNavItemComponent = /** @class */ (function () {
    function NgxGustavguezNavItemComponent() {
        this.onNavItem = new EventEmitter();
    }
    // Custome events
    NgxGustavguezNavItemComponent.prototype.onNavItemClick = function (event) {
        event.preventDefault();
        this.onNavItem.emit(this.navItem);
    };
    NgxGustavguezNavItemComponent.prototype.onNavItemChild = function (child) {
        this.onNavItem.emit(child);
    };
    __decorate([
        Input()
    ], NgxGustavguezNavItemComponent.prototype, "navItem", void 0);
    __decorate([
        Input()
    ], NgxGustavguezNavItemComponent.prototype, "isParent", void 0);
    __decorate([
        Input()
    ], NgxGustavguezNavItemComponent.prototype, "state", void 0);
    __decorate([
        Output()
    ], NgxGustavguezNavItemComponent.prototype, "onNavItem", void 0);
    NgxGustavguezNavItemComponent = __decorate([
        Component({
            selector: '[ngxGustavguezNavItem]',
            template: "<a \n    *ngIf=\"navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    [routerLink]=\"navItem.action\"\n    routerLinkActive=\"active\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<a \n    *ngIf=\"!navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<ng-container *ngIf=\"navItem.childs\">\n    <ul \n        [style.display]=\"state ? 'block' : 'none'\"\n        class=\"nav nav-treeview\">\n        <li \n            class=\"nav-item\"\n            ngxGustavguezNavItem\n            (onNavItem)=\"onNavItemChild($event)\"\n            [navItem]=\"child\"\n            *ngFor=\"let child of navItem.childs\"></li>\n    </ul>\n</ng-container>",
            styles: [""]
        })
    ], NgxGustavguezNavItemComponent);
    return NgxGustavguezNavItemComponent;
}());
export { NgxGustavguezNavItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFO0lBQUE7UUFNVyxjQUFTLEdBQTRDLElBQUksWUFBWSxFQUFFLENBQUM7SUFXbkYsQ0FBQztJQVRBLGlCQUFpQjtJQUNqQixzREFBYyxHQUFkLFVBQWUsS0FBaUI7UUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0RBQWMsR0FBZCxVQUFlLEtBQWdDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFkUTtRQUFSLEtBQUssRUFBRTtrRUFBb0M7SUFDbkM7UUFBUixLQUFLLEVBQUU7bUVBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO2dFQUFnQjtJQUVkO1FBQVQsTUFBTSxFQUFFO29FQUF5RTtJQU50RSw2QkFBNkI7UUFMekMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQywwaUNBQXVEOztTQUV2RCxDQUFDO09BQ1csNkJBQTZCLENBaUJ6QztJQUFELG9DQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWwgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW5hdi1pdGVtLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW25neEd1c3Rhdmd1ZXpOYXZJdGVtXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LW5hdi1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Db21wb25lbnQge1xuXHQvLyBJbnB1dHNcblx0QElucHV0KCkgbmF2SXRlbTogTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbDtcblx0QElucHV0KCkgaXNQYXJlbnQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHN0YXRlOiBib29sZWFuO1xuXG5cdEBPdXRwdXQoKSBvbk5hdkl0ZW06IEV2ZW50RW1pdHRlcjxOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBDdXN0b21lIGV2ZW50c1xuXHRvbk5hdkl0ZW1DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5vbk5hdkl0ZW0uZW1pdCh0aGlzLm5hdkl0ZW0pO1xuXHR9XG5cblx0b25OYXZJdGVtQ2hpbGQoY2hpbGQ6IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLm9uTmF2SXRlbS5lbWl0KGNoaWxkKTtcblx0fVxufVxuIl19