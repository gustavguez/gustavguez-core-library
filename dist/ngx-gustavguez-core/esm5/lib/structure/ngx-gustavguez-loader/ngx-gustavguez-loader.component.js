import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var NgxGustavguezLoaderComponent = /** @class */ (function () {
    function NgxGustavguezLoaderComponent() {
    }
    __decorate([
        Input()
    ], NgxGustavguezLoaderComponent.prototype, "loading", void 0);
    __decorate([
        Input()
    ], NgxGustavguezLoaderComponent.prototype, "loadingText", void 0);
    NgxGustavguezLoaderComponent = __decorate([
        Component({
            selector: 'ngx-gustavguez-loader',
            template: "<ng-container *ngIf=\"loading\">\n\t<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n\t<span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n</ng-container>",
            styles: [""]
        })
    ], NgxGustavguezLoaderComponent);
    return NgxGustavguezLoaderComponent;
}());
export { NgxGustavguezLoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LWxvYWRlci9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRDtJQUFBO0lBSUEsQ0FBQztJQUZTO1FBQVIsS0FBSyxFQUFFO2lFQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtxRUFBcUI7SUFIakIsNEJBQTRCO1FBTHhDLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsa1BBQXFEOztTQUVyRCxDQUFDO09BQ1csNEJBQTRCLENBSXhDO0lBQUQsbUNBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LWxvYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XG59XG4iXX0=