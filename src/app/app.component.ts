import { Component } from '@angular/core';
import { NgxGustavguezMenuItem, NgxGustavguezToastsService } from 'projects/ngx-gustavguez-core/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    //Inject services
    constructor(
        private ngxGustavguezToastsService: NgxGustavguezToastsService
    ){}

    //Models
    menuItems: NgxGustavguezMenuItem[] = [
        new NgxGustavguezMenuItem("Menú padre 1", "fas fa-hand-holding-usd", null, [
            new NgxGustavguezMenuItem("Menú hijo 1", "fas fa-home"),
            new NgxGustavguezMenuItem("Menú hijo 1", "fas fa-home"),
            new NgxGustavguezMenuItem("Menú hijo 1", "fas fa-home"),
        ]),
        new NgxGustavguezMenuItem("Menú padre 2", "fas fa-hand-holding-usd", null, [
            new NgxGustavguezMenuItem("Menú hijo 2", "fas fa-home"),
            new NgxGustavguezMenuItem("Menú hijo 2", "fas fa-home")
        ]),
        new NgxGustavguezMenuItem("Menú padre 3", "fas fa-hand-holding-usd", null, [
            new NgxGustavguezMenuItem("Menú hijo 3", "fas fa-home"),
            new NgxGustavguezMenuItem("Menú hijo 3", "fas fa-home"),
            new NgxGustavguezMenuItem("Menú hijo 3", "fas fa-home"),
        ]),
    ]
    
    //Custom events
    onLogout(){
        console.log("logout");
    }

    onMenuItem(item: NgxGustavguezMenuItem) {
        item.isActive = !item.isActive;
    }

    onAddToastSuccess() {
        this.ngxGustavguezToastsService.addSuccess("La noticia se agregó correctamente.");
    }

    onAddToastError() {
        this.ngxGustavguezToastsService.addError("Problema al agregar la noticia.");
    }
}
