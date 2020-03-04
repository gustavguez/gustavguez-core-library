import { FormGroup, FormControl } from "@angular/forms";
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
                json[key].forEach(function (j, index) {
                    fd.append(key + '[' + index + ']', j);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMvZm9ybS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7SUFBQTtJQWtEQSxDQUFDO0lBaERBOzs7T0FHRztJQUNJLDBCQUFjLEdBQXJCLFVBQXNCLElBQVE7UUFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQ0FFaEIsR0FBRztZQUNWLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLO29CQUMxQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDSDtpQkFBSztnQkFDTCxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQjs7UUFQRixLQUFJLElBQUksR0FBRyxJQUFJLElBQUk7b0JBQVgsR0FBRztTQVFWO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksd0JBQVksR0FBbkIsVUFBb0IsSUFBUztRQUM1QixJQUFJLElBQUksR0FBWSxLQUFLLENBQUM7UUFDMUIsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDbkIsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLEVBQUM7Z0JBQ3pELElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ1osTUFBTTthQUNOO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBcUIsR0FBNUIsVUFBNkIsU0FBb0I7UUFBakQsaUJBU0c7UUFSRixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQzVDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO2dCQUN4QyxLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNGLENBQUM7SUFDSixrQkFBQztBQUFELENBQUMsQUFsREQsSUFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtVXRpbGl0eSB7XG5cdFxuXHQvKipcblx0ICogUmV0dXJucyBhIGZvcm0gZGF0YSBvYmplY3Rcblx0ICogQHBhcmFtIGpzb24gXG5cdCAqL1xuXHRzdGF0aWMganNvblRvRm9ybURhdGEoanNvbjphbnkpOiBGb3JtRGF0YSB7XG5cdFx0bGV0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0XHRmb3IobGV0IGtleSBpbiBqc29uKXtcblx0XHRcdGlmKGpzb25ba2V5XSBpbnN0YW5jZW9mIEFycmF5KXtcblx0XHRcdFx0anNvbltrZXldLmZvckVhY2goKGosIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0ZmQuYXBwZW5kKGtleSArICdbJyArIGluZGV4ICsgJ10nLCBqKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1lbHNlIHtcblx0XHRcdFx0ZmQuYXBwZW5kKGtleSwganNvbltrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgYW4gQmxvYiBvciBGaWxlIG9iamVjdCBpbiBqc29uXG5cdCAqIEBwYXJhbSBqc29uIFxuXHQgKi9cblx0c3RhdGljIG5lZWRGb3JtRGF0YShqc29uOiBhbnkpOiBib29sZWFue1xuXHRcdGxldCBuZWVkOiBib29sZWFuID0gZmFsc2U7XG5cdFx0Zm9yKGxldCBrZXkgaW4ganNvbil7XG5cdFx0XHRpZihqc29uW2tleV0gaW5zdGFuY2VvZiBGaWxlIHx8IGpzb25ba2V5XSBpbnN0YW5jZW9mIEJsb2Ipe1xuXHRcdFx0XHRuZWVkID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuZWVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXIgZm9ybSB2YWxpZGF0aW9uc1xuXHQgKiBAcGFyYW0gZm9ybUdyb3VwIFxuXHQgKi9cblx0c3RhdGljIHZhbGlkYXRlQWxsRm9ybUZpZWxkcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xuXHRcdE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChmaWVsZCA9PiB7XG5cdFx0XHRjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChmaWVsZCk7ICAgICAgICAgICBcblx0XHRcdGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHsgICAgICAgICAgIFxuXHRcdFx0XHRjb250cm9sLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcblx0XHRcdH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkgeyAgICAgIFxuXHRcdFx0XHR0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkcyhjb250cm9sKTsgICAgICAgICAgXG5cdFx0XHR9XG5cdFx0fSk7XG4gIFx0fVxufSJdfQ==