import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezToastsService } from './ngx-gustavguez-toasts.service';
import { ArrayUtility } from '../../utilities/array.utility';
var NgxGustavguezToastsComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezToastsComponent(ngxGustavguezToastsService) {
        this.ngxGustavguezToastsService = ngxGustavguezToastsService;
        //Models
        this.toasts = [];
    }
    //On component init
    NgxGustavguezToastsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Watch toast added
        this.ngxGustavguezToastsService.onToastAdded.subscribe(function (toast) {
            _this.openToast(toast);
        });
    };
    //Custom events
    NgxGustavguezToastsComponent.prototype.onCloseToast = function (toast) {
        this.closeToast(toast);
    };
    //Private methods
    NgxGustavguezToastsComponent.prototype.openToast = function (toast) {
        var _this = this;
        //Before push create timeout
        toast.timerInstance = setTimeout(function () {
            _this.closeToast(toast);
        }, 3000);
        //push
        this.toasts.unshift(toast);
    };
    NgxGustavguezToastsComponent.prototype.closeToast = function (toast) {
        var _this = this;
        //Check
        if (toast instanceof NgxGustavguezToastModel) {
            ArrayUtility.find(this.toasts, toast.id, function (t, index) {
                //Clear timer instance
                clearTimeout(t.timerInstance);
                //Remove from array
                _this.toasts.splice(index, 1);
            });
        }
    };
    NgxGustavguezToastsComponent.ctorParameters = function () { return [
        { type: NgxGustavguezToastsService }
    ]; };
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
    return NgxGustavguezToastsComponent;
}());
export { NgxGustavguezToastsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXRvYXN0cy9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPN0Q7SUFPSSxpQkFBaUI7SUFDakIsc0NBQ1ksMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFMbEUsUUFBUTtRQUNSLFdBQU0sR0FBOEIsRUFBRSxDQUFDO0lBSStCLENBQUM7SUFFdkUsbUJBQW1CO0lBQ25CLCtDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQThCO1lBQ2xGLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZUFBZTtJQUNmLG1EQUFZLEdBQVosVUFBYSxLQUE4QjtRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQkFBaUI7SUFDVCxnREFBUyxHQUFqQixVQUFrQixLQUE4QjtRQUFoRCxpQkFRQztRQVBHLDRCQUE0QjtRQUM1QixLQUFLLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULE1BQU07UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8saURBQVUsR0FBbEIsVUFBbUIsS0FBOEI7UUFBakQsaUJBV0c7UUFWQyxPQUFPO1FBQ1AsSUFBRyxLQUFLLFlBQVksdUJBQXVCLEVBQUM7WUFDMUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsVUFBQyxDQUEwQixFQUFFLEtBQWE7Z0JBQ2pGLHNCQUFzQjtnQkFDdEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFOUIsbUJBQW1CO2dCQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXJDcUMsMEJBQTBCOztJQVB6RDtRQUFSLEtBQUssRUFBRTtvRUFBb0I7SUFGbkIsNEJBQTRCO1FBTHhDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsOHZCQUFxRDs7U0FFeEQsQ0FBQztPQUNXLDRCQUE0QixDQStDeEM7SUFBRCxtQ0FBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCB9IGZyb20gJy4vbmd4LWd1c3Rhdmd1ZXotdG9hc3QubW9kZWwnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2UgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LXRvYXN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei10b2FzdHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LXRvYXN0cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpUb2FzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgYnJhbmRUaXRsZTogc3RyaW5nO1xuXG4gICAgLy9Nb2RlbHNcbiAgICB0b2FzdHM6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsW10gPSBbXTtcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2U6IE5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy9XYXRjaCB0b2FzdCBhZGRlZFxuICAgICAgICB0aGlzLm5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlLm9uVG9hc3RBZGRlZC5zdWJzY3JpYmUoKHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuVG9hc3QodG9hc3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0N1c3RvbSBldmVudHNcbiAgICBvbkNsb3NlVG9hc3QodG9hc3Q6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKSB7XG4gICAgICAgIHRoaXMuY2xvc2VUb2FzdCh0b2FzdCk7XG4gICAgfVxuXG4gICAgLy9Qcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIG9wZW5Ub2FzdCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpIHtcbiAgICAgICAgLy9CZWZvcmUgcHVzaCBjcmVhdGUgdGltZW91dFxuICAgICAgICB0b2FzdC50aW1lckluc3RhbmNlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVG9hc3QodG9hc3QpO1xuICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAvL3B1c2hcbiAgICAgICAgdGhpcy50b2FzdHMudW5zaGlmdCh0b2FzdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZVRvYXN0KHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCkge1xuICAgICAgICAvL0NoZWNrXG4gICAgICAgIGlmKHRvYXN0IGluc3RhbmNlb2YgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpe1xuICAgICAgICAgIEFycmF5VXRpbGl0eS5maW5kKHRoaXMudG9hc3RzLCB0b2FzdC5pZCwgKHQ6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAvL0NsZWFyIHRpbWVyIGluc3RhbmNlXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodC50aW1lckluc3RhbmNlKTtcbiAgICBcbiAgICAgICAgICAgIC8vUmVtb3ZlIGZyb20gYXJyYXlcbiAgICAgICAgICAgIHRoaXMudG9hc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiJdfQ==