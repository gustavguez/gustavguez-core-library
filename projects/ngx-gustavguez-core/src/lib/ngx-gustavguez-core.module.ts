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

@NgModule({
    declarations: [
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent,
        PrettyDatePipe,
        PrettyHourPipe,
        PrettyNumberPipe,
        NgxGustavguezButtonComponent,
        NgxGustavguezInputHolderComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent,
        PrettyDatePipe,
        PrettyHourPipe,
        PrettyNumberPipe,
        NgxGustavguezButtonComponent,
        NgxGustavguezInputHolderComponent
    ]
})
export class NgxGustavguezCoreModule { }
