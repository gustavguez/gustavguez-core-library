import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
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
