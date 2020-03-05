import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var NgxGustavguezButtonComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezButtonComponent() {
    }
    //On component init
    NgxGustavguezButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], NgxGustavguezButtonComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], NgxGustavguezButtonComponent.prototype, "loadingText", void 0);
    __decorate([
        Input()
    ], NgxGustavguezButtonComponent.prototype, "loading", void 0);
    NgxGustavguezButtonComponent = __decorate([
        Component({
            selector: 'lib-ngx-gustavguez-button',
            template: "<button \n    type=\"submit\" \n    class=\"btn btn-primary btn-block\">\n    <span *ngIf=\"!loading\">{{ text }}</span>\n\n    <ngx-gustavguez-loader \n        [loadingText]=\"loadingText\"\n        [loading]=\"loading\"></ngx-gustavguez-loader>\n</button>",
            styles: [""]
        })
    ], NgxGustavguezButtonComponent);
    return NgxGustavguezButtonComponent;
}());
export { NgxGustavguezButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotYnV0dG9uL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pEO0lBTUksaUJBQWlCO0lBQ2pCO0lBQWdCLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLCtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBVFE7UUFBUixLQUFLLEVBQUU7OERBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTtxRUFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7aUVBQWlCO0lBSmhCLDRCQUE0QjtRQUx4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDZRQUFxRDs7U0FFdEQsQ0FBQztPQUNXLDRCQUE0QixDQVl4QztJQUFELG1DQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtZ3VzdGF2Z3Vlei1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlekJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9JbnB1dFxuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxvYWRpbmc6IHN0cmluZztcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG4iXX0=