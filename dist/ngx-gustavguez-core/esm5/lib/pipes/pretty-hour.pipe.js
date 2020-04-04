import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { DateUtility } from '../utilities/date.utility';
var PrettyHourPipe = /** @class */ (function () {
    function PrettyHourPipe() {
    }
    PrettyHourPipe.prototype.transform = function (value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5LWhvdXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvcHJldHR5LWhvdXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS3hEO0lBQUE7SUFNQSxDQUFDO0lBSkEsa0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFDbkIsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFKVyxjQUFjO1FBSDFCLElBQUksQ0FBQztZQUNMLElBQUksRUFBRSxZQUFZO1NBQ2xCLENBQUM7T0FDVyxjQUFjLENBTTFCO0lBQUQscUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVV0aWxpdHkgfSBmcm9tICcuLi91dGlsaXRpZXMvZGF0ZS51dGlsaXR5JztcblxuQFBpcGUoe1xuXHRuYW1lOiAncHJldHR5SG91cidcbn0pXG5leHBvcnQgY2xhc3MgUHJldHR5SG91clBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHR0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7XG5cdFx0cmV0dXJuIERhdGVVdGlsaXR5LnByZXR0eUhvdXIodmFsdWUpO1xuXHR9XG5cbn1cbiJdfQ==