import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXRvYXN0cy9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPN0QsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFPckMsaUJBQWlCO0lBQ2pCLFlBQ1ksMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFMbEUsUUFBUTtRQUNSLFdBQU0sR0FBOEIsRUFBRSxDQUFDO0lBSStCLENBQUM7SUFFdkUsbUJBQW1CO0lBQ25CLFFBQVE7UUFDSixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7WUFDdEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlO0lBQ2YsWUFBWSxDQUFDLEtBQThCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtJQUNULFNBQVMsQ0FBQyxLQUE4QjtRQUM1Qyw0QkFBNEI7UUFDNUIsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsTUFBTTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBOEI7UUFDN0MsT0FBTztRQUNQLElBQUcsS0FBSyxZQUFZLHVCQUF1QixFQUFDO1lBQzFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBMEIsRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDckYsc0JBQXNCO2dCQUN0QixZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUU5QixtQkFBbUI7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNOLENBQUE7O1lBdEMyQywwQkFBMEI7O0FBUHpEO0lBQVIsS0FBSyxFQUFFO2dFQUFvQjtBQUZuQiw0QkFBNEI7SUFMeEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyw4dkJBQXFEOztLQUV4RCxDQUFDO0dBQ1csNEJBQTRCLENBK0N4QztTQS9DWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LXRvYXN0Lm1vZGVsJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotdG9hc3RzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcblxuICAgIC8vTW9kZWxzXG4gICAgdG9hc3RzOiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbFtdID0gW107XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlOiBOZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZSkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vV2F0Y2ggdG9hc3QgYWRkZWRcbiAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZS5vblRvYXN0QWRkZWQuc3Vic2NyaWJlKCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlblRvYXN0KHRvYXN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9DdXN0b20gZXZlbnRzXG4gICAgb25DbG9zZVRvYXN0KHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCkge1xuICAgICAgICB0aGlzLmNsb3NlVG9hc3QodG9hc3QpO1xuICAgIH1cblxuICAgIC8vUHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBvcGVuVG9hc3QodG9hc3Q6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKSB7XG4gICAgICAgIC8vQmVmb3JlIHB1c2ggY3JlYXRlIHRpbWVvdXRcbiAgICAgICAgdG9hc3QudGltZXJJbnN0YW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVRvYXN0KHRvYXN0KTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgICAgLy9wdXNoXG4gICAgICAgIHRoaXMudG9hc3RzLnVuc2hpZnQodG9hc3QpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VUb2FzdCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpIHtcbiAgICAgICAgLy9DaGVja1xuICAgICAgICBpZih0b2FzdCBpbnN0YW5jZW9mIE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKXtcbiAgICAgICAgICBBcnJheVV0aWxpdHkuZmluZCh0aGlzLnRvYXN0cywgdG9hc3QuaWQsICh0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy9DbGVhciB0aW1lciBpbnN0YW5jZVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHQudGltZXJJbnN0YW5jZSk7XG4gICAgXG4gICAgICAgICAgICAvL1JlbW92ZSBmcm9tIGFycmF5XG4gICAgICAgICAgICB0aGlzLnRvYXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG59XG4iXX0=