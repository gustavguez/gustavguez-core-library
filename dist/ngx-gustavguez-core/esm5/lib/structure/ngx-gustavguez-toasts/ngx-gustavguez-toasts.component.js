import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezToastsService } from './ngx-gustavguez-toasts.service';
import { ArrayUtility } from '../../utilities/array.utility';
var NgxGustavguezToastsComponent = /** @class */ (function () {
    // Inject services
    function NgxGustavguezToastsComponent(ngxGustavguezToastsService) {
        this.ngxGustavguezToastsService = ngxGustavguezToastsService;
        // Models
        this.toasts = [];
    }
    // On component init
    NgxGustavguezToastsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Watch toast added
        this.ngxGustavguezToastsService.onToastAdded.subscribe(function (toast) {
            _this.openToast(toast);
        });
    };
    // Custom events
    NgxGustavguezToastsComponent.prototype.onCloseToast = function (toast) {
        this.closeToast(toast);
    };
    // Private methods
    NgxGustavguezToastsComponent.prototype.openToast = function (toast) {
        var _this = this;
        // Before push create timeout
        toast.timerInstance = setTimeout(function () {
            _this.closeToast(toast);
        }, 3000);
        // push
        this.toasts.unshift(toast);
    };
    NgxGustavguezToastsComponent.prototype.closeToast = function (toast) {
        var _this = this;
        // Check
        if (toast instanceof NgxGustavguezToastModel) {
            ArrayUtility.find(this.toasts, toast.id, function (toastFound, index) {
                // Clear timer instance
                clearTimeout(toastFound.timerInstance);
                // Remove from array
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXRvYXN0cy9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPN0Q7SUFPQyxrQkFBa0I7SUFDbEIsc0NBQ1MsMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFML0QsU0FBUztRQUNULFdBQU0sR0FBOEIsRUFBRSxDQUFDO0lBSTRCLENBQUM7SUFFcEUsb0JBQW9CO0lBQ3BCLCtDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpBLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQThCO1lBQ3JGLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLG1EQUFZLEdBQVosVUFBYSxLQUE4QjtRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQkFBa0I7SUFDVixnREFBUyxHQUFqQixVQUFrQixLQUE4QjtRQUFoRCxpQkFRQztRQVBBLDZCQUE2QjtRQUM3QixLQUFLLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULE9BQU87UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8saURBQVUsR0FBbEIsVUFBbUIsS0FBOEI7UUFBakQsaUJBV0M7UUFWQSxRQUFRO1FBQ1IsSUFBSSxLQUFLLFlBQVksdUJBQXVCLEVBQUU7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsVUFBQyxVQUFtQyxFQUFFLEtBQWE7Z0JBQzNGLHVCQUF1QjtnQkFDdkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFdkMsb0JBQW9CO2dCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7O2dCQXJDb0MsMEJBQTBCOztJQVB0RDtRQUFSLEtBQUssRUFBRTtvRUFBb0I7SUFGaEIsNEJBQTRCO1FBTHhDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsOHZCQUFxRDs7U0FFckQsQ0FBQztPQUNXLDRCQUE0QixDQStDeEM7SUFBRCxtQ0FBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCB9IGZyb20gJy4vbmd4LWd1c3Rhdmd1ZXotdG9hc3QubW9kZWwnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2UgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LXRvYXN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotdG9hc3RzJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LXRvYXN0cy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LXRvYXN0cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpUb2FzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvLyBJbnB1dHNcblx0QElucHV0KCkgYnJhbmRUaXRsZTogc3RyaW5nO1xuXG5cdC8vIE1vZGVsc1xuXHR0b2FzdHM6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsW10gPSBbXTtcblxuXHQvLyBJbmplY3Qgc2VydmljZXNcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBuZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZTogTmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2UpIHsgfVxuXG5cdC8vIE9uIGNvbXBvbmVudCBpbml0XG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIFdhdGNoIHRvYXN0IGFkZGVkXG5cdFx0dGhpcy5uZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZS5vblRvYXN0QWRkZWQuc3Vic2NyaWJlKCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpID0+IHtcblx0XHRcdHRoaXMub3BlblRvYXN0KHRvYXN0KTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEN1c3RvbSBldmVudHNcblx0b25DbG9zZVRvYXN0KHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2VUb2FzdCh0b2FzdCk7XG5cdH1cblxuXHQvLyBQcml2YXRlIG1ldGhvZHNcblx0cHJpdmF0ZSBvcGVuVG9hc3QodG9hc3Q6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKTogdm9pZCB7XG5cdFx0Ly8gQmVmb3JlIHB1c2ggY3JlYXRlIHRpbWVvdXRcblx0XHR0b2FzdC50aW1lckluc3RhbmNlID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlVG9hc3QodG9hc3QpO1xuXHRcdH0sIDMwMDApO1xuXG5cdFx0Ly8gcHVzaFxuXHRcdHRoaXMudG9hc3RzLnVuc2hpZnQodG9hc3QpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZVRvYXN0KHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCk6IHZvaWQge1xuXHRcdC8vIENoZWNrXG5cdFx0aWYgKHRvYXN0IGluc3RhbmNlb2YgTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpIHtcblx0XHRcdEFycmF5VXRpbGl0eS5maW5kKHRoaXMudG9hc3RzLCB0b2FzdC5pZCwgKHRvYXN0Rm91bmQ6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdC8vIENsZWFyIHRpbWVyIGluc3RhbmNlXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0b2FzdEZvdW5kLnRpbWVySW5zdGFuY2UpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBmcm9tIGFycmF5XG5cdFx0XHRcdHRoaXMudG9hc3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==