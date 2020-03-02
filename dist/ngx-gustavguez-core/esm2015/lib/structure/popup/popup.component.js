import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let PopupComponent = class PopupComponent {
    //Inject services
    constructor() {
        this.onClose = new EventEmitter();
    }
    //On component init
    ngOnInit() {
    }
    //Custome events
    onClosePopup() {
        this.onClose.emit();
    }
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
export { PopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcG9wdXAvcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFPdkIsaUJBQWlCO0lBQ2pCO1FBSFUsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzNDLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLFlBQVk7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Q0FFSixDQUFBO0FBakJZO0lBQVIsS0FBSyxFQUFFOzZDQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO2lEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtpREFBbUI7QUFDakI7SUFBVCxNQUFNLEVBQUU7K0NBQWtEO0FBTGxELGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsOCtCQUFxQzs7S0FFeEMsQ0FBQztHQUNXLGNBQWMsQ0FtQjFCO1NBbkJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXBvcHVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BvcHVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzIGFuZCBPdXRwdXRzXG4gICAgQElucHV0KCkgc3RhdGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGl0bGVUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xvc2VUZXh0OiBzdHJpbmc7XG4gICAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICAvL0N1c3RvbWUgZXZlbnRzXG4gICAgb25DbG9zZVBvcHVwKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxufVxuIl19