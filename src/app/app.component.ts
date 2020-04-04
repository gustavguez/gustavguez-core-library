import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgxGustavguezNavItemModel, NgxGustavguezToastsService } from 'projects/ngx-gustavguez-core/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Inject services
	constructor(
		private router: Router,
		private ngxGustavguezToastsService: NgxGustavguezToastsService
	) { }

	// Models
	menuItems: NgxGustavguezNavItemModel[] = [
		new NgxGustavguezNavItemModel("Api", "fas fa-hand-holding-usd", null, [
			new NgxGustavguezNavItemModel("Api service", "fas fa-home", "api/api-service")
		]),
		new NgxGustavguezNavItemModel("Structure", "fas fa-hand-holding-usd", null, [
			new NgxGustavguezNavItemModel("Loader", "fas fa-home", "structure/loader"),
			new NgxGustavguezNavItemModel("Card", "fas fa-home", "structure/card"),
			new NgxGustavguezNavItemModel("Info box", "fas fa-home", "structure/info-box"),
			new NgxGustavguezNavItemModel("Page header", "fas fa-home", "structure/page-header"),
		]),
	]

	// Custom events
	onLogout() {
		console.log("logout");
	}

	onBrandLink() {
		this.router.navigate(["/"]);
	}

	onAddToastSuccess() {
		this.ngxGustavguezToastsService.addSuccess("La noticia se agregó correctamente.");
	}

	onAddToastError() {
		this.ngxGustavguezToastsService.addError("Problema al agregar la noticia.");
	}
}
