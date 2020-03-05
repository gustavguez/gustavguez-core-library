import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { DateUtility } from '../utilities/date.utility';
var PrettyHourPipe = /** @class */ (function () {
    function PrettyHourPipe() {
    }
    PrettyHourPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return DateUtility.prettyHour(value);
    };
    PrettyHourPipe = __decorate([
        Pipe({
            name: 'prettyHour'
        })
    ], PrettyHourPipe);
    return PrettyHourPipe;
}());
export { PrettyHourPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5LWhvdXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcHJldHR5LWhvdXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS3hEO0lBQUE7SUFNQSxDQUFDO0lBSkMsa0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNsQyxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUpVLGNBQWM7UUFIMUIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFlBQVk7U0FDbkIsQ0FBQztPQUNXLGNBQWMsQ0FNMUI7SUFBRCxxQkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlVXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9kYXRlLnV0aWxpdHknO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwcmV0dHlIb3VyJ1xufSlcbmV4cG9ydCBjbGFzcyBQcmV0dHlIb3VyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgcmV0dXJuIERhdGVVdGlsaXR5LnByZXR0eUhvdXIodmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==