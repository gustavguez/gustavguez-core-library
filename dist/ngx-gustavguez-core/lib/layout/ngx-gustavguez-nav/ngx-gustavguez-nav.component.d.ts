import { EventEmitter } from '@angular/core';
import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
export declare class NgxGustavguezNavComponent {
    private ngxGustavguezMainSidebarService;
    brandTitle: string;
    userIsLogged: boolean;
    userMenuText: string;
    userMenuLogoutText: string;
    onLogout: EventEmitter<void>;
    onBrand: EventEmitter<void>;
    userMenuState: boolean;
    constructor(ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService);
    onToggleMenu(event: MouseEvent): void;
    onToggleUserMenu(event: MouseEvent): void;
    onLogoutClick(event: MouseEvent): void;
    onBrandLink(event: MouseEvent): void;
}
