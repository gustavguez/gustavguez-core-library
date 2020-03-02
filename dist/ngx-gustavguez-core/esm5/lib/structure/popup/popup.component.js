import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PopupComponent = /** @class */ (function () {
    //Inject services
    function PopupComponent() {
        this.onClose = new EventEmitter();
    }
    //On component init
    PopupComponent.prototype.ngOnInit = function () {
    };
    //Custome events
    PopupComponent.prototype.onClosePopup = function () {
        this.onClose.emit();
    };
    __decorate([
        Input()
    ], PopupComponent.prototype, "state", void 0);
    __decorate([
        Input()
    ], PopupComponent.prototype, "titleText", void 0);
    __decorate([
        Input()
    ], PopupComponent.prototype, "closeText", void 0);
    __decorate([
        Output()
    ], PopupComponent.prototype, "onClose", void 0);
    PopupComponent = __decorate([
        Component({
            selector: 'lib-popup',
            template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n    *ngIf=\"state\"\n    class=\"modal-backdrop fade show\"></div>",
            styles: [""]
        })
    ], PopupComponent);
    return PopupComponent;
}());
export { PopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcG9wdXAvcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FO0lBT0ksaUJBQWlCO0lBQ2pCO1FBSFUsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzNDLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHFDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFmUTtRQUFSLEtBQUssRUFBRTtpREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTtxREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7cURBQW1CO0lBQ2pCO1FBQVQsTUFBTSxFQUFFO21EQUFrRDtJQUxsRCxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLDgrQkFBcUM7O1NBRXhDLENBQUM7T0FDVyxjQUFjLENBbUIxQjtJQUFELHFCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItcG9wdXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wb3B1cC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcG9wdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9JbnB1dHMgYW5kIE91dHB1dHNcbiAgICBASW5wdXQoKSBzdGF0ZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0aXRsZVRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjbG9zZVRleHQ6IHN0cmluZztcbiAgICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIC8vQ3VzdG9tZSBldmVudHNcbiAgICBvbkNsb3NlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuXG59XG4iXX0=