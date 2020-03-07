import { OnInit } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
export declare class NgxGustavguezMainContainerDirective implements OnInit {
    private ngxGustavguezMainSidebarService;
    hostClasses: string;
    state: boolean;
    baseClasses: string;
    constructor(ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService);
    ngOnInit(): void;
    private loadHostClasses;
}
