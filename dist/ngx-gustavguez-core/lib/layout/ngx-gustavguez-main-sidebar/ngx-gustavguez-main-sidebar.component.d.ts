import { OnInit, EventEmitter } from '@angular/core';
import { NgxGustavguezMenuItem } from './ngx-gustavguez-menu-item.model';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
export declare class NgxGustavguezMainSidebarComponent implements OnInit {
    private ngxGustavguezMainSidebarService;
    brandTitle: string;
    brandImg: string;
    userIsLogged: boolean;
    userAvatar: string;
    userName: string;
    menuItems: NgxGustavguezMenuItem[];
    onMenuItem: EventEmitter<NgxGustavguezMenuItem>;
    menuItemsStates: any;
    constructor(ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService);
    ngOnInit(): void;
    onMenuItemClick(event: MouseEvent, menuItem: NgxGustavguezMenuItem): void;
    onBrandLink(event: MouseEvent): void;
    onCloseSidebar(): void;
}
