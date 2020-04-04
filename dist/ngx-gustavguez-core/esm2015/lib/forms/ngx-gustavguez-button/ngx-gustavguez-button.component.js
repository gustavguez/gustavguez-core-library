import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let NgxGustavguezButtonComponent = class NgxGustavguezButtonComponent {
    constructor() {
        // Output
        this.onClick = new EventEmitter();
    }
    // Custom events
    onDoClick() {
        this.onClick.emit();
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
__decorate([
    Input()
], NgxGustavguezButtonComponent.prototype, "button", void 0);
__decorate([
    Input()
], NgxGustavguezButtonComponent.prototype, "status", void 0);
__decorate([
    Output()
], NgxGustavguezButtonComponent.prototype, "onClick", void 0);
NgxGustavguezButtonComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-button',
        template: "<button \n    [type]=\"button ? 'button' : 'submit'\" \n\tclass=\"btn btn-{{ status ? status : 'primary' }} btn-block\"\n\t(click)=\"onDoClick()\">\n    <span *ngIf=\"!loading\">{{ text }}</span>\n\n    <ngx-gustavguez-loader \n        [loadingText]=\"loadingText\"\n        [loading]=\"loading\"></ngx-gustavguez-loader>\n</button>",
        styles: [""]
    })
], NgxGustavguezButtonComponent);
export { NgxGustavguezButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotYnV0dG9uL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTdkUsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFBekM7UUFRQyxTQUFTO1FBQ0MsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTVELENBQUM7SUFKQSxnQkFBZ0I7SUFDaEIsU0FBUztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNELENBQUE7QUFiUztJQUFSLEtBQUssRUFBRTswREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFO2lFQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs2REFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7NERBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOzREQUFpQztBQUcvQjtJQUFULE1BQU0sRUFBRTs2REFBa0Q7QUFUL0MsNEJBQTRCO0lBTHhDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsd1ZBQXFEOztLQUVyRCxDQUFDO0dBQ1csNEJBQTRCLENBZXhDO1NBZlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlelN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9uZ3gtZ3VzdGF2Z3Vlei1zdGF0dXMuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50IHtcblx0Ly8gSW5wdXRcblx0QElucHV0KCkgdGV4dDogc3RyaW5nO1xuXHRASW5wdXQoKSBsb2FkaW5nVGV4dDogc3RyaW5nO1xuXHRASW5wdXQoKSBsb2FkaW5nOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGJ1dHRvbjogYm9vbGVhbjtcblx0QElucHV0KCkgc3RhdHVzOiBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bTtcblxuXHQvLyBPdXRwdXRcblx0QE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBDdXN0b20gZXZlbnRzXG5cdG9uRG9DbGljaygpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2xpY2suZW1pdCgpO1xuXHR9XG59XG4iXX0=