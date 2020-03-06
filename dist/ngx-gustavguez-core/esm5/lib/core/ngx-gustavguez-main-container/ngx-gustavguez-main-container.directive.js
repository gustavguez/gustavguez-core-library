import { __decorate } from "tslib";
import { Directive, HostBinding } from '@angular/core';
var NgxGustavguezMainContainerDirective = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainContainerDirective() {
        //Modes
        this.baseClasses = 'sidebar-mini layout-fixed layout-navbar-fixed';
    }
    //On component init
    NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
        //Set base classes to host classes
        this.hostClasses = this.baseClasses;
    };
    __decorate([
        HostBinding('class')
    ], NgxGustavguezMainContainerDirective.prototype, "hostClasses", void 0);
    NgxGustavguezMainContainerDirective = __decorate([
        Directive({
            selector: '[ngxGustavguezMainContainer]'
        })
    ], NgxGustavguezMainContainerDirective);
    return NgxGustavguezMainContainerDirective;
}());
export { NgxGustavguezMainContainerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLL0Q7SUFPSSxpQkFBaUI7SUFDakI7UUFKQSxPQUFPO1FBQ1AsZ0JBQVcsR0FBVywrQ0FBK0MsQ0FBQztJQUd0RCxDQUFDO0lBRWpCLG1CQUFtQjtJQUNuQixzREFBUSxHQUFSO1FBQ0ksa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN4QyxDQUFDO0lBWnFCO1FBQXJCLFdBQVcsQ0FBQyxPQUFPLENBQUM7NEVBQXFCO0lBRmpDLG1DQUFtQztRQUgvQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsOEJBQThCO1NBQzNDLENBQUM7T0FDVyxtQ0FBbUMsQ0FnQi9DO0lBQUQsMENBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9Ib3N0IGJpbmRpbmdcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgaG9zdENsYXNzZXM6IHN0cmluZztcblxuICAgIC8vTW9kZXNcbiAgICBiYXNlQ2xhc3Nlczogc3RyaW5nID0gJ3NpZGViYXItbWluaSBsYXlvdXQtZml4ZWQgbGF5b3V0LW5hdmJhci1maXhlZCc7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vU2V0IGJhc2UgY2xhc3NlcyB0byBob3N0IGNsYXNzZXNcbiAgICAgICAgdGhpcy5ob3N0Q2xhc3NlcyA9IHRoaXMuYmFzZUNsYXNzZXM7XG4gICAgfVxuXG59XG4iXX0=