import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-gustavguez-page-header',
    templateUrl: './ngx-gustavguez-page-header.component.html',
    styleUrls: ['./ngx-gustavguez-page-header.component.scss']
})
export class NgxGustavguezPageHeaderComponent implements OnInit {
    //Inputs
    @Input() text: string;

    //Inject services
    constructor() { }

    //On component init
    ngOnInit(): void {
    }

}
