import { EventEmitter } from '@angular/core';
import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';
export declare class NgxGustavguezButtonComponent {
    text: string;
    loadingText: string;
    loading: string;
    status: NgxGustavguezStatusEnum;
    onClick: EventEmitter<void>;
    onDoClick(): void;
}
