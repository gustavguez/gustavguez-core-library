import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgxGustavguezMenuItem } from './ngx-gustavguez-menu-item.model';
import { NgxGustavguezMainSidebarService } from './ngx-gustavguez-main-sidebar.service';
import { ArrayUtility } from '../../utilities/array.utility';

@Component({
    selector: 'ngx-gustavguez-main-sidebar',
    templateUrl: './ngx-gustavguez-main-sidebar.component.html',
    styleUrls: ['./ngx-gustavguez-main-sidebar.component.scss']
})
export class NgxGustavguezMainSidebarComponent implements OnInit {
    //Inputs
    @Input() brandTitle: string;
    @Input() brandImg: string;
    @Input() userIsLogged: boolean;
    @Input() userAvatar: string;
    @Input() userName: string;
    @Input() menuItems: NgxGustavguezMenuItem[];

    //Outputs
    @Output() onMenuItem: EventEmitter<NgxGustavguezMenuItem> = new EventEmitter();
    
    //Models
    menuItemsStates: any;

    //Inject services
    constructor(
        private ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService
    ) { }

    //On component init
    ngOnInit(): void {
        //Init vars
        this.menuItemsStates = {};
    }

    //Custom events
    onMenuItemClick(event: MouseEvent, menuItem: NgxGustavguezMenuItem) {
        event.preventDefault();
        //Check
        if(ArrayUtility.hasValue(menuItem.childs)) {
            //Toggle state
            this.menuItemsStates[menuItem.id] = !this.menuItemsStates[menuItem.id];
        } else {
            //Emit click for now
            this.onMenuItem.emit(menuItem);

            //Close sidebar
            this.ngxGustavguezMainSidebarService.changeState(false);
        }
    }

    onBrandLink(event: MouseEvent) {
        event.preventDefault();
        //Close sidebar
        this.ngxGustavguezMainSidebarService.changeState(false);
    }

    onCloseSidebar(){
        this.ngxGustavguezMainSidebarService.changeState(false);
    }

}
