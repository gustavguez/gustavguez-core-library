import { EventEmitter } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
export declare class NgxGustavguezToastsService {
    onToastAdded: EventEmitter<NgxGustavguezToastModel>;
    addError(message: string): void;
    addSuccess(message: string): void;
}
