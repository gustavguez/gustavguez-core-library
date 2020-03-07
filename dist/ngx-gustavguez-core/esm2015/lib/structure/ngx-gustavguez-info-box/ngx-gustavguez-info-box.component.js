import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NgxGustavguezInfoBoxComponent = class NgxGustavguezInfoBoxComponent {
    //Inject services
    constructor() { }
    //On component init
    ngOnInit() {
    }
};
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "text", void 0);
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "number", void 0);
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "status", void 0);
__decorate([
    Input()
], NgxGustavguezInfoBoxComponent.prototype, "icon", void 0);
NgxGustavguezInfoBoxComponent = __decorate([
    Component({
        selector: 'ngx-gustavguez-info-box',
        template: "<div class=\"info-box\">\n    <span class=\"info-box-icon bg-{{ status }}\">\n        <i class=\"{{ icon }}\"></i>\n    </span>\n\n    <div class=\"info-box-content\">\n        <span class=\"info-box-text\">{{ text }}</span>\n        <span class=\"info-box-number\">{{ number }}</span>\n    </div>\n</div>",
        styles: [""]
    })
], NgxGustavguezInfoBoxComponent);
export { NgxGustavguezInfoBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5mby1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3gvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF6RCxJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtJQU90QyxpQkFBaUI7SUFDakIsZ0JBQWdCLENBQUM7SUFFakIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixDQUFDO0NBRUosQ0FBQTtBQVpZO0lBQVIsS0FBSyxFQUFFOzJEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7NkRBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7NkRBQWlDO0FBQ2hDO0lBQVIsS0FBSyxFQUFFOzJEQUFjO0FBTGIsNkJBQTZCO0lBTHpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsNlRBQXVEOztLQUUxRCxDQUFDO0dBQ1csNkJBQTZCLENBY3pDO1NBZFksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6U3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL25neC1ndXN0YXZndWV6LXN0YXR1cy5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei1pbmZvLWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWluZm8tYm94LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei1pbmZvLWJveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpJbmZvQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvL0lucHV0c1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdGF0dXM6IE5neEd1c3Rhdmd1ZXpTdGF0dXNFbnVtO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBcbiAgICAvL0luamVjdCBzZXJ2aWNlc1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvL09uIGNvbXBvbmVudCBpbml0XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iXX0=