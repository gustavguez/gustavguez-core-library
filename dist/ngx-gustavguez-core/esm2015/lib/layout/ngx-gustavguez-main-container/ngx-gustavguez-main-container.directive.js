import { __decorate } from "tslib";
import { Directive, HostBinding } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
let NgxGustavguezMainContainerDirective = class NgxGustavguezMainContainerDirective {
    // Inject services
    constructor(ngxGustavguezMainSidebarService) {
        this.ngxGustavguezMainSidebarService = ngxGustavguezMainSidebarService;
        // Modes
        this.classes = [
            'sidebar-mini',
            'layout-fixed',
            'layout-navbar-fixed'
        ];
    }
    // On component init
    ngOnInit() {
        // Set base classes to host classes
        this.loadHostClasses(false);
        // Watch sidebarState change
        this.ngxGustavguezMainSidebarService.onChangeState.subscribe((state) => {
            this.loadHostClasses(state);
        });
        this.ngxGustavguezMainSidebarService.onToggleState.subscribe(() => {
            this.loadHostClasses(!this.state);
        });
    }
    // Private helper methods
    loadHostClasses(state) {
        // Control index just for control
        const indexClassCollapse = this.classes.indexOf('sidebar-collapse');
        const indexClassOpen = this.classes.indexOf('sidebar-open');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUtySCxJQUFhLG1DQUFtQyxHQUFoRCxNQUFhLG1DQUFtQztJQVkvQyxrQkFBa0I7SUFDbEIsWUFDUywrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVZ6RSxRQUFRO1FBQ1IsWUFBTyxHQUFhO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1lBQ2QscUJBQXFCO1NBQ3JCLENBQUM7SUFLMkUsQ0FBQztJQUU5RSxvQkFBb0I7SUFDcEIsUUFBUTtRQUNQLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5QkFBeUI7SUFDakIsZUFBZSxDQUFDLEtBQWM7UUFDckMsaUNBQWlDO1FBQ2pDLE1BQU0sa0JBQWtCLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RSxNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRSxhQUFhO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBYztRQUNkLElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsZUFBZTtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUVELENBQUE7O1lBdEMwQywrQkFBK0I7O0FBWm5EO0lBQXJCLFdBQVcsQ0FBQyxPQUFPLENBQUM7d0VBQXFCO0FBRjlCLG1DQUFtQztJQUgvQyxTQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsOEJBQThCO0tBQ3hDLENBQUM7R0FDVyxtQ0FBbUMsQ0FvRC9DO1NBcERZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW25neEd1c3Rhdmd1ZXpNYWluQ29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvLyBIb3N0IGJpbmRpbmdcblx0QEhvc3RCaW5kaW5nKCdjbGFzcycpIGhvc3RDbGFzc2VzOiBzdHJpbmc7XG5cblx0Ly8gTW9kZXNcblx0Y2xhc3Nlczogc3RyaW5nW10gPSBbXG5cdFx0J3NpZGViYXItbWluaScsXG5cdFx0J2xheW91dC1maXhlZCcsXG5cdFx0J2xheW91dC1uYXZiYXItZml4ZWQnXG5cdF07XG5cdHN0YXRlOiBib29sZWFuO1xuXG5cdC8vIEluamVjdCBzZXJ2aWNlc1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2U6IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UpIHsgfVxuXG5cdC8vIE9uIGNvbXBvbmVudCBpbml0XG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIFNldCBiYXNlIGNsYXNzZXMgdG8gaG9zdCBjbGFzc2VzXG5cdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoZmFsc2UpO1xuXG5cdFx0Ly8gV2F0Y2ggc2lkZWJhclN0YXRlIGNoYW5nZVxuXHRcdHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5vbkNoYW5nZVN0YXRlLnN1YnNjcmliZSgoc3RhdGU6IGJvb2xlYW4pID0+IHtcblx0XHRcdHRoaXMubG9hZEhvc3RDbGFzc2VzKHN0YXRlKTtcblx0XHR9KTtcblx0XHR0aGlzLm5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2Uub25Ub2dnbGVTdGF0ZS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoIXRoaXMuc3RhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gUHJpdmF0ZSBoZWxwZXIgbWV0aG9kc1xuXHRwcml2YXRlIGxvYWRIb3N0Q2xhc3NlcyhzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIENvbnRyb2wgaW5kZXgganVzdCBmb3IgY29udHJvbFxuXHRcdGNvbnN0IGluZGV4Q2xhc3NDb2xsYXBzZTogbnVtYmVyID0gdGhpcy5jbGFzc2VzLmluZGV4T2YoJ3NpZGViYXItY29sbGFwc2UnKTtcblx0XHRjb25zdCBpbmRleENsYXNzT3BlbjogbnVtYmVyID0gdGhpcy5jbGFzc2VzLmluZGV4T2YoJ3NpZGViYXItb3BlbicpO1xuXG5cdFx0Ly8gTG9hZCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuXHRcdC8vIENoZWNrIHN0YXRlXG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHR0aGlzLmNsYXNzZXMucHVzaCgnc2lkZWJhci1vcGVuJyk7XG5cdFx0XHR0aGlzLmNsYXNzZXMucHVzaCgnc2lkZWJhci1jb2xsYXBzZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsYXNzZXMuc3BsaWNlKGluZGV4Q2xhc3NDb2xsYXBzZSwgMSk7XG5cdFx0XHR0aGlzLmNsYXNzZXMuc3BsaWNlKGluZGV4Q2xhc3NPcGVuLCAxKTtcblx0XHR9XG5cblx0XHQvLyBMb2FkIGNsYXNzZXNcblx0XHR0aGlzLmhvc3RDbGFzc2VzID0gdGhpcy5jbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG59XG4iXX0=