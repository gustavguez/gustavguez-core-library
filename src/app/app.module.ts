import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGustavguezCoreModule } from 'projects/ngx-gustavguez-core/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGustavguezCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
