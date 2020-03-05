import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NgxGustavguezInputHolderComponent = class NgxGustavguezInputHolderComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
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
        selector: 'lib-ngx-gustavguez-input-holder',
        template: "<div class=\"form-group\">\n    <!-- CONTAINER -->\n    <ng-content></ng-content>\n\n    <!-- VALIDATIONS -->\n    <div class=\"text-danger\" *ngIf=\"form\">\n        <small *ngIf=\"\n                form.get(controlName).touched \n                && form.get(controlName).errors\n                && form.get(controlName).errors.required\">\n            {{ requiredErrorText ? requiredErrorText : \"Este campo es requerido\"  }}\n        </small>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezInputHolderComponent);
export { NgxGustavguezInputHolderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpELElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0lBTzFDLGlCQUFpQjtJQUNqQixnQkFBZ0IsQ0FBQztJQUVqQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLENBQUM7Q0FDSixDQUFBO0FBVlk7SUFBUixLQUFLLEVBQUU7K0RBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO3NFQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs0RUFBMkI7QUFMMUIsaUNBQWlDO0lBTDdDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQ0FBaUM7UUFDM0MsOGRBQTJEOztLQUU1RCxDQUFDO0dBQ1csaUNBQWlDLENBYTdDO1NBYlksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VleklucHV0SG9sZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIC8vSW5wdXRcbiAgICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gICAgQElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSByZXF1aXJlZEVycm9yVGV4dDogc3RyaW5nO1xuXG4gICAgLy9JbmplY3Qgc2VydmljZXNcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgLy9PbiBjb21wb25lbnQgaW5pdFxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cbn1cbiJdfQ==