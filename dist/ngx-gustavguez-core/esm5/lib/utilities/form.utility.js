import { FormGroup, FormControl } from '@angular/forms';
var FormUtility = /** @class */ (function () {
    function FormUtility() {
    }
    /**
     * Returns a form data object
     * @param json
     */
    FormUtility.jsonToFormData = function (json) {
        var fd = new FormData();
        var _loop_1 = function (key) {
            if (json[key] instanceof Array) {
                json[key].forEach(function (jsonChild, index) {
                    fd.append(key + '[' + index + ']', jsonChild);
                });
            }
            else {
                fd.append(key, json[key]);
            }
        };
        for (var key in json) {
            _loop_1(key);
        }
        return fd;
    };
    /**
     * Find an Blob or File object in json
     * @param json
     */
    FormUtility.needFormData = function (json) {
        var need = false;
        for (var key in json) {
            if (json[key] instanceof File || json[key] instanceof Blob) {
                need = true;
                break;
            }
        }
        return need;
    };
    /**
     * Trigger form validations
     * @param formGroup
     */
    FormUtility.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    return FormUtility;
}());
export { FormUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMvZm9ybS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7SUFBQTtJQWtEQSxDQUFDO0lBaERBOzs7T0FHRztJQUNJLDBCQUFjLEdBQXJCLFVBQXNCLElBQVM7UUFDOUIsSUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQ0FFZixHQUFHO1lBQ2IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBYyxFQUFFLEtBQWE7b0JBQy9DLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzFCOztRQVBGLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSTtvQkFBWCxHQUFHO1NBUWI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDSSx3QkFBWSxHQUFuQixVQUFvQixJQUFTO1FBQzVCLElBQUksSUFBSSxHQUFZLEtBQUssQ0FBQztRQUMxQixLQUFLLElBQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBRTtnQkFDM0QsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDWixNQUFNO2FBQ047U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFxQixHQUE1QixVQUE2QixTQUFvQjtRQUFqRCxpQkFTQztRQVJBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWE7WUFDckQsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMxQztpQkFBTSxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7Z0JBQ3hDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtVXRpbGl0eSB7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSBmb3JtIGRhdGEgb2JqZWN0XG5cdCAqIEBwYXJhbSBqc29uXG5cdCAqL1xuXHRzdGF0aWMganNvblRvRm9ybURhdGEoanNvbjogYW55KTogRm9ybURhdGEge1xuXHRcdGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0XHRmb3IgKGNvbnN0IGtleSBpbiBqc29uKSB7XG5cdFx0XHRpZiAoanNvbltrZXldIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0anNvbltrZXldLmZvckVhY2goKGpzb25DaGlsZDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0ZmQuYXBwZW5kKGtleSArICdbJyArIGluZGV4ICsgJ10nLCBqc29uQ2hpbGQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZkLmFwcGVuZChrZXksIGpzb25ba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGFuIEJsb2Igb3IgRmlsZSBvYmplY3QgaW4ganNvblxuXHQgKiBAcGFyYW0ganNvblxuXHQgKi9cblx0c3RhdGljIG5lZWRGb3JtRGF0YShqc29uOiBhbnkpOiBib29sZWFuIHtcblx0XHRsZXQgbmVlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3Qga2V5IGluIGpzb24pIHtcblx0XHRcdGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBGaWxlIHx8IGpzb25ba2V5XSBpbnN0YW5jZW9mIEJsb2IpIHtcblx0XHRcdFx0bmVlZCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmVlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyIGZvcm0gdmFsaWRhdGlvbnNcblx0ICogQHBhcmFtIGZvcm1Hcm91cFxuXHQgKi9cblx0c3RhdGljIHZhbGlkYXRlQWxsRm9ybUZpZWxkcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmllbGQpO1xuXHRcdFx0aWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xuXHRcdFx0XHRjb250cm9sLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcblx0XHRcdH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuXHRcdFx0XHR0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkcyhjb250cm9sKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIl19