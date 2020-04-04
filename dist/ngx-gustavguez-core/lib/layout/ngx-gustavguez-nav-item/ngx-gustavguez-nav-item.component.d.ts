import { EventEmitter } from '@angular/core';
import { NgxGustavguezNavItemModel } from './ngx-gustavguez-nav-item.model';
export declare class NgxGustavguezNavItemComponent {
    navItem: NgxGustavguezNavItemModel;
    isParent: boolean;
    state: boolean;
    onNavItem: EventEmitter<NgxGustavguezNavItemModel>;
    onNavItemClick(event: MouseEvent): void;
    onNavItemChild(child: NgxGustavguezNavItemModel): void;
}
