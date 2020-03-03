import { FormGroup, FormControl } from "@angular/forms";
export default class FormUtility {
    /**
     * Returns a form data object
     * @param json
     */
    static jsonToFormData(json) {
        let fd = new FormData();
        for (let key in json) {
            if (json[key] instanceof Array) {
                json[key].forEach((j, index) => {
                    fd.append(key + '[' + index + ']', j);
                });
            }
            else {
                fd.append(key, json[key]);
            }
        }
        return fd;
    }
    /**
     * Find an Blob or File object in json
     * @param json
     */
    static needFormData(json) {
        let need = false;
        for (let key in json) {
            if (json[key] instanceof File || json[key] instanceof Blob) {
                need = true;
                break;
            }
        }
        return need;
    }
    /**
     * Trigger form validations
     * @param formGroup
     */
    static validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMvZm9ybS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxXQUFXO0lBRS9COzs7T0FHRztJQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBUTtRQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBRXhCLEtBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFDO1lBQ25CLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2FBQ0g7aUJBQUs7Z0JBQ0wsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDMUI7U0FDRDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBUztRQUM1QixJQUFJLElBQUksR0FBWSxLQUFLLENBQUM7UUFDMUIsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDbkIsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLEVBQUM7Z0JBQ3pELElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ1osTUFBTTthQUNOO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMscUJBQXFCLENBQUMsU0FBb0I7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9DLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO2dCQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNGLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVV0aWxpdHkge1xuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgYSBmb3JtIGRhdGEgb2JqZWN0XG5cdCAqIEBwYXJhbSBqc29uIFxuXHQgKi9cblx0c3RhdGljIGpzb25Ub0Zvcm1EYXRhKGpzb246YW55KTogRm9ybURhdGEge1xuXHRcdGxldCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4ganNvbil7XG5cdFx0XHRpZihqc29uW2tleV0gaW5zdGFuY2VvZiBBcnJheSl7XG5cdFx0XHRcdGpzb25ba2V5XS5mb3JFYWNoKChqLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGZkLmFwcGVuZChrZXkgKyAnWycgKyBpbmRleCArICddJywgailcblx0XHRcdFx0fSk7XG5cdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdGZkLmFwcGVuZChrZXksIGpzb25ba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGFuIEJsb2Igb3IgRmlsZSBvYmplY3QgaW4ganNvblxuXHQgKiBAcGFyYW0ganNvbiBcblx0ICovXG5cdHN0YXRpYyBuZWVkRm9ybURhdGEoanNvbjogYW55KTogYm9vbGVhbntcblx0XHRsZXQgbmVlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGZvcihsZXQga2V5IGluIGpzb24pe1xuXHRcdFx0aWYoanNvbltrZXldIGluc3RhbmNlb2YgRmlsZSB8fCBqc29uW2tleV0gaW5zdGFuY2VvZiBCbG9iKXtcblx0XHRcdFx0bmVlZCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmVlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyIGZvcm0gdmFsaWRhdGlvbnNcblx0ICogQHBhcmFtIGZvcm1Hcm91cCBcblx0ICovXG5cdHN0YXRpYyB2YWxpZGF0ZUFsbEZvcm1GaWVsZHMoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcblx0XHRPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZmllbGQgPT4ge1xuXHRcdFx0Y29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmllbGQpOyAgICAgICAgICAgXG5cdFx0XHRpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7ICAgICAgICAgICBcblx0XHRcdFx0Y29udHJvbC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHsgICAgICBcblx0XHRcdFx0dGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZHMoY29udHJvbCk7ICAgICAgICAgIFxuXHRcdFx0fVxuXHRcdH0pO1xuICBcdH1cbn0iXX0=