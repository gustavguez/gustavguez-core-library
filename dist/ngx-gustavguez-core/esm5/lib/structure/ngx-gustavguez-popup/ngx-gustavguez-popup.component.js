import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var NgxGustavguezPopupComponent = /** @class */ (function () {
    function NgxGustavguezPopupComponent() {
        this.onClose = new EventEmitter();
    }
    // Custome events
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
            template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n\t*ngIf=\"state\"\n\t(click)=\"onClosePopup()\"\n    class=\"modal-backdrop fade show\"></div>",
            styles: [""]
        })
    ], NgxGustavguezPopupComponent);
    return NgxGustavguezPopupComponent;
}());
export { NgxGustavguezPopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotcG9wdXAvbmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZFO0lBQUE7UUFLVyxZQUFPLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFPNUQsQ0FBQztJQUxBLGlCQUFpQjtJQUNqQixrREFBWSxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBUlE7UUFBUixLQUFLLEVBQUU7OERBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7a0VBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO2tFQUFtQjtJQUNqQjtRQUFULE1BQU0sRUFBRTtnRUFBa0Q7SUFML0MsMkJBQTJCO1FBTHZDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsMGdDQUFvRDs7U0FFcEQsQ0FBQztPQUNXLDJCQUEyQixDQVl2QztJQUFELGtDQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotcG9wdXAnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCB7XG5cdC8vIElucHV0cyBhbmQgT3V0cHV0c1xuXHRASW5wdXQoKSBzdGF0ZTogYm9vbGVhbjtcblx0QElucHV0KCkgdGl0bGVUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIGNsb3NlVGV4dDogc3RyaW5nO1xuXHRAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIEN1c3RvbWUgZXZlbnRzXG5cdG9uQ2xvc2VQb3B1cCgpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuXHR9XG5cbn1cbiJdfQ==