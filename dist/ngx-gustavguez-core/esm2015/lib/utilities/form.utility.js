import { FormGroup, FormControl } from '@angular/forms';
export class FormUtility {
    /**
     * Returns a form data object
     * @param json
     */
    static jsonToFormData(json) {
        const fd = new FormData();
        for (const key in json) {
            if (json[key] instanceof Array) {
                json[key].forEach((jsonChild, index) => {
                    fd.append(key + '[' + index + ']', jsonChild);
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
        for (const key in json) {
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
        Object.keys(formGroup.controls).forEach((field) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMvZm9ybS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsTUFBTSxPQUFPLFdBQVc7SUFFdkI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFTO1FBQzlCLE1BQU0sRUFBRSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFFMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBYyxFQUFFLEtBQWEsRUFBRSxFQUFFO29CQUNuRCxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7YUFDSDtpQkFBTTtnQkFDTixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFTO1FBQzVCLElBQUksSUFBSSxHQUFZLEtBQUssQ0FBQztRQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBRTtnQkFDM0QsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDWixNQUFNO2FBQ047U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFvQjtRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUN6RCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTtnQkFDbkMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzFDO2lCQUFNLElBQUksT0FBTyxZQUFZLFNBQVMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxpdHkge1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgZm9ybSBkYXRhIG9iamVjdFxuXHQgKiBAcGFyYW0ganNvblxuXHQgKi9cblx0c3RhdGljIGpzb25Ub0Zvcm1EYXRhKGpzb246IGFueSk6IEZvcm1EYXRhIHtcblx0XHRjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4ganNvbikge1xuXHRcdFx0aWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRcdGpzb25ba2V5XS5mb3JFYWNoKChqc29uQ2hpbGQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdGZkLmFwcGVuZChrZXkgKyAnWycgKyBpbmRleCArICddJywganNvbkNoaWxkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmZC5hcHBlbmQoa2V5LCBqc29uW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmQ7XG5cdH1cblxuXHQvKipcblx0ICogRmluZCBhbiBCbG9iIG9yIEZpbGUgb2JqZWN0IGluIGpzb25cblx0ICogQHBhcmFtIGpzb25cblx0ICovXG5cdHN0YXRpYyBuZWVkRm9ybURhdGEoanNvbjogYW55KTogYm9vbGVhbiB7XG5cdFx0bGV0IG5lZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBqc29uKSB7XG5cdFx0XHRpZiAoanNvbltrZXldIGluc3RhbmNlb2YgRmlsZSB8fCBqc29uW2tleV0gaW5zdGFuY2VvZiBCbG9iKSB7XG5cdFx0XHRcdG5lZWQgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5lZWQ7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlciBmb3JtIHZhbGlkYXRpb25zXG5cdCAqIEBwYXJhbSBmb3JtR3JvdXBcblx0ICovXG5cdHN0YXRpYyB2YWxpZGF0ZUFsbEZvcm1GaWVsZHMoZm9ybUdyb3VwOiBGb3JtR3JvdXApOiB2b2lkIHtcblx0XHRPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkKTtcblx0XHRcdGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcblx0XHRcdFx0Y29udHJvbC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcblx0XHRcdFx0dGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZHMoY29udHJvbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==