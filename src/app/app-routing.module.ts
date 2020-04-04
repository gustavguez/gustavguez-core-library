import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ApiServiceComponent } from './api/api-service/api-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './structure/loader/loader.component';
import { CardComponent } from './structure/card/card.component';

const appRoutes: Routes = [
	{
		path: "",
		component: DashboardComponent
	},
	// API 
	{
		path: "api/api-service",
		component: ApiServiceComponent
	},
	// STRUCTURE
	{
		path: "structure/loader",
		component: LoaderComponent
	},
	{
		path: "structure/card",
		component: CardComponent
	},
];

@NgModule({
	declarations: [

	],
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	providers: []
})
export class AppRoutingModule { }