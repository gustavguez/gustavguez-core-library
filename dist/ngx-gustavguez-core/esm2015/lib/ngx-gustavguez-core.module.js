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
let NgxGustavguezCoreModule = class NgxGustavguezCoreModule {
};
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
export { NgxGustavguezCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL25neC1ndXN0YXZndWV6LWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxZQUFZO0FBQ1osT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFFOUcsT0FBTztBQUNQLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFzQjlELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0NBQUksQ0FBQTtBQUEzQix1QkFBdUI7SUFwQm5DLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUE0QjtZQUM1QiwyQkFBMkI7WUFDM0IsY0FBYztZQUNkLGNBQWM7WUFDZCxnQkFBZ0I7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsNEJBQTRCO1lBQzVCLDJCQUEyQjtZQUMzQixjQUFjO1lBQ2QsY0FBYztZQUNkLGdCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyx1QkFBdUIsQ0FBSTtTQUEzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IHsgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LWxvYWRlci9uZ3gtZ3VzdGF2Z3Vlei1sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXBvcHVwL25neC1ndXN0YXZndWV6LXBvcHVwLmNvbXBvbmVudCc7XG5cbi8vUGlwZXNcbmltcG9ydCB7IFByZXR0eURhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktZGF0ZS5waXBlJztcbmltcG9ydCB7IFByZXR0eUhvdXJQaXBlIH0gZnJvbSAnLi9waXBlcy9wcmV0dHktaG91ci5waXBlJztcbmltcG9ydCB7IFByZXR0eU51bWJlclBpcGUgfSBmcm9tICcuL3BpcGVzL3ByZXR0eS1udW1iZXIucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpMb2FkZXJDb21wb25lbnQsXG4gICAgICAgIE5neEd1c3Rhdmd1ZXpQb3B1cENvbXBvbmVudCxcbiAgICAgICAgUHJldHR5RGF0ZVBpcGUsXG4gICAgICAgIFByZXR0eUhvdXJQaXBlLFxuICAgICAgICBQcmV0dHlOdW1iZXJQaXBlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ3hHdXN0YXZndWV6TG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQsXG4gICAgICAgIFByZXR0eURhdGVQaXBlLFxuICAgICAgICBQcmV0dHlIb3VyUGlwZSxcbiAgICAgICAgUHJldHR5TnVtYmVyUGlwZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlekNvcmVNb2R1bGUgeyB9XG4iXX0=