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
export default FormUtility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMvZm9ybS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7SUFBQTtJQWtEQSxDQUFDO0lBaERBOzs7T0FHRztJQUNJLDBCQUFjLEdBQXJCLFVBQXNCLElBQVE7UUFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQ0FFaEIsR0FBRztZQUNWLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLO29CQUMxQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDSDtpQkFBSztnQkFDTCxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQjs7UUFQRixLQUFJLElBQUksR0FBRyxJQUFJLElBQUk7b0JBQVgsR0FBRztTQVFWO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksd0JBQVksR0FBbkIsVUFBb0IsSUFBUztRQUM1QixJQUFJLElBQUksR0FBWSxLQUFLLENBQUM7UUFDMUIsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDbkIsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLEVBQUM7Z0JBQ3pELElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ1osTUFBTTthQUNOO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBcUIsR0FBNUIsVUFBNkIsU0FBb0I7UUFBakQsaUJBU0c7UUFSRixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQzVDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO2dCQUN4QyxLQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNGLENBQUM7SUFDSixrQkFBQztBQUFELENBQUMsQUFsREQsSUFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1VdGlsaXR5IHtcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgZm9ybSBkYXRhIG9iamVjdFxuXHQgKiBAcGFyYW0ganNvbiBcblx0ICovXG5cdHN0YXRpYyBqc29uVG9Gb3JtRGF0YShqc29uOmFueSk6IEZvcm1EYXRhIHtcblx0XHRsZXQgZmQgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRcdGZvcihsZXQga2V5IGluIGpzb24pe1xuXHRcdFx0aWYoanNvbltrZXldIGluc3RhbmNlb2YgQXJyYXkpe1xuXHRcdFx0XHRqc29uW2tleV0uZm9yRWFjaCgoaiwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRmZC5hcHBlbmQoa2V5ICsgJ1snICsgaW5kZXggKyAnXScsIGopXG5cdFx0XHRcdH0pO1xuXHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRmZC5hcHBlbmQoa2V5LCBqc29uW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmQ7XG5cdH1cblxuXHQvKipcblx0ICogRmluZCBhbiBCbG9iIG9yIEZpbGUgb2JqZWN0IGluIGpzb25cblx0ICogQHBhcmFtIGpzb24gXG5cdCAqL1xuXHRzdGF0aWMgbmVlZEZvcm1EYXRhKGpzb246IGFueSk6IGJvb2xlYW57XG5cdFx0bGV0IG5lZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHRmb3IobGV0IGtleSBpbiBqc29uKXtcblx0XHRcdGlmKGpzb25ba2V5XSBpbnN0YW5jZW9mIEZpbGUgfHwganNvbltrZXldIGluc3RhbmNlb2YgQmxvYil7XG5cdFx0XHRcdG5lZWQgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5lZWQ7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlciBmb3JtIHZhbGlkYXRpb25zXG5cdCAqIEBwYXJhbSBmb3JtR3JvdXAgXG5cdCAqL1xuXHRzdGF0aWMgdmFsaWRhdGVBbGxGb3JtRmllbGRzKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XG5cdFx0T2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGZpZWxkID0+IHtcblx0XHRcdGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkKTsgICAgICAgICAgIFxuXHRcdFx0aWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkgeyAgICAgICAgICAgXG5cdFx0XHRcdGNvbnRyb2wubWFya0FzVG91Y2hlZCh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuXHRcdFx0fSBlbHNlIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7ICAgICAgXG5cdFx0XHRcdHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRzKGNvbnRyb2wpOyAgICAgICAgICBcblx0XHRcdH1cblx0XHR9KTtcbiAgXHR9XG59Il19