import { FormGroup, FormControl } from "@angular/forms";
export class FormUtility {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMvZm9ybS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsTUFBTSxPQUFPLFdBQVc7SUFFdkI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFRO1FBQzdCLElBQUksRUFBRSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFFeEIsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDbkIsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxFQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDSDtpQkFBSztnQkFDTCxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFTO1FBQzVCLElBQUksSUFBSSxHQUFZLEtBQUssQ0FBQztRQUMxQixLQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBQztZQUNuQixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBQztnQkFDekQsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDWixNQUFNO2FBQ047U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFvQjtRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0MsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMxQztpQkFBTSxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0YsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxpdHkge1xuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgYSBmb3JtIGRhdGEgb2JqZWN0XG5cdCAqIEBwYXJhbSBqc29uIFxuXHQgKi9cblx0c3RhdGljIGpzb25Ub0Zvcm1EYXRhKGpzb246YW55KTogRm9ybURhdGEge1xuXHRcdGxldCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4ganNvbil7XG5cdFx0XHRpZihqc29uW2tleV0gaW5zdGFuY2VvZiBBcnJheSl7XG5cdFx0XHRcdGpzb25ba2V5XS5mb3JFYWNoKChqLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGZkLmFwcGVuZChrZXkgKyAnWycgKyBpbmRleCArICddJywgailcblx0XHRcdFx0fSk7XG5cdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdGZkLmFwcGVuZChrZXksIGpzb25ba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGFuIEJsb2Igb3IgRmlsZSBvYmplY3QgaW4ganNvblxuXHQgKiBAcGFyYW0ganNvbiBcblx0ICovXG5cdHN0YXRpYyBuZWVkRm9ybURhdGEoanNvbjogYW55KTogYm9vbGVhbntcblx0XHRsZXQgbmVlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGZvcihsZXQga2V5IGluIGpzb24pe1xuXHRcdFx0aWYoanNvbltrZXldIGluc3RhbmNlb2YgRmlsZSB8fCBqc29uW2tleV0gaW5zdGFuY2VvZiBCbG9iKXtcblx0XHRcdFx0bmVlZCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmVlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyIGZvcm0gdmFsaWRhdGlvbnNcblx0ICogQHBhcmFtIGZvcm1Hcm91cCBcblx0ICovXG5cdHN0YXRpYyB2YWxpZGF0ZUFsbEZvcm1GaWVsZHMoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcblx0XHRPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZmllbGQgPT4ge1xuXHRcdFx0Y29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmllbGQpOyAgICAgICAgICAgXG5cdFx0XHRpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7ICAgICAgICAgICBcblx0XHRcdFx0Y29udHJvbC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHsgICAgICBcblx0XHRcdFx0dGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZHMoY29udHJvbCk7ICAgICAgICAgIFxuXHRcdFx0fVxuXHRcdH0pO1xuICBcdH1cbn0iXX0=