import { __decorate } from "tslib";
import { Directive, HostBinding } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
import { WindowUtility } from '../../utilities/window.utility';
var NgxGustavguezMainContainerDirective = /** @class */ (function () {
    //Inject services
    function NgxGustavguezMainContainerDirective(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Modes
        this.classes = [
            'sidebar-mini',
            'layout-fixed',
            'layout-navbar-fixed'
        ];
    }
    //On component init
    NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
        var _this = this;
        //Set base classes to host classes
        this.loadHostClasses(false);
        //Watch sidebarState change
        this.ngxGustavguezMainSidebarService.onChangeState.subscribe(function (state) {
            _this.loadHostClasses(state);
        });
        this.ngxGustavguezMainSidebarService.onToggleState.subscribe(function () {
            _this.loadHostClasses();
        });
    };
    //Private helper methods
    NgxGustavguezMainContainerDirective.prototype.loadHostClasses = function (state) {
        var indexClassCollapse = this.classes.indexOf('sidebar-collapse');
        var indexClassOpen = this.classes.indexOf('sidebar-open');
        var openState = (state === undefined && indexClassOpen === -1) || state;
        var collapseState = (state === undefined && indexClassCollapse === -1) || state;
        //Remove from array
        if (indexClassCollapse > -1) {
            this.classes.splice(indexClassCollapse, 1);
        }
        if (indexClassOpen > -1) {
            this.classes.splice(indexClassOpen, 1);
        }
        //Check state to add sidebaropen class
        if (WindowUtility.isSmallScreen() && openState) {
            this.classes.push('sidebar-open');
        }
        //Check to add collapse class
        if (!WindowUtility.isSmallScreen() && collapseState) {
            this.classes.push('sidebar-collapse');
        }
        //Load classes
        this.hostClasses = this.classes.join(' ');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFLL0Q7SUFXSSxpQkFBaUI7SUFDakIsNkNBQ1ksK0JBQWdFO1FBQWhFLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7UUFUNUUsT0FBTztRQUNQLFlBQU8sR0FBYTtZQUNoQixjQUFjO1lBQ2QsY0FBYztZQUNkLHFCQUFxQjtTQUN4QixDQUFDO0lBSStFLENBQUM7SUFFbEYsbUJBQW1CO0lBQ25CLHNEQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDJCQUEyQjtRQUNqQyxJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWM7WUFDM0UsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQzVELEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUFFRCx3QkFBd0I7SUFDaEIsNkRBQWUsR0FBdkIsVUFBd0IsS0FBZTtRQUNuQyxJQUFNLGtCQUFrQixHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUUsSUFBTSxjQUFjLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEUsSUFBTSxTQUFTLEdBQVksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLGNBQWMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNuRixJQUFNLGFBQWEsR0FBWSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksa0JBQWtCLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7UUFFM0YsbUJBQW1CO1FBQ25CLElBQUcsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUM7UUFFRCxzQ0FBc0M7UUFDdEMsSUFBRyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksU0FBUyxFQUFFO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsNkJBQTZCO1FBQzdCLElBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDekM7UUFFRCxjQUFjO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkEzQzRDLCtCQUErQjs7SUFYdEQ7UUFBckIsV0FBVyxDQUFDLE9BQU8sQ0FBQzs0RUFBcUI7SUFGakMsbUNBQW1DO1FBSC9DLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw4QkFBOEI7U0FDM0MsQ0FBQztPQUNXLG1DQUFtQyxDQTBEL0M7SUFBRCwwQ0FBQztDQUFBLEFBMURELElBMERDO1NBMURZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFdpbmRvd1V0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvd2luZG93LnV0aWxpdHknO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0hvc3QgYmluZGluZ1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBob3N0Q2xhc3Nlczogc3RyaW5nO1xuXG4gICAgLy9Nb2Rlc1xuICAgIGNsYXNzZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICAnc2lkZWJhci1taW5pJyxcbiAgICAgICAgJ2xheW91dC1maXhlZCcsXG4gICAgICAgICdsYXlvdXQtbmF2YmFyLWZpeGVkJ1xuICAgIF07XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy9TZXQgYmFzZSBjbGFzc2VzIHRvIGhvc3QgY2xhc3Nlc1xuICAgICAgICB0aGlzLmxvYWRIb3N0Q2xhc3NlcyhmYWxzZSk7XG5cbiAgICAgICAgLy9XYXRjaCBzaWRlYmFyU3RhdGUgY2hhbmdlXG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLm9uQ2hhbmdlU3RhdGUuc3Vic2NyaWJlKChzdGF0ZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoc3RhdGUpXG5cdFx0fSk7XG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLm9uVG9nZ2xlU3RhdGUuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHRoaXMubG9hZEhvc3RDbGFzc2VzKCk7XG5cdFx0fSk7XG4gICAgfVxuXG4gICAgLy9Qcml2YXRlIGhlbHBlciBtZXRob2RzXG4gICAgcHJpdmF0ZSBsb2FkSG9zdENsYXNzZXMoc3RhdGU/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGluZGV4Q2xhc3NDb2xsYXBzZTogbnVtYmVyID0gdGhpcy5jbGFzc2VzLmluZGV4T2YoJ3NpZGViYXItY29sbGFwc2UnKTtcbiAgICAgICAgY29uc3QgaW5kZXhDbGFzc09wZW46IG51bWJlciA9IHRoaXMuY2xhc3Nlcy5pbmRleE9mKCdzaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgY29uc3Qgb3BlblN0YXRlOiBib29sZWFuID0gKHN0YXRlID09PSB1bmRlZmluZWQgJiYgaW5kZXhDbGFzc09wZW4gPT09IC0xKSB8fCBzdGF0ZTtcbiAgICAgICAgY29uc3QgY29sbGFwc2VTdGF0ZTogYm9vbGVhbiA9IChzdGF0ZSA9PT0gdW5kZWZpbmVkICYmIGluZGV4Q2xhc3NDb2xsYXBzZSA9PT0gLTEpIHx8IHN0YXRlO1xuXG4gICAgICAgIC8vUmVtb3ZlIGZyb20gYXJyYXlcbiAgICAgICAgaWYoaW5kZXhDbGFzc0NvbGxhcHNlID4gLTEpe1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNwbGljZShpbmRleENsYXNzQ29sbGFwc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4Q2xhc3NPcGVuID4gLTEpe1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNwbGljZShpbmRleENsYXNzT3BlbiwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0NoZWNrIHN0YXRlIHRvIGFkZCBzaWRlYmFyb3BlbiBjbGFzc1xuICAgICAgICBpZihXaW5kb3dVdGlsaXR5LmlzU21hbGxTY3JlZW4oKSAmJiBvcGVuU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5wdXNoKCdzaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vQ2hlY2sgdG8gYWRkIGNvbGxhcHNlIGNsYXNzXG4gICAgICAgIGlmKCFXaW5kb3dVdGlsaXR5LmlzU21hbGxTY3JlZW4oKSAmJiBjb2xsYXBzZVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzZXMucHVzaCgnc2lkZWJhci1jb2xsYXBzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Mb2FkIGNsYXNzZXNcbiAgICAgICAgdGhpcy5ob3N0Q2xhc3NlcyA9IHRoaXMuY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG59XG4iXX0=