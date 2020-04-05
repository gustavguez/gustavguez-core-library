import { NgxGustavguezTableActionModel } from '../ngx-gustavguez-table-action.model';

export class NgxGustavguezTableShowActionModel extends NgxGustavguezTableActionModel {

	constructor(mustDisplayCallback?: Function) {
		// Call parent constructor
		super('fas fa-search', 'Show model', mustDisplayCallback);
	}
}
