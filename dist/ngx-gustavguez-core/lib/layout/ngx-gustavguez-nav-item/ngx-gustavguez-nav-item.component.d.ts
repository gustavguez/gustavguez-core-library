import { OnInit, EventEmitter } from '@angular/core';
import { NgxGustavguezNavItemModel } from './ngx-gustavguez-nav-item.model';
export declare class NgxGustavguezNavItemComponent implements OnInit {
    navItem: NgxGustavguezNavItemModel;
    isParent: boolean;
    state: boolean;
    onNavItem: EventEmitter<NgxGustavguezNavItemModel>;
    constructor();
    ngOnInit(): void;
    onNavItemClick(event: MouseEvent): void;
}
