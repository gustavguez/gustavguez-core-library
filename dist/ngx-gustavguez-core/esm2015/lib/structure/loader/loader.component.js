import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LoaderComponent = class LoaderComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
};
__decorate([
    Input()
], LoaderComponent.prototype, "loading", void 0);
__decorate([
    Input()
], LoaderComponent.prototype, "loadingText", void 0);
LoaderComponent = __decorate([
    Component({
        selector: 'lib-loader',
        template: "<ng-container *ngIf=\"loading\">\n    <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n</ng-container>",
        styles: [""]
    })
], LoaderComponent);
export { LoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBS3hCLGlCQUFpQjtJQUNqQixnQkFBZ0IsQ0FBQztJQUVqQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLENBQUM7Q0FDSixDQUFBO0FBVFk7SUFBUixLQUFLLEVBQUU7Z0RBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO29EQUFxQjtBQUhwQixlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLHNQQUFzQzs7S0FFekMsQ0FBQztHQUNXLGVBQWUsQ0FXM0I7U0FYWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWxvYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcblxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG4iXX0=