import { Component, Input, EventEmitter, Output } from '@angular/core';

import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';

@Component({
	selector: 'ngx-gustavguez-button',
	templateUrl: './ngx-gustavguez-button.component.html',
	styleUrls: ['./ngx-gustavguez-button.component.scss']
})
export class NgxGustavguezButtonComponent {
	// Input
	@Input() text: string;
	@Input() loadingText: string;
	@Input() loading: string;
	@Input() submit: boolean;
	@Input() status: NgxGustavguezStatusEnum;

	// Output
	@Output() onClick: EventEmitter<void> = new EventEmitter();

	// Custom events
	onDoClick(): void {
		this.onClick.emit();
	}
}
