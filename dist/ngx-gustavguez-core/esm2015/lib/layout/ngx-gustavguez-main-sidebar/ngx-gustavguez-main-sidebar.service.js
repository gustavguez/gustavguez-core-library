import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
let NgxGustavguezMainSidebarService = class NgxGustavguezMainSidebarService {
    constructor() {
        //Properties
        this.onChangeState = new EventEmitter();
        this.onToggleState = new EventEmitter();
    }
    //Public methods
    changeState(state) {
        this.onChangeState.emit(state);
    }
    toggleState() {
        this.onToggleState.emit();
    }
};
NgxGustavguezMainSidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxGustavguezMainSidebarService_Factory() { return new NgxGustavguezMainSidebarService(); }, token: NgxGustavguezMainSidebarService, providedIn: "root" });
NgxGustavguezMainSidebarService = __decorate([
    Injectable({
        providedIn: "root"
    })
], NgxGustavguezMainSidebarService);
export { NgxGustavguezMainSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt6RCxJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQUE1QztRQUVJLFlBQVk7UUFDTCxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7S0FZakU7SUFURyxnQkFBZ0I7SUFDVCxXQUFXLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUVKLENBQUE7O0FBaEJZLCtCQUErQjtJQUgzQyxVQUFVLENBQUM7UUFDUixVQUFVLEVBQUUsTUFBTTtLQUNyQixDQUFDO0dBQ1csK0JBQStCLENBZ0IzQztTQWhCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2Uge1xuXG4gICAgLy9Qcm9wZXJ0aWVzXG4gICAgcHVibGljIG9uQ2hhbmdlU3RhdGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBwdWJsaWMgb25Ub2dnbGVTdGF0ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICAvL1B1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VTdGF0ZS5lbWl0KHN0YXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMub25Ub2dnbGVTdGF0ZS5lbWl0KCk7XG4gICAgfVxuXG59Il19