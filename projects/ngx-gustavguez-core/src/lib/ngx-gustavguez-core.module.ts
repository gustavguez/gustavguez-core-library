import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './structure/loader/loader.component';
import { PopupComponent } from './structure/popup/popup.component';

@NgModule({
    declarations: [
        LoaderComponent,
        PopupComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoaderComponent,
        PopupComponent
    ]
})
export class NgxGustavguezCoreModule { }
