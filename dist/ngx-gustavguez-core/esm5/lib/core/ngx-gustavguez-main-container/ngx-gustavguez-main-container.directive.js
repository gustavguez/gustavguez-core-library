import { __decorate } from "tslib";
import { Directive, HostBinding } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
var NgxGustavguezMainContainerDirective = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainContainerDirective(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        this.baseClasses = 'sidebar-mini layout-fixed layout-navbar-fixed';
    }
    //On component init
    NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
        var _this = this;
        //Set base classes to host classes
        this.loadHostClasses();
        //Watch sidebarState change
        this.ngxGustavguezMainSidebarService.onChangeState.subscribe(function (state) {
            _this.loadHostClasses(state);
        });
        this.ngxGustavguezMainSidebarService.onToggleState.subscribe(function () {
            _this.loadHostClasses(!_this.state);
        });
    };
    //Private helper methods
    NgxGustavguezMainContainerDirective.prototype.loadHostClasses = function (state) {
        //Backup state
        this.state = state;
        //Check state
        if (state) {
            this.hostClasses = this.baseClasses + " sidebar-collapse sidebar-open";
        }
        else {
            this.hostClasses = this.baseClasses;
        }
    };
    NgxGustavguezMainContainerDirective.ctorParameters = function () { return [
        { type: NgxGustavguezMainSidebarService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyL25neC1ndXN0YXZndWV6LW1haW4tY29udGFpbmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFLckg7SUFRSSxpQkFBaUI7SUFDakIsNkNBQ1ksK0JBQWdFO1FBQWhFLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7UUFKNUUsZ0JBQVcsR0FBVywrQ0FBK0MsQ0FBQztJQUlXLENBQUM7SUFFbEYsbUJBQW1CO0lBQ25CLHNEQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsMkJBQTJCO1FBQ2pDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBYztZQUMzRSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDNUQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUFFRCx3QkFBd0I7SUFDaEIsNkRBQWUsR0FBdkIsVUFBd0IsS0FBZTtRQUNuQyxjQUFjO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsYUFBYTtRQUNiLElBQUcsS0FBSyxFQUFFO1lBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFnQyxDQUFDO1NBQzFFO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDdkM7SUFDTCxDQUFDOztnQkEzQjRDLCtCQUErQjs7SUFSdEQ7UUFBckIsV0FBVyxDQUFDLE9BQU8sQ0FBQzs0RUFBcUI7SUFGakMsbUNBQW1DO1FBSC9DLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw4QkFBOEI7U0FDM0MsQ0FBQztPQUNXLG1DQUFtQyxDQXVDL0M7SUFBRCwwQ0FBQztDQUFBLEFBdkNELElBdUNDO1NBdkNZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9Ib3N0IGJpbmRpbmdcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgaG9zdENsYXNzZXM6IHN0cmluZztcblxuICAgIC8vTW9kZXNcbiAgICBzdGF0ZTogYm9vbGVhbjtcbiAgICBiYXNlQ2xhc3Nlczogc3RyaW5nID0gJ3NpZGViYXItbWluaSBsYXlvdXQtZml4ZWQgbGF5b3V0LW5hdmJhci1maXhlZCc7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy9TZXQgYmFzZSBjbGFzc2VzIHRvIGhvc3QgY2xhc3Nlc1xuICAgICAgICB0aGlzLmxvYWRIb3N0Q2xhc3NlcygpO1xuXG4gICAgICAgIC8vV2F0Y2ggc2lkZWJhclN0YXRlIGNoYW5nZVxuXHRcdHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5vbkNoYW5nZVN0YXRlLnN1YnNjcmliZSgoc3RhdGU6IGJvb2xlYW4pID0+IHtcblx0XHRcdHRoaXMubG9hZEhvc3RDbGFzc2VzKHN0YXRlKVxuXHRcdH0pO1xuXHRcdHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5vblRvZ2dsZVN0YXRlLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRIb3N0Q2xhc3NlcyghdGhpcy5zdGF0ZSk7XG5cdFx0fSk7XG4gICAgfVxuXG4gICAgLy9Qcml2YXRlIGhlbHBlciBtZXRob2RzXG4gICAgcHJpdmF0ZSBsb2FkSG9zdENsYXNzZXMoc3RhdGU/OiBib29sZWFuKSB7XG4gICAgICAgIC8vQmFja3VwIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICAvL0NoZWNrIHN0YXRlXG4gICAgICAgIGlmKHN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmhvc3RDbGFzc2VzID0gdGhpcy5iYXNlQ2xhc3NlcyArIFwiIHNpZGViYXItY29sbGFwc2Ugc2lkZWJhci1vcGVuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvc3RDbGFzc2VzID0gdGhpcy5iYXNlQ2xhc3NlcztcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19