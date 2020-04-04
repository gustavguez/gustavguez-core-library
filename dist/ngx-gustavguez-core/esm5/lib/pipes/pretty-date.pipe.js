import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { DateUtility } from '../utilities/date.utility';
var PrettyDatePipe = /** @class */ (function () {
    function PrettyDatePipe() {
    }
    PrettyDatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return DateUtility.prettyDate(value, args.length ? args[0] : true);
    };
    PrettyDatePipe = __decorate([
        Pipe({
            name: 'prettyDate'
        })
    ], PrettyDatePipe);
    return PrettyDatePipe;
}());
export { PrettyDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcHJldHR5LWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS3hEO0lBQUE7SUFNQSxDQUFDO0lBSkEsa0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNuQyxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUpXLGNBQWM7UUFIMUIsSUFBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFlBQVk7U0FDbEIsQ0FBQztPQUNXLGNBQWMsQ0FNMUI7SUFBRCxxQkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlVXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9kYXRlLnV0aWxpdHknO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdwcmV0dHlEYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBQcmV0dHlEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0cmV0dXJuIERhdGVVdGlsaXR5LnByZXR0eURhdGUodmFsdWUsIGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWUpO1xuXHR9XG5cbn1cbiJdfQ==