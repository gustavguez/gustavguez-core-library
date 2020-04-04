import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NgxGustavguezCardComponent = class NgxGustavguezCardComponent {
};
__decorate([
    Input()
], NgxGustavguezCardComponent.prototype, "title", void 0);
NgxGustavguezCardComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-card',
        template: "<div class=\"card\">\n    <div class=\"card-header\" *ngIf=\"title\">\n        <h5 class=\"card-title\">{{ title }}</h5>\n    </div>\n\n    <div class=\"card-body\">\n        <ng-content></ng-content>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezCardComponent);
export { NgxGustavguezCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1jYXJkL25neC1ndXN0YXZndWV6LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtDQUd0QyxDQUFBO0FBRFM7SUFBUixLQUFLLEVBQUU7eURBQWU7QUFGWCwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQix3T0FBbUQ7O0tBRW5ELENBQUM7R0FDVywwQkFBMEIsQ0FHdEM7U0FIWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LWNhcmQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotY2FyZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6Q2FyZENvbXBvbmVudCB7XG5cdC8vIElucHV0c1xuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xufVxuIl19