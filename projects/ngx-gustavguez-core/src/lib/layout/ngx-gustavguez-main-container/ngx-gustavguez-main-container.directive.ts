import { Directive, HostBinding, OnInit } from '@angular/core';

import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';
import { WindowUtility } from '../../utilities/window.utility';

@Directive({
    selector: '[ngxGustavguezMainContainer]'
})
export class NgxGustavguezMainContainerDirective implements OnInit {
    //Host binding
    @HostBinding('class') hostClasses: string;

    //Modes
    classes: string[] = [
        'sidebar-mini',
        'layout-fixed',
        'layout-navbar-fixed'
    ];

    //Inject services
    constructor(
        private ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService ) { }

    //On component init
    ngOnInit() {
        //Set base classes to host classes
        this.loadHostClasses(false);

        //Watch sidebarState change
		this.ngxGustavguezMainSidebarService.onChangeState.subscribe((state: boolean) => {
			this.loadHostClasses(state)
		});
		this.ngxGustavguezMainSidebarService.onToggleState.subscribe(() => {
			this.loadHostClasses();
		});
    }

    //Private helper methods
    private loadHostClasses(state?: boolean) {
        const indexClassCollapse: number = this.classes.indexOf('sidebar-collapse');
        const indexClassOpen: number = this.classes.indexOf('sidebar-open');
        const openState: boolean = (state === undefined && indexClassOpen === -1) || state;
        const collapseState: boolean = (state === undefined && indexClassCollapse === -1) || state;

        //Remove from array
        if(indexClassCollapse > -1){
            this.classes.splice(indexClassCollapse, 1);
        }
        if(indexClassOpen > -1){
            this.classes.splice(indexClassOpen, 1);
        }

        //Check state
        if(WindowUtility.isSmallScreen()) {
            if (openState) this.classes.push('sidebar-open');
        } else {
            if (collapseState) this.classes.push('sidebar-collapse');
        }

        //Load classes
        this.hostClasses = this.classes.join(' ');
    }

}
