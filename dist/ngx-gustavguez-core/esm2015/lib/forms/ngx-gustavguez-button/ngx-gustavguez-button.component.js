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
], NgxGustavguezButtonComponent.prototype, "status", void 0);
__decorate([
    Output()
], NgxGustavguezButtonComponent.prototype, "onClick", void 0);
NgxGustavguezButtonComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-button',
        template: "<button \n    type=\"button\" \n\tclass=\"btn btn-{{ status ? status : 'primary' }} btn-block\"\n\t(click)=\"onDoClick()\">\n    <span *ngIf=\"!loading\">{{ text }}</span>\n\n    <ngx-gustavguez-loader \n        [loadingText]=\"loadingText\"\n        [loading]=\"loading\"></ngx-gustavguez-loader>\n</button>",
        styles: [""]
    })
], NgxGustavguezButtonComponent);
export { NgxGustavguezButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotYnV0dG9uL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTdkUsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFBekM7UUFPQyxTQUFTO1FBQ0MsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTVELENBQUM7SUFKQSxnQkFBZ0I7SUFDaEIsU0FBUztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNELENBQUE7QUFaUztJQUFSLEtBQUssRUFBRTswREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFO2lFQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs2REFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7NERBQWlDO0FBRy9CO0lBQVQsTUFBTSxFQUFFOzZEQUFrRDtBQVIvQyw0QkFBNEI7SUFMeEMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxnVUFBcUQ7O0tBRXJELENBQUM7R0FDVyw0QkFBNEIsQ0FjeEM7U0FkWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL25neC1ndXN0YXZndWV6LXN0YXR1cy5lbnVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQge1xuXHQvLyBJbnB1dFxuXHRASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxvYWRpbmc6IHN0cmluZztcblx0QElucHV0KCkgc3RhdHVzOiBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bTtcblxuXHQvLyBPdXRwdXRcblx0QE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBDdXN0b20gZXZlbnRzXG5cdG9uRG9DbGljaygpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2xpY2suZW1pdCgpO1xuXHR9XG59XG4iXX0=