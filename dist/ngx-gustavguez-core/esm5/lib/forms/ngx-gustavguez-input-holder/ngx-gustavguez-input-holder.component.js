import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var NgxGustavguezInputHolderComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezInputHolderComponent() {
    }
    //On component init
    NgxGustavguezInputHolderComponent.prototype.ngOnInit = function () {
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
            styles: [""]
        })
    ], NgxGustavguezInputHolderComponent);
    return NgxGustavguezInputHolderComponent;
}());
export { NgxGustavguezInputHolderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpEO0lBT0ksaUJBQWlCO0lBQ2pCO0lBQWdCLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLG9EQUFRLEdBQVI7SUFDQSxDQUFDO0lBVFE7UUFBUixLQUFLLEVBQUU7bUVBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOzBFQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTtnRkFBMkI7SUFMMUIsaUNBQWlDO1FBTDdDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsOGRBQTJEOztTQUU1RCxDQUFDO09BQ1csaUNBQWlDLENBYTdDO0lBQUQsd0NBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpJbnB1dEhvbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvL0lucHV0XG4gICAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICAgIEBJbnB1dCgpIGNvbnRyb2xOYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmVxdWlyZWRFcnJvclRleHQ6IHN0cmluZztcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG4iXX0=