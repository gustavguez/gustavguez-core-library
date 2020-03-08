import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezToastsService } from './ngx-gustavguez-toasts.service';
import { ArrayUtility } from '../../utilities/array.utility';
let NgxGustavguezToastsComponent = class NgxGustavguezToastsComponent {
    //Inject services
    constructor(ngxGustavguezToastsService) {
        this.ngxGustavguezToastsService = ngxGustavguezToastsService;
        //Models
        this.toasts = [];
    }
    //On component init
    ngOnInit() {
        //Watch toast added
        this.ngxGustavguezToastsService.onToastAdded.subscribe((toast) => {
            this.openToast(toast);
        });
    }
    //Custom events
    onCloseToast(toast) {
        this.closeToast(toast);
    }
    //Private methods
    openToast(toast) {
        //Before push create timeout
        toast.timerInstance = setTimeout(() => {
            this.closeToast(toast);
        }, 3000);
        //push
        this.toasts.unshift(toast);
    }
    closeToast(toast) {
        //Check
        if (toast instanceof NgxGustavguezToastModel) {
            ArrayUtility.find(this.toasts, toast.id, (t, index) => {
                //Clear timer instance
                clearTimeout(t.timerInstance);
                //Remove from array
                this.toasts.splice(index, 1);
            });
        }
    }
};
NgxGustavguezToastsComponent.ctorParameters = () => [
    { type: NgxGustavguezToastsService }
];
NgxGustavguezToastsComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-toasts',
        template: "<div \n    class=\"toasts-top-right fixed mr-2 mt-2\" \n    [style.display]=\" toasts.length ? 'block' : 'none' \">\n    <!-- Then put toasts within -->\n    <div \n        class=\"toast show fade bg-{{ toast.status }}\" \n        *ngFor=\"let toast of toasts; let i = index\">\n        <div class=\"toast-header text-light\">\n\n            <strong class=\"mr-auto\">\n                Alerta\n            </strong>\n\n            <button \n                (click)=\"onCloseToast(toast)\"\n                type=\"button\" \n                class=\"btn btn-link text-light\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"toast-body\">{{ toast.message }}</div>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezToastsComponent);
export { NgxGustavguezToastsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXRvYXN0cy9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU83RCxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQUlyQyxpQkFBaUI7SUFDakIsWUFDWSwwQkFBc0Q7UUFBdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUxsRSxRQUFRO1FBQ1IsV0FBTSxHQUE4QixFQUFFLENBQUM7SUFJK0IsQ0FBQztJQUV2RSxtQkFBbUI7SUFDbkIsUUFBUTtRQUNKLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQThCLEVBQUUsRUFBRTtZQUN0RixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGVBQWU7SUFDZixZQUFZLENBQUMsS0FBOEI7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUJBQWlCO0lBQ1QsU0FBUyxDQUFDLEtBQThCO1FBQzVDLDRCQUE0QjtRQUM1QixLQUFLLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxNQUFNO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLFVBQVUsQ0FBQyxLQUE4QjtRQUM3QyxPQUFPO1FBQ1AsSUFBRyxLQUFLLFlBQVksdUJBQXVCLEVBQUM7WUFDMUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUEwQixFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUNyRixzQkFBc0I7Z0JBQ3RCLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRTlCLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ04sQ0FBQTs7WUF0QzJDLDBCQUEwQjs7QUFOekQsNEJBQTRCO0lBTHhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsb3ZCQUFxRDs7S0FFeEQsQ0FBQztHQUNXLDRCQUE0QixDQTRDeEM7U0E1Q1ksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LXRvYXN0Lm1vZGVsJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotdG9hc3RzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL01vZGVsc1xuICAgIHRvYXN0czogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWxbXSA9IFtdO1xuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBuZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZTogTmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2UpIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvL1dhdGNoIHRvYXN0IGFkZGVkXG4gICAgICAgIHRoaXMubmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2Uub25Ub2FzdEFkZGVkLnN1YnNjcmliZSgodG9hc3Q6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Ub2FzdCh0b2FzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vQ3VzdG9tIGV2ZW50c1xuICAgIG9uQ2xvc2VUb2FzdCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpIHtcbiAgICAgICAgdGhpcy5jbG9zZVRvYXN0KHRvYXN0KTtcbiAgICB9XG5cbiAgICAvL1ByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgb3BlblRvYXN0KHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCkge1xuICAgICAgICAvL0JlZm9yZSBwdXNoIGNyZWF0ZSB0aW1lb3V0XG4gICAgICAgIHRvYXN0LnRpbWVySW5zdGFuY2UgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUb2FzdCh0b2FzdCk7XG4gICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgIC8vcHVzaFxuICAgICAgICB0aGlzLnRvYXN0cy51bnNoaWZ0KHRvYXN0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlVG9hc3QodG9hc3Q6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKSB7XG4gICAgICAgIC8vQ2hlY2tcbiAgICAgICAgaWYodG9hc3QgaW5zdGFuY2VvZiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCl7XG4gICAgICAgICAgQXJyYXlVdGlsaXR5LmZpbmQodGhpcy50b2FzdHMsIHRvYXN0LmlkLCAodDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIC8vQ2xlYXIgdGltZXIgaW5zdGFuY2VcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0LnRpbWVySW5zdGFuY2UpO1xuICAgIFxuICAgICAgICAgICAgLy9SZW1vdmUgZnJvbSBhcnJheVxuICAgICAgICAgICAgdGhpcy50b2FzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxufVxuIl19