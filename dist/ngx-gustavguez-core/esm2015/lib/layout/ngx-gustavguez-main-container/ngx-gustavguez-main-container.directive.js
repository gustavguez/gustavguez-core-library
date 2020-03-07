import { __decorate } from "tslib";
import { Directive, HostBinding } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
import { WindowUtility } from '../../utilities/window.utility';
let NgxGustavguezMainContainerDirective = class NgxGustavguezMainContainerDirective {
    //Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        //Modes
        this.classes = [
            'sidebar-mini',
            'layout-fixed',
            'layout-navbar-fixed'
        ];
    }
    //On component init
    ngOnInit() {
        //Set base classes to host classes
        this.loadHostClasses(false);
        //Watch sidebarState change
        this.ngxGustavguezMainSidebarService.onChangeState.subscribe((state) => {
            this.loadHostClasses(state);
        });
        this.ngxGustavguezMainSidebarService.onToggleState.subscribe(() => {
            this.loadHostClasses();
        });
    }
    //Private helper methods
    loadHostClasses(state) {
        const indexClassCollapse = this.classes.indexOf('sidebar-collapse');
        const indexClassOpen = this.classes.indexOf('sidebar-open');
        const openState = (state === undefined && indexClassOpen === -1) || state;
        const collapseState = (state === undefined && indexClassCollapse === -1) || state;
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
    }
};
NgxGustavguezMainContainerDirective.ctorParameters = () => [
    { type: NgxGustavguezMainSidebarService }
];
__decorate([
    HostBinding('class')
], NgxGustavguezMainContainerDirective.prototype, "hostClasses", void 0);
NgxGustavguezMainContainerDirective = __decorate([
    Directive({
        selector: '[ngxGustavguezMainContainer]'
    })
], NgxGustavguezMainContainerDirective);
export { NgxGustavguezMainContainerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFLL0QsSUFBYSxtQ0FBbUMsR0FBaEQsTUFBYSxtQ0FBbUM7SUFXNUMsaUJBQWlCO0lBQ2pCLFlBQ1ksK0JBQWdFO1FBQWhFLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7UUFUNUUsT0FBTztRQUNQLFlBQU8sR0FBYTtZQUNoQixjQUFjO1lBQ2QsY0FBYztZQUNkLHFCQUFxQjtTQUN4QixDQUFDO0lBSStFLENBQUM7SUFFbEYsbUJBQW1CO0lBQ25CLFFBQVE7UUFDSixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QiwyQkFBMkI7UUFDakMsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUMvRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUFFRCx3QkFBd0I7SUFDaEIsZUFBZSxDQUFDLEtBQWU7UUFDbkMsTUFBTSxrQkFBa0IsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sU0FBUyxHQUFZLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxjQUFjLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDbkYsTUFBTSxhQUFhLEdBQVksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLGtCQUFrQixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO1FBRTNGLG1CQUFtQjtRQUNuQixJQUFHLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsc0NBQXNDO1FBQ3RDLElBQUcsYUFBYSxDQUFDLGFBQWEsRUFBRSxJQUFJLFNBQVMsRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNyQztRQUVELDZCQUE2QjtRQUM3QixJQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsY0FBYztRQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUVKLENBQUE7O1lBN0NnRCwrQkFBK0I7O0FBWHREO0lBQXJCLFdBQVcsQ0FBQyxPQUFPLENBQUM7d0VBQXFCO0FBRmpDLG1DQUFtQztJQUgvQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsOEJBQThCO0tBQzNDLENBQUM7R0FDVyxtQ0FBbUMsQ0EwRC9DO1NBMURZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFdpbmRvd1V0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvd2luZG93LnV0aWxpdHknO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0hvc3QgYmluZGluZ1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBob3N0Q2xhc3Nlczogc3RyaW5nO1xuXG4gICAgLy9Nb2Rlc1xuICAgIGNsYXNzZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICAnc2lkZWJhci1taW5pJyxcbiAgICAgICAgJ2xheW91dC1maXhlZCcsXG4gICAgICAgICdsYXlvdXQtbmF2YmFyLWZpeGVkJ1xuICAgIF07XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy9TZXQgYmFzZSBjbGFzc2VzIHRvIGhvc3QgY2xhc3Nlc1xuICAgICAgICB0aGlzLmxvYWRIb3N0Q2xhc3NlcyhmYWxzZSk7XG5cbiAgICAgICAgLy9XYXRjaCBzaWRlYmFyU3RhdGUgY2hhbmdlXG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLm9uQ2hhbmdlU3RhdGUuc3Vic2NyaWJlKChzdGF0ZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoc3RhdGUpXG5cdFx0fSk7XG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLm9uVG9nZ2xlU3RhdGUuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHRoaXMubG9hZEhvc3RDbGFzc2VzKCk7XG5cdFx0fSk7XG4gICAgfVxuXG4gICAgLy9Qcml2YXRlIGhlbHBlciBtZXRob2RzXG4gICAgcHJpdmF0ZSBsb2FkSG9zdENsYXNzZXMoc3RhdGU/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGluZGV4Q2xhc3NDb2xsYXBzZTogbnVtYmVyID0gdGhpcy5jbGFzc2VzLmluZGV4T2YoJ3NpZGViYXItY29sbGFwc2UnKTtcbiAgICAgICAgY29uc3QgaW5kZXhDbGFzc09wZW46IG51bWJlciA9IHRoaXMuY2xhc3Nlcy5pbmRleE9mKCdzaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgY29uc3Qgb3BlblN0YXRlOiBib29sZWFuID0gKHN0YXRlID09PSB1bmRlZmluZWQgJiYgaW5kZXhDbGFzc09wZW4gPT09IC0xKSB8fCBzdGF0ZTtcbiAgICAgICAgY29uc3QgY29sbGFwc2VTdGF0ZTogYm9vbGVhbiA9IChzdGF0ZSA9PT0gdW5kZWZpbmVkICYmIGluZGV4Q2xhc3NDb2xsYXBzZSA9PT0gLTEpIHx8IHN0YXRlO1xuXG4gICAgICAgIC8vUmVtb3ZlIGZyb20gYXJyYXlcbiAgICAgICAgaWYoaW5kZXhDbGFzc0NvbGxhcHNlID4gLTEpe1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNwbGljZShpbmRleENsYXNzQ29sbGFwc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4Q2xhc3NPcGVuID4gLTEpe1xuICAgICAgICAgICAgdGhpcy5jbGFzc2VzLnNwbGljZShpbmRleENsYXNzT3BlbiwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0NoZWNrIHN0YXRlIHRvIGFkZCBzaWRlYmFyb3BlbiBjbGFzc1xuICAgICAgICBpZihXaW5kb3dVdGlsaXR5LmlzU21hbGxTY3JlZW4oKSAmJiBvcGVuU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3Nlcy5wdXNoKCdzaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vQ2hlY2sgdG8gYWRkIGNvbGxhcHNlIGNsYXNzXG4gICAgICAgIGlmKCFXaW5kb3dVdGlsaXR5LmlzU21hbGxTY3JlZW4oKSAmJiBjb2xsYXBzZVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzZXMucHVzaCgnc2lkZWJhci1jb2xsYXBzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Mb2FkIGNsYXNzZXNcbiAgICAgICAgdGhpcy5ob3N0Q2xhc3NlcyA9IHRoaXMuY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG59XG4iXX0=