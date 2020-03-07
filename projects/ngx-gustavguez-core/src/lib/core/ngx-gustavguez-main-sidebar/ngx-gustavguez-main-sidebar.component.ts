import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezMenuItem } from './ngx-gustavguez-menu-item.model';

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
    

    //Inject services
    constructor() { }

    //On component init
    ngOnInit(): void {
    }

    //Custom events
    onMenuItemClick(event: MouseEvent, mouseItem: NgxGustavguezMenuItem) {
        event.preventDefault();
        //Emit click for now
        this.onMenuItem.emit(mouseItem);
    }

    onBrandLink(event: MouseEvent) {
        event.preventDefault();
        //Do nothing for now
    }

}
