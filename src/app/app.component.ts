import { Component } from '@angular/core';
import { NgxGustavguezNavItemModel, NgxGustavguezToastsService } from 'projects/ngx-gustavguez-core/src/public-api';

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
    menuItems: NgxGustavguezNavItemModel[] = [
        new NgxGustavguezNavItemModel("Menú padre 1", "fas fa-hand-holding-usd", null, [
            new NgxGustavguezNavItemModel("Menú hijo 1", "fas fa-home"),
            new NgxGustavguezNavItemModel("Menú hijo 1", "fas fa-home"),
            new NgxGustavguezNavItemModel("Menú hijo 1", "fas fa-home"),
        ]),
        new NgxGustavguezNavItemModel("Menú padre 2", "fas fa-hand-holding-usd", null, [
            new NgxGustavguezNavItemModel("Menú hijo 2", "fas fa-home"),
            new NgxGustavguezNavItemModel("Menú hijo 2", "fas fa-home")
        ]),
        new NgxGustavguezNavItemModel("Menú padre 3", "fas fa-hand-holding-usd", null, [
            new NgxGustavguezNavItemModel("Menú hijo 3", "fas fa-home"),
            new NgxGustavguezNavItemModel("Menú hijo 3", "fas fa-home"),
            new NgxGustavguezNavItemModel("Menú hijo 3", "fas fa-home"),
        ]),
    ]
    
    //Custom events
    onLogout(){
        console.log("logout");
    }

    onAddToastSuccess() {
        this.ngxGustavguezToastsService.addSuccess("La noticia se agregó correctamente.");
    }

    onAddToastError() {
        this.ngxGustavguezToastsService.addError("Problema al agregar la noticia.");
    }
}
