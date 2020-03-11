import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NgxGustavguezLoaderComponent = class NgxGustavguezLoaderComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
};
__decorate([
    Input()
], NgxGustavguezLoaderComponent.prototype, "loading", void 0);
__decorate([
    Input()
], NgxGustavguezLoaderComponent.prototype, "loadingText", void 0);
NgxGustavguezLoaderComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-loader',
        template: "<div class=\"row m-5 text-center\" *ngIf=\"loading\">\n    <div class=\"col-12\">\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezLoaderComponent);
export { NgxGustavguezLoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LWxvYWRlci9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQUtyQyxpQkFBaUI7SUFDakIsZ0JBQWdCLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixDQUFDO0NBQ0osQ0FBQTtBQVRZO0lBQVIsS0FBSyxFQUFFOzZEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtpRUFBcUI7QUFIcEIsNEJBQTRCO0lBTHhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsa1RBQXFEOztLQUV0RCxDQUFDO0dBQ1csNEJBQTRCLENBV3hDO1NBWFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LWxvYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG4iXX0=