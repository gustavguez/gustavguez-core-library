import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let NgxGustavguezNavItemComponent = class NgxGustavguezNavItemComponent {
    //Inject services
    constructor() {
        this.onNavItem = new EventEmitter();
    }
    //On component init
    ngOnInit() {
    }
    //Custome events
    onNavItemClick(event) {
        event.preventDefault();
        this.onNavItem.emit(this.navItem);
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
        template: "<a \n    (click)=\"onNavItemClick($event)\"\n    [routerLink]=\"navItem.action\"\n    routerLinkActive=\"active\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<ng-container *ngIf=\"navItem.childs\">\n    <ul \n        [style.display]=\"state ? 'block' : 'none'\"\n        class=\"nav nav-treeview\">\n        <li \n            class=\"nav-item\"\n            ngxGustavguezNavItem\n            [navItem]=\"child\"\n            *ngFor=\"let child of navItem.childs\"></li>\n    </ul>\n</ng-container>",
        styles: [""]
    })
], NgxGustavguezNavItemComponent);
export { NgxGustavguezNavItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBUXRDLGlCQUFpQjtJQUNqQjtRQUhVLGNBQVMsR0FBNEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdsRSxDQUFDO0lBRWpCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixjQUFjLENBQUMsS0FBaUI7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0osQ0FBQTtBQWxCWTtJQUFSLEtBQUssRUFBRTs4REFBbUM7QUFDbEM7SUFBUixLQUFLLEVBQUU7K0RBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzREQUFnQjtBQUVkO0lBQVQsTUFBTSxFQUFFO2dFQUF5RTtBQU56RSw2QkFBNkI7SUFMekMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQywrcUJBQXVEOztLQUUxRCxDQUFDO0dBQ1csNkJBQTZCLENBb0J6QztTQXBCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW25neEd1c3Rhdmd1ZXpOYXZJdGVtXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW5hdi1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpOYXZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIG5hdkl0ZW06IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWxcbiAgICBASW5wdXQoKSBpc1BhcmVudDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdGF0ZTogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKSBvbk5hdkl0ZW06IEV2ZW50RW1pdHRlcjxOZ3hHdXN0YXZndWV6TmF2SXRlbU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvL0N1c3RvbWUgZXZlbnRzXG4gICAgb25OYXZJdGVtQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9uTmF2SXRlbS5lbWl0KHRoaXMubmF2SXRlbSk7XG4gICAgfVxufVxuIl19