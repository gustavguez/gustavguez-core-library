import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    //Inputs
    @Input() loading: boolean;
    @Input() loadingText: string;

    //Inject services
    constructor() { }

    //On component init
    ngOnInit() {
    }
}
