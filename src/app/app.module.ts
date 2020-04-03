import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiServiceComponent } from './api/api-service/api-service.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxGustavguezCoreModule } from 'projects/ngx-gustavguez-core/src/public-api';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		ApiServiceComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule,
		NgxGustavguezCoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
