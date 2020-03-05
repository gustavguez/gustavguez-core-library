import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-ngx-gustavguez-input-holder',
  templateUrl: './ngx-gustavguez-input-holder.component.html',
  styleUrls: ['./ngx-gustavguez-input-holder.component.scss']
})
export class NgxGustavguezInputHolderComponent implements OnInit {

    //Input
    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() requiredErrorText: string;

    //Inject services
    constructor() { }

    //On component init
    ngOnInit() {
    }
}
