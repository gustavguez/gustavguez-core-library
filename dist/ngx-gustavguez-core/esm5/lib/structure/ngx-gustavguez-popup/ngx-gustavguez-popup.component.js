import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var NgxGustavguezPopupComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezPopupComponent() {
        this.onClose = new EventEmitter();
    }
    //On component init
    NgxGustavguezPopupComponent.prototype.ngOnInit = function () {
    };
    //Custome events
    NgxGustavguezPopupComponent.prototype.onClosePopup = function () {
        this.onClose.emit();
    };
    __decorate([
        Input()
    ], NgxGustavguezPopupComponent.prototype, "state", void 0);
    __decorate([
        Input()
    ], NgxGustavguezPopupComponent.prototype, "titleText", void 0);
    __decorate([
        Input()
    ], NgxGustavguezPopupComponent.prototype, "closeText", void 0);
    __decorate([
        Output()
    ], NgxGustavguezPopupComponent.prototype, "onClose", void 0);
    NgxGustavguezPopupComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-popup',
            template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n    *ngIf=\"state\"\n    class=\"modal-backdrop fade show\"></div>",
            styles: [""]
        })
    ], NgxGustavguezPopupComponent);
    return NgxGustavguezPopupComponent;
}());
export { NgxGustavguezPopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotcG9wdXAvbmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FO0lBT0ksaUJBQWlCO0lBQ2pCO1FBSFUsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzNDLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLDhDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLGtEQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFmUTtRQUFSLEtBQUssRUFBRTs4REFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTtrRUFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7a0VBQW1CO0lBQ2pCO1FBQVQsTUFBTSxFQUFFO2dFQUFrRDtJQUxsRCwyQkFBMkI7UUFMdkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyw4K0JBQW9EOztTQUV2RCxDQUFDO09BQ1csMkJBQTJCLENBbUJ2QztJQUFELGtDQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LXBvcHVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LXBvcHVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0cyBhbmQgT3V0cHV0c1xuICAgIEBJbnB1dCgpIHN0YXRlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRpdGxlVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsb3NlVGV4dDogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgLy9DdXN0b21lIGV2ZW50c1xuICAgIG9uQ2xvc2VQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG5cbn1cbiJdfQ==