import { Component, OnInit, Input } from '@angular/core';
import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';

@Component({
    selector: 'ngx-gustavguez-info-box',
    templateUrl: './ngx-gustavguez-info-box.component.html',
    styleUrls: ['./ngx-gustavguez-info-box.component.scss']
})
export class NgxGustavguezInfoBoxComponent implements OnInit {
    //Inputs
    @Input() text: string;
    @Input() number: string;
    @Input() status: NgxGustavguezStatusEnum;
    @Input() icon: string;
    
    //Inject services
    constructor() { }

    //On component init
    ngOnInit(): void {
    }

}
