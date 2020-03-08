import { __decorate } from "tslib";
import { Component } from '@angular/core';
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
    NgxGustavguezToastsComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-toasts',
            template: "<div \n    class=\"toasts-top-right fixed mr-2 mt-2\" \n    [style.display]=\" toasts.length ? 'block' : 'none' \">\n    <!-- Then put toasts within -->\n    <div \n        class=\"toast show fade bg-{{ toast.status }}\" \n        *ngFor=\"let toast of toasts; let i = index\">\n        <div class=\"toast-header text-light\">\n\n            <strong class=\"mr-auto\">\n                Alerta\n            </strong>\n\n            <button \n                (click)=\"onCloseToast(toast)\"\n                type=\"button\" \n                class=\"btn btn-link text-light\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"toast-body\">{{ toast.message }}</div>\n    </div>\n</div>",
            styles: [""]
        })
    ], NgxGustavguezToastsComponent);
    return NgxGustavguezToastsComponent;
}());
export { NgxGustavguezToastsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXRvYXN0cy9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU83RDtJQUlJLGlCQUFpQjtJQUNqQixzQ0FDWSwwQkFBc0Q7UUFBdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUxsRSxRQUFRO1FBQ1IsV0FBTSxHQUE4QixFQUFFLENBQUM7SUFJK0IsQ0FBQztJQUV2RSxtQkFBbUI7SUFDbkIsK0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsbUJBQW1CO1FBQ25CLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBOEI7WUFDbEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlO0lBQ2YsbURBQVksR0FBWixVQUFhLEtBQThCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtJQUNULGdEQUFTLEdBQWpCLFVBQWtCLEtBQThCO1FBQWhELGlCQVFDO1FBUEcsNEJBQTRCO1FBQzVCLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsTUFBTTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyxpREFBVSxHQUFsQixVQUFtQixLQUE4QjtRQUFqRCxpQkFXRztRQVZDLE9BQU87UUFDUCxJQUFHLEtBQUssWUFBWSx1QkFBdUIsRUFBQztZQUMxQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxVQUFDLENBQTBCLEVBQUUsS0FBYTtnQkFDakYsc0JBQXNCO2dCQUN0QixZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUU5QixtQkFBbUI7Z0JBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBckNxQywwQkFBMEI7O0lBTnpELDRCQUE0QjtRQUx4QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLG92QkFBcUQ7O1NBRXhELENBQUM7T0FDVyw0QkFBNEIsQ0E0Q3hDO0lBQUQsbUNBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCB9IGZyb20gJy4vbmd4LWd1c3Rhdmd1ZXotdG9hc3QubW9kZWwnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelRvYXN0c1NlcnZpY2UgfSBmcm9tICcuL25neC1ndXN0YXZndWV6LXRvYXN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei10b2FzdHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LXRvYXN0cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpUb2FzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vTW9kZWxzXG4gICAgdG9hc3RzOiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbFtdID0gW107XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neEd1c3Rhdmd1ZXpUb2FzdHNTZXJ2aWNlOiBOZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZSkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vV2F0Y2ggdG9hc3QgYWRkZWRcbiAgICAgICAgdGhpcy5uZ3hHdXN0YXZndWV6VG9hc3RzU2VydmljZS5vblRvYXN0QWRkZWQuc3Vic2NyaWJlKCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlblRvYXN0KHRvYXN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9DdXN0b20gZXZlbnRzXG4gICAgb25DbG9zZVRvYXN0KHRvYXN0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCkge1xuICAgICAgICB0aGlzLmNsb3NlVG9hc3QodG9hc3QpO1xuICAgIH1cblxuICAgIC8vUHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBvcGVuVG9hc3QodG9hc3Q6IE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKSB7XG4gICAgICAgIC8vQmVmb3JlIHB1c2ggY3JlYXRlIHRpbWVvdXRcbiAgICAgICAgdG9hc3QudGltZXJJbnN0YW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVRvYXN0KHRvYXN0KTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgICAgLy9wdXNoXG4gICAgICAgIHRoaXMudG9hc3RzLnVuc2hpZnQodG9hc3QpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VUb2FzdCh0b2FzdDogTmd4R3VzdGF2Z3VlelRvYXN0TW9kZWwpIHtcbiAgICAgICAgLy9DaGVja1xuICAgICAgICBpZih0b2FzdCBpbnN0YW5jZW9mIE5neEd1c3Rhdmd1ZXpUb2FzdE1vZGVsKXtcbiAgICAgICAgICBBcnJheVV0aWxpdHkuZmluZCh0aGlzLnRvYXN0cywgdG9hc3QuaWQsICh0OiBOZ3hHdXN0YXZndWV6VG9hc3RNb2RlbCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy9DbGVhciB0aW1lciBpbnN0YW5jZVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHQudGltZXJJbnN0YW5jZSk7XG4gICAgXG4gICAgICAgICAgICAvL1JlbW92ZSBmcm9tIGFycmF5XG4gICAgICAgICAgICB0aGlzLnRvYXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG59XG4iXX0=