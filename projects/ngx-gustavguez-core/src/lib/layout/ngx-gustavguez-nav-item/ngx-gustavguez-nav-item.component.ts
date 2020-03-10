import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxGustavguezNavItemModel } from './ngx-gustavguez-nav-item.model';

@Component({
    selector: '[ngxGustavguezNavItem]',
    templateUrl: './ngx-gustavguez-nav-item.component.html',
    styleUrls: ['./ngx-gustavguez-nav-item.component.scss']
})
export class NgxGustavguezNavItemComponent implements OnInit {
    //Inputs
    @Input() navItem: NgxGustavguezNavItemModel
    @Input() isParent: boolean;
    @Input() state: boolean;

    @Output() onNavItem: EventEmitter<NgxGustavguezNavItemModel> = new EventEmitter();

    //Inject services
    constructor() { }

    //On component init
    ngOnInit(): void {
    }

    //Custome events
    onNavItemClick(event: MouseEvent){
        event.preventDefault();
        this.onNavItem.emit(this.navItem);
    }
}
