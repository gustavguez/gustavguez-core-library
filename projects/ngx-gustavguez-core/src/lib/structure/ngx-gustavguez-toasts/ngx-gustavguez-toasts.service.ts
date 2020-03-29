import { Injectable, EventEmitter } from '@angular/core';

import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';

@Injectable({
	providedIn: 'root',
})
export class NgxGustavguezToastsService {

	// Event emmiters
	public onToastAdded: EventEmitter<NgxGustavguezToastModel> = new EventEmitter();

	// Methods
	public addError(message: string): void {
		// Open toast
		this.onToastAdded.emit(
			new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.DANGER)
		);
	}

	public addSuccess(message: string): void {
		// Open toast
		this.onToastAdded.emit(
			new NgxGustavguezToastModel(message, NgxGustavguezStatusEnum.SUCCESS)
		);
	}

}
