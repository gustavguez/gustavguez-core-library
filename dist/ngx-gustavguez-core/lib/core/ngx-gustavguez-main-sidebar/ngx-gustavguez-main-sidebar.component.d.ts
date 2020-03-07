import { OnInit, EventEmitter } from '@angular/core';
import { NgxGustavguezMenuItem } from './ngx-gustavguez-menu-item.model';
export declare class NgxGustavguezMainSidebarComponent implements OnInit {
    brandTitle: string;
    brandImg: string;
    userIsLogged: boolean;
    userAvatar: string;
    userName: string;
    menuItems: NgxGustavguezMenuItem[];
    onMenuItem: EventEmitter<NgxGustavguezMenuItem>;
    menuItemsStates: any;
    constructor();
    ngOnInit(): void;
    onMenuItemClick(event: MouseEvent, menuItem: NgxGustavguezMenuItem): void;
    onBrandLink(event: MouseEvent): void;
}
