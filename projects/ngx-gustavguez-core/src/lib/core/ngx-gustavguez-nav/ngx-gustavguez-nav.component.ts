import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';

@Component({
    selector: 'ngx-gustavguez-nav',
    templateUrl: './ngx-gustavguez-nav.component.html',
    styleUrls: ['./ngx-gustavguez-nav.component.scss']
})
export class NgxGustavguezNavComponent implements OnInit {
    //Inputs
    @Input() userIsLogged: boolean;
    @Input() userMenuText: string;
    @Input() userMenuLogoutText: string;

    //Outputs
    @Output() onLogout: EventEmitter<void> = new EventEmitter();

    //Models
    userMenuState: boolean;

    //Inject services
    constructor(
        private ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService ) { }

    //On component init
    ngOnInit(): void {
    }

    //Custom events
    onToggleMenu(){
        this.ngxGustavguezMainSidebarService.toggleState();
    }

    onToggleUserMenu(){
        this.userMenuState = !this.userMenuState;
    }

    onLogoutClick(){
        //Emit logout
        this.onLogout.emit();

        //Close user menu
        this.userMenuState = false;
    }
}
