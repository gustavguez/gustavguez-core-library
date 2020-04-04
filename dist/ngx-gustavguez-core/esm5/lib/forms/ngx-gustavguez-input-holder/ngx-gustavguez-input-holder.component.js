import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var NgxGustavguezInputHolderComponent = /** @class */ (function () {
    function NgxGustavguezInputHolderComponent() {
    }
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
            styles: [""]
        })
    ], NgxGustavguezInputHolderComponent);
    return NgxGustavguezInputHolderComponent;
}());
export { NgxGustavguezInputHolderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpEO0lBQUE7SUFLQSxDQUFDO0lBSFM7UUFBUixLQUFLLEVBQUU7bUVBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOzBFQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTtnRkFBMkI7SUFKdkIsaUNBQWlDO1FBTDdDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsOGRBQTJEOztTQUUzRCxDQUFDO09BQ1csaUNBQWlDLENBSzdDO0lBQUQsd0NBQUM7Q0FBQSxBQUxELElBS0M7U0FMWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnQge1xuXHQvLyBJbnB1dFxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cdEBJbnB1dCgpIGNvbnRyb2xOYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHJlcXVpcmVkRXJyb3JUZXh0OiBzdHJpbmc7XG59XG4iXX0=