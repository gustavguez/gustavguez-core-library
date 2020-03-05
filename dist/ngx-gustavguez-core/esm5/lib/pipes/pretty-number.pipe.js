import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { NumberUtility } from '../utilities/number.utility';
var PrettyNumberPipe = /** @class */ (function () {
    function PrettyNumberPipe() {
    }
    PrettyNumberPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value ? NumberUtility.format(value) : '';
    };
    PrettyNumberPipe = __decorate([
        Pipe({
            name: 'prettyNumber'
        })
    ], PrettyNumberPipe);
    return PrettyNumberPipe;
}());
export { PrettyNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5LW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wcmV0dHktbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUs1RDtJQUFBO0lBTUEsQ0FBQztJQUpDLG9DQUFTLEdBQVQsVUFBVSxLQUFVO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDbEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBSlUsZ0JBQWdCO1FBSDVCLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7T0FDVyxnQkFBZ0IsQ0FNNUI7SUFBRCx1QkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51bWJlclV0aWxpdHkgfSBmcm9tICcuLi91dGlsaXRpZXMvbnVtYmVyLnV0aWxpdHknO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwcmV0dHlOdW1iZXInXG59KVxuZXhwb3J0IGNsYXNzIFByZXR0eU51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIHJldHVybiB2YWx1ZSA/IE51bWJlclV0aWxpdHkuZm9ybWF0KHZhbHVlKTogJyc7XG4gIH1cblxufVxuIl19