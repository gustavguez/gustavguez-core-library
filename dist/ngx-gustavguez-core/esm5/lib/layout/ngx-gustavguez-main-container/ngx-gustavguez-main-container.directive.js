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
        else if (indexClassCollapse > -1) {
            this.classes.splice(indexClassCollapse, 1);
        }
        else if (indexClassOpen > -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUtySDtJQVlDLGtCQUFrQjtJQUNsQiw2Q0FDUywrQkFBZ0U7UUFBaEUsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQVZ6RSxRQUFRO1FBQ1IsWUFBTyxHQUFhO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1lBQ2QscUJBQXFCO1NBQ3JCLENBQUM7SUFLMkUsQ0FBQztJQUU5RSxvQkFBb0I7SUFDcEIsc0RBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkEsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBYztZQUMzRSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDNUQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5QkFBeUI7SUFDakIsNkRBQWUsR0FBdkIsVUFBd0IsS0FBYztRQUNyQyxpQ0FBaUM7UUFDakMsSUFBTSxrQkFBa0IsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVFLElBQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBFLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixjQUFjO1FBQ2QsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsRUFBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUVELGVBQWU7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQXJDeUMsK0JBQStCOztJQVpuRDtRQUFyQixXQUFXLENBQUMsT0FBTyxDQUFDOzRFQUFxQjtJQUY5QixtQ0FBbUM7UUFIL0MsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLDhCQUE4QjtTQUN4QyxDQUFDO09BQ1csbUNBQW1DLENBcUQvQztJQUFELDBDQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vIEhvc3QgYmluZGluZ1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgaG9zdENsYXNzZXM6IHN0cmluZztcblxuXHQvLyBNb2Rlc1xuXHRjbGFzc2VzOiBzdHJpbmdbXSA9IFtcblx0XHQnc2lkZWJhci1taW5pJyxcblx0XHQnbGF5b3V0LWZpeGVkJyxcblx0XHQnbGF5b3V0LW5hdmJhci1maXhlZCdcblx0XTtcblx0c3RhdGU6IGJvb2xlYW47XG5cblx0Ly8gSW5qZWN0IHNlcnZpY2VzXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZTogTmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZSkgeyB9XG5cblx0Ly8gT24gY29tcG9uZW50IGluaXRcblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gU2V0IGJhc2UgY2xhc3NlcyB0byBob3N0IGNsYXNzZXNcblx0XHR0aGlzLmxvYWRIb3N0Q2xhc3NlcyhmYWxzZSk7XG5cblx0XHQvLyBXYXRjaCBzaWRlYmFyU3RhdGUgY2hhbmdlXG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6TWFpblNpZGViYXJTZXJ2aWNlLm9uQ2hhbmdlU3RhdGUuc3Vic2NyaWJlKChzdGF0ZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoc3RhdGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMubmd4R3VzdGF2Z3Vlek1haW5TaWRlYmFyU2VydmljZS5vblRvZ2dsZVN0YXRlLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRIb3N0Q2xhc3NlcyghdGhpcy5zdGF0ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQcml2YXRlIGhlbHBlciBtZXRob2RzXG5cdHByaXZhdGUgbG9hZEhvc3RDbGFzc2VzKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gQ29udHJvbCBpbmRleCBqdXN0IGZvciBjb250cm9sXG5cdFx0Y29uc3QgaW5kZXhDbGFzc0NvbGxhcHNlOiBudW1iZXIgPSB0aGlzLmNsYXNzZXMuaW5kZXhPZignc2lkZWJhci1jb2xsYXBzZScpO1xuXHRcdGNvbnN0IGluZGV4Q2xhc3NPcGVuOiBudW1iZXIgPSB0aGlzLmNsYXNzZXMuaW5kZXhPZignc2lkZWJhci1vcGVuJyk7XG5cblx0XHQvLyBMb2FkIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG5cdFx0Ly8gQ2hlY2sgc3RhdGVcblx0XHRpZiAoc3RhdGUpIHtcblx0XHRcdHRoaXMuY2xhc3Nlcy5wdXNoKCdzaWRlYmFyLW9wZW4nKTtcblx0XHRcdHRoaXMuY2xhc3Nlcy5wdXNoKCdzaWRlYmFyLWNvbGxhcHNlJyk7XG5cdFx0fSBlbHNlIGlmIChpbmRleENsYXNzQ29sbGFwc2UgPiAtMSl7XG5cdFx0XHR0aGlzLmNsYXNzZXMuc3BsaWNlKGluZGV4Q2xhc3NDb2xsYXBzZSwgMSk7XG5cdFx0fSBlbHNlIGlmIChpbmRleENsYXNzT3BlbiA+IC0xKXtcblx0XHRcdHRoaXMuY2xhc3Nlcy5zcGxpY2UoaW5kZXhDbGFzc09wZW4sIDEpO1xuXHRcdH1cblxuXHRcdC8vIExvYWQgY2xhc3Nlc1xuXHRcdHRoaXMuaG9zdENsYXNzZXMgPSB0aGlzLmNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cbn1cbiJdfQ==