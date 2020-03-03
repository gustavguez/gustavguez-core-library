import { FormGroup, FormControl } from "@angular/forms";

export default class FormUtility {
	
	/**
	 * Returns a form data object
	 * @param json 
	 */
	static jsonToFormData(json:any): FormData {
		let fd = new FormData();

		for(let key in json){
			if(json[key] instanceof Array){
				json[key].forEach((j, index) => {
					fd.append(key + '[' + index + ']', j)
				});
			}else {
				fd.append(key, json[key]);
			}
		}
		return fd;
	}

	/**
	 * Find an Blob or File object in json
	 * @param json 
	 */
	static needFormData(json: any): boolean{
		let need: boolean = false;
		for(let key in json){
			if(json[key] instanceof File || json[key] instanceof Blob){
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
	static validateAllFormFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);           
			if (control instanceof FormControl) {           
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {      
				this.validateAllFormFields(control);          
			}
		});
  	}
}