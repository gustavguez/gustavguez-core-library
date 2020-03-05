import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-gustavguez-button',
  templateUrl: './ngx-gustavguez-button.component.html',
  styleUrls: ['./ngx-gustavguez-button.component.scss']
})
export class NgxGustavguezButtonComponent implements OnInit {
    //Input
    @Input() text: string;
    @Input() loadingText: string;
    @Input() loading: string;

    //Inject services
    constructor() { }

    //On component init
    ngOnInit() {
    }
}
