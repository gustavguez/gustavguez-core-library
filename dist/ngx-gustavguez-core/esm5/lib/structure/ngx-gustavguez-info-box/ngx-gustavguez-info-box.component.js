import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var NgxGustavguezInfoBoxComponent = /** @class */ (function () {
    //Inject services
    function NgxGustavguezInfoBoxComponent() {
    }
    //On component init
    NgxGustavguezInfoBoxComponent.prototype.ngOnInit = function () {
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
    return NgxGustavguezInfoBoxComponent;
}());
export { NgxGustavguezInfoBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5mby1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3gvbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF6RDtJQU9JLGlCQUFpQjtJQUNqQjtJQUFnQixDQUFDO0lBRWpCLG1CQUFtQjtJQUNuQixnREFBUSxHQUFSO0lBQ0EsQ0FBQztJQVZRO1FBQVIsS0FBSyxFQUFFOytEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7aUVBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7aUVBQWlDO0lBQ2hDO1FBQVIsS0FBSyxFQUFFOytEQUFjO0lBTGIsNkJBQTZCO1FBTHpDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsNlRBQXVEOztTQUUxRCxDQUFDO09BQ1csNkJBQTZCLENBY3pDO0lBQUQsb0NBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vbmd4LWd1c3Rhdmd1ZXotc3RhdHVzLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LWluZm8tYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotaW5mby1ib3guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWluZm8tYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlekluZm9Cb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vSW5wdXRzXG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG51bWJlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN0YXR1czogTmd4R3VzdGF2Z3VlelN0YXR1c0VudW07XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIFxuICAgIC8vSW5qZWN0IHNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vT24gY29tcG9uZW50IGluaXRcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiJdfQ==