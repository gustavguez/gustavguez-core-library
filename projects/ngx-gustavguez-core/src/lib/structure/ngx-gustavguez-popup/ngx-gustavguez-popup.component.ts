import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngx-gustavguez-popup',
    templateUrl: './ngx-gustavguez-popup.component.html',
    styleUrls: ['./ngx-gustavguez-popup.component.scss']
})
export class NgxGustavguezPopupComponent implements OnInit {
    //Inputs and Outputs
    @Input() state: boolean;
    @Input() titleText: string;
    @Input() closeText: string;
    @Output() onClose: EventEmitter<void> = new EventEmitter();

    //Inject services
    constructor() { }

    //On component init
    ngOnInit() {
    }

    //Custome events
    onClosePopup() {
        this.onClose.emit();
    }

}
