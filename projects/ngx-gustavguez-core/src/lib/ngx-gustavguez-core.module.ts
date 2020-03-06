import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';

//Components
import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';
import { NgxGustavguezButtonComponent } from './forms/ngx-gustavguez-button/ngx-gustavguez-button.component';
import { NgxGustavguezInputHolderComponent } from './forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.component';
import { NgxGustavguezMainContainerComponent } from './core/ngx-gustavguez-main-container/ngx-gustavguez-main-container.component';
import { NgxGustavguezNavComponent } from './core/ngx-gustavguez-nav/ngx-gustavguez-nav.component';
import { NgxGustavguezMainSidebarComponent } from './core/ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.component';

@NgModule({
    declarations: [
        PrettyDatePipe,
        PrettyHourPipe,
        PrettyNumberPipe,
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent,
        NgxGustavguezButtonComponent,
        NgxGustavguezInputHolderComponent,
        NgxGustavguezMainContainerComponent,
        NgxGustavguezNavComponent,
        NgxGustavguezMainSidebarComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        PrettyDatePipe,
        PrettyHourPipe,
        PrettyNumberPipe,
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent,
        NgxGustavguezButtonComponent,
        NgxGustavguezInputHolderComponent,
        NgxGustavguezMainContainerComponent,
        NgxGustavguezNavComponent,
        NgxGustavguezMainSidebarComponent,
    ]
})
export class NgxGustavguezCoreModule { }
