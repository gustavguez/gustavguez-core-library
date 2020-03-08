import { NgxGustavguezStatusEnum } from '../../ngx-gustavguez-status.enum';
export declare class NgxGustavguezToastModel {
    message: string;
    status: NgxGustavguezStatusEnum;
    id: string;
    timerInstance: any;
    constructor(message: string, status: NgxGustavguezStatusEnum);
}
