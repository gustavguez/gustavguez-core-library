import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgxGustavguezNavItemComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezNavItemComponent() {
        this.onNavItem = new EventEmitter();
    }
    //On component init
    NgxGustavguezNavItemComponent.prototype.ngOnInit = function () {
    };
    //Custome events
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FO0lBUUksaUJBQWlCO0lBQ2pCO1FBSFUsY0FBUyxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xFLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLGdEQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHNEQUFjLEdBQWQsVUFBZSxLQUFpQjtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzREFBYyxHQUFkLFVBQWUsS0FBZ0M7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXJCUTtRQUFSLEtBQUssRUFBRTtrRUFBbUM7SUFDbEM7UUFBUixLQUFLLEVBQUU7bUVBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO2dFQUFnQjtJQUVkO1FBQVQsTUFBTSxFQUFFO29FQUF5RTtJQU56RSw2QkFBNkI7UUFMekMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQywwaUNBQXVEOztTQUUxRCxDQUFDO09BQ1csNkJBQTZCLENBd0J6QztJQUFELG9DQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4QlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbCB9IGZyb20gJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hHdXN0YXZndWV6TmF2SXRlbV0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9JbnB1dHNcbiAgICBASW5wdXQoKSBuYXZJdGVtOiBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsXG4gICAgQElucHV0KCkgaXNQYXJlbnQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3RhdGU6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KCkgb25OYXZJdGVtOiBFdmVudEVtaXR0ZXI8Tmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLy9DdXN0b21lIGV2ZW50c1xuICAgIG9uTmF2SXRlbUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vbk5hdkl0ZW0uZW1pdCh0aGlzLm5hdkl0ZW0pO1xuICAgIH1cblxuICAgIG9uTmF2SXRlbUNoaWxkKGNoaWxkOiBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsKXtcbiAgICAgICAgdGhpcy5vbk5hdkl0ZW0uZW1pdChjaGlsZCk7XG4gICAgfVxufVxuIl19