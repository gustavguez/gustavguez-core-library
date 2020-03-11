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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBUXRDLGlCQUFpQjtJQUNqQjtRQUhVLGNBQVMsR0FBNEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdsRSxDQUFDO0lBRWpCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixjQUFjLENBQUMsS0FBaUI7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWdDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSixDQUFBO0FBdEJZO0lBQVIsS0FBSyxFQUFFOzhEQUFtQztBQUNsQztJQUFSLEtBQUssRUFBRTsrREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7NERBQWdCO0FBRWQ7SUFBVCxNQUFNLEVBQUU7Z0VBQXlFO0FBTnpFLDZCQUE2QjtJQUx6QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLDBpQ0FBdUQ7O0tBRTFELENBQUM7R0FDVyw2QkFBNkIsQ0F3QnpDO1NBeEJZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWwgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LW5hdi1pdGVtLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbbmd4R3VzdGF2Z3Vlek5hdkl0ZW1dJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LW5hdi1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgbmF2SXRlbTogTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbFxuICAgIEBJbnB1dCgpIGlzUGFyZW50OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN0YXRlOiBib29sZWFuO1xuXG4gICAgQE91dHB1dCgpIG9uTmF2SXRlbTogRXZlbnRFbWl0dGVyPE5neEd1c3Rhdmd1ZXpOYXZJdGVtTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8vQ3VzdG9tZSBldmVudHNcbiAgICBvbk5hdkl0ZW1DbGljayhldmVudDogTW91c2VFdmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub25OYXZJdGVtLmVtaXQodGhpcy5uYXZJdGVtKTtcbiAgICB9XG5cbiAgICBvbk5hdkl0ZW1DaGlsZChjaGlsZDogTmd4R3VzdGF2Z3Vlek5hdkl0ZW1Nb2RlbCl7XG4gICAgICAgIHRoaXMub25OYXZJdGVtLmVtaXQoY2hpbGQpO1xuICAgIH1cbn1cbiJdfQ==