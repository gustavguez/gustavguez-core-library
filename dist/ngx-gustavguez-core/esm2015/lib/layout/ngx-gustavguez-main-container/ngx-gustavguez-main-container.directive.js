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
            if (indexClassCollapse > -1) {
                this.classes.splice(indexClassCollapse, 1);
            }
            if (indexClassOpen > -1) {
                this.classes.splice(indexClassOpen, 1);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUtySCxJQUFhLG1DQUFtQyxHQUFoRCxNQUFhLG1DQUFtQztJQVkvQyxrQkFBa0I7SUFDbEIsWUFDUywrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVZ6RSxRQUFRO1FBQ1IsWUFBTyxHQUFhO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1lBQ2QscUJBQXFCO1NBQ3JCLENBQUM7SUFLMkUsQ0FBQztJQUU5RSxvQkFBb0I7SUFDcEIsUUFBUTtRQUNQLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5QkFBeUI7SUFDakIsZUFBZSxDQUFDLEtBQWM7UUFDckMsaUNBQWlDO1FBQ2pDLE1BQU0sa0JBQWtCLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RSxNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRSxhQUFhO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBYztRQUNkLElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ04sSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Q7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBRUQsQ0FBQTs7WUExQzBDLCtCQUErQjs7QUFabkQ7SUFBckIsV0FBVyxDQUFDLE9BQU8sQ0FBQzt3RUFBcUI7QUFGOUIsbUNBQW1DO0lBSC9DLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw4QkFBOEI7S0FDeEMsQ0FBQztHQUNXLG1DQUFtQyxDQXdEL0M7U0F4RFksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vIEhvc3QgYmluZGluZ1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgaG9zdENsYXNzZXM6IHN0cmluZztcblxuXHQvLyBNb2Rlc1xuXHRjbGFzc2VzOiBzdHJpbmdbXSA9IFtcblx0XHQnc2lkZWJhci1taW5pJyxcblx0XHQnbGF5b3V0LWZpeGVkJyxcblx0XHQnbGF5b3V0LW5hdmJhci1maXhlZCdcblx0XTtcblx0c3RhdGU6IGJvb2xlYW47XG5cblx0Ly8gSW5qZWN0IHNlcnZpY2VzXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZTogTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSkgeyB9XG5cblx0Ly8gT24gY29tcG9uZW50IGluaXRcblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gU2V0IGJhc2UgY2xhc3NlcyB0byBob3N0IGNsYXNzZXNcblx0XHR0aGlzLmxvYWRIb3N0Q2xhc3NlcyhmYWxzZSk7XG5cblx0XHQvLyBXYXRjaCBzaWRlYmFyU3RhdGUgY2hhbmdlXG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLm9uQ2hhbmdlU3RhdGUuc3Vic2NyaWJlKChzdGF0ZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoc3RhdGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5vblRvZ2dsZVN0YXRlLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRIb3N0Q2xhc3NlcyghdGhpcy5zdGF0ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQcml2YXRlIGhlbHBlciBtZXRob2RzXG5cdHByaXZhdGUgbG9hZEhvc3RDbGFzc2VzKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gQ29udHJvbCBpbmRleCBqdXN0IGZvciBjb250cm9sXG5cdFx0Y29uc3QgaW5kZXhDbGFzc0NvbGxhcHNlOiBudW1iZXIgPSB0aGlzLmNsYXNzZXMuaW5kZXhPZignc2lkZWJhci1jb2xsYXBzZScpO1xuXHRcdGNvbnN0IGluZGV4Q2xhc3NPcGVuOiBudW1iZXIgPSB0aGlzLmNsYXNzZXMuaW5kZXhPZignc2lkZWJhci1vcGVuJyk7XG5cblx0XHQvLyBMb2FkIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG5cdFx0Ly8gQ2hlY2sgc3RhdGVcblx0XHRpZiAoc3RhdGUpIHtcblx0XHRcdHRoaXMuY2xhc3Nlcy5wdXNoKCdzaWRlYmFyLW9wZW4nKTtcblx0XHRcdHRoaXMuY2xhc3Nlcy5wdXNoKCdzaWRlYmFyLWNvbGxhcHNlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChpbmRleENsYXNzQ29sbGFwc2UgPiAtMSkge1xuXHRcdFx0XHR0aGlzLmNsYXNzZXMuc3BsaWNlKGluZGV4Q2xhc3NDb2xsYXBzZSwgMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5kZXhDbGFzc09wZW4gPiAtMSkge1xuXHRcdFx0XHR0aGlzLmNsYXNzZXMuc3BsaWNlKGluZGV4Q2xhc3NPcGVuLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBMb2FkIGNsYXNzZXNcblx0XHR0aGlzLmhvc3RDbGFzc2VzID0gdGhpcy5jbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG59XG4iXX0=