import { OnInit, EventEmitter } from '@angular/core';
export declare class NgxGustavguezPopupComponent implements OnInit {
    state: boolean;
    titleText: string;
    closeText: string;
    onClose: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onClosePopup(): void;
}
