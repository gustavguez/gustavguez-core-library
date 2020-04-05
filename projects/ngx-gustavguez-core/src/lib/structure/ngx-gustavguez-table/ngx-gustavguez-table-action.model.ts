import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';

export class NgxGustavguezTableActionModel {

	// Models
	public btnClasses: string;
	public status: NgxGustavguezStatusEnum;

	// Constructor
	constructor(
		public icon?: string,
		public text?: string,
		public mustDisplayCallback?: Function) {
		// By default is primary
		this.status = NgxGustavguezStatusEnum.PRIMARY;
	}

	// Abstract methods
	public mustDisplay(model: any): boolean {
		return this.mustDisplayCallback instanceof Function ? this.mustDisplayCallback(model) : true;
	}
}
