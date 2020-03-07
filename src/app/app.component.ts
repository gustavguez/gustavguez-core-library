import { Component } from '@angular/core';
import { NgxGustavguezMenuItem } from 'projects/ngx-gustavguez-core/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    //Models
    menuItems: NgxGustavguezMenuItem
    
    //Custom events
    onLogout(){
        console.log("logout");
    }
}
