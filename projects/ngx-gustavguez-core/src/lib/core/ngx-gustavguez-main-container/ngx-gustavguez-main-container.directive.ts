import { Directive, HostBinding, OnInit } from '@angular/core';

import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';

@Directive({
    selector: '[ngxGustavguezMainContainer]'
})
export class NgxGustavguezMainContainerDirective implements OnInit {
    //Host binding
    @HostBinding('class') hostClasses: string;

    //Modes
    state: boolean;
    baseClasses: string = 'sidebar-mini layout-fixed layout-navbar-fixed';

    //Inject services
    constructor(
        private ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService ) { }

    //On component init
    ngOnInit() {
        //Set base classes to host classes
        this.loadHostClasses();

        //Watch sidebarState change
		this.ngxGustavguezMainSidebarService.onChangeState.subscribe((state: boolean) => {
			this.loadHostClasses(state)
		});
		this.ngxGustavguezMainSidebarService.onToggleState.subscribe(() => {
			this.loadHostClasses(!this.state);
		});
    }

    //Private helper methods
    private loadHostClasses(state?: boolean) {
        //Backup state
        this.state = state;

        //Check state
        if(state) {
            this.hostClasses = this.baseClasses + " sidebar-collapse";
        } else {
            this.hostClasses = this.baseClasses;
        }
    }

}
