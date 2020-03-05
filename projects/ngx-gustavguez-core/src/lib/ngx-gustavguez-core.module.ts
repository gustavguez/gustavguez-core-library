import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';

//Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';

@NgModule({
    declarations: [
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent,
        PrettyDatePipe,
        PrettyHourPipe,
        PrettyNumberPipe
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
        PrettyNumberPipe
    ]
})
export class NgxGustavguezCoreModule { }
