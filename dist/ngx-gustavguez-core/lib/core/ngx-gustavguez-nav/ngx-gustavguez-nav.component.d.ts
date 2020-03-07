import { OnInit, EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
export declare class NgxGustavguezNavComponent implements OnInit {
    private ngxGustavguezMainSidebarService;
    userIsLogged: boolean;
    userMenuText: string;
    userMenuLogoutText: string;
    onLogout: EventEmitter<void>;
    userMenuState: boolean;
    constructor(ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService);
    ngOnInit(): void;
    onToggleMenu(): void;
    onToggleUserMenu(): void;
    onLogoutClick(): void;
}
