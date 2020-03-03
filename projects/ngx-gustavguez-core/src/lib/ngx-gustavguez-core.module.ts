import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';

@NgModule({
    declarations: [
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        NgxGustavguezLoaderComponent,
        NgxGustavguezPopupComponent
    ]
})
export class NgxGustavguezCoreModule { }
