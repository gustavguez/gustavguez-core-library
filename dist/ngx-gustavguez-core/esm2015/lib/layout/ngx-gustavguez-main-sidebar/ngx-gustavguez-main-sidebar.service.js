import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
let NgxGustavguezMainSidebarService = class NgxGustavguezMainSidebarService {
    constructor() {
        // Properties
        this.onChangeState = new EventEmitter();
        this.onToggleState = new EventEmitter();
    }
    // Public methods
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
        providedIn: 'root'
    })
], NgxGustavguezMainSidebarService);
export { NgxGustavguezMainSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt6RCxJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQUE1QztRQUVDLGFBQWE7UUFDTixrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7S0FXOUQ7SUFUQSxpQkFBaUI7SUFDVixXQUFXLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sV0FBVztRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FFRCxDQUFBOztBQWZZLCtCQUErQjtJQUgzQyxVQUFVLENBQUM7UUFDWCxVQUFVLEVBQUUsTUFBTTtLQUNsQixDQUFDO0dBQ1csK0JBQStCLENBZTNDO1NBZlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhclNlcnZpY2Uge1xuXG5cdC8vIFByb3BlcnRpZXNcblx0cHVibGljIG9uQ2hhbmdlU3RhdGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIG9uVG9nZ2xlU3RhdGU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBQdWJsaWMgbWV0aG9kc1xuXHRwdWJsaWMgY2hhbmdlU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlU3RhdGUuZW1pdChzdGF0ZSk7XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlU3RhdGUoKTogdm9pZCB7XG5cdFx0dGhpcy5vblRvZ2dsZVN0YXRlLmVtaXQoKTtcblx0fVxuXG59XG4iXX0=