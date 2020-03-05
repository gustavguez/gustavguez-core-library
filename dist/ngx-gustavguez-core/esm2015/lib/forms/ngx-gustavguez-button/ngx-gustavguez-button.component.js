import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NgxGustavguezButtonComponent = class NgxGustavguezButtonComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
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
export { NgxGustavguezButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotYnV0dG9uL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBTXJDLGlCQUFpQjtJQUNqQixnQkFBZ0IsQ0FBQztJQUVqQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLENBQUM7Q0FDSixDQUFBO0FBVlk7SUFBUixLQUFLLEVBQUU7MERBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTtpRUFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7NkRBQWlCO0FBSmhCLDRCQUE0QjtJQUx4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLDZRQUFxRDs7S0FFdEQsQ0FBQztHQUNXLDRCQUE0QixDQVl4QztTQVpZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LWd1c3Rhdmd1ZXotYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nOiBzdHJpbmc7XG5cbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuIl19