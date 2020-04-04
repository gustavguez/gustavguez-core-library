import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezToastsService } from './ngx-gustavguez-toasts.service';
import { ArrayUtility } from '../../utilities/array.utility';
let NgxGustavguezToastsComponent = class NgxGustavguezToastsComponent {
    // Inject services
    constructor(ngxGustavguezToastsService) {
        this.ngxGustavguezToastsService = ngxGustavguezToastsService;
        // Models
        this.toasts = [];
    }
    // On component init
    ngOnInit() {
        // Watch toast added
        this.ngxGustavguezToastsService.onToastAdded.subscribe((toast) => {
            this.openToast(toast);
        });
    }
    // Custom events
    onCloseToast(toast) {
        this.closeToast(toast);
    }
    // Private methods
    openToast(toast) {
        // Before push create timeout
        toast.timerInstance = setTimeout(() => {
            this.closeToast(toast);
        }, 3000);
        // push
        this.toasts.unshift(toast);
    }
    closeToast(toast) {
        // Check
        if (toast instanceof NgxGustavguezToastModel) {
            ArrayUtility.find(this.toasts, toast.id, (toastFound, index) => {
                // Clear timer instance
                clearTimeout(toastFound.timerInstance);
                // Remove from array
                this.toasts.splice(index, 1);
            });
        }
    }
};
NgxGustavguezToastsComponent.ctorParameters = () => [
    { type: NgxGustavguezToastsService }
];
__decorate([
    Input()
], NgxGustavguezToastsComponent.prototype, "brandTitle", void 0);
NgxGustavguezToastsComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-toasts',
        template: "<div \n    class=\"toasts-top-right fixed mr-2 mt-2\" \n    [style.display]=\" toasts.length ? 'block' : 'none' \">\n    <!-- Then put toasts within -->\n    <div \n        class=\"toast show fade bg-{{ toast.status }}\" \n        *ngFor=\"let toast of toasts; let i = index\">\n        <div class=\"toast-header text-light\">\n\n            <strong class=\"mr-auto\">\n                {{ brandTitle }}\n            </strong>\n\n            <button \n                (click)=\"onCloseToast(toast)\"\n                type=\"button\" \n                class=\"btn btn-link text-light\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"toast-body\">{{ toast.message }}</div>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezToastsComponent);
export { NgxGustavguezToastsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXRvYXN0cy9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPN0QsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFPeEMsa0JBQWtCO0lBQ2xCLFlBQ1MsMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFML0QsU0FBUztRQUNULFdBQU0sR0FBOEIsRUFBRSxDQUFDO0lBSTRCLENBQUM7SUFFcEUsb0JBQW9CO0lBQ3BCLFFBQVE7UUFDUCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7WUFDekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsWUFBWSxDQUFDLEtBQThCO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGtCQUFrQjtJQUNWLFNBQVMsQ0FBQyxLQUE4QjtRQUMvQyw2QkFBNkI7UUFDN0IsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsT0FBTztRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBOEI7UUFDaEQsUUFBUTtRQUNSLElBQUksS0FBSyxZQUFZLHVCQUF1QixFQUFFO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBbUMsRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDL0YsdUJBQXVCO2dCQUN2QixZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUV2QyxvQkFBb0I7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQztDQUNELENBQUE7O1lBdENxQywwQkFBMEI7O0FBUHREO0lBQVIsS0FBSyxFQUFFO2dFQUFvQjtBQUZoQiw0QkFBNEI7SUFMeEMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyw4dkJBQXFEOztLQUVyRCxDQUFDO0dBQ1csNEJBQTRCLENBK0N4QztTQS9DWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LXRvYXN0Lm1vZGVsJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LXRvYXN0cycsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcblxuXHQvLyBNb2RlbHNcblx0dG9hc3RzOiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbFtdID0gW107XG5cblx0Ly8gSW5qZWN0IHNlcnZpY2VzXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2U6IE5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlKSB7IH1cblxuXHQvLyBPbiBjb21wb25lbnQgaW5pdFxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBXYXRjaCB0b2FzdCBhZGRlZFxuXHRcdHRoaXMubmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2Uub25Ub2FzdEFkZGVkLnN1YnNjcmliZSgodG9hc3Q6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKSA9PiB7XG5cdFx0XHR0aGlzLm9wZW5Ub2FzdCh0b2FzdCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBDdXN0b20gZXZlbnRzXG5cdG9uQ2xvc2VUb2FzdCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlVG9hc3QodG9hc3QpO1xuXHR9XG5cblx0Ly8gUHJpdmF0ZSBtZXRob2RzXG5cdHByaXZhdGUgb3BlblRvYXN0KHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCk6IHZvaWQge1xuXHRcdC8vIEJlZm9yZSBwdXNoIGNyZWF0ZSB0aW1lb3V0XG5cdFx0dG9hc3QudGltZXJJbnN0YW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5jbG9zZVRvYXN0KHRvYXN0KTtcblx0XHR9LCAzMDAwKTtcblxuXHRcdC8vIHB1c2hcblx0XHR0aGlzLnRvYXN0cy51bnNoaWZ0KHRvYXN0KTtcblx0fVxuXG5cdHByaXZhdGUgY2xvc2VUb2FzdCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpOiB2b2lkIHtcblx0XHQvLyBDaGVja1xuXHRcdGlmICh0b2FzdCBpbnN0YW5jZW9mIE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKSB7XG5cdFx0XHRBcnJheVV0aWxpdHkuZmluZCh0aGlzLnRvYXN0cywgdG9hc3QuaWQsICh0b2FzdEZvdW5kOiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHQvLyBDbGVhciB0aW1lciBpbnN0YW5jZVxuXHRcdFx0XHRjbGVhclRpbWVvdXQodG9hc3RGb3VuZC50aW1lckluc3RhbmNlKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgZnJvbSBhcnJheVxuXHRcdFx0XHR0aGlzLnRvYXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=