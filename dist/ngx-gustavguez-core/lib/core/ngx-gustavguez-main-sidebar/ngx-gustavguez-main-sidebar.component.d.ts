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
    constructor();
    ngOnInit(): void;
    onMenuItemClick(event: MouseEvent, mouseItem: NgxGustavguezMenuItem): void;
    onBrandLink(event: MouseEvent): void;
}
