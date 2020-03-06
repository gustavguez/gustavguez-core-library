import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[ngxGustavguezMainContainer]'
})
export class NgxGustavguezMainContainerDirective implements OnInit {
    //Host binding
    @HostBinding('class') hostClasses: string;

    //Modes
    baseClasses: string = 'sidebar-mini layout-fixed layout-navbar-fixed';

    //Inject services
    constructor() { }

    //On component init
    ngOnInit() {
        //Set base classes to host classes
        this.hostClasses = this.baseClasses;
    }

}
