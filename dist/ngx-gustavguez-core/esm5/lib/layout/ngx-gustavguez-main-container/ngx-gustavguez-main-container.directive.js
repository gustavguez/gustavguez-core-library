import { __decorate } from "tslib";
import { Directive, HostBinding } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
var NgxGustavguezMainContainerDirective = /** @class */ (function () {
    // Inject services
    function NgxGustavguezMainContainerDirective(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Modes
        this.classes = [
            'sidebar-mini',
            'layout-fixed',
            'layout-navbar-fixed'
        ];
    }
    // On component init
    NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Set base classes to host classes
        this.loadHostClasses(false);
        // Watch sidebarState change
        this.ngxGustavguezMainSidebarService.onChangeState.subscribe(function (state) {
            _this.loadHostClasses(state);
        });
        this.ngxGustavguezMainSidebarService.onToggleState.subscribe(function () {
            _this.loadHostClasses(!_this.state);
        });
    };
    // Private helper methods
    NgxGustavguezMainContainerDirective.prototype.loadHostClasses = function (state) {
        // Control index just for control
        var indexClassCollapse = this.classes.indexOf('sidebar-collapse');
        var indexClassOpen = this.classes.indexOf('sidebar-open');
        // Load state
        this.state = state;
        // Check state
        if (state) {
            this.classes.push('sidebar-open');
            this.classes.push('sidebar-collapse');
        }
        else {
            this.classes.splice(indexClassCollapse, 1);
            this.classes.splice(indexClassOpen, 1);
        }
        // Load classes
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUtySDtJQVlDLGtCQUFrQjtJQUNsQiw2Q0FDUywrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVZ6RSxRQUFRO1FBQ1IsWUFBTyxHQUFhO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1lBQ2QscUJBQXFCO1NBQ3JCLENBQUM7SUFLMkUsQ0FBQztJQUU5RSxvQkFBb0I7SUFDcEIsc0RBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkEsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBYztZQUMzRSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDNUQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5QkFBeUI7SUFDakIsNkRBQWUsR0FBdkIsVUFBd0IsS0FBYztRQUNyQyxpQ0FBaUM7UUFDakMsSUFBTSxrQkFBa0IsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVFLElBQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBFLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixjQUFjO1FBQ2QsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFwQ3lDLCtCQUErQjs7SUFabkQ7UUFBckIsV0FBVyxDQUFDLE9BQU8sQ0FBQzs0RUFBcUI7SUFGOUIsbUNBQW1DO1FBSC9DLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSw4QkFBOEI7U0FDeEMsQ0FBQztPQUNXLG1DQUFtQyxDQW9EL0M7SUFBRCwwQ0FBQztDQUFBLEFBcERELElBb0RDO1NBcERZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW25neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvLyBIb3N0IGJpbmRpbmdcblx0QEhvc3RCaW5kaW5nKCdjbGFzcycpIGhvc3RDbGFzc2VzOiBzdHJpbmc7XG5cblx0Ly8gTW9kZXNcblx0Y2xhc3Nlczogc3RyaW5nW10gPSBbXG5cdFx0J3NpZGViYXItbWluaScsXG5cdFx0J2xheW91dC1maXhlZCcsXG5cdFx0J2xheW91dC1uYXZiYXItZml4ZWQnXG5cdF07XG5cdHN0YXRlOiBib29sZWFuO1xuXG5cdC8vIEluamVjdCBzZXJ2aWNlc1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UpIHsgfVxuXG5cdC8vIE9uIGNvbXBvbmVudCBpbml0XG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIFNldCBiYXNlIGNsYXNzZXMgdG8gaG9zdCBjbGFzc2VzXG5cdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoZmFsc2UpO1xuXG5cdFx0Ly8gV2F0Y2ggc2lkZWJhclN0YXRlIGNoYW5nZVxuXHRcdHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5vbkNoYW5nZVN0YXRlLnN1YnNjcmliZSgoc3RhdGU6IGJvb2xlYW4pID0+IHtcblx0XHRcdHRoaXMubG9hZEhvc3RDbGFzc2VzKHN0YXRlKTtcblx0XHR9KTtcblx0XHR0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2Uub25Ub2dnbGVTdGF0ZS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoIXRoaXMuc3RhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gUHJpdmF0ZSBoZWxwZXIgbWV0aG9kc1xuXHRwcml2YXRlIGxvYWRIb3N0Q2xhc3NlcyhzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIENvbnRyb2wgaW5kZXgganVzdCBmb3IgY29udHJvbFxuXHRcdGNvbnN0IGluZGV4Q2xhc3NDb2xsYXBzZTogbnVtYmVyID0gdGhpcy5jbGFzc2VzLmluZGV4T2YoJ3NpZGViYXItY29sbGFwc2UnKTtcblx0XHRjb25zdCBpbmRleENsYXNzT3BlbjogbnVtYmVyID0gdGhpcy5jbGFzc2VzLmluZGV4T2YoJ3NpZGViYXItb3BlbicpO1xuXG5cdFx0Ly8gTG9hZCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuXHRcdC8vIENoZWNrIHN0YXRlXG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHR0aGlzLmNsYXNzZXMucHVzaCgnc2lkZWJhci1vcGVuJyk7XG5cdFx0XHR0aGlzLmNsYXNzZXMucHVzaCgnc2lkZWJhci1jb2xsYXBzZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsYXNzZXMuc3BsaWNlKGluZGV4Q2xhc3NDb2xsYXBzZSwgMSk7XG5cdFx0XHR0aGlzLmNsYXNzZXMuc3BsaWNlKGluZGV4Q2xhc3NPcGVuLCAxKTtcblx0XHR9XG5cblx0XHQvLyBMb2FkIGNsYXNzZXNcblx0XHR0aGlzLmhvc3RDbGFzc2VzID0gdGhpcy5jbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG59XG4iXX0=