import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGustavguezCoreModule } from 'projects/ngx-gustavguez-core/src/public-api';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxGustavguezCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
