import { OnInit } from '@angular/core';
import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';
export declare class NgxGustavguezInfoBoxComponent implements OnInit {
    text: string;
    number: string;
    status: NgxGustavguezStatusEnum;
    icon: string;
    constructor();
    ngOnInit(): void;
}
