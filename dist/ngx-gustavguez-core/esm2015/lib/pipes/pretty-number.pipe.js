import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { NumberUtility } from '../utilities/number.utility';
let PrettyNumberPipe = class PrettyNumberPipe {
    transform(value, ...args) {
        return value != undefined ? NumberUtility.format(value) : '';
    }
};
PrettyNumberPipe = __decorate([
    Pipe({
        name: 'prettyNumber'
    })
], PrettyNumberPipe);
export { PrettyNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5LW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wcmV0dHktbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUs1RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUUzQixTQUFTLENBQUMsS0FBVSxFQUFFLEdBQUcsSUFBVztRQUNsQyxPQUFPLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0NBRUYsQ0FBQTtBQU5ZLGdCQUFnQjtJQUg1QixJQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0dBQ1csZ0JBQWdCLENBTTVCO1NBTlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVtYmVyVXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9udW1iZXIudXRpbGl0eSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3ByZXR0eU51bWJlcidcbn0pXG5leHBvcnQgY2xhc3MgUHJldHR5TnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IHVuZGVmaW5lZCA/IE51bWJlclV0aWxpdHkuZm9ybWF0KHZhbHVlKTogJyc7XG4gIH1cblxufVxuIl19