import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';

//Directives
import { NgxGustavguezMainContainerDirective } from './layout/ngx-gustavguez-main-container/ngx-gustavguez-main-container.directive';

//Components
import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';
import { NgxGustavguezButtonComponent } from './forms/ngx-gustavguez-button/ngx-gustavguez-button.component';
import { NgxGustavguezInputHolderComponent } from './forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.component';
import { NgxGustavguezNavComponent } from './layout/ngx-gustavguez-nav/ngx-gustavguez-nav.component';
import { NgxGustavguezMainSidebarComponent } from './layout/ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.component';
import { NgxGustavguezPageHeaderComponent } from './structure/ngx-gustavguez-page-header/ngx-gustavguez-page-header.component';

@NgModule({
    declarations: [
        PrettyDatePipe,
        PrettyHourPipe,
        PrettyNumberPipe,
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent,
        NgxGustavguezButtonComponent,
        NgxGustavguezInputHolderComponent,
        NgxGustavguezNavComponent,
        NgxGustavguezMainSidebarComponent,
        NgxGustavguezMainContainerDirective,
        NgxGustavguezPageHeaderComponent,
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
        NgxGustavguezNavComponent,
        NgxGustavguezMainSidebarComponent,
        NgxGustavguezMainContainerDirective,
        NgxGustavguezPageHeaderComponent
    ]
})
export class NgxGustavguezCoreModule { }
