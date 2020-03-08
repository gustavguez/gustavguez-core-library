import { OnInit } from '@angular/core';
import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezToastsService } from './ngx-gustavguez-toasts.service';
export declare class NgxGustavguezToastsComponent implements OnInit {
    private ngxGustavguezToastsService;
    toasts: NgxGustavguezToastModel[];
    constructor(ngxGustavguezToastsService: NgxGustavguezToastsService);
    ngOnInit(): void;
    onCloseToast(toast: NgxGustavguezToastModel): void;
    private openToast;
    private closeToast;
}
