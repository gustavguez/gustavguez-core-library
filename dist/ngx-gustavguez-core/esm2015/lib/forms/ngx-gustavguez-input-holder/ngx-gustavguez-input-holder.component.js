import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NgxGustavguezInputHolderComponent = class NgxGustavguezInputHolderComponent {
};
__decorate([
    Input()
], NgxGustavguezInputHolderComponent.prototype, "form", void 0);
__decorate([
    Input()
], NgxGustavguezInputHolderComponent.prototype, "controlName", void 0);
__decorate([
    Input()
], NgxGustavguezInputHolderComponent.prototype, "requiredErrorText", void 0);
NgxGustavguezInputHolderComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-input-holder',
        template: "<div class=\"form-group\">\n    <!-- CONTAINER -->\n    <ng-content></ng-content>\n\n    <!-- VALIDATIONS -->\n    <div class=\"text-danger\" *ngIf=\"form\">\n        <small *ngIf=\"\n                form.get(controlName).touched \n                && form.get(controlName).errors\n                && form.get(controlName).errors.required\">\n            {{ requiredErrorText ? requiredErrorText : \"Este campo es requerido\"  }}\n        </small>\n    </div>\n</div>",
        host: { class: 'w-100' },
        styles: [""]
    })
], NgxGustavguezInputHolderComponent);
export { NgxGustavguezInputHolderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0NBSzdDLENBQUE7QUFIUztJQUFSLEtBQUssRUFBRTsrREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7c0VBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOzRFQUEyQjtBQUp2QixpQ0FBaUM7SUFON0MsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLDZCQUE2QjtRQUN2Qyw4ZEFBMkQ7UUFFM0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTs7S0FDeEIsQ0FBQztHQUNXLGlDQUFpQyxDQUs3QztTQUxZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQuc2NzcyddLFxuXHRob3N0OiB7IGNsYXNzOiAndy0xMDAnIH1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VleklucHV0SG9sZGVyQ29tcG9uZW50IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblx0QElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcblx0QElucHV0KCkgcmVxdWlyZWRFcnJvclRleHQ6IHN0cmluZztcbn1cbiJdfQ==