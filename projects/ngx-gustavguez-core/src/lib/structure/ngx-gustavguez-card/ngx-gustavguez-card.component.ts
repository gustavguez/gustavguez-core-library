import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-gustavguez-card',
    templateUrl: './ngx-gustavguez-card.component.html',
    styleUrls: ['./ngx-gustavguez-card.component.scss']
})
export class NgxGustavguezCardComponent implements OnInit {
    //Inputs
    @Input() title: string;

    //Inject services
    constructor() { }

    //On component init
    ngOnInit(): void {
    }

}
