import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ApiServiceComponent } from './api/api-service/api-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
	{
		path: "",
		component: DashboardComponent
	},
	{
		path: "api-service",
		component: ApiServiceComponent
	}
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