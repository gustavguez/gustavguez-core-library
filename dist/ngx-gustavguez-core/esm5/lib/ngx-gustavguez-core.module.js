import { __decorate } from "tslib";
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
var NgxGustavguezCoreModule = /** @class */ (function () {
    function NgxGustavguezCoreModule() {
    }
    NgxGustavguezCoreModule = __decorate([
        NgModule({
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
    ], NgxGustavguezCoreModule);
    return NgxGustavguezCoreModule;
}());
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxZQUFZO0FBQ1osT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFFOUcsT0FBTztBQUNQLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFzQjlEO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUFwQm5DLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGdCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLG1CQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCw0QkFBNEI7Z0JBQzVCLDJCQUEyQjtnQkFDM0IsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGdCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyx1QkFBdUIsQ0FBSTtJQUFELDhCQUFDO0NBQUEsQUFBeEMsSUFBd0M7U0FBM0IsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIvbmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC5jb21wb25lbnQnO1xuXG4vL1BpcGVzXG5pbXBvcnQgeyBQcmV0dHlEYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWRhdGUucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlIb3VyUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWhvdXIucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlOdW1iZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktbnVtYmVyLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQsXG4gICAgICAgIFByZXR0eURhdGVQaXBlLFxuICAgICAgICBQcmV0dHlIb3VyUGlwZSxcbiAgICAgICAgUHJldHR5TnVtYmVyUGlwZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmd4R3VzdGF2Z3VlelBvcHVwQ29tcG9uZW50LFxuICAgICAgICBQcmV0dHlEYXRlUGlwZSxcbiAgICAgICAgUHJldHR5SG91clBpcGUsXG4gICAgICAgIFByZXR0eU51bWJlclBpcGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpDb3JlTW9kdWxlIHsgfVxuIl19