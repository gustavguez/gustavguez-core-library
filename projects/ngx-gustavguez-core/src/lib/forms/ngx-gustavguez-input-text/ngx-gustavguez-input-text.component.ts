import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'ngx-gustavguez-input-text',
	templateUrl: './ngx-gustavguez-input-text.component.html',
	styleUrls: ['./ngx-gustavguez-input-text.component.scss']
})
export class NgxGustavguezInputTextComponent {
	// Inputs
	@Input() form: FormGroup;
	@Input() label: string;
	@Input() placeholder: string;
	@Input() controlId: string;
	@Input() controlName: string;
	@Input() requiredErrorText: string;
}
