import { __decorate } from "tslib";
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
let NgxGustavguezCoreModule = class NgxGustavguezCoreModule {
};
NgxGustavguezCoreModule = __decorate([
    NgModule({
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
], NgxGustavguezCoreModule);
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPO0FBQ1AsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RCxZQUFZO0FBQ1osT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUEwQjlILElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0NBQUksQ0FBQTtBQUEzQix1QkFBdUI7SUF4Qm5DLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUE0QjtZQUM1QiwyQkFBMkI7WUFDM0IsY0FBYztZQUNkLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsNEJBQTRCO1lBQzVCLGlDQUFpQztTQUNwQztRQUNELE9BQU8sRUFBRTtZQUNMLFlBQVk7WUFDWixtQkFBbUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDTCw0QkFBNEI7WUFDNUIsMkJBQTJCO1lBQzNCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLDRCQUE0QjtZQUM1QixpQ0FBaUM7U0FDcEM7S0FDSixDQUFDO0dBQ1csdUJBQXVCLENBQUk7U0FBM0IsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vL1BpcGVzXG5pbXBvcnQgeyBQcmV0dHlEYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWRhdGUucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlIb3VyUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJldHR5LWhvdXIucGlwZSc7XG5pbXBvcnQgeyBQcmV0dHlOdW1iZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktbnVtYmVyLnBpcGUnO1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIvbmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvbmd4LWd1c3Rhdmd1ZXotYnV0dG9uL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VleklucHV0SG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCxcbiAgICAgICAgUHJldHR5RGF0ZVBpcGUsXG4gICAgICAgIFByZXR0eUhvdXJQaXBlLFxuICAgICAgICBQcmV0dHlOdW1iZXJQaXBlLFxuICAgICAgICBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCxcbiAgICAgICAgUHJldHR5RGF0ZVBpcGUsXG4gICAgICAgIFByZXR0eUhvdXJQaXBlLFxuICAgICAgICBQcmV0dHlOdW1iZXJQaXBlLFxuICAgICAgICBOZ3hHdXN0YXZndWV6QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6SW5wdXRIb2xkZXJDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpDb3JlTW9kdWxlIHsgfVxuIl19