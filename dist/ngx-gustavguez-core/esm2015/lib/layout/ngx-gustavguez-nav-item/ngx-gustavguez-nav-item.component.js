import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let NgxGustavguezNavItemComponent = class NgxGustavguezNavItemComponent {
    constructor() {
        this.onNavItem = new EventEmitter();
    }
    // Custome events
    onNavItemClick(event) {
        event.preventDefault();
        this.onNavItem.emit(this.navItem);
    }
    onNavItemChild(child) {
        this.onNavItem.emit(child);
    }
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
export { NgxGustavguezNavItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBQTFDO1FBTVcsY0FBUyxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBV25GLENBQUM7SUFUQSxpQkFBaUI7SUFDakIsY0FBYyxDQUFDLEtBQWlCO1FBQy9CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFnQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0QsQ0FBQTtBQWZTO0lBQVIsS0FBSyxFQUFFOzhEQUFvQztBQUNuQztJQUFSLEtBQUssRUFBRTsrREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7NERBQWdCO0FBRWQ7SUFBVCxNQUFNLEVBQUU7Z0VBQXlFO0FBTnRFLDZCQUE2QjtJQUx6QyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLDBpQ0FBdUQ7O0tBRXZELENBQUM7R0FDVyw2QkFBNkIsQ0FpQnpDO1NBakJZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1tuZ3hHdXN0YXZndWV6TmF2SXRlbV0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpOYXZJdGVtQ29tcG9uZW50IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIG5hdkl0ZW06IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWw7XG5cdEBJbnB1dCgpIGlzUGFyZW50OiBib29sZWFuO1xuXHRASW5wdXQoKSBzdGF0ZTogYm9vbGVhbjtcblxuXHRAT3V0cHV0KCkgb25OYXZJdGVtOiBFdmVudEVtaXR0ZXI8Tmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Ly8gQ3VzdG9tZSBldmVudHNcblx0b25OYXZJdGVtQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMub25OYXZJdGVtLmVtaXQodGhpcy5uYXZJdGVtKTtcblx0fVxuXG5cdG9uTmF2SXRlbUNoaWxkKGNoaWxkOiBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5vbk5hdkl0ZW0uZW1pdChjaGlsZCk7XG5cdH1cbn1cbiJdfQ==